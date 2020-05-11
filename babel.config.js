module.exports = {
    presets: [
        '@babel/preset-env', //ambiente em que está rodando a aplicação. Entende quais os itens que o browser não entende e converte. Pode até informar qual o browser que queremos que a aplicação rode.
        '@babel/preset-react' //adiciona funcionalidades do react. Podemos escrever HTML dentro do JS.
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};