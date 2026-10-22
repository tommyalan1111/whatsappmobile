import path from 'path';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,

  capabilities: [{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:app': path.join(process.cwd(), 'app', 'whatsapp.apk'),
  'appium:appPackage': 'com.whatsapp',
  'appium:appActivity': 'com.whatsapp.Main',
  'appium:appWaitActivity': 'com.whatsapp.registration.app.EULA,com.whatsapp.Main,*',
  'appium:autoGrantPermissions': true,
}],

  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: { ui: 'bdd', timeout: 60000 },
  waitforTimeout: 10000,
};
