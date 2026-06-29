import Character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
  constructor() {
    this.character = new Character();
  }
}

export function readGameSaving() {
  const player = new Character();
  return player;
}

export function writeGameSaving() {
}
