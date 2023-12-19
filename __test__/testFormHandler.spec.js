// Import the js file to test
import { handleFetch } from "../src/client/js/formHandler"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        score_tag: 'positive',
        subjectivity: 'subjective'
      })
  })
);

global.document = {
  getElementById: jest.fn(() => ({
    innerHTML: ''
  }))
};

describe('handleFetch', () => {
  beforeEach(jest.clearAllMocks);

  test('fetching and updating HTML elements', async () => {
    await handleFetch();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8050/test');
  });
});
