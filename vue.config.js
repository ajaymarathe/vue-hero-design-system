module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/slateblue-ui/'
    : '/',
    // chainWebpack: config => {
    //     config.plugin('optimize-css').tap(([options]) => {
    //         options.cssnanoOptions.preset[1].svgo = false
    //         return [options]
    //     })
    // },
}
