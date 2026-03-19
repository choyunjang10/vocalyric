# 🎵 Vocalyric — 보컬로이드 가사로 배우는 일본어

> **노래를 들으며, 가사를 클릭하며, 자연스럽게 일본어를 익히는 감성 학습 웹앱**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-00FFD5?style=flat-square&logo=github)](https://[아이디].github.io/vocalyric)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---
## URL
https://choyunjang10.github.io/vocalyric/
---

## ✨ 미리보기

```
📱 모바일 퍼스트 레이아웃  ·  🌙 다크 / 라이트 모드  ·  ⭐ 즐겨찾기 저장
```

| 기능 | 설명 |
|---|---|
| 🎲 랜덤 추천 | 수록곡 중 무작위로 한 곡을 즉시 열어줍니다 |
| 👆 번역 토글 | 한국어 번역은 기본 숨김 — 문장을 탭/클릭하면 공개 |
| 💬 단어 툴팁 | 핵심 어휘에 마우스 오버 또는 터치 시 뜻 풀이 팝업 |
| 🔍 실시간 검색 | 제목 또는 아티스트명으로 즉시 필터링 |
| ⭐ 즐겨찾기 | 로컬 스토리지 기반 — 앱을 닫아도 유지 |
| 🌙 테마 전환 | 다크 / 라이트 모드 토글, 설정 자동 저장 |

---

## 🎤 수록 곡 목록

| # | 곡명 | 아티스트 |
|---|---|---|
| 01 | Melt (メルト) | Hatsune Miku |
| 02 | Tell Your World | Hatsune Miku |
| 03 | 千本桜 (센본자쿠라) | Hatsune Miku |
| 04 | ダーリンダンス (달링 댄스) | Kagamine Rin |
| 05 | ロストワンの号哭 (로스트원의 절규) | Kagamine Len |
| 06 | ワールドイズマイン (월드 이즈 마인) | Hatsune Miku |

> 각 곡은 **원문 → 히라가나 → 한국어** 3단 구조로 제공되며, 주요 단어에는 어휘 해설 툴팁이 포함되어 있습니다.

---

## 🚀 사용 방법

### 1. 가사 학습하기

1. 홈 화면에서 카드를 탭하거나, **랜덤 추천** 버튼을 누릅니다.
2. 가사 상세 화면에서 원문과 히라가나를 먼저 읽습니다.
3. 뜻이 궁금한 단어에 마우스를 올리면 (또는 터치하면) 툴팁이 나타납니다.
4. 오른쪽 번역 칸을 **탭/클릭**하면 한국어 번역이 공개됩니다.

### 2. 즐겨찾기 저장

- 카드의 **☆ 버튼** 또는 상세 화면 상단의 **☆** 버튼을 눌러 저장합니다.
- 햄버거 메뉴 → **⭐ 즐겨찾기**에서 모아볼 수 있습니다.

### 3. 검색

- 헤더의 🔍 버튼을 눌러 검색창을 열고 곡 제목 또는 아티스트명을 입력합니다.

---

## 🗂 파일 구조

```
vocalyric/
├── index.html   # 시맨틱 마크업 및 뷰 레이아웃
├── style.css    # Flex/Grid 반응형 디자인, 애니메이션
├── script.js    # 데이터(songs), DOM 로직, 검색/즐겨찾기/테마
└── README.md
```

---

## 🛠 기술 스택

- **HTML5 / CSS3 / Vanilla JavaScript** — 외부 프레임워크 없음
- **CSS Custom Properties** — 다크/라이트 테마 변수 관리
- **localStorage** — 즐겨찾기 및 테마 설정 영속 저장
- **Google Fonts** — Orbitron · Space Mono · Noto Sans JP/KR
- **GitHub Pages** — 정적 호스팅 (빌드 과정 없음)

---

## 📦 곡 데이터 구조

새로운 곡을 추가하려면 `script.js` 상단의 `songs` 배열에 아래 형식으로 추가하세요.

```javascript
{
  id: 7,
  title: "곡 제목",
  artist: "아티스트명",
  emoji: "🎵",
  lyrics: [
    {
      jp: "日本語の歌詞",          // 원문
      kana: "にほんごのかし",       // 히라가나
      kr: "한국어 번역",
      note: "단어: 설명 (선택)",   // 카드 하단 메모 (생략 가능)
      words: [                     // 툴팁 단어 (생략 가능)
        { text: "단어", tip: "단어: 뜻 설명" }
      ]
    }
  ]
}
```

---

## 🎨 디자인 컨셉

| 항목 | 값 |
|---|---|
| 포인트 컬러 | `#00FFD5` (미쿠 민트) · `#FF66B2` (보컬로이드 핑크) |
| 기본 테마 | 다크 모드 (`#0a0e14` 배경) |
| 레이아웃 | 모바일 퍼스트, 최대 너비 480px 중앙 정렬 |
| 타이포그래피 | Orbitron (헤더) · Space Mono (메타) · Noto Sans (가사) |
| 애니메이션 | 카드 진입 fade-in, 랜덤 버튼 pulse glow, 번역 blur reveal |

---

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작된 팬 메이드 프로젝트입니다.  
가사 저작권은 각 원작자 및 Crypton Future Media에 귀속됩니다.

---

<p align="center">
  Made with 💙 by <strong>Vocalyric</strong> · 보컬로이드 × 일본어 학습
</p>
