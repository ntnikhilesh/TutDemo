import { TutDemoPage } from './app.po';

describe('tut-demo App', () => {
  let page: TutDemoPage;

  beforeEach(() => {
    page = new TutDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
