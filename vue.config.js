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

      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Hartford Bound'
        return args
      })
  },
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/'
  // : '/hartford-housing/'
}