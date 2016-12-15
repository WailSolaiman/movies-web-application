import { MoviesWebApplicationPage } from './app.po';

describe('movies-web-application App', function() {
  let page: MoviesWebApplicationPage;

  beforeEach(() => {
    page = new MoviesWebApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
