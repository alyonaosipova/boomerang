const Boomerang = require('./Boomerang');
// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    // this.skin = skin;
    this.position = position;
  }

  generateSkin() {
    const skins = ['🐸', '😛', '😑', '🤕'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.skin = '🤢';
    console.log('Enemy is drunk!🤮');
    // process.exit();
  }
}

module.exports = Enemy;
