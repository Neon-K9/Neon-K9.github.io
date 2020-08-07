module.exports = {
  watch: true,
  mode: "production",
  entry: {
    index: "./src/js/entry/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + '/asset/js'
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  }
}