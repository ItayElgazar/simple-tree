import { TrainlogicChallengePage } from './app.po';

describe('trainlogic-challenge App', () => {
  let page: TrainlogicChallengePage;

  beforeEach(() => {
    page = new TrainlogicChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
