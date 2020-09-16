const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      host: '0.0.0.0',
      port: 4723,
      //path: '/wd/hub',
      services: [
        ['appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                // For arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
            },
        ],
      ],

      // For iOS bases mobile device
      capabilities: [{
          appiumVersion: '1.6.5',
          automationName: 'XCUITest',
          platformName: 'iOS',
          //platformVersion: '9.0',
          deviceName: 'iPhone Simulator',
          //deviceName: 'iPhone 6s',
          browserName: 'Safari',
          //orientation: 'PORTRAIT',
          //nativeInstrumentsLib: true,
          //isolateSimDevice: true,
          clearSystemFiles: true,
          //commandTimeout: '7200',
          //app: APP_PATH
      }],

        // // For Android bases mobile device
        // capabilities: [{
        //     appiumVersion: '1.6.5',
        //     automationName: 'Appium',
        //     platformName: 'Android',
        //     //platformVersion: '9.0',
        //     deviceName: 'Android Emulator',
        //     //deviceName: 'iPhone 6s',
        //     browserName: 'chrome',
        //     // chromeOptions: {
        //     //   androidPackage: 'com.android.chrome',
        //     // },
        //     //setDebugApp: '--persistent com.android.chrome',
        //     chromeOptions: {args: ['--no-managed-user-acknowledgment-check', '--no-user-gesture-required', '--oobe-force-show-screen ⊗']},
        //     //orientation: 'PORTRAIT',
        //     //nativeInstrumentsLib: true,
        //     //isolateSimDevice: true,
        //     //clearSystemFiles: true,
        //     //app: APP_PATH
        //     commandTimeout: '7200',
        //     noReset: false,
        //     //show_on_first_run_allowed: false,
        //     dontStopAppOnReset: false,
        //     show_on_first_run_allowed : false,
        //     show_welcome_page: false,
        //     appActivity: '.MainActivity',
        //     appWaitActivity: 'SplashActivity',
        //     noSign: true,
        //     // intentCategory: 'android.intent.category.APP_CONTACTS',
        //     // intentAction: 'android.intent.action.MAIN',
        // }],
    }
};
