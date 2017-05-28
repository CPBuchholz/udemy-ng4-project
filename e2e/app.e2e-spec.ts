import { UdemyNg4ProjectPage } from './app.po';

describe('udemy-ng4-project App', () => {
  let page: UdemyNg4ProjectPage;

  beforeEach(() => {
    page = new UdemyNg4ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
