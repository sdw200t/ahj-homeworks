import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((data) => {
        json(data).then((value) => {
          resolve(value);
        });
      }); // возвращается Promise!
    });
  }
}
