const env = require('./env-config')

module.exports = {
    presets: ['next/babel'],
    plugins: [
        [
            'transform-define',
            env,
        ],
        [
            'prismjs', {
                'languages': ['javascript', 'css', 'clike', 'jsx'],
                'plugins': ['line-numbers', 'show-language', 'copy-to-clipboard'],
                'theme': 'tomorrow',
                'css': true
            },
        ]
    ],
}