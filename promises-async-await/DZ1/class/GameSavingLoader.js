import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js'

export default class GameSavingLoader {
  static load() {
    return read()
      .then(data => json(data))
      .then(textJSON => JSON.parse(textJSON))
      .then(objJSON => new GameSaving(objJSON))
  }; 
}
