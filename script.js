/* =========================================================
   Vocalyric — script.js
   ========================================================= */

/* ── 0. Song Data ──────────────────────────────────────── */
const songs = [
  {
    id: 1,
    title: "Melt (メルト)",
    artist: "Hatsune Miku",
    emoji: "💙",
    lyrics: [
      {
        jp: "溶けてしまいそう",
        kana: "とけてしまいそう",
        kr: "녹아버릴 것만 같아",
        words: [{ text: "溶けて", tip: "溶ける: 녹다, 용해되다" }]
      },
      {
        jp: "君の隣にいたい",
        kana: "きみのとなりにいたい",
        kr: "네 곁에 있고 싶어",
        words: [{ text: "隣", tip: "となり: 옆, 곁, 이웃" }]
      },
      {
        jp: "あなたに見つけてほしかった",
        kana: "あなたにみつけてほしかった",
        kr: "당신에게 발견되고 싶었어",
        words: [{ text: "見つけて", tip: "見つける: 발견하다, 찾아내다" }]
      },
      {
        jp: "恋をしたのかな",
        kana: "こいをしたのかな",
        kr: "사랑을 한 걸까",
        words: [{ text: "恋", tip: "こい: 사랑, 연애 (이성을 향한 감정)" }]
      },
      {
        jp: "ずっと夢の中",
        kana: "ずっとゆめのなか",
        kr: "계속 꿈 속에서",
        words: [{ text: "夢", tip: "ゆめ: 꿈" }]
      },
      {
        jp: "もう戻れない気がした",
        kana: "もうもどれないきがした",
        kr: "이제 돌아갈 수 없을 것 같았어",
        words: [{ text: "戻れない", tip: "戻る: 돌아가다 + ない: 못하다 (부정형)" }]
      }
    ]
  },
  {
    id: 2,
    title: "Tell Your World",
    artist: "Hatsune Miku",
    emoji: "🌏",
    lyrics: [
      {
        jp: "伝えたいことがあるんだ",
        kana: "つたえたいことがあるんだ",
        kr: "전하고 싶은 게 있어",
        words: [{ text: "伝えたい", tip: "伝える: 전하다, 알리다 + たい: ~하고 싶다" }]
      },
      {
        jp: "歌にのせて届けたい",
        kana: "うたにのせてとどけたい",
        kr: "노래에 실어 전달하고 싶어",
        words: [{ text: "届けたい", tip: "届ける: 전달하다, 도착하게 하다" }]
      },
      {
        jp: "世界中に響け",
        kana: "せかいじゅうにひびけ",
        kr: "온 세상에 울려 퍼져라",
        words: [
          { text: "世界中", tip: "せかいじゅう: 세계 전체, 온 세상" },
          { text: "響け", tip: "響く: 울리다, 메아리치다 (명령형)" }
        ]
      },
      {
        jp: "声を聴いて",
        kana: "こえをきいて",
        kr: "목소리를 들어줘",
        words: [
          { text: "声", tip: "こえ: 목소리, 소리" },
          { text: "聴いて", tip: "聴く: (음악·소리를) 듣다 + て형" }
        ]
      },
      {
        jp: "夢を見せてあげる",
        kana: "ゆめをみせてあげる",
        kr: "꿈을 보여줄게",
        words: [{ text: "見せて", tip: "見せる: 보여주다 + て형" }]
      },
      {
        jp: "一人じゃないから",
        kana: "ひとりじゃないから",
        kr: "혼자가 아니니까",
        words: [{ text: "一人", tip: "ひとり: 혼자, 한 명" }]
      }
    ]
  },
  {
    id: 3,
    title: "千本桜 (센본자쿠라)",
    artist: "Hatsune Miku",
    emoji: "🌸",
    lyrics: [
      {
        jp: "千本桜、夜ニ紛レ",
        kana: "せんぼんざくら、よるにまぎれ",
        kr: "천 그루 벚꽃, 밤 속에 섞여",
        words: [
          { text: "千本桜", tip: "せんぼんざくら: 천 그루의 벚나무, 곡 제목" },
          { text: "紛レ", tip: "まぎれ: 섞이다, 혼재하다 (紛れる의 어간)" }
        ]
      },
      {
        jp: "君ノ声モ届カナイヨ",
        kana: "きみのこえもとどかないよ",
        kr: "너의 목소리도 닿지 않아",
        words: [{ text: "届カナイ", tip: "届く: 닿다, 도달하다 + ない: 부정형" }]
      },
      {
        jp: "風ニ舞ウ花ビラ",
        kana: "かぜにまうはなびら",
        kr: "바람에 날리는 꽃잎",
        words: [
          { text: "舞ウ", tip: "まう: 춤추듯 날리다, 흩날리다" },
          { text: "花ビラ", tip: "はなびら: 꽃잎" }
        ]
      },
      {
        jp: "想いを運ぶよ",
        kana: "おもいをはこぶよ",
        kr: "마음을 실어 나르네",
        words: [
          { text: "想い", tip: "おもい: 마음, 감정, 그리움" },
          { text: "運ぶ", tip: "はこぶ: 운반하다, 나르다" }
        ]
      },
      {
        jp: "散れよ乱れよ",
        kana: "ちれよみだれよ",
        kr: "흩어져라, 흐트러져라",
        words: [
          { text: "散れよ", tip: "散る: 흩어지다 + よ: 명령·강조 어조" },
          { text: "乱れよ", tip: "乱れる: 흐트러지다, 어지러워지다" }
        ]
      },
      {
        jp: "さあ、狂い咲け",
        kana: "さあ、くるいざけ",
        kr: "자, 미친 듯이 피어라",
        words: [
          { text: "狂い", tip: "くるう: 미치다, 격렬해지다" },
          { text: "咲け", tip: "咲く: (꽃이) 피다 (명령형)" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "ダーリンダンス (달링 댄스)",
    artist: "Kagamine Rin",
    emoji: "🌼",
    lyrics: [
      {
        jp: "踊ろうよ、ダーリン",
        kana: "おどろうよ、だーりん",
        kr: "함께 춤추자, 달링",
        words: [{ text: "踊ろう", tip: "踊る: 춤추다 (의지형 ~ろう: ~하자)" }]
      },
      {
        jp: "手を繋いで離さないで",
        kana: "てをつないではなさないで",
        kr: "손을 잡고 놓지 마",
        words: [
          { text: "繋いで", tip: "繋ぐ: 잇다, 연결하다, 손잡다" },
          { text: "離さないで", tip: "離す: 떨어뜨리다 + ないで: ~하지 마" }
        ]
      },
      {
        jp: "この瞬間をずっと",
        kana: "このしゅんかんをずっと",
        kr: "이 순간을 계속",
        words: [{ text: "瞬間", tip: "しゅんかん: 순간, 찰나" }]
      },
      {
        jp: "忘れないでいたい",
        kana: "わすれないでいたい",
        kr: "잊지 않고 싶어",
        words: [{ text: "忘れないで", tip: "忘れる: 잊다 + ないで: ~하지 않고" }]
      },
      {
        jp: "君が笑うと",
        kana: "きみがわらうと",
        kr: "네가 웃으면",
        words: [{ text: "笑う", tip: "わらう: 웃다" }]
      },
      {
        jp: "世界が輝く",
        kana: "せかいがかがやく",
        kr: "세계가 빛나",
        words: [{ text: "輝く", tip: "かがやく: 빛나다, 반짝이다" }]
      }
    ]
  },
  {
    id: 5,
    title: "ロストワンの号哭 (로스트원의 절규)",
    artist: "Kagamine Len",
    emoji: "😤",
    lyrics: [
      {
        jp: "正解なんてない",
        kana: "せいかいなんてない",
        kr: "정답 같은 건 없어",
        words: [{ text: "正解", tip: "せいかい: 정답, 올바른 답" }]
      },
      {
        jp: "誰かの言葉に縛られて",
        kana: "だれかのことばにしばられて",
        kr: "누군가의 말에 묶여",
        words: [
          { text: "言葉", tip: "ことば: 말, 언어, 단어" },
          { text: "縛られて", tip: "縛る: 묶다, 구속하다 (수동형)" }
        ]
      },
      {
        jp: "泣き叫んでいた",
        kana: "なきさけんでいた",
        kr: "울부짖고 있었어",
        words: [{ text: "叫んで", tip: "叫ぶ: 외치다, 소리지르다" }]
      },
      {
        jp: "もう嫌だと",
        kana: "もういやだと",
        kr: "이제 싫다고",
        words: [{ text: "嫌", tip: "いや: 싫다, 거부감, 嫌いとの差: 嫌は強い拒否" }]
      },
      {
        jp: "自由になりたい",
        kana: "じゆうになりたい",
        kr: "자유로워지고 싶어",
        words: [{ text: "自由", tip: "じゆう: 자유" }]
      },
      {
        jp: "夢を諦めない",
        kana: "ゆめをあきらめない",
        kr: "꿈을 포기하지 않아",
        words: [{ text: "諦めない", tip: "諦める: 포기하다 + ない: 부정형" }]
      }
    ]
  },
  {
    id: 6,
    title: "ワールドイズマイン (월드 이즈 마인)",
    artist: "Hatsune Miku",
    emoji: "👑",
    lyrics: [
      {
        jp: "世界で一番お姫様",
        kana: "せかいでいちばんおひめさま",
        kr: "세상에서 제일 공주님",
        words: [
          { text: "一番", tip: "いちばん: 가장, 제일, 1등" },
          { text: "お姫様", tip: "おひめさま: 공주님 (존경 접두사 お + 姫様)" }
        ]
      },
      {
        jp: "扱ってよね、ちゃんと",
        kana: "あつかってよね、ちゃんと",
        kr: "제대로 대해줘야 해",
        words: [{ text: "扱って", tip: "扱う: 대하다, 취급하다 + て형" }]
      },
      {
        jp: "好きって言えないくせに",
        kana: "すきっていえないくせに",
        kr: "좋아한다고 말도 못하면서",
        words: [
          { text: "好きって", tip: "好き: 좋아하다 + って: ~라고 (인용)" },
          { text: "くせに", tip: "くせに: ~하면서도, ~인 주제에 (비난·불만 표현)" }
        ]
      },
      {
        jp: "わかってる？",
        kana: "わかってる？",
        kr: "알고 있어?",
        words: [{ text: "わかってる", tip: "わかる: 알다, 이해하다 (現在進行: ~ている)" }]
      },
      {
        jp: "惚れた弱みね",
        kana: "ほれたよわみね",
        kr: "반한 게 약점이지",
        words: [
          { text: "惚れた", tip: "惚れる: 반하다, 빠지다 (연애 감정)" },
          { text: "弱み", tip: "よわみ: 약점, 취약한 부분" }
        ]
      },
      {
        jp: "愛してるって言って",
        kana: "あいしてるっていって",
        kr: "사랑한다고 말해줘",
        words: [{ text: "愛してる", tip: "愛する: 사랑하다 (강한 표현, 告白에 자주 사용)" }]
      }
    ]
  }
],

{
    id: 7,
    title: "シャルル (샤를)",
    artist: "VOCALOID (flower)",
    emoji: "🌹",
    lyrics: [
      {
        jp: "忘れてしまいたいのに",
        kana: "わすれてしまいたいのに",
        kr: "잊어버리고 싶은데",
        words: [
          { text: "忘れて", tip: "忘れる: 잊다 + て형" }
        ]
      },
      {
        jp: "忘れられない君がいる",
        kana: "わすれられないきみがいる",
        kr: "잊을 수 없는 네가 있어",
        words: [
          { text: "忘れられない", tip: "忘れる + られない: 잊을 수 없다 (가능형 부정)" }
        ]
      },
      {
        jp: "どうして笑えるの",
        kana: "どうしてわらえるの",
        kr: "왜 웃을 수 있어",
        words: [
          { text: "笑えるの", tip: "笑う: 웃다 + える: ~할 수 있다 (가능형)" }
        ]
      },
      {
        jp: "痛くないふりして",
        kana: "いたくないふりして",
        kr: "아프지 않은 척하면서",
        words: [
          { text: "ふりして", tip: "ふり(振り): ~인 척, 가장" }
        ]
      }
    ]
  };

/* ── 1. State ──────────────────────────────────────────── */
const state = {
  currentView: 'home',    // home | favorites | all | detail | search
  prevView: 'home',
  currentSong: null,
  favorites: loadFavorites(),
  theme: localStorage.getItem('vocalyric-theme') || 'dark'
};

/* ── 2. DOM References ─────────────────────────────────── */
const $ = id => document.getElementById(id);

const els = {
  html:           document.documentElement,
  header:         $('siteHeader'),
  searchToggleBtn:$('searchToggleBtn'),
  searchBar:      $('searchBar'),
  searchInput:    $('searchInput'),
  clearSearchBtn: $('clearSearchBtn'),
  logoBtn:        $('logoBtn'),
  menuBtn:        $('menuBtn'),
  closeMenuBtn:   $('closeMenuBtn'),
  menuOverlay:    $('menuOverlay'),
  sideMenu:       $('sideMenu'),
  themeToggle:    $('themeToggle'),
  randomBtn:      $('randomBtn'),
  backBtn:        $('backBtn'),
  tooltip:        $('tooltip'),

  // views
  homeView:       $('homeView'),
  favoritesView:  $('favoritesView'),
  allView:        $('allView'),
  searchView:     $('searchView'),
  detailView:     $('detailView'),

  // grids
  songGrid:       $('songGrid'),
  favGrid:        $('favGrid'),
  allGrid:        $('allGrid'),
  searchGrid:     $('searchGrid'),

  detailCard:     $('detailCard'),
  favEmpty:       $('favEmpty'),
  searchEmpty:    $('searchEmpty'),
  searchResultTitle: $('searchResultTitle'),
};

/* ── 3. Favorites persistence ─────────────────────────── */
function loadFavorites() {
  try { return JSON.parse(localStorage.getItem('vocalyric-favs') || '[]'); }
  catch { return []; }
}

function saveFavorites() {
  localStorage.setItem('vocalyric-favs', JSON.stringify(state.favorites));
}

function isFav(songId) { return state.favorites.includes(songId); }

function toggleFav(songId, e) {
  if (e) e.stopPropagation();
  if (isFav(songId)) {
    state.favorites = state.favorites.filter(id => id !== songId);
  } else {
    state.favorites.push(songId);
  }
  saveFavorites();
  // Refresh current view fav buttons
  document.querySelectorAll(`[data-fav-id="${songId}"]`).forEach(btn => {
    btn.classList.toggle('active', isFav(songId));
    btn.textContent = isFav(songId) ? '⭐' : '☆';
  });
  // If in detail view for this song, update detail fav btn too
  if (state.currentSong && state.currentSong.id === songId) {
    const detailFav = document.querySelector('.detail-fav-btn');
    if (detailFav) {
      detailFav.classList.toggle('active', isFav(songId));
      detailFav.textContent = isFav(songId) ? '⭐' : '☆';
    }
  }
}

/* ── 4. Theme ──────────────────────────────────────────── */
function applyTheme(theme) {
  state.theme = theme;
  els.html.setAttribute('data-theme', theme);
  localStorage.setItem('vocalyric-theme', theme);
  const icon = els.themeToggle.querySelector('.theme-icon');
  const label = els.themeToggle.querySelector('.theme-label');
  icon.textContent  = theme === 'dark' ? '🌙' : '☀️';
  label.textContent = theme === 'dark' ? '다크 모드' : '라이트 모드';
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

/* ── 5. View Router ───────────────────────────────────── */
const viewMap = {
  home:      els.homeView,
  favorites: els.favoritesView,
  all:       els.allView,
  search:    els.searchView,
  detail:    els.detailView,
};

function showView(name) {
  state.prevView = state.currentView;
  state.currentView = name;

  Object.entries(viewMap).forEach(([key, el]) => {
    el.classList.toggle('hidden', key !== name);
  });

  // Update active menu link
  document.querySelectorAll('.menu-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === name);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── 6. Card Builder ──────────────────────────────────── */
function buildSongCard(song) {
  const card = document.createElement('div');
  card.className = 'song-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${song.title} 가사 보기`);

  const favActive = isFav(song.id);
  card.innerHTML = `
    <button class="fav-btn ${favActive ? 'active' : ''}" data-fav-id="${song.id}" aria-label="즐겨찾기">
      ${favActive ? '⭐' : '☆'}
    </button>
    <span class="card-emoji">${song.emoji}</span>
    <div class="card-title">${song.title}</div>
    <div class="card-artist">${song.artist}</div>
    <div class="card-count">${song.lyrics.length}행</div>
  `;

  card.querySelector('.fav-btn').addEventListener('click', e => toggleFav(song.id, e));
  card.addEventListener('click', () => openDetail(song));
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openDetail(song); });

  return card;
}

function renderGrid(container, songList) {
  container.innerHTML = '';
  songList.forEach(song => container.appendChild(buildSongCard(song)));
}

/* ── 7. Detail View ───────────────────────────────────── */
function openDetail(song) {
  state.currentSong = song;
  renderDetail(song);
  showView('detail');
  closeMenu();
}

function renderDetail(song) {
  const favActive = isFav(song.id);

  els.detailCard.innerHTML = `
    <div class="detail-hero">
      <div class="detail-hero-bg"></div>
      <div class="detail-num">Track ${String(song.id).padStart(2,'0')} · ${song.lyrics.length} lines</div>
      <h2 class="detail-title">${song.emoji} ${song.title}</h2>
      <p class="detail-artist">${song.artist}</p>
      <button class="detail-fav-btn ${favActive ? 'active' : ''}" aria-label="즐겨찾기">
        ${favActive ? '⭐' : '☆'}
      </button>
    </div>

    <div class="lyrics-legend">
      <div class="lyrics-legend-item">
        日本語
        <span class="hint-label">히라가나 포함</span>
      </div>
      <div class="lyrics-legend-item">
        한국어 번역
        <span class="hint-label">클릭해서 확인</span>
      </div>
    </div>

    <ul class="lyric-list">
      ${song.lyrics.map((line, i) => buildLyricRow(line, i)).join('')}
    </ul>
  `;

  // Fav button in detail
  els.detailCard.querySelector('.detail-fav-btn').addEventListener('click', e => {
    toggleFav(song.id, e);
  });

  // Lyric row toggle
  els.detailCard.querySelectorAll('.lyric-row').forEach(row => {
    row.addEventListener('click', () => {
      row.classList.toggle('revealed');
    });
  });

  // Word tooltips
  els.detailCard.querySelectorAll('.word').forEach(wordEl => {
    wordEl.addEventListener('mouseenter', e => showTooltip(e, wordEl.dataset.tip));
    wordEl.addEventListener('mouseleave', hideTooltip);
    wordEl.addEventListener('touchstart', e => {
      e.preventDefault();
      showTooltip(e.touches[0], wordEl.dataset.tip);
      setTimeout(hideTooltip, 2500);
    }, { passive: false });
  });
}

function buildLyricRow(line, index) {
  // Wrap specific words with tooltips
  let jpText = escapeHtml(line.jp);
  if (line.words) {
    line.words.forEach(w => {
      const safeText = escapeHtml(w.text);
      const safeTip = escapeHtml(w.tip);
      jpText = jpText.replace(
        safeText,
        `<span class="word" data-tip="${safeTip}">${safeText}</span>`
      );
    });
  }

  return `
    <li class="lyric-row" data-index="${index}">
      <div class="lyric-jp-block">
        <div class="lyric-original">${jpText}</div>
        <div class="lyric-kana">${escapeHtml(line.kana)}</div>
        ${line.note ? `<span class="lyric-note">${escapeHtml(line.note)}</span>` : ''}
      </div>
      <div class="lyric-kr-block">
        <div class="lyric-kr hidden-kr">${escapeHtml(line.kr)}</div>
        <span class="reveal-hint">탭해서 보기 👆</span>
      </div>
    </li>
  `;
}

/* ── 8. Tooltip ─────────────────────────────────────────── */
function showTooltip(e, text) {
  els.tooltip.textContent = text;
  els.tooltip.classList.add('visible');
  positionTooltip(e);
}

function hideTooltip() {
  els.tooltip.classList.remove('visible');
}

function positionTooltip(e) {
  const tt = els.tooltip;
  const x = e.clientX || (e.pageX - window.scrollX);
  const y = e.clientY || (e.pageY - window.scrollY);
  const tw = tt.offsetWidth;
  const th = tt.offsetHeight;
  const vw = window.innerWidth;

  let left = x + 12;
  let top  = y - th - 8;

  if (left + tw > vw - 8) left = x - tw - 12;
  if (top < 8) top = y + 20;

  tt.style.left = left + 'px';
  tt.style.top  = top  + 'px';
}

document.addEventListener('mousemove', e => {
  if (els.tooltip.classList.contains('visible')) positionTooltip(e);
});

/* ── 9. Search ──────────────────────────────────────────── */
let searchDebounce = null;

function doSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) { showView('home'); return; }

  const results = songs.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q)
  );

  els.searchResultTitle.textContent = `"${query}" 검색 결과 (${results.length}곡)`;
  renderGrid(els.searchGrid, results);

  els.searchEmpty.classList.toggle('hidden', results.length > 0);
  showView('search');
}

/* ── 10. Menu ───────────────────────────────────────────── */
function openMenu() {
  els.sideMenu.classList.add('open');
  els.menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  els.sideMenu.classList.remove('open');
  els.menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── 11. Random ─────────────────────────────────────────── */
function pickRandom() {
  const song = songs[Math.floor(Math.random() * songs.length)];
  openDetail(song);
}

/* ── 12. Utilities ──────────────────────────────────────── */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── 13. Init ─────────────────────────────────────────────*/
function init() {
  // Apply stored theme
  applyTheme(state.theme);

  // Render home grid
  renderGrid(els.songGrid, songs);

  // Events: header buttons
  els.logoBtn.addEventListener('click', e => {
    e.preventDefault();
    closeSearchBar();
    showView('home');
    closeMenu();
  });

  els.searchToggleBtn.addEventListener('click', toggleSearchBar);

  els.searchInput.addEventListener('input', e => {
    const val = e.target.value;
    els.clearSearchBtn.classList.toggle('visible', val.length > 0);
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => doSearch(val), 280);
  });

  els.clearSearchBtn.addEventListener('click', () => {
    els.searchInput.value = '';
    els.clearSearchBtn.classList.remove('visible');
    showView('home');
    els.searchInput.focus();
  });

  els.menuBtn.addEventListener('click', openMenu);
  els.closeMenuBtn.addEventListener('click', closeMenu);
  els.menuOverlay.addEventListener('click', closeMenu);

  els.themeToggle.addEventListener('click', toggleTheme);
  els.randomBtn.addEventListener('click', pickRandom);

  els.backBtn.addEventListener('click', () => {
    const prev = ['home','favorites','all'].includes(state.prevView)
      ? state.prevView : 'home';
    showView(prev);
  });

  // Side menu navigation
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const view = link.dataset.view;
      closeMenu();

      if (view === 'favorites') {
        const favSongs = songs.filter(s => isFav(s.id));
        renderGrid(els.favGrid, favSongs);
        els.favEmpty.classList.toggle('hidden', favSongs.length > 0);
        showView('favorites');
      } else if (view === 'all') {
        renderGrid(els.allGrid, songs);
        showView('all');
      } else {
        showView('home');
      }
    });
  });

  // Keyboard: close search on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearchBar();
      closeMenu();
      hideTooltip();
    }
  });
}

function toggleSearchBar() {
  const isOpen = els.searchBar.classList.contains('open');
  if (isOpen) {
    closeSearchBar();
  } else {
    els.searchBar.classList.add('open');
    setTimeout(() => els.searchInput.focus(), 200);
  }
}

function closeSearchBar() {
  els.searchBar.classList.remove('open');
  els.searchInput.value = '';
  els.clearSearchBtn.classList.remove('visible');
}

// Boot
document.addEventListener('DOMContentLoaded', init);
