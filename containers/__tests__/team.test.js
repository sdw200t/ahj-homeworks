import Team from '../class/Team.js';
import Character from '../class/Character.js';

test('Добавление одного персонажа', () => {
  const unit = new Character('Bowman', 'Bowman');
  const team = new Team();
  const correct = new Team();
  team.add(unit);
  correct.add(unit);
  expect(team).toEqual(correct);
});

test('Добавление нескольких персонажей', () => {
  const unit = new Character('Bowman', 'Bowman');
  const unit1 = new Character('Swordsman', 'Swordsman');
  const unit2 = new Character('Magician', 'Magician');
  const unit3 = new Character('Daemon', 'Daemon');
  const team = new Team();
  team.addAll(unit, unit1, unit2, unit3);
  const correct = new Team();
  correct.addAll(unit, unit1, unit2, unit3);
  expect(team).toEqual(correct);
});

test('Преобразовать команду в массив', () => {
  const unit = new Character('Bowman', 'Bowman');
  const unit1 = new Character('Swordsman', 'Swordsman');
  const unit2 = new Character('Magician', 'Magician');
  const unit3 = new Character('Daemon', 'Daemon');
  const team = new Team();
  team.addAll(unit, unit1, unit2, unit3);
  const correct = new Team();
  correct.addAll(unit, unit1, unit2, unit3);
  expect(team.toArray()).toEqual(correct.toArray());
});
