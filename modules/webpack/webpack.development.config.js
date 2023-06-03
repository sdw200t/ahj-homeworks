const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: '9000',
  },
};