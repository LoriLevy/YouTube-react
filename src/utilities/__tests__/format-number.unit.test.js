import {formatNumberWithCommas} from '../format-number';

test('formatNumberWithCommas(0)', () => {
  expect(formatNumberWithCommas(0)).toEqual('0');
});

test('formatNumberWithCommas(9)', () => {
  expect(formatNumberWithCommas(9)).toEqual('9');
});

test('formatNumberWithCommas(52)', () => {
  expect(formatNumberWithCommas(52)).toEqual('52');
});

test('formatNumberWithCommas(456)', () => {
  expect(formatNumberWithCommas(456)).toEqual('456');
});

test('formatNumberWithCommas(1001)', () => {
  expect(formatNumberWithCommas(1001)).toEqual('1,001');
});

test('formatNumberWithCommas(1099)', () => {
  expect(formatNumberWithCommas(1099)).toEqual('1,099');
});

test('formatNumberWithCommas(5298)', () => {
  expect(formatNumberWithCommas(5298)).toEqual('5,298');
});

test('formatNumberWithCommas(10053)', () => {
  expect(formatNumberWithCommas(10053)).toEqual('10,053');
});

test('formatNumberWithCommas(100000)', () => {
  expect(formatNumberWithCommas(100000)).toEqual('100,000');
});

test('formatNumberWithCommas(1000000)', () => {
  expect(formatNumberWithCommas(1000000)).toEqual('1,000,000');
});

test('formatNumberWithCommas(23000000)', () => {
  expect(formatNumberWithCommas(23000000)).toEqual('23,000,000');
});

test('formatNumberWithCommas(1000000000)', () => {
  expect(formatNumberWithCommas(1000000000)).toEqual('1,000,000,000');
});
