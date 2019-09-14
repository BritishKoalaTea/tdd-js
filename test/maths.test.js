const maths = require('../maths.js');

describe('mathematics addition and multiplication tests', () => {
  test('should add 1 + 2 to equal 3', () => {
    expect(maths.add(1, 2)).toBe(3);
  });
  
   test('should add two numbers correctly', () => {
    expect(maths.add(5, 13)).toBe(18);
    expect(maths.add(10, -2)).toBe(8);
  });
  
  test('should multiply 7 x 9 and get 63', () => {
    expect(maths.multiply(7, 9)).toBe(63);
  });
  
    test('should multiply two numbers correctly', () => {
    expect(maths.multiply(-2, 5)).toBe(-10);
    expect(maths.multiply(6, 3.1415927)).toBe(18.8495562);
  });
});

describe('mathematics powers tests', () => {

  test('should square a number', () => {
    expect(maths.square(3)).toEqual(9);
    expect(maths.square(9)).toEqual(81);
    expect(maths.square(81)).toEqual(6561);
  });

  test('should cube a number', () => {
    expect(maths.cube(2)).toEqual(8);
    expect(maths.cube(3)).toEqual(27);
    expect(maths.cube(4)).toEqual(64);
    expect(maths.cube(5)).toEqual(125);
  });
});
