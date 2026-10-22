# WhatsApp Mobile Tests

Appium 3 + WebdriverIO + TypeScript + Mocha, Page Object pattern.

## Setup
1. Install Node, JDK 17, Android Studio (SDK + emulator)
2. `npm install`
3. Put the WhatsApp APK at `app/whatsapp.apk` (not included in the repo)
4. Start an Android emulator (`adb devices` should list it)

## Run
```bash
npx wdio run wdio.conf.ts --spec test/specs/registration.spec.ts
```
