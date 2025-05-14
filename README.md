# 概要
CDkのエラーとAspectsによる解決のサンプルコードです。

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