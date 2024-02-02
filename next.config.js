const path = require('path')

module.exports = {
    trailingSlash: true
    optimizeFonts: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}