import Daemon from '../class/Daemon';

test('Правильно создается объект', () => {
  const daemon = new Daemon('Daemon');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Daemon',
    type: 'Daemon',
  };

  expect(daemon).toEqual(correct);
});
