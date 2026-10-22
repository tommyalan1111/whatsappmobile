import WelcomePage from '../pageobjects/welcome.page';
import PhonePage from '../pageobjects/phone.page';
import { expect } from '@wdio/globals';

describe('WhatsApp registration', () => {
  it('shows the welcome screen on first launch', async () => {
    expect(await WelcomePage.isDisplayed()).toBe(true);
  });

  it('moves to the phone number screen after agreeing', async () => {
    await WelcomePage.agreeAndContinue();
    expect(await PhonePage.isDisplayed()).toBe(true);
  });

  it('accepts a country code and phone number', async () => {
    await PhonePage.enterCountryCode('84');
    await PhonePage.enterPhoneNumber('912345678');
    await PhonePage.submit();
    // Stop here: WhatsApp now shows a confirmation dialog
  });
});