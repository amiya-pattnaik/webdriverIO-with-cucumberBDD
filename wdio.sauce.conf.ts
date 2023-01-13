import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
        services: ['sauce'],
        capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {
                build: `Build ${Math.ceil(Date.now() / 1000)}`
            }
        }]
    }
}
