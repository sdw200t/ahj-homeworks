import Character from '../class/Character';

test('Ошибка в имени', () => {
  expect(() => new Character('A', 'Bowman')).toThrow(new Error('Имя должно быть строкой от 2 до 10 символов'));
});

test('Ошибка указания типа', () => {
  expect(() => new Character('Bowman', 'Bow')).toThrow(new Error('Не найден тип существа. Возможные ваританты Bowman, Swordsman, Magician, Daemon, Undead, Zombie'));
});

test('Правильно создается объект', () => {
  const сharacter = new Character('Bowman', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Bowman',
    type: 'Bowman',
  };

  expect(сharacter).toEqual(correct);
});
