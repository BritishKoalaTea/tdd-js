// Global, one-time, setup and tear-down
beforeAll(() => {
    console.log('\nGlobal set-up, runs once before all the tests');
});
  
afterAll(() => {
    console.log('\nGlobal tear-down, runs once, after all the tests');
});

// Run before and after each individual test
beforeEach(() => {
    console.log('\nBefore each test');
});
  
afterEach(() => {
    console.log('After each test');
});

describe('Example for setup and teare down methods', () => {
    test('Illustrate what beforeAll, beforeEach, after Each, and afterAll do', () => {
        console.log('** First test')
        expect(true).toBeTruthy;
    });

    test('Second test for setup and tear down', () => {
        console.log('** Second test')
        expect(false).toBeFalsy;
    });

    test('Third test for setup and tear down', () => {
        console.log('** Third test')
        expect(true).toBeTruthy;
    });
});