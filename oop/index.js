import Bowman from './class/Bowman';
import Swordsman from './class/Swordsman';
import Magician from './class/Magician';
import Daemon from './class/Daemon';
import Undead from './class/Undead';
import Zombie from './class/Zombie';

const bowman = new Bowman('Bowman');
console.log(bowman);

const swordsman = new Swordsman('Swordsman');
console.log(swordsman);

const magician = new Magician('Magician');
console.log(magician);

const daemon = new Daemon('Daemon');
console.log(daemon);

const undead = new Undead('Undead');
console.log(undead);

const zombie = new Zombie('Zombie');
console.log(zombie);

console.log('---------------------------------');

bowman.damage(2);
console.log(bowman);

swordsman.damage(3);
console.log(swordsman);

console.log('---------------------------------');

bowman.levelUp();
console.log(bowman);

console.log('---------------------------------');

console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
