import ErrorRepository from '../class/ErrorRepository.js';

test('Ошибка есть в списке', () => {
  const err = new ErrorRepository();
  const correct = 'ошибка 0';
  expect(err.translate(0)).toEqual(correct);
});

test('Ошибки нет в списке', () => {
  const err = new ErrorRepository();
  const correct = 'Unknown error';
  expect(err.translate(9)).toEqual(correct);
});
