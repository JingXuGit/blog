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
            title: '李景旭的个人博客',//放要改的title名
        },
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