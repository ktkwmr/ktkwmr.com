# ktkwmr.com（ドメイン直下）

https://ktkwmr.com/ のトップページ（アプリ一覧）と、ドメイン直下のファイル（`robots.txt`・`sitemap.xml`・ルートのアイコン・404）。アプリ本体はない。詳細は README.md。

## 共通ベースライン
- 共通項目は ktkwmr/webapp-baseline（非公開）の WEBAPP_BASELINE.md に従う（§2-15 トップページ、§2-16 アプリの追加、§5-10 sitemap）。セッションに無ければ add_repo で追加して読む。
- どのアプリにも当てはまる新しい作業・落とし穴が出てきたら、作業の最後にベースラインへの追記案を出す。

## このアプリの値
- ドメイン: `ktkwmr.com` / 言語: en（既定）+ ja（`/ja/`）
- Worker 名: `ktkwmr-home` / ルート: `ktkwmr.com/*`（各アプリの `ktkwmr.com/<slug>*` のほうが具体的なので、そちらが優先される）
- Cloudflare Web Analytics token: `5c53079cb9a64d819d1ca53e8533ca63`（全アプリ共通のサイト）
- 運営者: ktkwmr / 問い合わせ: 各アプリの GitHub Issues

## ルール
- 手で編集するのは `scripts/`、`public/robots.txt`・`404.html`・`_headers`・`_redirects`・`icon.svg`。生成ファイル（`public/index.html`・`public/ja/index.html`・`public/sitemap.xml`）は `node scripts/build.mjs` で作り直す（`--check` で確認）。`og-image.png`・`icons/` は `node scripts/render-images.mjs`。
- アプリ名はデータ（`home.mjs` の `APPS`・`ICON`）にだけ書く。ヘッダー・説明文・OGP 画像には書かない（アプリが増えても直さずに済むように）。
- アプリを足したら `APPS`・`ICON` と `robots.txt` の `Sitemap:` 行を同じ PR で足す。アプリのガイド記事・名前・説明・アイコンが変わったときも直す。
- このリポジトリはどのアプリにも依存しない（アプリのファイルを参照しない。アプリへのリンクだけ）。
- 作業はブランチ → PR → Cloudflare のプレビュービルド確認 → squash マージ。
- 本番サイト・Cloudflare 管理画面にはこの環境から届かないことが多い。確かめられなかったことは「未確認」と書き、ユーザーに確認手順を伝える。
