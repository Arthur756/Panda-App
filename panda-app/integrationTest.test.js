import integration from './integration';
// integration test 

test('properly return in console Hello World', () => {
    expect(integration("Hello", "World")).toEqual("Hello World")
})

