// @ts-ignore
// @ts-ignore
import { Pact } from '@pact-foundation/pact';
import { getTotalPayout } from './LiquidityPool';

// const port = 12345;
const endpoint = '/frontoffice/api/liquidity-pool/get-total-payout';

const EXPECTED_BODY = {
  total_payout: 100.21,
};

const userId = 'foo';

describe('The API', () => {
  // Copy this block once per interaction under test
  describe('getUsersTotalPayout', () => {
    beforeEach(() => {
      const interaction = {
        uponReceiving: 'a GET request with a user id',
        withRequest: {
          method: 'GET',
          path: endpoint,
          headers: {
            Accept: 'application/json',
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          data: EXPECTED_BODY
        },
      };

      // @ts-ignore
      return provider.addInteraction(interaction);
    });
​
    // add expectations
    it('Should call getUsersTotalPayout and return an object with the total_payout', done => {
      getTotalPayout(userId)
        .then((response: any) => {
          console.log('response', response);
          console.log('EXPECTED_BODY', EXPECTED_BODY);
          expect(response).toEqual(EXPECTED_BODY);
        })
        .then(done);
    });
  });
});
