module.exports = {
    ident: 'postcss',
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
        }),
        require('postcss-normalize')(),
        require('postcss-nested'),
    ],
    sourceMap: true,
}
