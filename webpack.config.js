const path = require('path');

module.exports = {
    entry:'./jax/main.jax',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: "main.js"
    },
    mode: "development",
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    Options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}