import colorStatus from '../func/color';

test('colorStatus - healthy', () => {
  const obj = { name: 'Маг', health: 90 };
  const correct = 'healthy';
  const rez = colorStatus(obj);
  expect(rez).toEqual(correct);
});

test('colorStatus - wounded', () => {
  const obj = { name: 'Маг', health: 45 };
  const correct = 'wounded';
  const rez = colorStatus(obj);
  expect(rez).toEqual(correct);
});

test('colorStatus - critical', () => {
  const obj = { name: 'Маг', health: 10 };
  const correct = 'critical';
  const rez = colorStatus(obj);
  expect(rez).toEqual(correct);
});

test('colorStatus - error obj', () => {
  const obj = 25;
  const correct = 'error obj';
  const rez = colorStatus(obj);
  expect(rez).toEqual(correct);
});
