var path = require('path');
var HTMLwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
  entry:APP_PATH,
  output:{
    path:BUILD_PATH,
    filename:'bundle.js'
  },
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    progress:true
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loaders: ["style","css"],
        include: APP_PATH
      },
      {
        test:/\.scss$/,
        loaders: ["style","css",'sass'],
        include: APP_PATH
      },
      {
        test:/\.(png|jpg)$/,
        loader:'"url',
        query:{
          limit:20000,
          mimetype:"image/png"
        }
      }
      // {
      //   test:/\.jsx?$/,
      //   loader:'babel-loader',
      //   include:APP_PATH,
      //   query:{
      //     presets:['es2015']
      //   }
      // },
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app")]
  },
  plugins:[
    new HTMLwebpackPlugin({
      title:'Hello World app'
    })
  ]
}
