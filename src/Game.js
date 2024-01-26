const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Boomerang = require('./game-models/Boomerang.js');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(this.boomerang); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(trackLength - 1);
    this.view = new View();
    this.track = [];
    // this.regenerateTrack();
  }

  regenerateTrack() {
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
      this.position += 1;
      this.skin = '🍻';
    }
  }

  checkBoomerang() {
    if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      this.position += 1;
      this.skin = '🍻';
    }
  }

  play() {
    setInterval(() => {
      runInteractiveConsole(this.hero);
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
      this.checkBoomerang();
    }, 300);
  }
}

module.exports = Game;
