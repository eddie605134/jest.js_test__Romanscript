import { numberToSign, calculation, getAbs, signToNum } from '../Roman'


test('numberToSign input a number ,and return a string spelt by Roman script', ()=> {
  expect(numberToSign(1000)).toBe("M");
})

test('calculation input a number typeof string and its digit, it will return a Roman script', ()=> {
  expect(calculation(1, 1000)).toBe("M");
})

test('getAbs input two Roman script and get abs', ()=> {
  expect(getAbs("D", "C")).toBe(400);
})

test('signToNum input a Roman script and get it number', ()=> {
  expect(signToNum("CD")).toBe(400);
})