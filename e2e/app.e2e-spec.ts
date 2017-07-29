import { LeosPorfolioPage } from './app.po';

describe('leos-porfolio App', () => {
  let page: LeosPorfolioPage;

  beforeEach(() => {
    page = new LeosPorfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
