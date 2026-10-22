export default class BasePage {
  async tap(selector: string) {
    const el = await $(selector);
    await el.waitForDisplayed();
    await el.click();
  }

  async type(selector: string, text: string) {
    const el = await $(selector);
    await el.waitForDisplayed();
    await el.setValue(text);
  }

  async getText(selector: string) {
    const el = await $(selector);
    await el.waitForDisplayed();
    return el.getText();
  }
}
