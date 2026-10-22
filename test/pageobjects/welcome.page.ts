import BasePage from './base.page';

class WelcomePage extends BasePage {
    private get title() { return 'anddroid=new UiSelector().text("Welcome to WhatsApp")'; }
    private get agreeButton() {return 'id=com.whatsapp:id/eula_accept';}

    async isDisplayed() {
        const el = await $(this.agreeButton);
        await el.waitForDisplayed({timeout: 20000});
        return el.isDisplayed();
    }

    async agreeAndContinue() {
        await this.tap(this.agreeButton);
    }
}

export default new WelcomePage();