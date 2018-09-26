jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // This is to give the pact mock server time to start
​
// @ts-ignore
beforeAll(() => provider.setup()); // Create mock provider
// @ts-ignore
afterEach(() => provider.verify()); // Ensure the mock provider verifies expected interactions for each test
// @ts-ignore
afterAll(() => provider.finalize()); // Tear down the mock and write the pact
