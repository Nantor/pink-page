import { PinkPagePage } from './app.po';

describe('pink-page App', () => {
  let page: PinkPagePage;

  beforeEach(() => {
    page = new PinkPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
