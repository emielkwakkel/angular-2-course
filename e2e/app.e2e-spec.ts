import { NewCarPage } from './app.po';

describe('new-car App', function() {
  let page: NewCarPage;

  beforeEach(() => {
    page = new NewCarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
