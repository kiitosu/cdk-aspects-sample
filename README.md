# 概要
CDkのエラーとAspectsによる解決のサンプルコードです。
以下の記事の動作確認コードのレポジトリです。
- https://zenn.dev/kiitosu/articles/2450062ffa6f8a

# 準備
npmをインストールしておきます

環境を作ります
```shell
npm install
```

cdkのディレクトリに移動
```shell
cd cdk
```

cdk deployします
```shell
../node_modules/aws-cdk/bin/cdk deploy --all
```

cdk diffします
```shell
../node_modules/aws-cdk/bin/cdk diff --all
```

cdk destroyします
```shell
../node_modules/aws-cdk/bin/cdk destroy --all
```