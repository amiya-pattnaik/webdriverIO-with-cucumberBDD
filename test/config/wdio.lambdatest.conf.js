const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      logFile : './log/api.log',
      services: [
          ['lambdatest', {
              tunnel: true
          }]
      ],

        capabilities: [
          {
              maxInstances: 5,
              browserName: 'chrome',
              browserVersion: 'latest',
              platformName: 'Windows 10',
              'goog:chromeOptions': {
                  //headless: true
                  }
            },
        ]

    }
}
