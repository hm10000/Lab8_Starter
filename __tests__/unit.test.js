// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Test for matches valid phone numbers
test('Checking phone number (858)-534-2230', () => {
    expect(functions.isPhoneNumber('(858)-534-2230')).toBe(true);
  });

test('Checking phone number (858)-534-8872 is valid', () => {
    expect(functions.isPhoneNumber('(858)-534-8872')).toBe(true);
});

test('Checking phone number 77777-777-777 is not valid', () => {
    expect(functions.isPhoneNumber('77777-777-777')).toBe(false);
  });

test('Checking phone number 1-111111-11 is not valid', () => {
    expect(functions.isPhoneNumber('1-111111-11')).toBe(false);
});

//Test for matches valid emails
test('Checking email hmlim@ucsd.edu is valid', () => {
    expect(functions.isEmail('hmlim@ucsd.edu')).toBe(true);
  });

test('Checking email hmbest@gmail.com is valid', () => {
    expect(functions.isEmail('hmbest@gmail.com')).toBe(true);
});

test('Checking email IloveUCSD is not valid', () => {
    expect(functions.isEmail('IloveUCSD')).toBe(false);
  });

test('Checking email hmbest@gmail.commm is not valid', () => {
    expect(functions.isEmail('hmbest@gmail.commm')).toBe(false);
});

//Test for strongPassword
test('Checking password Hello is valid', () => {
    expect(functions.isStrongPassword('Hello')).toBe(true);
  });

test('Checking password ILikeBurger is valid', () => {
    expect(functions.isStrongPassword('ILikeBurger')).toBe(true);
});

test('Checking password Hi is not valid', () => {
    expect(functions.isStrongPassword('Hi')).toBe(false);
  });

test('Checking password Bro is not valid', () => {
    expect(functions.isStrongPassword('Bro')).toBe(false);
});

//Test for Date
test('Checking date 10/1/2020 is valid', () => {
    expect(functions.isDate('10/1/2020')).toBe(true);
  });

test('Checking date 12/25/2022 is valid', () => {
    expect(functions.isDate('12/25/2022')).toBe(true);
});

test('Checking date 111/11/2000 is not valid', () => {
    expect(functions.isDate('111/11/2000')).toBe(false);
  });

test('Checking date 123/123/123 is not valid', () => {
    expect(functions.isDate('123/123/123')).toBe(false);
});

//Test for hex codes
test('Checking hex code FF5733 is valid', () => {
    expect(functions.isHexColor('FF5733')).toBe(true);
  });

test('Checking hex code CEE95D is valid', () => {
    expect(functions.isHexColor('CEE95D')).toBe(true);
});

test('Checking hex code 11111111 is not valid', () => {
    expect(functions.isHexColor('11111111')).toBe(false);
  });

test('Checking hex code 77777777 is not valid', () => {
    expect(functions.isHexColor('77777777')).toBe(false);
});