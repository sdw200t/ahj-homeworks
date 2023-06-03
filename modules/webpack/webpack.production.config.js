const path = require('path');

module.exports = {
  mode: 'production',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },    
    port: '8000',
  },
};