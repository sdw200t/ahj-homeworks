import Character from './class/Character.js';
import Team from './class/Team.js';
import ErrorRepository from './class/ErrorRepository.js';

const unit = new Character('Bowman', 'Bowman');
const unit1 = new Character('Swordsman', 'Swordsman');
const unit2 = new Character('Magician', 'Magician');
const unit3 = new Character('Daemon', 'Daemon');

const team = new Team();

team.add(unit);
console.log(team);

team.addAll(unit, unit1, unit2, unit3);
console.log(team);

console.log(team.toArray());

const err = new ErrorRepository();
console.log(err.translate(0));
console.log(err.translate(1));

console.log(err.translate(9));
