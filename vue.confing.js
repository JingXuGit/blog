module.exports = {
    pwa: {
        //放要自己要改的png
        iconPaths: {
            favicon32: 'favicon.png',
            favicon16: 'favicon.png',
            appleTouchIcon: 'favicon.png',
            maskIcon: 'favicon.png',
            msTileImage: 'favicon.png'
        }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: '雪后燕瑶池,人间第一枝',//放要改的title名
        },
    },
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "雪后燕瑶池,人间第一枝";
                return args;
            })
    },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: '',//配置跨域
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": ""
    //             }
    //         },
    //     }
    // }
}