export default class Character {
  constructor(name, type) {
    const arrType = [
      {
        typeName: 'bowman',
        attack: 25,
        defence: 25,
      },
      {
        typeName: 'swordsman',
        attack: 40,
        defence: 10,
      },
      {
        typeName: 'magician',
        attack: 10,
        defence: 40,
      },
      {
        typeName: 'daemon',
        attack: 25,
        defence: 25,
      },
      {
        typeName: 'undead',
        attack: 40,
        defence: 10,
      },
      {
        typeName: 'zombie',
        attack: 10,
        defence: 40,
      },
    ];
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }
    const typeСreature = arrType.find((element) => element.typeName === type.toLowerCase());
    if (typeof typeСreature === 'undefined') {
      throw new Error('Не найден тип существа. Возможные ваританты Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = typeСreature.attack;
    this.defence = typeСreature.defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Персонаж мертв, нельзя повысить уровень');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж уже мертв');
    }
  }
}
