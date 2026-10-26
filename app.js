/**
 * GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020 - JAVASCRIPT LOGIC
 * Architecture: Clean Vanilla JS, Reactive State, LocalStorage Persistence
 * Features: Practice Mode, Timed Exam, Spaced Repetition Drill, Search, Sound FX, Mobile Bottom Sheet
 */

const STORAGE_KEY = 'gdnt_incoterms_quiz_v1';

// Ứng dụng State
let userState = {
  answered: {},      // qId -> { choice, isCorrect }
  bookmarks: [],     // [qId, ...]
  customDrill: [],   // [qId, ...]
  drillQueue: [],    // [qId, ...] active recall queue
  activeTab: 'study',
  currentFilter: 'all',
  theme: 'dark',
  soundEnabled: true
};

let currentQuestionIndex = 0;
let filteredIndices = [];

// Exam state
let examState = {
  active: false,
  questions: [],
  currentIndex: 0,
  userAnswers: {},
  submitted: false,
  timerSec: 2400,
  timerInterval: null,
  targetCount: 40,
  timeLimitMins: 40,
  selectedChapters: ['ch1', 'ch2', 'ch3', 'ch4', 'ch5']
};

// Drill session state
let drillSession = {
  active: false,
  queue: [],
  currentIndex: 0,
  answeredCurrent: false
};

/* ==========================================================================
   WEB AUDIO API SOUND GENERATOR (Zero External Assets)
   ========================================================================== */
const soundFX = {
  ctx: null,
  init() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  },
  play(type) {
    if (!userState.soundEnabled) return;
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    if (type === 'correct') {
      // Happy Arpeggio (C5 -> G5)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, t);
      osc.frequency.exponentialRampToValueAtTime(783.99, t + 0.15);
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.start(t);
      osc.stop(t + 0.35);
    } else if (type === 'wrong') {
      // Subtle Low Buzz
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.2);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.start(t);
      osc.stop(t + 0.3);
    } else if (type === 'click') {
      // Crisp subtle pop
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
      osc.start(t);
      osc.stop(t + 0.06);
    }
  }
};

/* ==========================================================================
   INITIALIZATION & PERSISTENCE
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme(userState.theme);
  updateSoundButton();
  initFilteredIndices();
  renderStats();
  renderPalette();
  renderQuestion();
  setupKeyboardShortcuts();
  updateExamPoolCount();
});

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      userState = { ...userState, ...parsed };
    }
  } catch (e) {
    console.error("Lỗi nạp LocalStorage:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    renderStats();
  } catch (e) {
    console.error("Lỗi lưu LocalStorage:", e);
  }
}

/* ==========================================================================
   THEME & SOUND TOGGLES
   ========================================================================== */
function toggleTheme() {
  const nextTheme = userState.theme === 'dark' ? 'light' : 'dark';
  userState.theme = nextTheme;
  applyTheme(nextTheme);
  saveState();
  showToast(`Đã chuyển sang giao diện ${nextTheme === 'dark' ? 'Tối (Hải quân)' : 'Sáng (Thanh lịch)'}`);
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function toggleSound() {
  userState.soundEnabled = !userState.soundEnabled;
  saveState();
  updateSoundButton();
  showToast(userState.soundEnabled ? "🔊 Đã bật âm thanh hiệu ứng" : "🔇 Đã tắt âm thanh");
  if (userState.soundEnabled) soundFX.play('click');
}

function updateSoundButton() {
  const btn = document.getElementById('btn-sound-toggle');
  if (btn) {
    btn.innerHTML = userState.soundEnabled ? "🔊" : "🔇";
    btn.title = userState.soundEnabled ? "Tắt âm thanh" : "Bật âm thanh";
  }
}

/* ==========================================================================
   TAB NAVIGATION (DESKTOP & MOBILE BOTTOM BAR)
   ========================================================================== */
function switchTab(tabName) {
  userState.activeTab = tabName;
  soundFX.play('click');

  const tabs = ['study', 'exam', 'review', 'search'];
  tabs.forEach(t => {
    // Desktop Tabs
    const btnD = document.getElementById(`tab-${t}`);
    if (btnD) btnD.classList.toggle('active', t === tabName);

    // Mobile Bottom Nav
    const btnM = document.getElementById(`m-nav-${t}`);
    if (btnM) btnM.classList.toggle('active', t === tabName);

    // Views
    const view = document.getElementById(`view-${t}`);
    if (view) {
      if (t === tabName) {
        view.style.display = (t === 'study' ? 'grid' : 'block');
      } else {
        view.style.display = 'none';
      }
    }
  });

  // Mobile Sticky Bar chỉ hiện khi ở tab study và không thi thử
  const stickyBar = document.getElementById('mobile-sticky-bar');
  if (stickyBar) {
    stickyBar.style.display = (tabName === 'study' && window.innerWidth <= 768) ? 'flex' : 'none';
  }

  if (tabName === 'review') {
    renderReviewTab();
  } else if (tabName === 'search') {
    setTimeout(() => {
      const si = document.getElementById('search-input');
      if (si) si.focus();
    }, 120);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   STATS RIBBON
   ========================================================================== */
function renderStats() {
  if (typeof QUESTIONS_DATA === 'undefined') return;
  const total = QUESTIONS_DATA.length;
  const answeredKeys = Object.keys(userState.answered);
  const completed = answeredKeys.length;
  const correctCount = answeredKeys.filter(k => userState.answered[k].isCorrect).length;
  const mistakesCount = answeredKeys.filter(k => !userState.answered[k].isCorrect).length;
  const bookmarksCount = userState.bookmarks.length;
  
  const pctCompleted = total > 0 ? Math.round((completed / total) * 100) : 0;
  const accuracy = completed > 0 ? Math.round((correctCount / completed) * 100) : 0;

  const elTotal = document.getElementById('stat-total');
  if (elTotal) elTotal.innerText = total;

  const elComp = document.getElementById('stat-completed');
  if (elComp) elComp.innerHTML = `${completed} <span style="font-size: 0.85rem; color: var(--text-dim); font-weight: 500;">(${pctCompleted}%)</span>`;

  const elAcc = document.getElementById('stat-accuracy');
  if (elAcc) elAcc.innerText = `${accuracy}%`;

  const elPin = document.getElementById('stat-pinned-mistakes');
  if (elPin) elPin.innerText = `${bookmarksCount} / ${mistakesCount}`;

  const elGridText = document.getElementById('grid-progress-text');
  if (elGridText) elGridText.innerText = `${completed}/${total}`;

  const elSheetText = document.getElementById('sheet-progress-text');
  if (elSheetText) elSheetText.innerText = `${completed}/${total}`;

  const elMTrigger = document.getElementById('m-palette-q-text');
  if (elMTrigger && QUESTIONS_DATA[currentQuestionIndex]) {
    elMTrigger.innerText = `Câu ${QUESTIONS_DATA[currentQuestionIndex].id}/${total}`;
  }
}

/* ==========================================================================
   PRACTICE MODE (TAB 1) LOGIC
   ========================================================================== */
function getChapterCode(q) {
  if (typeof q === 'object' && q !== null) {
    if (q.chapter_id) return 'ch' + q.chapter_id;
    q = q.id;
  }
  const qObj = (typeof QUESTIONS_DATA !== 'undefined') ? QUESTIONS_DATA.find(item => item.id === q) : null;
  if (qObj && qObj.chapter_id) return 'ch' + qObj.chapter_id;
  if (q <= 48) return 'ch1';
  if (q <= 136) return 'ch2';
  if (q <= 207) return 'ch3';
  if (q <= 248) return 'ch4';
  return 'ch5';
}

function initFilteredIndices() {
  filteredIndices = [];
  for (let i = 0; i < QUESTIONS_DATA.length; i++) {
    const q = QUESTIONS_DATA[i];
    if (userState.currentFilter === 'all') {
      filteredIndices.push(i);
    } else if (userState.currentFilter === 'pdf') {
      if (q.pdf_no !== null && q.pdf_no !== undefined) {
        filteredIndices.push(i);
      }
    } else if (getChapterCode(q) === userState.currentFilter) {
      filteredIndices.push(i);
    }
  }
  if (userState.currentFilter === 'pdf') {
    filteredIndices.sort((a, b) => (QUESTIONS_DATA[a].pdf_no || 0) - (QUESTIONS_DATA[b].pdf_no || 0));
  }
  if (filteredIndices.length > 0 && !filteredIndices.includes(currentQuestionIndex)) {
    currentQuestionIndex = filteredIndices[0];
  }
}

function filterChapter(val) {
  userState.currentFilter = val;
  initFilteredIndices();
  renderPalette();
  renderQuestion();
  
  // Đồng bộ cả 2 select (desktop & bottom sheet)
  const selDesk = document.getElementById('chapter-filter');
  const selSheet = document.getElementById('sheet-chapter-filter');
  if (selDesk && selDesk.value !== val) selDesk.value = val;
  if (selSheet && selSheet.value !== val) selSheet.value = val;

  const selElem = selDesk || selSheet;
  const label = selElem ? selElem.options[selElem.selectedIndex].text : val;
  showToast(`Đã lọc danh sách câu: ${label.split('(')[0]}`);
}

function renderQuestion() {
  if (typeof QUESTIONS_DATA === 'undefined' || QUESTIONS_DATA.length === 0) return;
  const q = QUESTIONS_DATA[currentQuestionIndex];
  if (!q) return;

  // Chapter & Badges
  const chTag = document.getElementById('q-chapter');
  if (chTag) chTag.innerText = q.chapter.split(':')[0].trim();

  const qTitle = document.getElementById('q-title');
  if (qTitle) qTitle.innerText = `Câu ${q.id}/${QUESTIONS_DATA.length}`;

  const qOrig = document.getElementById('q-orig-no');
  if (qOrig) {
    if (q.pdf_no) {
      qOrig.innerHTML = `(Đề gốc: Câu ${q.orig_no || q.id}) <span class="pdf-exam-tag">📄 Đề PDF: Câu ${q.pdf_no}</span>`;
    } else {
      qOrig.innerText = `(Đề gốc: Câu ${q.orig_no || q.id})`;
    }
  }

  // Question Content
  const qText = document.getElementById('q-text');
  if (qText) qText.innerText = q.question;

  // Bookmark & Drill badges
  const btnBm = document.getElementById('btn-bookmark');
  if (btnBm) {
    if (userState.bookmarks.includes(q.id)) {
      btnBm.classList.add('bookmarked');
      btnBm.innerHTML = `<span>★</span> Đã ghim`;
    } else {
      btnBm.classList.remove('bookmarked');
      btnBm.innerHTML = `<span>⭐</span> Ghim câu này`;
    }
  }

  const btnDrill = document.getElementById('btn-add-drill');
  if (btnDrill) {
    if (userState.drillQueue.includes(q.id)) {
      btnDrill.classList.add('in-drill');
      btnDrill.innerHTML = `<span>⚡</span> Đang trong cuốn chiếu`;
    } else {
      btnDrill.classList.remove('in-drill');
      btnDrill.innerHTML = `<span>⚡</span> Luyện cuốn chiếu`;
    }
  }

  // Options
  const optContainer = document.getElementById('q-options');
  if (optContainer) {
    optContainer.innerHTML = '';
    const userAns = userState.answered[q.id];
    const isAnswered = !!userAns;

    ['A', 'B', 'C', 'D'].forEach(letter => {
      const optText = q.options[letter];
      if (!optText) return;

      const optCard = document.createElement('div');
      optCard.className = 'option-card';
      if (isAnswered) optCard.classList.add('locked');

      if (isAnswered) {
        if (letter === q.answer) {
          optCard.classList.add('correct');
        } else if (userAns.choice === letter && !userAns.isCorrect) {
          optCard.classList.add('wrong');
        }
      }

      optCard.innerHTML = `
        <div class="opt-label">${letter}</div>
        <div class="opt-text">${optText}</div>
      `;

      optCard.onclick = () => {
        if (!isAnswered) {
          handleAnswerSelect(q.id, letter);
        }
      };

      optContainer.appendChild(optCard);
    });
  }

  // Explanation Box
  const expBox = document.getElementById('q-explanation');
  const expText = document.getElementById('exp-text');
  const userAns = userState.answered[q.id];
  if (expBox && expText) {
    if (userAns) {
      expBox.style.display = 'block';
      expText.innerHTML = `<div style="font-weight: 800; color: var(--brand-ocean); margin-bottom: 0.35rem;">✓ ĐÁP ÁN CHÍNH XÁC: [${q.answer}] - ${q.options[q.answer]}</div>${q.explanation}`;
    } else {
      expBox.style.display = 'none';
      expText.innerHTML = '';
    }
  }

  // Highlight Palette
  updatePaletteHighlight();

  // Navigation Button States (Desktop & Mobile)
  const currPos = filteredIndices.indexOf(currentQuestionIndex);
  const isFirst = currPos <= 0;
  const isLast = currPos >= filteredIndices.length - 1;

  const btnPrevD = document.getElementById('btn-prev');
  const btnNextD = document.getElementById('btn-next');
  if (btnPrevD) btnPrevD.disabled = isFirst;
  if (btnNextD) btnNextD.disabled = isLast;

  const btnPrevM = document.getElementById('m-btn-prev');
  const btnNextM = document.getElementById('m-btn-next');
  if (btnPrevM) btnPrevM.disabled = isFirst;
  if (btnNextM) btnNextM.disabled = isLast;

  const elMTrigger = document.getElementById('m-palette-q-text');
  if (elMTrigger) elMTrigger.innerText = `Câu ${q.id}/${QUESTIONS_DATA.length}`;
}

function handleAnswerSelect(qId, choice) {
  const q = QUESTIONS_DATA.find(item => item.id === qId);
  if (!q) return;

  const isCorrect = (choice === q.answer);
  userState.answered[qId] = { choice, isCorrect };

  // Phát âm thanh phản hồi
  soundFX.play(isCorrect ? 'correct' : 'wrong');

  // Đẩy vào hàng đợi cuốn chiếu nếu sai
  if (!isCorrect && !userState.drillQueue.includes(qId)) {
    userState.drillQueue.push(qId);
  }

  saveState();
  renderQuestion();
  renderPalette();
}

function resetCurrentQuestion() {
  const q = QUESTIONS_DATA[currentQuestionIndex];
  if (userState.answered[q.id]) {
    delete userState.answered[q.id];
    saveState();
    renderQuestion();
    renderPalette();
    showToast(`Đã làm mới Câu ${q.id}`);
    soundFX.play('click');
  }
}

function toggleBookmarkCurrent() {
  const q = QUESTIONS_DATA[currentQuestionIndex];
  const idx = userState.bookmarks.indexOf(q.id);
  if (idx > -1) {
    userState.bookmarks.splice(idx, 1);
    showToast(`Đã bỏ ghim Câu ${q.id}`);
  } else {
    userState.bookmarks.push(q.id);
    showToast(`⭐ Đã ghim Câu ${q.id} vào Sổ tay`);
  }
  soundFX.play('click');
  saveState();
  renderQuestion();
  renderPalette();
}

function toggleDrillCurrent() {
  const q = QUESTIONS_DATA[currentQuestionIndex];
  const idx = userState.drillQueue.indexOf(q.id);
  if (idx > -1) {
    userState.drillQueue.splice(idx, 1);
    showToast(`Đã gỡ Câu ${q.id} khỏi cuốn chiếu`);
  } else {
    userState.drillQueue.push(q.id);
    showToast(`⚡ Đã thêm Câu ${q.id} vào cuốn chiếu`);
  }
  soundFX.play('click');
  saveState();
  renderQuestion();
  renderPalette();
}

function goToQuestion(index) {
  if (index >= 0 && index < QUESTIONS_DATA.length) {
    currentQuestionIndex = index;
    soundFX.play('click');
    renderQuestion();
    scrollPaletteToCurrent();
  }
}

function renderPalette() {
  // Render cho cả desktop sidebar và mobile bottom sheet
  const grids = [
    document.getElementById('question-grid'),
    document.getElementById('sheet-question-grid')
  ];

  grids.forEach(grid => {
    if (!grid) return;
    grid.innerHTML = '';

    filteredIndices.forEach(idx => {
      const q = QUESTIONS_DATA[idx];
      const item = document.createElement('div');
      item.className = 'grid-item';
      item.id = `${grid.id}-item-${q.id}`;
      item.innerText = q.id;

      const ans = userState.answered[q.id];
      if (ans) {
        item.classList.add(ans.isCorrect ? 'correct' : 'wrong');
      }
      if (userState.bookmarks.includes(q.id)) {
        item.classList.add('bookmarked');
      }
      if (userState.drillQueue.includes(q.id)) {
        item.classList.add('in-drill');
      }

      item.onclick = () => {
        currentQuestionIndex = idx;
        renderQuestion();
        scrollPaletteToCurrent();
        closeBottomSheet();
      };

      grid.appendChild(item);
    });
  });

  updatePaletteHighlight();
}

function updatePaletteHighlight() {
  document.querySelectorAll('.grid-item.current').forEach(el => el.classList.remove('current'));
  const q = QUESTIONS_DATA[currentQuestionIndex];
  if (q) {
    const elDesk = document.getElementById(`question-grid-item-${q.id}`);
    const elSheet = document.getElementById(`sheet-question-grid-item-${q.id}`);
    if (elDesk) elDesk.classList.add('current');
    if (elSheet) elSheet.classList.add('current');
  }
}

function scrollPaletteToCurrent() {
  const q = QUESTIONS_DATA[currentQuestionIndex];
  if (!q) return;
  const elDesk = document.getElementById(`question-grid-item-${q.id}`);
  if (elDesk) elDesk.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  const elSheet = document.getElementById(`sheet-question-grid-item-${q.id}`);
  if (elSheet) elSheet.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ==========================================================================
   MOBILE BOTTOM SHEET CONTROLLER
   ========================================================================== */
function openBottomSheet() {
  const overlay = document.getElementById('bottom-sheet-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    scrollPaletteToCurrent();
    soundFX.play('click');
  }
}

function closeBottomSheet() {
  const overlay = document.getElementById('bottom-sheet-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   EXAM MODE (TAB 2) LOGIC
   ========================================================================== */
function updateExamPoolCount() {
  const checkedBoxes = Array.from(document.querySelectorAll('.chapters-checkbox-grid input[type="checkbox"]:checked')).map(cb => cb.value);
  examState.selectedChapters = checkedBoxes;

  let poolCount = 0;
  if (typeof QUESTIONS_DATA !== 'undefined') {
    QUESTIONS_DATA.forEach(q => {
      if (checkedBoxes.includes(getChapterCode(q.id))) poolCount++;
    });
  }

  const elPool = document.getElementById('exam-pool-count');
  if (elPool) elPool.innerText = `${poolCount} câu khả dụng`;
}

function selectAllExamChapters(selectAll) {
  document.querySelectorAll('.chapters-checkbox-grid input[type="checkbox"]').forEach(cb => {
    cb.checked = selectAll;
  });
  updateExamPoolCount();
  soundFX.play('click');
}

function setExamQuestionCount(count) {
  examState.targetCount = count;
  document.querySelectorAll('#exam-qcount-group .pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-count') === String(count));
  });
  soundFX.play('click');
}

function setExamTimeLimit(mins) {
  examState.timeLimitMins = mins;
  document.querySelectorAll('#exam-time-group .pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-time') === String(mins));
  });
  soundFX.play('click');
}

function launchExamSession() {
  soundFX.play('click');

  if (examState.targetCount === 'pdf100') {
    let pdfQuestions = [];
    if (typeof PDF_EXAM_QUESTION_IDS !== 'undefined' && Array.isArray(PDF_EXAM_QUESTION_IDS)) {
      pdfQuestions = PDF_EXAM_QUESTION_IDS.map(id => QUESTIONS_DATA.find(q => q.id === id)).filter(Boolean);
    } else {
      pdfQuestions = QUESTIONS_DATA.filter(q => q.pdf_no !== null && q.pdf_no !== undefined)
        .sort((a, b) => (a.pdf_no || 0) - (b.pdf_no || 0));
    }
    examState.questions = pdfQuestions;
    examState.currentIndex = 0;
    examState.userAnswers = {};
    examState.submitted = false;
    examState.active = true;

    if (examState.timeLimitMins > 0) {
      examState.timerSec = examState.timeLimitMins * 60;
      startExamTimer();
    } else {
      const elTimer = document.getElementById('exam-timer');
      if (elTimer) elTimer.innerText = "Tự do";
    }

    document.getElementById('exam-setup-panel').style.display = 'none';
    document.getElementById('exam-active-panel').style.display = 'block';
    document.getElementById('exam-title-text').innerText = "Đề Ôn Tập 100 Câu (File PDF GDNT_DS CÂU HỎI ÔN TẬP)";
    document.getElementById('exam-subtitle-text').innerText = `Gồm ${pdfQuestions.length} câu trắc nghiệm chọn lọc theo đúng cấu trúc đề PDF`;

    renderExamQuestion();
    renderExamGrid();
    return;
  }

  if (examState.selectedChapters.length === 0) {
    showToast("⚠️ Vui lòng chọn ít nhất 1 chương để thi!");
    return;
  }

  let pool = QUESTIONS_DATA.filter(q => examState.selectedChapters.includes(getChapterCode(q)));
  if (pool.length === 0) {
    showToast("⚠️ Không có câu hỏi nào trong các chương đã chọn!");
    return;
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const qCount = (examState.targetCount === 'all') ? shuffled.length : Math.min(Number(examState.targetCount), shuffled.length);

  examState.questions = shuffled.slice(0, qCount);
  examState.currentIndex = 0;
  examState.userAnswers = {};
  examState.submitted = false;
  examState.active = true;

  if (examState.timeLimitMins > 0) {
    examState.timerSec = examState.timeLimitMins * 60;
    startExamTimer();
  } else {
    const elTimer = document.getElementById('exam-timer');
    if (elTimer) elTimer.innerText = "Tự do";
  }

  document.getElementById('exam-setup-panel').style.display = 'none';
  document.getElementById('exam-active-panel').style.display = 'block';
  document.getElementById('exam-title-text').innerText = "Đề Thi Thử Ngoại Thương";
  document.getElementById('exam-subtitle-text').innerText = `Gồm ${qCount} câu trắc nghiệm bốc ngẫu nhiên từ ${examState.selectedChapters.length} chương`;

  renderExamQuestion();
  renderExamGrid();
}

function startExamTimer() {
  if (examState.timerInterval) clearInterval(examState.timerInterval);
  const timerBox = document.getElementById('exam-timer-box');
  if (timerBox) timerBox.classList.remove('danger');

  examState.timerInterval = setInterval(() => {
    examState.timerSec--;
    if (examState.timerSec <= 0) {
      clearInterval(examState.timerInterval);
      submitExam(true);
      return;
    }

    const m = Math.floor(examState.timerSec / 60);
    const s = examState.timerSec % 60;
    const elTimer = document.getElementById('exam-timer');
    if (elTimer) elTimer.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

    if (examState.timerSec <= 300 && timerBox) {
      timerBox.classList.add('danger');
    }
  }, 1000);
}

function renderExamQuestion() {
  const q = examState.questions[examState.currentIndex];
  if (!q) return;

  document.getElementById('exam-q-chapter').innerText = q.chapter.split(':')[0].trim();
  document.getElementById('exam-q-title').innerText = `Câu ${examState.currentIndex + 1}/${examState.questions.length}`;
  document.getElementById('exam-q-text').innerText = q.question;

  const optContainer = document.getElementById('exam-q-options');
  optContainer.innerHTML = '';
  const chosen = examState.userAnswers[q.id];

  ['A', 'B', 'C', 'D'].forEach(letter => {
    const optText = q.options[letter];
    if (!optText) return;

    const optCard = document.createElement('div');
    optCard.className = 'option-card';
    if (examState.submitted) optCard.classList.add('locked');

    if (!examState.submitted) {
      if (chosen === letter) optCard.classList.add('selected-exam');
    } else {
      if (letter === q.answer) {
        optCard.classList.add('correct');
      } else if (chosen === letter && chosen !== q.answer) {
        optCard.classList.add('wrong');
      }
    }

    optCard.innerHTML = `
      <div class="opt-label">${letter}</div>
      <div class="opt-text">${optText}</div>
    `;

    optCard.onclick = () => {
      if (!examState.submitted) {
        examState.userAnswers[q.id] = letter;
        soundFX.play('click');
        renderExamQuestion();
        renderExamGrid();
      }
    };

    optContainer.appendChild(optCard);
  });

  const expBox = document.getElementById('exam-explanation-box');
  if (expBox) {
    if (examState.submitted) {
      expBox.style.display = 'block';
      document.getElementById('exam-exp-text').innerHTML = `<strong>Đáp án chuẩn: [${q.answer}]</strong><br>${q.explanation}`;
    } else {
      expBox.style.display = 'none';
    }
  }

  document.getElementById('exam-btn-prev').disabled = examState.currentIndex === 0;
  document.getElementById('exam-btn-next').disabled = examState.currentIndex === examState.questions.length - 1;
  updateExamGridHighlight();
}

function examGoPrev() {
  if (examState.currentIndex > 0) {
    examState.currentIndex--;
    soundFX.play('click');
    renderExamQuestion();
  }
}

function examGoNext() {
  if (examState.currentIndex < examState.questions.length - 1) {
    examState.currentIndex++;
    soundFX.play('click');
    renderExamQuestion();
  }
}

function renderExamGrid() {
  const grid = document.getElementById('exam-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const totalQ = examState.questions.length;
  let answeredCount = 0;

  examState.questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'grid-item';
    item.id = `exam-grid-item-${idx}`;
    item.innerText = idx + 1;

    const ans = examState.userAnswers[q.id];
    if (ans) {
      answeredCount++;
      if (!examState.submitted) {
        item.style.borderColor = 'var(--brand-ocean)';
        item.style.background = 'rgba(14, 165, 233, 0.25)';
        item.style.color = '#ffffff';
      } else {
        item.classList.add(ans === q.answer ? 'correct' : 'wrong');
      }
    } else if (examState.submitted) {
      item.classList.add('wrong');
    }

    item.onclick = () => {
      examState.currentIndex = idx;
      renderExamQuestion();
    };

    grid.appendChild(item);
  });

  const elAnsCount = document.getElementById('exam-answered-count');
  if (elAnsCount) elAnsCount.innerText = `${answeredCount}/${totalQ}`;
  updateExamGridHighlight();
}

function updateExamGridHighlight() {
  document.querySelectorAll('#exam-grid .grid-item.current').forEach(el => el.classList.remove('current'));
  const curr = document.getElementById(`exam-grid-item-${examState.currentIndex}`);
  if (curr) curr.classList.add('current');
}

function submitExam(forceTimeOut = false) {
  if (!forceTimeOut) {
    const total = examState.questions.length;
    const answered = Object.keys(examState.userAnswers).length;
    if (answered < total) {
      const confirmSubmit = confirm(`Bạn mới trả lời ${answered}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`);
      if (!confirmSubmit) return;
    }
  }

  if (examState.timerInterval) clearInterval(examState.timerInterval);
  examState.submitted = true;

  let correctCount = 0;
  examState.questions.forEach(q => {
    const choice = examState.userAnswers[q.id];
    if (choice === q.answer) {
      correctCount++;
      userState.answered[q.id] = { choice, isCorrect: true };
    } else if (choice) {
      userState.answered[q.id] = { choice, isCorrect: false };
      if (!userState.drillQueue.includes(q.id)) userState.drillQueue.push(q.id);
    } else {
      userState.answered[q.id] = { choice: '', isCorrect: false };
      if (!userState.drillQueue.includes(q.id)) userState.drillQueue.push(q.id);
    }
  });

  saveState();

  const total = examState.questions.length;
  const score = (correctCount / total * 10).toFixed(1);

  document.getElementById('modal-score').innerText = score;
  document.getElementById('modal-correct').innerText = `${correctCount}/${total}`;

  const modalDesc = document.getElementById('modal-desc');
  const modalIcon = document.getElementById('modal-icon');
  if (score >= 9) {
    modalIcon.innerText = '🏆';
    modalDesc.innerText = 'Xuất sắc! Bạn nắm kiến thức Giao dịch Ngoại thương & Incoterms cực kỳ vững chắc.';
  } else if (score >= 8) {
    modalIcon.innerText = '🎖️';
    modalDesc.innerText = 'Rất tốt! Điểm số ấn tượng sẵn sàng đạt điểm A trong kỳ thi kết thúc học phần.';
  } else if (score >= 6.5) {
    modalIcon.innerText = '👍';
    modalDesc.innerText = 'Khá tốt! Hãy rà soát lại các câu sai trong Sổ tay ôn tập để đạt điểm tuyệt đối.';
  } else {
    modalIcon.innerText = '💪';
    modalDesc.innerText = 'Cần cố gắng thêm! Hãy luyện cuốn chiếu các câu làm sai để củng cố kiến thức.';
  }

  document.getElementById('exam-result-modal').style.display = 'flex';
  document.getElementById('btn-submit-exam').style.display = 'none';

  soundFX.play('correct');
  renderExamQuestion();
  renderExamGrid();
}

function closeExamModal() {
  document.getElementById('exam-result-modal').style.display = 'none';
}

function confirmResetExamSetup() {
  if (examState.timerInterval) clearInterval(examState.timerInterval);
  examState.active = false;
  document.getElementById('exam-result-modal').style.display = 'none';
  document.getElementById('exam-active-panel').style.display = 'none';
  document.getElementById('exam-setup-panel').style.display = 'block';
  document.getElementById('btn-submit-exam').style.display = 'inline-flex';
  soundFX.play('click');
}

/* ==========================================================================
   REVIEW NOTEBOOK & DRILL (TAB 3) LOGIC
   ========================================================================== */
let currentReviewFilter = 'mistakes';

function renderReviewTab() {
  const mistakes = Object.keys(userState.answered).filter(id => !userState.answered[id].isCorrect).map(Number);
  const elMistakes = document.getElementById('count-mistakes');
  if (elMistakes) elMistakes.innerText = mistakes.length;

  const elCustom = document.getElementById('count-custom');
  if (elCustom) elCustom.innerText = userState.customDrill.length;

  const elBookmarks = document.getElementById('count-bookmarks');
  if (elBookmarks) elBookmarks.innerText = userState.bookmarks.length;

  const elDrillQueue = document.getElementById('drill-queue-count');
  if (elDrillQueue) elDrillQueue.innerText = userState.drillQueue.length;

  showReviewList(currentReviewFilter);
}

function showReviewList(filterType) {
  currentReviewFilter = filterType;
  const btnM = document.getElementById('filter-mistakes-btn');
  const btnC = document.getElementById('filter-custom-btn');
  const btnB = document.getElementById('filter-bookmarks-btn');
  if (btnM) btnM.classList.toggle('active', filterType === 'mistakes');
  if (btnC) btnC.classList.toggle('active', filterType === 'custom');
  if (btnB) btnB.classList.toggle('active', filterType === 'bookmarks');

  const container = document.getElementById('review-items-container');
  if (!container) return;
  container.innerHTML = '';

  let listIds = [];
  if (filterType === 'mistakes') {
    listIds = Object.keys(userState.answered).filter(id => !userState.answered[id].isCorrect).map(Number);
  } else if (filterType === 'custom') {
    listIds = userState.customDrill;
  } else if (filterType === 'bookmarks') {
    listIds = userState.bookmarks;
  }

  if (listIds.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-dim);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🍃</div>
        <p style="font-size: 1rem; font-weight: 700;">Danh sách này hiện đang trống</p>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">Các câu hỏi phù hợp sẽ tự động xuất hiện tại đây khi bạn ôn luyện.</p>
      </div>
    `;
    return;
  }

  listIds.forEach(qId => {
    const q = QUESTIONS_DATA.find(item => item.id === qId);
    if (!q) return;

    const card = document.createElement('div');
    card.style.background = 'var(--bg-surface-elevated)';
    card.style.border = '1px solid var(--border-subtle)';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.padding = '1.25rem';

    const inDrill = userState.drillQueue.includes(q.id);

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="chapter-tag">${q.chapter.split(':')[0]}</span>
          <strong style="font-size: 0.95rem;">Câu ${q.id}</strong>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="action-btn-sm ${inDrill ? 'in-drill' : ''}" onclick="toggleDrillSpecific(${q.id})">
            ${inDrill ? '⚡ Đang trong cuốn chiếu' : '➕ Thêm vào cuốn chiếu'}
          </button>
          <button class="action-btn-sm" onclick="jumpToStudyQuestion(${q.id})">
            🔍 Xem trong Luyện tập
          </button>
        </div>
      </div>
      <p style="font-size: 0.95rem; font-weight: 600; margin-bottom: 0.85rem;">${q.question}</p>
      <div style="font-size: 0.88rem; color: var(--text-muted); background: rgba(0,0,0,0.15); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--brand-gold);">
        <strong>Đáp án đúng [${q.answer}]:</strong> ${q.options[q.answer]}<br>
        <div style="margin-top: 0.35rem; font-size: 0.82rem;">${q.explanation}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

function handleAddManualQuestions() {
  const input = document.getElementById('manual-add-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  const idsToAdd = parseQuestionInput(val);
  if (idsToAdd.length === 0) {
    showToast("⚠️ Cú pháp không hợp lệ. Vd: 15, hoặc 1, 4, 10-25");
    return;
  }

  let addedCount = 0;
  idsToAdd.forEach(id => {
    if (id >= 1 && id <= QUESTIONS_DATA.length) {
      if (!userState.customDrill.includes(id)) userState.customDrill.push(id);
      if (!userState.drillQueue.includes(id)) {
        userState.drillQueue.push(id);
        addedCount++;
      }
    }
  });

  saveState();
  input.value = '';
  renderReviewTab();
  showToast(`Đã thêm thành công ${addedCount} câu vào hàng đợi cuốn chiếu!`);
}

function addAllMistakesToDrill() {
  const mistakes = Object.keys(userState.answered).filter(id => !userState.answered[id].isCorrect).map(Number);
  let count = 0;
  mistakes.forEach(id => {
    if (!userState.drillQueue.includes(id)) {
      userState.drillQueue.push(id);
      count++;
    }
  });
  saveState();
  renderReviewTab();
  showToast(`Đã đồng bộ ${count} câu sai vào hàng đợi cuốn chiếu!`);
}

function toggleDrillSpecific(qId) {
  const idx = userState.drillQueue.indexOf(qId);
  if (idx > -1) {
    userState.drillQueue.splice(idx, 1);
    showToast(`Đã bỏ Câu ${qId} khỏi cuốn chiếu`);
  } else {
    userState.drillQueue.push(qId);
    showToast(`Đã thêm Câu ${qId} vào cuốn chiếu`);
  }
  saveState();
  renderReviewTab();
}

function jumpToStudyQuestion(qId) {
  const idx = QUESTIONS_DATA.findIndex(q => q.id === qId);
  if (idx > -1) {
    userState.currentFilter = 'all';
    const cf = document.getElementById('chapter-filter');
    if (cf) cf.value = 'all';
    initFilteredIndices();
    currentQuestionIndex = idx;
    switchTab('study');
    renderPalette();
    renderQuestion();
    scrollPaletteToCurrent();
  }
}

function parseQuestionInput(text) {
  const tokens = text.split(/[,;\s]+/);
  const result = new Set();
  tokens.forEach(tok => {
    tok = tok.trim();
    if (!tok) return;
    if (tok.includes('-')) {
      const parts = tok.split('-');
      const start = parseInt(parts[0], 10);
      const end = parseInt(parts[1], 10);
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = start; i <= end; i++) result.add(i);
      }
    } else {
      const num = parseInt(tok, 10);
      if (!isNaN(num)) result.add(num);
    }
  });
  return Array.from(result);
}

function startDrillSession() {
  if (userState.drillQueue.length === 0) {
    showToast("⚠️ Hàng đợi cuốn chiếu đang trống! Hãy thêm câu sai hoặc ghim câu để luyện.");
    return;
  }

  drillSession.active = true;
  drillSession.queue = [...userState.drillQueue];
  drillSession.currentIndex = 0;
  drillSession.answeredCurrent = false;

  document.getElementById('drill-dashboard').style.display = 'none';
  document.getElementById('review-drill-active').style.display = 'block';

  renderDrillQuestion();
  soundFX.play('click');
}

function renderDrillQuestion() {
  const qId = drillSession.queue[drillSession.currentIndex];
  const q = QUESTIONS_DATA.find(item => item.id === qId);
  if (!q) return;

  const total = drillSession.queue.length;
  const curr = drillSession.currentIndex + 1;
  document.getElementById('drill-counter').innerText = `Câu ${curr}/${total}`;
  document.getElementById('drill-progress-fill').style.width = `${((curr - 1) / total) * 100}%`;

  document.getElementById('drill-q-chapter').innerText = q.chapter.split(':')[0].trim();
  document.getElementById('drill-q-title').innerText = `Câu ${q.id}`;
  document.getElementById('drill-q-text').innerText = q.question;

  const optContainer = document.getElementById('drill-q-options');
  optContainer.innerHTML = '';
  drillSession.answeredCurrent = false;

  ['A', 'B', 'C', 'D'].forEach(letter => {
    const optText = q.options[letter];
    if (!optText) return;

    const optCard = document.createElement('div');
    optCard.className = 'option-card';
    optCard.id = `drill-opt-${letter}`;

    optCard.innerHTML = `
      <div class="opt-label">${letter}</div>
      <div class="opt-text">${optText}</div>
    `;

    optCard.onclick = () => {
      if (!drillSession.answeredCurrent) {
        handleDrillAnswer(q, letter);
      }
    };

    optContainer.appendChild(optCard);
  });

  document.getElementById('drill-explanation-box').style.display = 'none';
  document.getElementById('drill-btn-continue').style.display = 'none';
}

function handleDrillAnswer(q, choice) {
  drillSession.answeredCurrent = true;
  const isCorrect = (choice === q.answer);

  soundFX.play(isCorrect ? 'correct' : 'wrong');

  document.querySelectorAll('#drill-q-options .option-card').forEach(el => el.classList.add('locked'));
  const chosenEl = document.getElementById(`drill-opt-${choice}`);
  const correctEl = document.getElementById(`drill-opt-${q.answer}`);

  if (isCorrect) {
    if (chosenEl) chosenEl.classList.add('correct');
    userState.answered[q.id] = { choice, isCorrect: true };
    const qIdx = userState.drillQueue.indexOf(q.id);
    if (qIdx > -1) userState.drillQueue.splice(qIdx, 1);
  } else {
    if (chosenEl) chosenEl.classList.add('wrong');
    if (correctEl) correctEl.classList.add('correct');
    drillSession.queue.push(q.id);
  }

  saveState();

  const expBox = document.getElementById('drill-explanation-box');
  expBox.style.display = 'block';
  document.getElementById('drill-exp-text').innerHTML = `<strong>Đáp án đúng [${q.answer}]:</strong> ${q.explanation}`;

  document.getElementById('drill-btn-continue').style.display = 'inline-flex';
}

function drillContinueNext() {
  soundFX.play('click');
  drillSession.currentIndex++;
  if (drillSession.currentIndex >= drillSession.queue.length) {
    document.getElementById('review-drill-active').style.display = 'none';
    document.getElementById('drill-complete-modal').style.display = 'flex';
    soundFX.play('correct');
  } else {
    renderDrillQuestion();
  }
}

function closeDrillCompleteModal() {
  document.getElementById('drill-complete-modal').style.display = 'none';
  document.getElementById('drill-dashboard').style.display = 'block';
  renderReviewTab();
}

function exitDrillSession() {
  const ok = confirm("Bạn có chắc muốn thoát buổi luyện cuốn chiếu này?");
  if (ok) {
    drillSession.active = false;
    document.getElementById('review-drill-active').style.display = 'none';
    document.getElementById('drill-dashboard').style.display = 'block';
    renderReviewTab();
  }
}

/* ==========================================================================
   SEARCH (TAB 4) LOGIC
   ========================================================================== */
function handleSearchInput(keyword) {
  const term = keyword.trim().toLowerCase();
  const container = document.getElementById('search-results');
  if (!container) return;
  container.innerHTML = '';

  if (!term) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-dim);">
        <p>Nhập từ khóa bất kỳ (vd: "FOB", "L/C", "tái xuất", "UCP 600"...) để tra cứu tức thì</p>
      </div>
    `;
    return;
  }

  const results = QUESTIONS_DATA.filter(q => {
    return q.question.toLowerCase().includes(term) ||
           q.explanation.toLowerCase().includes(term) ||
           Object.values(q.options).some(o => o.toLowerCase().includes(term)) ||
           String(q.id) === term;
  });

  if (results.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; color: var(--text-dim);">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
        <p style="font-weight: 700;">Không tìm thấy câu hỏi nào phù hợp với từ khóa "${keyword}"</p>
      </div>
    `;
    return;
  }

  results.forEach(q => {
    const item = document.createElement('div');
    item.className = 'search-item';
    item.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="chapter-tag">${q.chapter.split(':')[0]}</span>
        <strong style="color: var(--brand-ocean); font-size: 0.95rem;">Câu ${q.id} ${q.pdf_no ? `(Đề PDF: Câu ${q.pdf_no})` : ''}</strong>
      </div>
      <p style="font-size: 1rem; font-weight: 700; margin-bottom: 0.65rem;">${highlightMatch(q.question, term)}</p>
      <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; background: rgba(0,0,0,0.12); padding: 0.75rem; border-radius: 8px;">
        <strong style="color: var(--color-correct);">Đáp án [${q.answer}]:</strong> ${q.options[q.answer]}<br>
        <span style="font-size: 0.82rem; margin-top: 0.25rem; display: block;">${highlightMatch(q.explanation, term)}</span>
      </div>
    `;

    item.onclick = () => {
      jumpToStudyQuestion(q.id);
    };

    container.appendChild(item);
  });
}

function highlightMatch(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background: rgba(14, 165, 233, 0.35); color: #fff; border-radius: 3px; padding: 0 2px;">$1</mark>');
}

/* ==========================================================================
   KEYBOARD SHORTCUTS
   ========================================================================== */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    const key = e.key.toUpperCase();

    if (userState.activeTab === 'study') {
      const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };
      if (keyMap[key]) {
        const q = QUESTIONS_DATA[currentQuestionIndex];
        if (q && !userState.answered[q.id]) {
          handleAnswerSelect(q.id, keyMap[key]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currPos = filteredIndices.indexOf(currentQuestionIndex);
        if (currPos > 0) goToQuestion(filteredIndices[currPos - 1]);
      } else if (e.key === 'ArrowRight') {
        const currPos = filteredIndices.indexOf(currentQuestionIndex);
        if (currPos < filteredIndices.length - 1) goToQuestion(filteredIndices[currPos + 1]);
      }
    } else if (userState.activeTab === 'exam' && examState.active && !examState.submitted) {
      const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };
      if (keyMap[key]) {
        const q = examState.questions[examState.currentIndex];
        if (q) {
          examState.userAnswers[q.id] = keyMap[key];
          soundFX.play('click');
          renderExamQuestion();
          renderExamGrid();
        }
      } else if (e.key === 'ArrowLeft') {
        examGoPrev();
      } else if (e.key === 'ArrowRight') {
        examGoNext();
      }
    } else if (userState.activeTab === 'review' && drillSession.active) {
      const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };
      if (keyMap[key] && !drillSession.answeredCurrent) {
        const qId = drillSession.queue[drillSession.currentIndex];
        const q = QUESTIONS_DATA.find(item => item.id === qId);
        if (q) handleDrillAnswer(q, keyMap[key]);
      } else if (e.key === 'Enter' && drillSession.answeredCurrent) {
        drillContinueNext();
      }
    }
  });
}

/* ==========================================================================
   DATA EXPORT / IMPORT / RESET
   ========================================================================== */
function exportProgressData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userState, null, 2));
  const a = document.createElement('a');
  a.setAttribute("href", dataStr);
  a.setAttribute("download", `gdnt_incoterms_progress_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast("💾 Đã tải xuống tệp sao lưu tiến độ ôn tập!");
  soundFX.play('click');
}

function triggerImport() {
  const fi = document.getElementById('import-file-input');
  if (fi) fi.click();
}

function importProgressData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && typeof imported === 'object') {
        userState = { ...userState, ...imported };
        saveState();
        applyTheme(userState.theme);
        updateSoundButton();
        renderStats();
        renderPalette();
        renderQuestion();
        showToast("📥 Khôi phục tiến độ thành công!");
        soundFX.play('correct');
      }
    } catch (err) {
      alert("Tệp JSON không hợp lệ hoặc bị lỗi định dạng!");
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function confirmResetProgress() {
  const ok = confirm("⚠️ CẢNH BÁO: Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ làm bài, sổ tay câu sai và câu ghim?");
  if (ok) {
    localStorage.removeItem(STORAGE_KEY);
    userState = {
      answered: {},
      bookmarks: [],
      customDrill: [],
      drillQueue: [],
      activeTab: 'study',
      currentFilter: 'all',
      theme: userState.theme,
      soundEnabled: userState.soundEnabled
    };
    saveState();
    renderStats();
    renderPalette();
    renderQuestion();
    showToast("🔄 Đã đặt lại toàn bộ tiến độ ôn tập về 0!");
    soundFX.play('click');
  }
}

/* ==========================================================================
   TOAST UTILITY
   ========================================================================== */
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  const msgEl = document.getElementById('toast-msg');
  if (!toast || !msgEl) return;
  msgEl.innerText = msg;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
