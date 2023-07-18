import Character from './class/Character.js';
import Team from './class/Team_iter.js';

const unit = new Character('Bowman', 'Bowman');
const unit1 = new Character('Swordsman', 'Swordsman');
const unit2 = new Character('Magician', 'Magician');
const unit3 = new Character('Daemon', 'Daemon');
const unit4 = new Character('Undead', 'Undead');

const team = new Team();

team.addAll(unit, unit1, unit2, unit3, unit4);

team[Symbol.iterator] = function () {
  let i = -1;
  const arr = this.toArray();
  return {
    next() {
      if (i < arr.length - 1) {
        i++;
        return {
          value: arr[i],
          done: false,
        };
      }
      return {
        done: true,
      };
    },
  };
};

for (const item of team) {
  console.log(item);
}
