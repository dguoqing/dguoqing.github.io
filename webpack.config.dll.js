const path = require('path')
const webpack = require('webpack')



module.exports = {
    mode: 'production',
    entry:{
        vendor:['react']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname, './dll'),
        library:'[name]_library'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]_library',
            path:path.resolve(__dirname, './dll', '[name]-manifest.json')
        })
    ]
}