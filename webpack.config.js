module.exports = {
  // The absolute path to your project
  context: __dirname + "/src/main/webapp/public",
  // the entry point for our app
  entry: './app.js',
  // where to put the compiled output (what our script tag will link to)
  output: {
    // where does it go?
    path: __dirname + "/src/main/webapp/public",
    // what is the file called?
    filename: 'bundle.js'
  },
  // how can we debug our bundle? for production, we can use 'source-map'
  devtool: 'eval',
  module: {
    rules: [{
      //Check for all js files
      test: /\.js$/,
      // Don't include node_modules directory in the search for js files
      exclude: /node_modules/,
      // Use the babel-loader plugin to transpile the javascript
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    },
    {test: /\.css$/, loader: 'style-loader!css-loader'},
    {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  }
};