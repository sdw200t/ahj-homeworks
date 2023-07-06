import getOrderedProps from '../func/matchers';

test('getOrderedProps', () => {
  const obj = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const correct = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const sortObj = getOrderedProps(obj);
  expect(sortObj).toEqual(correct);
});
