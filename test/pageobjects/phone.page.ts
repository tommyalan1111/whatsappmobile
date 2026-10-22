import BasePage from './base.page';

class PhonePage extends BasePage {
    private get title()        { return 'id=com.whatsapp:id/register_phone_toolbar_title'; }
    private get countryDrop()  { return 'id=com.whatsapp:id/registration_country'; }
    private get countryCode()  { return 'id=com.whatsapp:id/registration_cc'; }
    private get phoneInput()   { return 'id=com.whatsapp:id/registration_phone'; }
    private get nextButton()   { return 'id=com.whatsapp:id/button_view'; }

    async isDisplayed() {
        const el = await $(this.title);
        await el.waitForDisplayed();
        return el.isDisplayed();
    }

    async enterCountryCode(code: string) {
        await this.type(this.countryCode, code);
    }

    async enterPhoneNumber(number: string) {
        await this.type(this.phoneInput, number);
    }

    async submit() {
        await this.tap(this.nextButton);
    }
}

export default new PhonePage();