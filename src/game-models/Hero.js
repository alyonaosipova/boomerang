// Наш герой.
const Boomerang = require('./Boomerang');

class Hero {
  constructor(boomerang) {
    this.skin = '😇';
    this.position = 0;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '🤮';
    console.log('HAPPY END! 🍻🍻🍻🍻🍻');
    // console.log(this.skin);
    process.exit();
  }
}

module.exports = Hero;
