# ベースイメージとして、Node.jsの公式イメージを使用
FROM node:16

# 作業ディレクトリを設定
WORKDIR /app

# パッケージをインストールする前に、パッケージ.jsonファイルをコピー
COPY package*.json ./

# パッケージをインストール
RUN yarn install

# プロジェクトのファイルをコピー
COPY . .

# ポート番号を設定
EXPOSE 1002

# コンテナが自動的に終了しないようにする
CMD ["tail", "-f", "/dev/null"]
