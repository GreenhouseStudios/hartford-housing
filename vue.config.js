module.exports = {
  lintOnSave: false,
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
  },
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/'
  // : '/hartford-housing/'
}