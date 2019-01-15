import { VivPage } from './app.po';

describe('viv App', function() {
  let page: VivPage;

  beforeEach(() => {
    page = new VivPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
