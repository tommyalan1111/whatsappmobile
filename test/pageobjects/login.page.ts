import BasePage from './base.page';

class LoginPage extends BasePage {
  // '~' = accessibility id
  private get emailInput()  { return '~email-input'; }
  private get passwordInput(){ return '~password-input'; }
  private get loginButton() { return '~login-button'; }
  private get errorMessage(){ return '~error-message'; }

  async login(email: string, password: string) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.tap(this.loginButton);
  }

  async getError() {
    return this.getText(this.errorMessage);
  }
}

export default new LoginPage();
