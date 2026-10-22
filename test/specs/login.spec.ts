import LoginPage from '../pageobjects/login.page';
import { expect } from '@wdio/globals';

describe('Login', () => {
  it('shows an error for invalid credentials', async () => {
    await LoginPage.login('wrong@test.com', 'badpass');
    await expect(await LoginPage.getError()).toContain('Invalid');
  });
});
