const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssPresetEnv({stage: 3}),
        cssnano({
            preset: 'default'
        })
    ]
}