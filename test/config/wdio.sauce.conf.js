const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
        services: ['sauce'],
        capabilities: [{
            maxInstances: 5,
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {
                build: `Build ${Math.ceil(Date.now() / 1000)}`
            }
        }]
    }
}
