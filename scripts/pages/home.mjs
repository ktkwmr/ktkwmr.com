// The domain's top page (https://ktkwmr.com/ and /ja/): a list of all the apps on ktkwmr.com.
// Used by scripts/build.mjs, which writes public/index.html and public/ja/index.html.
//
// The page is written for a growing number of apps: nothing outside APPS names an app or says how
// many there are (counts are computed). The apps live in their own repositories, so their
// names, descriptions, and guide lists are copied here by hand.
//
// To add an app: add its icon to ICON (the same paths as its icons/icon.svg) and an entry to APPS
// (cards are shown in that order), and a PREVIEW: a small picture that shows what the app does
// (its main screen, simplified). The preview is required; the build stops without one, because the
// app icon alone does not tell visitors what the app is for. Guides are optional: without them the
// list is left out.

import { ORIGIN, escapeHtml } from "./util.mjs";

export const HOME_PATH = { en: "/", ja: "/ja/" };
const CF_TOKEN = "5c53079cb9a64d819d1ca53e8533ca63";

// App icons: the same as each app's icons/icon.svg (white strokes on a black rounded square)
const ICON = {
  chordtransposer:
    '<g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><path d="M11 7v14M17 7v14M8 12.5l12-2.5M8 18.5l12-2.5"/></g>',
  setlistmetronome:
    '<g fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M10.5 6.5h7l3 15h-13z"/><path d="M14 19.5l4-10"/></g><circle cx="17.2" cy="11.5" r="1.6" fill="#fff"/>',
  guitarchordfinder:
    '<g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"><path d="M9 7v14M14 7v14M19 7v14M7 11.5h14"/></g><circle cx="14" cy="16" r="2.4" fill="#fff"/>',
  sheetmusicplayer:
    '<path d="M5 9.5h18M5 12.5h18M5 15.5h18M5 18.5h18" stroke="#fff" stroke-width="1" stroke-linecap="round"/><rect x="9.4" y="6.5" width="2.8" height="15" rx="1.4" fill="#fff" fill-opacity=".45"/><path d="M18.6 6.8v10.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="16.7" cy="17.6" rx="2.3" ry="1.7" transform="rotate(-20 16.7 17.6)" fill="#fff"/>',
  looptrainer:
    '<g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14A6.5 6.5 0 1 1 14 7.5"/><path d="M11.6 4.9l2.8 2.6-2.8 2.6"/></g><path d="M12 10.8v6.4l5-3.2z" fill="#fff"/>',
  vocalladder:
    '<path d="M3.5 23.5H9V18H14.5V12.5H20V7H24.5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="6.1" cy="20.6" r="1.8" fill="#fff"/><circle cx="11.6" cy="15.1" r="1.8" fill="#fff"/><circle cx="17.1" cy="9.6" r="1.8" fill="#fff"/><circle cx="22.4" cy="4.1" r="1.8" fill="#fff"/>',
};
const icon = (slug, cls = "app-icon") =>
  `<svg class="${cls}" viewBox="0 0 28 28" aria-hidden="true"><rect width="28" height="28" rx="7" fill="#000"/>${ICON[slug]}</svg>`;

// Site mark: four tiles = a small collection of apps
const MARK =
  '<svg class="mark" viewBox="0 0 28 28" aria-hidden="true"><rect width="28" height="28" rx="7" fill="#000"/><g fill="#fff"><rect x="7" y="7" width="6" height="6" rx="1.5"/><rect x="15" y="7" width="6" height="6" rx="1.5"/><rect x="7" y="15" width="6" height="6" rx="1.5"/></g><rect x="15.75" y="15.75" width="4.5" height="4.5" rx="1.2" fill="none" stroke="#fff" stroke-width="1.5"/></svg>';

// Small, static previews of each app's main screen (decorative)
// Decoration on the right of the hero (wide screens only): a laptop, a tablet, and a phone, each
// showing a simplified app screen, to show that the apps work on any device. Drawn in HTML/CSS.
const DEVICES = (label) => `
      <figure class="devices" aria-hidden="true">
        <div class="laptop">
          <div class="screen">
            <div class="ui-bar"><i class="ui-logo"></i><i class="ui-pill on"></i><i class="ui-pill"></i><i class="ui-pill"></i></div>
            <div class="ui-split">
              <div class="ui-panel"><b>Input</b><code>C&nbsp;&nbsp;&nbsp;Am7&nbsp;&nbsp;F/G</code><code class="lyric"></code><code>F&nbsp;&nbsp;&nbsp;G7&nbsp;&nbsp;&nbsp;C</code><code class="lyric short"></code><code>Dm7&nbsp;G&nbsp;&nbsp;&nbsp;&nbsp;Em</code><code class="lyric"></code></div>
              <div class="ui-panel"><b>Output <span>+2</span></b><code>D&nbsp;&nbsp;&nbsp;Bm7&nbsp;&nbsp;G/A</code><code class="lyric"></code><code>G&nbsp;&nbsp;&nbsp;A7&nbsp;&nbsp;&nbsp;D</code><code class="lyric short"></code><code>Em7&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;F#m</code><code class="lyric"></code></div>
            </div>
          </div>
          <div class="base"></div>
        </div>
        <div class="tablet">
          <div class="ui-bar"><i class="ui-logo"></i><i class="ui-pill"></i></div>
          <div class="tab-body">
            <div class="tab-chips"><i class="on">DADGAD</i><i>Open G</i></div>
            <svg viewBox="0 0 100 92"><g stroke="#000" stroke-width="1"><path d="M15 16v66M29 16v66M43 16v66M57 16v66M71 16v66M85 16v66M15 32h70M15 49h70M15 66h70M15 82h70"/></g><path d="M14 16h72" stroke="#000" stroke-width="3.5"/><circle cx="29" cy="57" r="6" fill="#000"/><circle cx="43" cy="40" r="6" fill="#fff" stroke="#000"/><circle cx="71" cy="24" r="6" fill="#fff" stroke="#000"/><g fill="none" stroke="#000"><circle cx="57" cy="8" r="3.5"/><circle cx="85" cy="8" r="3.5"/><path d="M12 5l6 6M18 5l-6 6"/></g></svg>
          </div>
        </div>
        <div class="phone">
          <div class="ph-body">
            <span class="ph-bpm">120</span>
            <span class="ph-tempo">Allegro</span>
            <span class="beats"><i></i><i></i><i></i><i></i></span>
            <span class="ph-start">▶</span>
          </div>
        </div>
        <figcaption>${label}</figcaption>
      </figure>`;

// Vocal Ladder: the same five-note exercise played three times, each a half step higher,
// with the key being played lit in turn, and the keys below
const ladderPreview = () => {
  const steps = [0, 2, 4, 5, 7, 5, 4, 2, 0], keys = ["C4", "C#4", "D4"];
  const groups = keys.map((k, g) => {
    const x0 = 4 + g * 83, base = 82 - g * 12;
    const notes = steps.map((st, i) => `<rect x="${x0 + i * 8.2}" y="${base - st * 5.5}" width="${i === steps.length - 1 ? 13 : 7}" height="9" rx="2.5"/>`).join("");
    return `<g class="pv-key${g}">${notes}</g>`;
  }).join("\n                ");
  return `
            <div class="pv-ladder" aria-hidden="true">
              <svg class="pv-steps" viewBox="0 0 252 96">
                ${groups}
              </svg>
              <div class="pv-controls">${keys.map((k, g) => `<span class="chip pv-k${g}">${k}</span>`).join("")}<span class="chip">→ G4</span></div>
            </div>`;
};

// A picture of each app's main screen; every app in APPS needs one (see card())
const PREVIEW = {
  chordtransposer: `
            <div class="pv-transpose" aria-hidden="true">
              <div class="pv-row"><span class="pv-key">Key</span><span class="chip">C</span><span class="chip">Am7</span><span class="chip">F/G</span></div>
              <div class="pv-shift"><span>+2</span></div>
              <div class="pv-row"><span class="pv-key">Key</span><span class="chip on">D</span><span class="chip on">Bm7</span><span class="chip on">G/A</span></div>
            </div>`,
  setlistmetronome: `
            <div class="pv-metro" aria-hidden="true">
              <div class="pv-bpm">120</div>
              <div class="pv-tempo">♩ = 120 <i>Allegro</i></div>
              <div class="pv-beats"><span>1</span><span>2</span><span>3</span><span>4</span></div>
            </div>`,
  // C major (x32010) in standard tuning
  guitarchordfinder: `
            <div class="pv-finder" aria-hidden="true">
              <svg class="pv-diagram" viewBox="0 0 120 112">
                <g stroke="#000" stroke-width="1"><path d="M20 22v72M36 22v72M52 22v72M68 22v72M84 22v72M100 22v72"/><path d="M20 40h80M20 58h80M20 76h80M20 94h80"/></g>
                <path d="M19 22h82" stroke="#000" stroke-width="4"/>
                <g fill="none" stroke="#000" stroke-width="1.2"><path d="M16 9l8 8M24 9l-8 8"/><circle cx="68" cy="13" r="4.5"/><circle cx="100" cy="13" r="4.5"/></g>
                <circle cx="36" cy="67" r="7.5" fill="#000"/><circle cx="52" cy="49" r="7.5" fill="#fff" stroke="#000" stroke-width="1.2"/><circle cx="84" cy="31" r="7.5" fill="#fff" stroke="#000" stroke-width="1.2"/>
                <g font-family="ui-monospace, monospace" font-size="8.5" font-weight="700" text-anchor="middle"><text x="36" y="70" fill="#fff">R</text><text x="52" y="52">3</text><text x="84" y="34">R</text></g>
              </svg>
              <div class="pv-tunings"><span class="chip on">DADGAD</span><span class="chip">Open G</span><span class="chip">Drop D</span></div>
            </div>`,
  // A photo of a score is read, then played with a cursor moving along the staff
  sheetmusicplayer: `
            <div class="pv-player" aria-hidden="true">
              <svg class="pv-sheet" viewBox="0 0 252 104">
                <g transform="rotate(-7 38 52)">
                  <rect x="6" y="14" width="64" height="78" rx="2" fill="#fff" stroke="#000" stroke-width="1.2"/>
                  <g stroke="#a3a3a3" stroke-width=".8"><path d="M14 28h48M14 32h48M14 36h48M14 40h48M14 44h48"/><path d="M14 60h48M14 64h48M14 68h48M14 72h48M14 76h48"/></g>
                  <g fill="#000"><circle cx="22" cy="44" r="2"/><circle cx="30" cy="44" r="2"/><circle cx="38" cy="36" r="2"/><circle cx="46" cy="36" r="2"/><circle cx="54" cy="34" r="2"/><circle cx="22" cy="68" r="2"/><circle cx="32" cy="70" r="2"/><circle cx="42" cy="66" r="2"/><circle cx="52" cy="72" r="2"/></g>
                </g>
                <g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"><path d="M2 14V4h10M76 4h10v10M2 90v10h10M76 100h10V90"/></g>
                <path d="M96 52h16M107 46l6 6-6 6" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <g stroke="#000" stroke-width="1"><path d="M124 32h124M124 40h124M124 48h124M124 56h124M124 64h124"/><path d="M124 32v32M248 32v32" stroke-width="1.4"/><path d="M134 72h12M150 72h12"/></g>
                <g fill="#000">
                  <ellipse cx="140" cy="72" rx="5" ry="3.6" transform="rotate(-20 140 72)"/><ellipse cx="156" cy="72" rx="5" ry="3.6" transform="rotate(-20 156 72)"/>
                  <ellipse cx="172" cy="60" rx="5" ry="3.6" transform="rotate(-20 172 60)"/><ellipse cx="188" cy="60" rx="5" ry="3.6" transform="rotate(-20 188 60)"/>
                  <ellipse cx="204" cy="56" rx="5" ry="3.6" transform="rotate(-20 204 56)"/><ellipse cx="220" cy="56" rx="5" ry="3.6" transform="rotate(-20 220 56)"/>
                  <ellipse cx="237" cy="60" rx="5" ry="3.6" transform="rotate(-20 237 60)" fill="#fff" stroke="#000" stroke-width="1.6"/>
                </g>
                <g stroke="#000" stroke-width="1.2"><path d="M144.6 71V45M160.6 71V45M176.6 59V33M192.6 59V33M208.6 55V29M224.6 55V29M241.6 59V33"/></g>
                <rect class="pv-cursor" x="131" y="22" width="3" height="58" rx="1.5"/>
              </svg>
              <div class="pv-controls"><span class="chip on">&#9654; Play</span><span class="chip">&#9833; = 100</span></div>
            </div>`,
  // A waveform with an A-B loop, played slower with the pitch unchanged
  looptrainer: `
            <div class="pv-loop" aria-hidden="true">
              <svg class="pv-wave" viewBox="0 0 252 100">
                <rect x="97" y="8" width="70" height="84" fill="#000" fill-opacity=".06"/>
                <path d="M10 47v6 M16 43.5v13 M22 39.5v21 M28 36v28 M34 33.5v33 M40 33v34 M46 35v30 M52 39.5v21 M58 44.5v11 M64 44.5v11 M70 40.5v19 M76 39v22 M82 39v22 M88 40.5v19 M94 42.5v15 M172 44v12 M178 41v18 M184 38.5v23 M190 36.5v27 M196 36v28 M202 38v24 M208 42v16 M214 47v6 M220 41.5v17 M226 37v26 M232 35v30 M238 35v30 M244 37v26" stroke="#a3a3a3" stroke-width="3" stroke-linecap="round"/>
                <path d="M100 44.5v11 M106 46v8 M112 47v6 M118 46.5v7 M124 47v6 M130 47v6 M136 46.5v7 M142 46v8 M148 46v8 M154 46v8 M160 46.5v7 M166 46v8" stroke="#000" stroke-width="3" stroke-linecap="round"/>
                <g fill="#000"><path d="M96 8h2v84h-2z"/><rect x="96" y="8" width="12" height="11"/><path d="M166 8h2v84h-2z"/><rect x="156" y="8" width="12" height="11"/></g>
                <g fill="#fff" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle"><text x="102" y="16.5">A</text><text x="162" y="16.5">B</text></g>
                <rect class="pv-loopcursor" x="98" y="8" width="2" height="84" rx="1"/>
              </svg>
              <div class="pv-controls"><span class="chip on">70%</span><span class="chip">Key +2</span><span class="chip">+2% / loop</span></div>
            </div>`,
  vocalladder: ladderPreview(),
};

const APPS = [
  {
    slug: "chordtransposer",
    name: "Chord Transposer",
    en: {
      tag: "Transpose",
      lead: "Transpose chord charts by any number of semitones. Paste text, or open TXT, PDF, and image files with built-in OCR.",
      points: ["Sharps / flats notation switch", "Reads scanned PDFs and photos", "Preview, print, and save"],
      guides: [["guide", "How to use"], ["transposition-basics", "Transposing chords: the basics"], ["capo-chart", "Capo chart"], ["key-chart", "Chords in every key"], ["sharps-and-flats", "Sharps or flats?"], ["chordpro", "The ChordPro format"], ["faq", "FAQ"]],
    },
    ja: {
      tag: "移調",
      lead: "コード譜を半音単位で移調。貼り付けたテキストのほか、TXT・PDF・画像ファイルも OCR で読み込めます。",
      points: ["# / ♭ 表記の切り替え", "スキャン PDF や写真も読み込み", "プレビュー・印刷・保存"],
      guides: [["guide", "使い方ガイド"], ["transposition-basics", "移調・転調の基礎"], ["capo-chart", "カポ位置の早見表"], ["key-chart", "キー別のコード表"], ["sharps-and-flats", "# と ♭ の使い分け"], ["chordpro", "ChordPro 形式の解説"], ["faq", "よくある質問"]],
    },
  },
  {
    slug: "setlistmetronome",
    name: "Setlist Metronome",
    en: {
      tag: "Tempo",
      lead: "A metronome that remembers the tempo, time signature, rhythm, and sound of every song in your setlist.",
      points: ["Switch songs with one tap", "8ths, 16ths, triplets, shuffle", "Accents and five sounds"],
      guides: [["guide", "How to use"], ["tempo-markings", "Tempo markings and BPM"], ["time-signatures", "Time signatures explained"], ["shuffle-and-swing", "Shuffle and swing"], ["faq", "FAQ"]],
    },
    ja: {
      tag: "テンポ",
      lead: "セットリストの曲ごとに、テンポ・拍子・リズム・音色を覚えておけるメトロノーム。",
      points: ["ワンタップで曲を切り替え", "8 分・16 分・3 連・シャッフル", "アクセントと 5 種類の音色"],
      guides: [["guide", "使い方ガイド"], ["tempo-markings", "テンポ記号と BPM の目安"], ["time-signatures", "拍子の基本"], ["shuffle-and-swing", "シャッフルとハネのリズム"], ["faq", "よくある質問"]],
    },
  },
  {
    slug: "guitarchordfinder",
    name: "Guitar Chord Finder",
    en: {
      tag: "Tunings",
      lead: "Chord shapes for DADGAD, Open G, Drop D, and any custom tuning, in low, middle, and high positions.",
      points: ["Tap a shape to hear it", "Name a chord from the frets", "Custom tunings"],
      guides: [["guide", "How to use"], ["alternate-tunings", "Alternate tunings explained"], ["dadgad-chords", "DADGAD chords"], ["open-g-chords", "Open G chords"], ["open-d-and-drop-d-chords", "Drop D and Open D chords"], ["faq", "FAQ"]],
    },
    ja: {
      tag: "チューニング",
      lead: "DADGAD・オープン G・ドロップ D など、変則チューニングのコードの押さえ方をロー・ミドル・ハイの 3 ポジションで。",
      points: ["タップで音を確認", "押さえた形からコード名を判定", "自由なチューニングにも対応"],
      guides: [["guide", "使い方ガイド"], ["alternate-tunings", "変則チューニング入門"], ["dadgad-chords", "DADGAD のコード"], ["open-g-chords", "オープン G のコード"], ["open-d-and-drop-d-chords", "ドロップ D・オープン D のコード"], ["faq", "よくある質問"]],
    },
  },
  {
    slug: "sheetmusicplayer",
    name: "Sheet Music Player",
    en: {
      tag: "Play",
      lead: "Photograph a score or open an image or PDF: the notes are read in your browser and played back, with a cursor moving along the staff.",
      points: ["Tempo read from the score, adjustable", "Fix wrong notes in a piano roll", "PC (Chrome / Edge)"],
      guides: [["guide", "How to use"], ["photo-tips", "Photo tips for sheet music"], ["fix-errors", "Fixing reading mistakes"], ["tempo-markings", "Tempo markings and BPM"], ["musicxml", "What is MusicXML?"], ["what-is-omr", "How music recognition works"], ["faq", "FAQ"]],
    },
    ja: {
      tag: "再生",
      lead: "楽譜を写真に撮るか、画像・PDF を開くと、ブラウザの中で音符を読み取って再生。五線の上をカーソルが進みます。",
      points: ["テンポは楽譜から読み取り、変更も可", "間違いはピアノロールで修正", "PC（Chrome・Edge）"],
      guides: [["guide", "使い方ガイド"], ["photo-tips", "楽譜の撮り方のコツ"], ["fix-errors", "読み取りミスの直し方"], ["tempo-markings", "速度記号と BPM の一覧"], ["musicxml", "MusicXML とは"], ["what-is-omr", "楽譜を読み取る仕組み（OMR）"], ["faq", "よくある質問"]],
    },
  },
  {
    slug: "looptrainer",
    name: "Loop Trainer",
    en: {
      tag: "Practice",
      lead: "Change the key and the tempo of a song you have freely, and loop any section. Slowing down keeps the pitch, so it is made for learning by ear.",
      points: ["50–150% speed, key ±6", "Loops snap to the detected beat", "Speeds up a little on every loop"],
      guides: [],
    },
    ja: {
      tag: "練習",
      lead: "手持ちの音源のキーとテンポを自由に変えて、好きな区間をループ再生。スロー再生でも音程は変わらないので、耳コピ・フレーズ練習に。",
      points: ["速度 50〜150%・キー ±6", "検出した拍にループが吸着", "1 周ごとに少しずつ速く"],
      guides: [],
    },
  },
  {
    slug: "vocalladder",
    name: "Vocal Ladder",
    en: {
      tag: "Warm-up",
      lead: "A piano accompanist for vocal warm-ups: it plays an exercise such as Do-Re-Mi-Fa-Sol-Fa-Mi-Re-Do and moves it up a half step at a time, from the key you start on to the key you end on.",
      points: ["Built-in and your own patterns", "Practice sets that play straight through", "Share sets with students as a file"],
      guides: [["guide", "How to use"], ["patterns", "Writing your own patterns"], ["warmup-scales", "Warm-up scales and your range"], ["faq", "FAQ"]],
    },
    ja: {
      tag: "発声練習",
      lead: "発声練習のピアノ伴奏を自動で。ドレミファソファミレドなどの練習を、開始のキーから終了のキーまで半音ずつ上げながら弾きます。",
      points: ["基本のパターンとオリジナル", "練習セットを続けて再生", "セットをファイルで生徒と共有"],
      guides: [["guide", "使い方ガイド"], ["patterns", "練習パターンの書き方"], ["warmup-scales", "発声練習の音階と音域の決め方"], ["faq", "よくある質問"]],
    },
  },
];

const appPath = (lang, slug) => `/${slug}/${lang === "ja" ? "ja/" : ""}`;

const UI = {
  en: {
    locale: "en_US",
    title: "ktkwmr – Web apps of musicians, by musicians, for musicians",
    description: "Free web apps for musicians, made by a musician: tools for chord charts, tempo, guitar chords, and more. They run in your browser, need no sign-up, and work offline.",
    other: { lang: "ja", label: "日本語", href: "/ja/" },
    heading: "Web apps of musicians,<br />by musicians,<br />for musicians.",
    lead: "Tools a player actually wanted, made one at a time. They open instantly in your browser, work offline, and never ask you to sign up.",
    cta: "See the apps",
    devices: "Works on PC, tablet, and phone",
    appsTitle: "Apps",
    open: "Open app",
    guidesLabel: "Guides",
    whyTitle: "Every app, the same promises",
    why: [
      ["Free, no sign-up", "No accounts, no paywalls. Open the page and start playing."],
      ["Stays on your device", "Your charts and setlists are processed and saved in your browser, never uploaded."],
      ["Works offline", "Add any app to your home screen. After the first visit, it opens without a connection."],
      ["English and Japanese", "Every app and guide is written in both languages, chosen from your browser."],
    ],
    footer: "© 2026 ktkwmr",
    source: "GitHub",
    feedback: "Feedback",
    nav: "Site",
  },
  ja: {
    locale: "ja_JP",
    title: "ktkwmr – ミュージシャンの、ミュージシャンによる、ミュージシャンのための Web アプリ",
    description: "ミュージシャンが作った、ミュージシャンのための無料 Web アプリ。コード譜・テンポ・ギターのコードなど、演奏に役立つ道具をブラウザだけで。登録不要で、オフラインでも使えます。",
    other: { lang: "en", label: "English", href: "/?lang=en" },
    heading: "ミュージシャンの<br />ミュージシャンによる<br />ミュージシャンのための<br />Web アプリ",
    lead: "弾く人が本当に欲しかった道具を、ひとつずつ作っています。ブラウザですぐ開けて、オフラインでも動き、登録は必要ありません。",
    cta: "アプリを見る",
    devices: "PC・タブレット・スマホに対応",
    appsTitle: "アプリ",
    open: "アプリを開く",
    guidesLabel: "ガイド",
    whyTitle: "どのアプリにも共通すること",
    why: [
      ["無料・登録不要", "アカウントも課金もありません。開いたらすぐに使えます。"],
      ["データは端末の中だけ", "コード譜やセットリストはブラウザ内で処理・保存され、サーバーには送られません。"],
      ["オフラインで動く", "ホーム画面に追加でき、一度開けば通信がなくても使えます。"],
      ["日本語と英語", "アプリもガイドも両方の言語で。ブラウザの言語で自動で切り替わります。"],
    ],
    footer: "© 2026 ktkwmr",
    source: "GitHub",
    feedback: "ご意見・ご質問",
    nav: "サイト",
  },
};

const CSS = `
    :root {
      color-scheme: light;
      --ink: #000; --paper: #fff; --muted: #525252; --subtle: #737373; --line: #e5e5e5; --line-strong: #d4d4d4;
      --hover-fill: #f5f5f5; --canvas: #f5f5f5; --press: #404040; --press-hover: #262626;
      --paper-shadow: 0 1px 3px rgba(0,0,0,.08), 0 6px 20px rgba(0,0,0,.08);
      --radius: 8px;
      --mono: "Cascadia Mono", "Consolas", "SF Mono", Menlo, "DejaVu Sans Mono", "MS Gothic", monospace;
      --sans: "Segoe UI Variable Text", "Segoe UI", "Yu Gothic UI", "Meiryo UI", "Meiryo", system-ui, -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif;
      --gl: max(20px, env(safe-area-inset-left, 0px)); --gr: max(20px, env(safe-area-inset-right, 0px));
    }
    * { box-sizing: border-box; }
    html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
    body { margin: 0; background: var(--canvas); color: var(--ink); font-family: var(--sans); font-size: 15px; line-height: 1.7; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-underline-offset: 3px; }
    a:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; border-radius: 4px; }
    .wrap { max-width: 1160px; margin: 0 auto; padding: 0 var(--gr) 0 var(--gl); }

    /* Toolbar: white bar like the apps */
    .site-head { position: sticky; top: 0; z-index: 2; background: var(--paper); border-bottom: 1px solid var(--line); }
    .site-head .wrap { display: flex; align-items: center; gap: 16px; height: 56px; }
    .brand { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; text-decoration: none; letter-spacing: .01em; }
    .mark { width: 28px; height: 28px; flex: none; }
    .head-links { display: flex; align-items: center; gap: 4px; margin-left: auto; font-size: 14px; }
    .head-links a { display: inline-flex; align-items: center; height: 34px; padding: 0 12px; border-radius: var(--radius); text-decoration: none; color: var(--muted); }
    .head-links a:hover { background: var(--hover-fill); color: var(--ink); }

    /* Hero */
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 440px; gap: 56px; align-items: center; padding: 64px 0 48px; }

    /* Devices: laptop at the back, tablet front-left, phone front-right */
    .devices { position: relative; height: 360px; margin: 0; }
    .devices figcaption { position: absolute; left: 0; right: 0; bottom: -6px; text-align: center; font-family: var(--mono); font-size: 12px; letter-spacing: .06em; color: var(--subtle); }
    .laptop { position: absolute; top: 0; right: 26px; width: 380px; filter: drop-shadow(0 10px 24px rgba(0,0,0,.12)); }
    .laptop .screen { aspect-ratio: 16 / 10; border: 9px solid #111; border-bottom-width: 12px; border-radius: 14px 14px 0 0; background: var(--canvas); overflow: hidden; }
    .laptop .base { position: relative; height: 12px; margin: 0 -26px; background: linear-gradient(#e5e5e5, #c4c4c4); border-radius: 2px 2px 12px 12px; }
    .laptop .base::before { content: ""; position: absolute; left: 50%; top: 0; width: 60px; height: 5px; margin-left: -30px; background: #a3a3a3; border-radius: 0 0 6px 6px; }
    .ui-bar { display: flex; align-items: center; gap: 4px; height: 18px; padding: 0 7px; background: var(--paper); border-bottom: 1px solid var(--line); }
    .ui-logo { width: 9px; height: 9px; margin-right: 4px; border-radius: 2.5px; background: var(--ink); }
    .ui-pill { width: 22px; height: 8px; border: 1px solid var(--line-strong); border-radius: 3px; }
    .ui-pill.on { background: var(--ink); border-color: var(--ink); }
    .ui-split { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; padding: 8px; height: calc(100% - 18px); }
    .ui-panel { display: flex; flex-direction: column; gap: 4px; padding: 0 8px 8px; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; overflow: hidden; }
    .ui-panel b { display: flex; justify-content: space-between; margin: 0 -8px 4px; padding: 4px 8px; border-bottom: 1px solid var(--line); font-family: var(--sans); font-size: 8px; }
    .ui-panel b span { padding: 0 4px; background: var(--ink); color: var(--paper); border-radius: 3px; font-family: var(--mono); }
    .ui-panel code { font-family: var(--mono); font-size: 9px; font-weight: 700; line-height: 1.2; white-space: nowrap; }
    .ui-panel code.lyric { height: 4px; margin-bottom: 4px; width: 88%; background: var(--line); border-radius: 2px; }
    .ui-panel code.lyric.short { width: 62%; }
    .tablet { position: absolute; left: 0; bottom: 22px; width: 156px; height: 206px; border: 8px solid #111; border-radius: 16px; background: var(--paper); overflow: hidden; box-shadow: 0 14px 30px rgba(0,0,0,.18); }
    .tab-body { padding: 10px 12px; }
    .tab-chips { display: flex; gap: 4px; margin-bottom: 10px; }
    .tab-chips i { padding: 2px 5px; border: 1px solid var(--line-strong); border-radius: 3px; font-family: var(--mono); font-size: 8px; font-style: normal; font-weight: 700; }
    .tab-chips i.on { background: var(--ink); border-color: var(--ink); color: var(--paper); }
    .tablet svg { display: block; width: 100%; }
    .phone { position: absolute; right: 6px; bottom: 22px; width: 96px; height: 190px; padding: 6px; border-radius: 20px; background: #111; box-shadow: 0 14px 30px rgba(0,0,0,.22); }
    .phone::before { content: ""; position: absolute; top: 10px; left: 50%; width: 26px; height: 6px; margin-left: -13px; border-radius: 4px; background: #111; z-index: 1; }
    .ph-body { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; height: 100%; background: var(--paper); border-radius: 15px; }
    .ph-bpm { font-family: var(--mono); font-size: 28px; font-weight: 700; line-height: 1; }
    .ph-tempo { font-size: 8px; font-style: italic; font-weight: 600; }
    .ph-start { display: grid; place-items: center; width: 62px; height: 18px; margin-top: 6px; border-radius: 4px; background: var(--ink); color: var(--paper); font-size: 8px; }
    .beats { display: flex; gap: 4px; }
    .beats i { width: 9px; height: 9px; border: 1.5px solid var(--ink); border-radius: 50%; animation: beat 2s steps(1) infinite; }
    .beats i:nth-child(2) { animation-delay: -1.5s; }
    .beats i:nth-child(3) { animation-delay: -1s; }
    .beats i:nth-child(4) { animation-delay: -.5s; }
    h1 { margin: 0 0 20px; text-wrap: balance; font-size: clamp(34px, 5.2vw, 56px); line-height: 1.12; letter-spacing: -0.03em; font-weight: 700; }
    html[lang="ja"] h1 { line-height: 1.32; letter-spacing: 0; font-size: clamp(28px, 4.2vw, 46px); }
    .lead { max-width: 600px; text-wrap: pretty; margin: 0 0 28px; color: var(--muted); font-size: 17px; line-height: 1.75; }
    .hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }

    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 42px; padding: 0 20px; border-radius: var(--radius); border: 1px solid var(--ink); background: var(--ink); color: var(--paper); font-size: 14px; font-weight: 600; text-decoration: none; white-space: nowrap; transition: background .15s, transform .1s; }
    .btn:hover { background: var(--press-hover); }
    .btn.ghost { background: var(--paper); color: var(--ink); border-color: var(--line-strong); }
    .btn.ghost:hover { background: var(--hover-fill); }
    .btn:active { transform: scale(.96); }
    .btn svg { width: 16px; height: 16px; }

    .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); font-size: 14px; font-weight: 600; }
    .panel-head .path { font-family: var(--mono); font-size: 12px; font-weight: 400; color: var(--subtle); }

    /* App cards */
    .section-head { display: flex; align-items: baseline; gap: 12px; margin: 0 0 16px; }
    h2 { margin: 0; font-size: 22px; letter-spacing: -0.01em; }
    .section-head .count { font-family: var(--mono); font-size: 13px; color: var(--subtle); }
    /* Any number of cards: as many columns as fit */
    .apps { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr)); gap: 20px; margin: 0 0 72px; padding: 0; list-style: none; }
    .card { display: flex; flex-direction: column; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--paper-shadow); overflow: hidden; transition: box-shadow .2s, transform .2s; }
    .card:hover { transform: translateY(-3px); box-shadow: 0 2px 6px rgba(0,0,0,.08), 0 16px 36px rgba(0,0,0,.10); }
    .card .panel-head { justify-content: flex-start; }
    .card .panel-head .tag { margin-left: auto; padding: 1px 8px; border: 1px solid var(--line-strong); border-radius: 999px; font-size: 12px; font-weight: 500; color: var(--muted); }
    .app-icon { width: 28px; height: 28px; flex: none; }
    .preview { display: grid; place-items: center; height: 188px; background: var(--canvas); background-image: radial-gradient(#dcdcdc 1px, transparent 1px); background-size: 16px 16px; border-bottom: 1px solid var(--line); text-decoration: none; }
    .card-body { display: flex; flex-direction: column; flex: 1; padding: 20px 20px 22px; }
    .card h3 { margin: 0 0 6px; font-size: 19px; letter-spacing: -0.01em; }
    .card h3 a { text-decoration: none; }
    .card h3 a:hover { text-decoration: underline; }
    .card .desc { margin: 0 0 14px; text-wrap: pretty; color: var(--muted); font-size: 14px; }
    .points { margin: 0 0 20px; padding: 0; list-style: none; font-size: 14px; }
    .points li { display: flex; gap: 10px; align-items: baseline; padding: 3px 0; }
    .points li::before { content: ""; flex: none; width: 6px; height: 6px; border-radius: 1.5px; background: var(--ink); transform: translateY(-2px); }
    .card .btn { margin-top: auto; width: 100%; }
    details.guides { margin-top: 14px; border-top: 1px solid var(--line); padding-top: 10px; font-size: 13px; }
    details.guides summary { display: flex; align-items: center; gap: 8px; cursor: pointer; list-style: none; color: var(--muted); padding: 4px 0; }
    details.guides summary::-webkit-details-marker { display: none; }
    details.guides summary::after { content: ""; margin-left: auto; width: 7px; height: 7px; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; transform: rotate(45deg) translateY(-2px); transition: transform .15s; }
    details.guides[open] summary::after { transform: rotate(225deg) translateY(-1px); }
    details.guides summary:hover { color: var(--ink); }
    details.guides summary .n { font-family: var(--mono); color: var(--subtle); }
    details.guides ul { margin: 4px 0 0; padding: 0; list-style: none; }
    details.guides li a { display: block; padding: 4px 0; text-decoration: none; }
    details.guides li a:hover { text-decoration: underline; }

    /* Previews (static, decorative) */
    .chip { display: inline-flex; align-items: center; height: 28px; padding: 0 10px; border: 1px solid var(--line-strong); border-radius: 6px; background: var(--paper); font-family: var(--mono); font-size: 13px; font-weight: 700; }
    .chip.on { background: var(--ink); border-color: var(--ink); color: var(--paper); }
    .pv-transpose { display: grid; gap: 8px; justify-items: center; }
    .pv-row { display: flex; align-items: center; gap: 6px; }
    .pv-key { margin-right: 4px; font-family: var(--mono); font-size: 11px; color: var(--subtle); }
    .pv-shift { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 12px; font-weight: 700; color: var(--muted); }
    .pv-shift::before, .pv-shift::after { content: ""; width: 1px; height: 10px; background: var(--line-strong); }
    .pv-shift span { padding: 1px 8px; border-radius: 999px; background: var(--paper); border: 1px solid var(--line-strong); }
    .pv-metro { display: grid; justify-items: center; }
    .pv-bpm { font-family: var(--mono); font-size: 54px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; }
    .pv-tempo { margin: 6px 0 12px; font-family: var(--mono); font-size: 11px; color: var(--muted); }
    .pv-tempo i { font-family: var(--sans); font-weight: 600; color: var(--ink); }
    .pv-beats { display: flex; gap: 8px; }
    .pv-beats span { display: grid; place-items: center; width: 30px; height: 30px; border: 1.5px solid var(--ink); border-radius: 50%; background: var(--paper); font-size: 12px; font-weight: 700; animation: beat 2s steps(1) infinite; }
    .pv-beats span:nth-child(2) { animation-delay: -1.5s; }
    .pv-beats span:nth-child(3) { animation-delay: -1s; }
    .pv-beats span:nth-child(4) { animation-delay: -.5s; }
    @keyframes beat { 0% { background: var(--ink); color: var(--paper); } 25% { background: var(--paper); color: var(--ink); } }
    .pv-finder { display: flex; align-items: center; gap: 14px; }
    .pv-diagram { width: 128px; height: auto; }
    .pv-finder svg text { fill: currentColor; }
    .pv-tunings { display: grid; gap: 6px; }
    .pv-player { display: grid; justify-items: center; gap: 12px; }
    .pv-sheet { width: 252px; max-width: 100%; height: auto; overflow: visible; }
    .pv-cursor { fill: var(--ink); opacity: .55; animation: play 4s linear infinite; }
    @keyframes play { 0% { transform: translateX(0); } 90%, 100% { transform: translateX(104px); } }
    .pv-controls { display: flex; gap: 6px; }
    .pv-loop { display: grid; justify-items: center; gap: 12px; }
    .pv-wave { width: 252px; max-width: 100%; height: auto; }
    .pv-loopcursor { fill: var(--ink); opacity: .55; animation: loop 3s linear infinite; }
    @keyframes loop { 0% { transform: translateX(0); } 100% { transform: translateX(66px); } }
    .pv-ladder { display: grid; justify-items: center; gap: 12px; }
    .pv-steps { width: 252px; max-width: 100%; height: auto; }
    .pv-steps g { fill: var(--paper); stroke: var(--ink); stroke-width: 1.4; animation: ladder 3.6s steps(1) infinite; }
    .pv-ladder .chip { animation: ladderchip 3.6s steps(1) infinite; }
    .pv-ladder .chip:last-child { animation: none; }
    /* Each key lights for a third of the cycle, its chip with it */
    .pv-steps .pv-key1, .pv-ladder .chip.pv-k1 { animation-delay: -2.4s; }
    .pv-steps .pv-key2, .pv-ladder .chip.pv-k2 { animation-delay: -1.2s; }
    @keyframes ladder { 0% { fill: var(--ink); } 33.3%, 100% { fill: var(--paper); } }
    @keyframes ladderchip { 0% { background: var(--ink); border-color: var(--ink); color: var(--paper); } 33.3%, 100% { background: var(--paper); border-color: var(--line-strong); color: var(--ink); } }

    /* Shared promises */
    .why { margin: 0 0 72px; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--paper-shadow); }
    .why .panel-head { padding: 14px 20px; }
    .why ul { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin: 0; padding: 0; list-style: none; }
    .why li { padding: 20px 20px 24px; border-left: 1px solid var(--line); }
    .why li:first-child { border-left: 0; }
    .why .num { display: block; margin-bottom: 10px; font-family: var(--mono); font-size: 12px; color: var(--subtle); }
    .why h3 { margin: 0 0 6px; font-size: 15px; }
    .why p { margin: 0; color: var(--muted); font-size: 13.5px; line-height: 1.7; }

    /* Footer */
    .site-foot { background: var(--paper); border-top: 1px solid var(--line); font-size: 14px; color: var(--muted); }
    .site-foot .wrap { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 24px; padding-top: 24px; padding-bottom: calc(28px + env(safe-area-inset-bottom)); }
    .site-foot .brand { color: var(--ink); font-size: 14px; }
    .site-foot .mark { width: 22px; height: 22px; }
    .site-foot nav { display: flex; flex-wrap: wrap; gap: 4px 20px; margin-left: auto; }
    .site-foot a { text-decoration: none; }
    .site-foot nav a:hover { color: var(--ink); text-decoration: underline; }

    @media (max-width: 960px) {
      .hero { display: block; padding: 48px 0 36px; }
      .devices { display: none; }
      .why ul { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .why li:nth-child(3) { border-left: 0; }
      .why li:nth-child(n+3) { border-top: 1px solid var(--line); }
    }
    @media (max-width: 560px) {
      body { font-size: 15px; }
      .hero { padding-top: 36px; }
      .lead { font-size: 16px; }
      .why ul { grid-template-columns: 1fr; }
      .why li { border-left: 0; border-top: 1px solid var(--line); }
      .why li:first-child { border-top: 0; }
      .site-foot nav { margin-left: 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .pv-beats span { animation: none; }
      .pv-cursor { animation: none; transform: translateX(32px); }
      .pv-loopcursor { animation: none; transform: translateX(30px); }
      .pv-steps g, .pv-ladder .chip { animation: none; }
      .pv-steps .pv-key0 { fill: var(--ink); }
      .pv-ladder .pv-k0 { background: var(--ink); border-color: var(--ink); color: var(--paper); }
      .pv-beats span:first-child { background: var(--ink); color: var(--paper); }
      .beats i { animation: none; }
      .beats i:first-child { background: var(--ink); }
      .card, .card:hover { transform: none; }
      .btn:active { transform: none; background: var(--press); }
    }`;

function card(lang, app) {
  // Every card shows what its app does; the app icon alone does not (it is already in the card's header)
  if (!PREVIEW[app.slug]) throw new Error(`scripts/pages/home.mjs: no PREVIEW for "${app.slug}". Add a small picture of the app's main screen.`);
  const t = app[lang];
  const ui = UI[lang];
  const href = appPath(lang, app.slug);
  const guides = (t.guides = t.guides || [])
    .map(([slug, label]) => `                <li><a href="${href}${slug}/">${escapeHtml(label)}</a></li>`)
    .join("\n");
  return `        <li class="card">
          <div class="panel-head">${icon(app.slug)}<span>${app.name}</span><span class="tag">${escapeHtml(t.tag)}</span></div>
          <a class="preview" href="${href}" tabindex="-1" aria-hidden="true">${PREVIEW[app.slug]}
          </a>
          <div class="card-body">
            <h3><a href="${href}">${app.name}</a></h3>
            <p class="desc">${escapeHtml(t.lead)}</p>
            <ul class="points">
${t.points.map((p) => `              <li>${escapeHtml(p)}</li>`).join("\n")}
            </ul>
            <a class="btn" href="${href}" aria-label="${escapeHtml(`${ui.open}: ${app.name}`)}">${ui.open}<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
${
  t.guides.length
    ? `            <details class="guides">
              <summary>${ui.guidesLabel} <span class="n">${t.guides.length}</span></summary>
              <ul>
${guides}
              </ul>
            </details>
`
    : ""
}          </div>
        </li>`;
}

export function renderHome(lang) {
  const ui = UI[lang];
  const url = ORIGIN + HOME_PATH[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ktkwmr",
    url,
    description: ui.description,
    inLanguage: lang,
    author: { "@type": "Person", name: "ktkwmr", url: "https://github.com/ktkwmr" },
    hasPart: APPS.map((a) => ({
      "@type": "WebApplication",
      name: a.name,
      url: ORIGIN + appPath(lang, a.slug),
      description: a[lang].lead,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  };

  return `<!DOCTYPE html>
<!-- Generated by scripts/build-pages.mjs from scripts/pages/home.mjs. Do not edit. -->
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="icon" type="image/svg+xml" href="/icon.svg" />
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
  <title>${escapeHtml(ui.title)}</title>
  <meta name="description" content="${escapeHtml(ui.description)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${ORIGIN}${HOME_PATH.en}" />
  <link rel="alternate" hreflang="ja" href="${ORIGIN}${HOME_PATH.ja}" />
  <link rel="alternate" hreflang="x-default" href="${ORIGIN}${HOME_PATH.en}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="ktkwmr" />
  <meta property="og:title" content="${escapeHtml(ui.title)}" />
  <meta property="og:description" content="${escapeHtml(ui.description)}" />
  <meta property="og:locale" content="${ui.locale}" />
  <meta property="og:locale:alternate" content="${UI[ui.other.lang].locale}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2).replace(/</g, "\\u003c").replace(/^/gm, "  ")}
  </script>${
    lang === "en"
      ? `
  <script>
    // Same rule as the apps: a browser whose first language is Japanese gets the Japanese page, unless ?lang=en
    (function () {
      var q = new URLSearchParams(location.search).get("lang");
      var first = (navigator.languages && navigator.languages[0]) || navigator.language || "";
      if (q === "ja" || (q !== "en" && /^ja\\b/i.test(first))) location.replace("/ja/");
    })();
  </script>`
      : ""
  }
  <style>${CSS}
  </style>
</head>
<body>
  <header class="site-head">
    <div class="wrap">
      <a class="brand" href="${HOME_PATH[lang]}">${MARK}<span>ktkwmr</span></a>
      <nav class="head-links" aria-label="${ui.nav}">
        <a href="${ui.other.href}" hreflang="${ui.other.lang}" lang="${ui.other.lang}">${ui.other.label}</a>
      </nav>
    </div>
  </header>
  <main class="wrap">
    <section class="hero">
      <div>
      <h1>${ui.heading}</h1>
      <p class="lead">${ui.lead}</p>
      <div class="hero-actions">
        <a class="btn" href="#apps">${ui.cta}<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
      </div>${DEVICES(ui.devices)}
    </section>

    <section aria-labelledby="apps">
      <div class="section-head"><h2 id="apps">${ui.appsTitle}</h2><span class="count">${String(APPS.length).padStart(2, "0")}</span></div>
      <ul class="apps">
${APPS.map((a) => card(lang, a)).join("\n")}
      </ul>
    </section>

    <section class="why" aria-labelledby="why-title">
      <div class="panel-head"><h2 id="why-title" style="font-size:15px">${ui.whyTitle}</h2></div>
      <ul>
${ui.why.map(([h, p], i) => `        <li><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${h}</h3><p>${p}</p></li>`).join("\n")}
      </ul>
    </section>
  </main>
  <footer class="site-foot">
    <div class="wrap">
      <a class="brand" href="${HOME_PATH[lang]}">${MARK}<span>ktkwmr</span></a>
      <span>${ui.footer}</span>
      <nav aria-label="${ui.nav}">
        <a href="https://github.com/ktkwmr" rel="noopener">${ui.source}</a>
        <a href="https://github.com/ktkwmr/ChordTransposer/issues" rel="noopener">${ui.feedback}</a>
      </nav>
    </div>
  </footer>
  <!-- Cloudflare Web Analytics (page views; no cookies) -->
  <script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${CF_TOKEN}"}'></script>
</body>
</html>
`;
}
