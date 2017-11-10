const path = require('path')

module.exports = {
  entry: './web/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /(node_modules)/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: {
    history: 'History',
    'prop-types': 'PropTypes',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
    'react-router-redux': 'ReactRouterRedux',
    redux: 'Redux',
    'redux-thunk': 'ReduxThunk'
  }
}
