// vue.config.js
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    productionSourceMap: false,
    pwa: { iconPaths: { favicon32: 'favicon.ico', favicon16: 'favicon.ico', appleTouchIcon: 'favicon.ico', maskIcon: 'favicon.ico', msTileImage: 'favicon.ico' } },
    css: {
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        // loaderOptions: { css: {}, postcss: { plugins: [require('postcss-px2rem')({ remUnit: 100 })] } },
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '雪后燕瑶池,人间第一枝'
            return args
        })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {             // 为生产环境修改配置...
        } else {             // 为开发环境修改配置...
        }
    },
    devServer: {
        // 项目运行时候的端口号
        port: 4000
    }
}