const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        //criando novos loaders para a aplicação
        rules: [
           {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
           },
           {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader'},
            ]
           },
           {
               //.* - pega independente do tamanho do nome da extensão
               //jpe?g - pega jpg ou jpeg (o "e" é opcional)
               //i - case insensitive (pega maiúscula ou minúscula)
            test: /.*\.(gif|png|jpe?g)$/i,
            use: {
                loader: 'file-loader',
            }
           }
        ]
    },
};