import integration from './integration';
import integration1 from './integration';

// integration test 

test('properly return in console Hello Test', () => {
    expect(integration("Hello", "Test")).toEqual("Hello Test")
})

