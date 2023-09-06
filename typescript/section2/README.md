# TypeScript

## 準備

1. 初期化

   `package.json`の生成。

   ```bash
   npm init -y
   ```

2. typescript のインストール

   node_modules と package.json に依存関係が生成される。

   ```bash
   npm install typescript --save-dev
   ```

3. バージョン確認

   ```bash
   tsc -v
   ```

4. tsconfig.json の雛形作成

   ```bash
   tsc -init
   ```

   雛形は microsoft 提供のものもある。
   [GitHub](https://github.com/microsoft/TypeScript-Node-Starter/blob/master/tsconfig.json)から取得。

5. 開発用のディレクトリ作成

   `tsconfig.json`の include で指定されたディレクトリを作成する。

   ```json: tsconfig.json
   "include": ["src/**/*"]
   ```

   ```bash
   mkdir src
   ```

6. コンパイル用のディレクトリ作成

   `tsconfig.json`の outDir で指定されたディレクトリを作成する。

   ```json: tsconfig.json
   "outDir": "dist"
   ```

   ```bash
   mkdir dist
   ```

7. tsconfig に除外対象を追加

   ```json: tsconfig.json
   "exclude": ["node_modules", "dist"]
   ```

8. package.json にトランスパイル追加

   ```json: package.json
   "scripts": {
      "build": "tsc",
      "watch": "tsc --watch",
   },
   ```

9. html ファイル生成

   ```bash
   touch dist/index.html
   ```

## 実行-パターン 1

1. 実行ファイル生成

   ```bash
   touch src/app.ts
   ```

2. トランスパイル

   ```bash
   npm run build
   ```

3. 監視モードで実行

   ```bash
   npm run watch
   ```

4. ファイル実行

   ```bash
   node dist/app.ts
   ```

## 実行-パターン 2

1. 実行ファイル生成

   ```bash
   touch src/app.ts
   ```

2. ファイル実行

   ```bash
   ts-node src/app.ts
   ```

## 実行-パターン 3

1. [実行-パターン 1](#実行-パターン-1)を行う

2. `dist/index.html`に`dist/app.js`を指定

   - ! + タブ補完で雛形生成しておく。

   ```html: index.html
   <body>
    <script src="./app.js"></script>
   </body>
   ```

3. Live Server を起動

   - `Alt + L` + `Alt + O`

4. `src/app.ts`を変更
   - ホットリロードを確認する。
