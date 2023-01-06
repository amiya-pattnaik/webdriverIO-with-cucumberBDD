const { config } = require('./wdio.shared.conf');

exports.config = {
    ...config,
    ...{
      //services: ['selenium-standalone'],

      services: [
          ['selenium-standalone', {
            // drivers: {
            //   firefox: '0.29.1',
              // chrome: true, chromiumedge: 'latest'
            // }
          }
        ]
      ],

      capabilities: [
          {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                //headless: true
            }
        },
        // {
        //   maxInstances: 5,
        //   browserName: 'firefox',
        //   "moz:firefoxOptions": {
        //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        //     //args: ['-headless']
        //   }
        // },

        // {
        //   maxInstances: 5,
        //   browserName: 'safari',
        // },

      ]
    }
}
