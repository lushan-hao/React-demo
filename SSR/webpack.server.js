const Path = require('path');

module.exports = {
    target: 'node',   //服务端代码   
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')              //__dirname放在文件根目录下
    },
    module: {
        rules:[{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: '/node_modules',
            options: {                           //一些额外的功能
                presets : ['react', 'stage-0', ['env', {     //兼容react的 所有es语法都可以
                    targets: {
                        browsers : ['last 2 versions']    //兼容之前的两个版本
                    }
                }]]  
            }
        }]
    }
}