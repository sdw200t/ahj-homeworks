import Bowman from '../class/Bowman';

test('Правильно создается объект', () => {
  const bowman = new Bowman('Bowman');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bowman',
    type: 'Bowman',
  };

  expect(bowman).toEqual(correct);
});

test('test levelUp', () => {
  const bowman = new Bowman('Bowman');
  bowman.levelUp();
  const correct = {
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'Bowman',
    type: 'Bowman',
  };
  expect(bowman).toEqual(correct);
});

test('test levelUp health 0', () => {
  expect(() => {
    const bowman = new Bowman('Bowman');
    bowman.health = 0;
    bowman.levelUp();
  }).toThrow(new Error('Персонаж мертв, нельзя повысить уровень'));
});

test('test damage', () => {
  const bowman = new Bowman('Bowman');
  bowman.damage(10);
  const correct = {
    attack: 25,
    defence: 25,
    health: 92.5,
    level: 1,
    name: 'Bowman',
    type: 'Bowman',
  };
  expect(bowman).toEqual(correct);
});

test('test damage health 0', () => {
  expect(() => {
    const bowman = new Bowman('Bowman');
    bowman.health = 0;
    bowman.damage(10);
  }).toThrow(new Error('Персонаж уже мертв'));
});
