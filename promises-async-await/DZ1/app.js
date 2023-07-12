import GameSavingLoader from './class/GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  // ...
});
