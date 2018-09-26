// tslint:disable-next-line:no-empty
const mockNoop = () => new Promise(() => {});

export default {
  get: jest.fn(() => Promise.resolve({ data: { total_payout: 100.21 }})),
  default: mockNoop,
  post: mockNoop,
  put: mockNoop,
  delete: mockNoop,
  patch: mockNoop
};
