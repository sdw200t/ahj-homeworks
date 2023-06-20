class Character {
  constructor(name, type) {
    const arrType = [
      {
        typeName: 'bowerman',
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
      console.log('Персонаж мертв, нельзя повысить уровень');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      console.log('Персонаж уже мертв');
    }
  }
}

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

const hero = new Bowerman('goblin', 'Bowerman');
console.log(hero);

const hero1 = new Swordsman('hero1', 'Swordsman');
console.log(hero1);

const hero2 = new Magician('hero2', 'Magician');
console.log(hero2);

const hero3 = new Daemon('hero3', 'Daemon');
console.log(hero3);

const hero4 = new Undead('hero4', 'Undead');
console.log(hero4);

const hero5 = new Zombie('hero5', 'Zombie');
console.log(hero5);

console.log('---------------------------------');

hero.damage(2);
console.log(hero);

hero1.damage(3);
console.log(hero1);

console.log('---------------------------------');

hero.levelUp();
console.log(hero);

console.log('---------------------------------');

console.log(hero1);
console.log(hero2);
console.log(hero3);
console.log(hero4);
console.log(hero5);
