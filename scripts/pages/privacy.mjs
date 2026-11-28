// The privacy policy for the whole domain (https://ktkwmr.com/privacy/ and /ja/privacy/): the top page, and what every
// app shares (Cloudflare, Web Analytics, and Google Analytics through Cloudflare Zaraz with the cookie banner).
// Each app also has its own policy, which says what the app itself does with your files; they are linked here.
// The cookie banner of Zaraz links to this page. Update the date at the end (制定日 / Effective) when the content changes.
import { ORIGIN, escapeHtml } from "./util.mjs";
import { CSS, MARK, CF_TOKEN, UI, APPS, HOME_PATH, PRIVACY_PATH, USAGE_TAGS } from "./home.mjs";

const CLOUDFLARE = "https://www.cloudflare.com/privacypolicy/";
const GOOGLE = "https://policies.google.com/privacy";
const GOOGLE_PARTNERS = "https://policies.google.com/technologies/partner-sites";

const T = {
  en: {
    title: "Privacy policy – ktkwmr",
    heading: "Privacy policy",
    description: "How the apps on ktkwmr.com handle information: your files stay on your device, Cloudflare hosting and page views without cookies, and Google Analytics only if you agree in the cookie banner.",
    body: () => `
<p class="lead">This policy covers https://ktkwmr.com/ (the list of apps) and what all the apps on ktkwmr.com have in common. Each app also has its own privacy policy, which explains what the app does with the files you open (see “Each app” below). In short: the music, charts, and recordings you use in the apps stay on your device.</p>

<h2 id="operator">1. Operator</h2>
<p>ktkwmr (an individual). Questions: <a href="https://github.com/ktkwmr/ktkwmr.com/issues" rel="noopener">GitHub Issues</a>.</p>

<h2 id="files">2. Your files</h2>
<p>The apps work inside your browser. The files you open, what you type, and what you record are processed on your device and are not uploaded. What an app saves in your browser (settings, recent songs) is listed in its own policy; you can remove it by clearing the site's data in your browser.</p>

<h2 id="external">3. Information sent outside</h2>
<div class="table-wrap">
  <table>
    <thead><tr><th scope="col">Service</th><th scope="col">When</th><th scope="col">Information sent</th><th scope="col">Purpose</th></tr></thead>
    <tbody>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare</a> (Cloudflare, Inc.)</th><td>Every page and file request</td><td>IP address, browser information (user agent), requested URL, date and time</td><td>Hosting the site, security, and access logs for operation</td></tr>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare Web Analytics</a> (Cloudflare, Inc.)</th><td>Every page view</td><td>IP address, browser information, the URL of the page, referrer, page load time. No cookies are used.</td><td>Counting page views</td></tr>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare Zaraz</a> (Cloudflare, Inc.)</th><td>Every page view, and when you use an app (such as tapping a button)</td><td>IP address, browser information, the URL of the page, referrer, and the usage events in section 5</td><td>Showing the cookie banner, and passing usage events on to Google Analytics only if you agree</td></tr>
      <tr><th scope="row"><a href="${GOOGLE}" rel="noopener">Google Analytics</a> (Google LLC)</th><td>Only if you choose “Accept all” in the cookie banner. Sent from Cloudflare's servers, not from your browser</td><td>A random ID for your browser, the URL of the page, referrer, browser information, approximate location from a shortened IP address, and the usage events in section 5</td><td>Understanding how the site is used, to improve it</td></tr>
    </tbody>
  </table>
</div>
<p>Some apps also download libraries or an AI model from other hosts (such as jsDelivr or Hugging Face). Each app's policy lists them. Your files are not sent with them.</p>

<h2 id="cookies">4. Cookies</h2>
<p>The site uses cookies only for analytics:</p>
<ul>
  <li><b>Your choice in the cookie banner</b> (set by Cloudflare Zaraz when you choose), so the banner is not shown again. One choice applies to every app on ktkwmr.com.</li>
  <li><b>A random ID for Google Analytics</b>, only if you choose “Accept all”, to count returning visits. It does not contain your name or other personal details.</li>
</ul>
<p>You can change your choice at any time from “Cookie settings” at the bottom of each page. There are no ads.</p>

<h2 id="analytics">5. Analytics</h2>
<p>Page views are counted with <b>Cloudflare Web Analytics</b>, without cookies and without tracking visitors across sites.</p>
<p>Only if you agree in the cookie banner, <b>Google Analytics</b> (through <b>Cloudflare Zaraz</b>) also records how the apps and guides are used, so we can improve them: the pages viewed and for how long, where you came from, the buttons and links tapped and the settings changed (by name, and for settings their value), how long sound was played, and the kind, length, number, and result of what an app did (such as “an MP3 file of 4 minutes, separated in 40 seconds”). Each app's policy lists exactly what it records.</p>
<p>File names, titles, the names you give to things, what you type, and the music, charts, and recordings themselves are never sent. The data goes to Google from Cloudflare's servers (your browser does not connect to Google), with the end of your IP address removed. Google signals and advertising features are turned off, and the data is kept for 14 months. See <a href="${GOOGLE_PARTNERS}" rel="noopener">how Google uses information from sites that use its services</a>. If you choose “Reject all”, or do not choose, nothing is sent to Google Analytics.</p>

<h2 id="apps">6. Each app</h2>
<ul>
${APPS.map((a) => `  <li><a href="/${a.slug}/privacy/">${escapeHtml(a.name)}</a></li>`).join("\n")}
</ul>

<h2 id="changes">7. Changes</h2>
<p>We may update this policy when the site changes. The updated policy applies from the time it is posted here.</p>
<p>Effective: November 28, 2026</p>
`,
  },
  ja: {
    title: "プライバシーポリシー – ktkwmr",
    heading: "プライバシーポリシー",
    description: "ktkwmr.com のアプリでの情報の取り扱い。ファイルは端末の外に出ないこと、Cloudflare での配信と Cookie を使わない閲覧数の集計、Cookie のバナーで同意した場合のみの Google アナリティクスについて。",
    body: () => `
<p class="lead">このポリシーは、https://ktkwmr.com/（アプリの一覧）と、ktkwmr.com のすべてのアプリに共通することについて説明します。各アプリにもそれぞれのプライバシーポリシーがあり、開いたファイルをアプリがどう扱うかはそちらに書いています（下の「各アプリ」）。要点は、アプリで使う曲・コード譜・録音は端末の外に出ないことです。</p>

<h2 id="operator">1. 運営者</h2>
<p>ktkwmr（個人）。お問い合わせは <a href="https://github.com/ktkwmr/ktkwmr.com/issues" rel="noopener">GitHub Issues</a> へ。</p>

<h2 id="files">2. あなたのファイル</h2>
<p>アプリはブラウザの中で動きます。開いたファイル、入力した内容、録音した音は端末の中で処理し、アップロードしません。アプリがブラウザに保存するもの（設定・最近の曲など）は各アプリのポリシーに書いています。ブラウザでこのサイトのデータを削除すると消えます。</p>

<h2 id="external">3. 外部への送信</h2>
<div class="table-wrap">
  <table>
    <thead><tr><th scope="col">送信先</th><th scope="col">タイミング</th><th scope="col">送信される情報</th><th scope="col">利用目的</th></tr></thead>
    <tbody>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare</a>（Cloudflare, Inc.）</th><td>すべてのページ・ファイルの読み込み時</td><td>IP アドレス、ブラウザの情報（ユーザーエージェント）、アクセスした URL、日時</td><td>サイトの配信、セキュリティの確保、運用のためのアクセスログ</td></tr>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare Web Analytics</a>（Cloudflare, Inc.）</th><td>ページを開いたとき</td><td>IP アドレス、ブラウザの情報、閲覧したページの URL、参照元、ページの表示速度。Cookie は使いません。</td><td>ページの閲覧数の集計</td></tr>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare Zaraz</a>（Cloudflare, Inc.）</th><td>ページを開いたとき、アプリを操作したとき（ボタンを押したときなど）</td><td>IP アドレス、ブラウザの情報、閲覧したページの URL、参照元、5. に書いた操作の情報</td><td>Cookie のバナーの表示と、同意した場合に限り Google アナリティクスへ操作の情報を渡すこと</td></tr>
      <tr><th scope="row"><a href="${GOOGLE}" rel="noopener">Google アナリティクス</a>（Google LLC）</th><td>Cookie のバナーで「すべて同意」を選んだ場合のみ。お使いのブラウザからではなく Cloudflare のサーバーから送信</td><td>ブラウザごとのランダムな ID、閲覧したページの URL、参照元、ブラウザの情報、末尾を削った IP アドレスから推定するおおよその地域、5. に書いた操作の情報</td><td>サイトの使われ方を知り、改善すること</td></tr>
    </tbody>
  </table>
</div>
<p>アプリによっては、ライブラリや AI モデルをほかのホスト（jsDelivr・Hugging Face など）からダウンロードします。各アプリのポリシーに書いています。ファイルの内容は送りません。</p>

<h2 id="cookies">4. Cookie</h2>
<p>アクセス解析のためだけに Cookie を使います。</p>
<ul>
  <li><b>Cookie のバナーでの選択：</b>選んだときに Cloudflare Zaraz が保存し、バナーを再び出さないようにします。1 回の選択が ktkwmr.com のすべてのアプリに効きます。</li>
  <li><b>Google アナリティクス用のランダムな ID：</b>「すべて同意」を選んだ場合のみ。再訪を数えるためのもので、氏名などの個人の情報は含みません。</li>
</ul>
<p>選択は、各ページの下にある「Cookie の設定」からいつでも変えられます。広告はありません。</p>

<h2 id="analytics">5. アクセス解析</h2>
<p>ページの閲覧数は <b>Cloudflare Web Analytics</b> で、Cookie を使わず、サイトをまたいだ追跡もせずに数えています。</p>
<p>また、Cookie のバナーで同意した場合に限り、アプリと記事の使われ方を知って改善するため、<b>Cloudflare Zaraz</b> を通じて <b>Google アナリティクス</b>で次の情報を記録します：見たページと開いていた時間、どこから来たか、押したボタンやリンク・変えた設定（名前と、設定はその値）、音を鳴らした時間、アプリがしたことの種類・長さ・数・結果（「4 分の MP3 ファイルを 40 秒で分離」など）。アプリごとに記録する内容は、各アプリのポリシーに書いています。</p>
<p>ファイル名・タイトル・あなたが付けた名前・入力した文字、曲・コード譜・録音そのものは送りません。データは Cloudflare のサーバーから IP アドレスの末尾を削って Google に送り、お使いのブラウザが Google に直接つながることはありません。Google シグナルと広告の機能は使わず、データの保持期間は 14 か月です。Google によるデータの使われ方は<a href="${GOOGLE_PARTNERS}" rel="noopener">Google のサービスを使用するサイトやアプリから収集した情報の Google による使用</a>をご覧ください。「すべて拒否」を選んだ場合や、選ばなかった場合は、Google アナリティクスには何も送られません。</p>

<h2 id="apps">6. 各アプリ</h2>
<ul>
${APPS.map((a) => `  <li><a href="/${a.slug}/ja/privacy/">${escapeHtml(a.name)}</a></li>`).join("\n")}
</ul>

<h2 id="changes">7. 改定</h2>
<p>サイトの変更に合わせて、本ポリシーを改定することがあります。改定後のポリシーは、このページに掲載した時点から適用されます。</p>
<p>制定日：2026 年 11 月 28 日</p>
`,
  },
};

const PAGE_CSS = `
    .doc { max-width: 760px; padding-top: 40px; padding-bottom: 64px; font-size: 15px; line-height: 1.8; }
    .doc h1 { font-size: clamp(28px, 4vw, 36px); margin-bottom: 16px; }
    .doc h2 { font-size: 18px; margin: 36px 0 8px; }
    .doc p, .doc ul { margin: 0 0 12px; }
    .doc .lead { color: var(--muted); }
    .doc a { color: inherit; }
    .table-wrap { overflow-x: auto; margin: 0 0 12px; }
    .doc table { border-collapse: collapse; font-size: 13px; line-height: 1.6; min-width: 640px; }
    .doc th, .doc td { border: 1px solid var(--line-strong); padding: 8px 10px; text-align: left; vertical-align: top; }
    .doc thead th { background: var(--hover-fill); }
`;

export function renderPrivacy(lang) {
  const ui = UI[lang], p = T[lang];
  const other = lang === "en" ? "ja" : "en";
  const url = ORIGIN + PRIVACY_PATH[lang];
  return `<!DOCTYPE html>
<!-- Generated by scripts/build.mjs from scripts/pages/privacy.mjs. Do not edit. -->
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="icon" type="image/svg+xml" href="/icon.svg" />
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
  <title>${escapeHtml(p.title)}</title>
  <meta name="description" content="${escapeHtml(p.description)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${ORIGIN}${PRIVACY_PATH.en}" />
  <link rel="alternate" hreflang="ja" href="${ORIGIN}${PRIVACY_PATH.ja}" />
  <link rel="alternate" hreflang="x-default" href="${ORIGIN}${PRIVACY_PATH.en}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="ktkwmr" />
  <meta property="og:title" content="${escapeHtml(p.title)}" />
  <meta property="og:description" content="${escapeHtml(p.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/og-image.png" />
  <style>${CSS}${PAGE_CSS}
  </style>
${USAGE_TAGS}
</head>
<body>
  <header class="site-head">
    <div class="wrap">
      <a class="brand" href="${HOME_PATH[lang]}">${MARK}<span>ktkwmr</span></a>
      <nav class="head-links" aria-label="${ui.nav}">
        <a href="${PRIVACY_PATH[other]}" hreflang="${other}" lang="${other}">${ui.other.label}</a>
      </nav>
    </div>
  </header>
  <main class="wrap doc">
    <h1>${p.heading}</h1>
${p.body()}
  </main>
  <footer class="site-foot">
    <div class="wrap">
      <a class="brand" href="${HOME_PATH[lang]}">${MARK}<span>ktkwmr</span></a>
      <span>${ui.footer}</span>
      <nav aria-label="${ui.nav}">
        <a href="${PRIVACY_PATH[lang]}" aria-current="page">${ui.privacy}</a>
        <a href="#" class="cookie-settings">${ui.cookies}</a>
        <a href="https://github.com/ktkwmr" rel="noopener">${ui.source}</a>
        <a href="https://github.com/ktkwmr/ktkwmr.com/issues" rel="noopener">${ui.feedback}</a>
      </nav>
    </div>
  </footer>
  <!-- Cloudflare Web Analytics (page views; no cookies) -->
  <script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${CF_TOKEN}"}'></script>
</body>
</html>
`;
}
