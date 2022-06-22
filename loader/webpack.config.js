const path = require('path');
console.log(__dirname);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // loader: 'loader1',
        // use: [
        //   'loader1',
        //   'loader2',
        //   {
        //     loader: 'loader3',
        //     options: {
        //       name: 'jack'
        //     }
        //   }
        // ]
        loader: 'babelLoader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },

  resolveLoader: {
    modules: [ 
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ],
  }
}