const Boomerang = require("./Boomerang");
// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = 30;
    this.boomerang = new Boomerang();
    this.death = false;
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    setInterval(() => {
      this.position -= 1;
    }, 100);
  }

  die() {
    this.position = this.boomerang.position - 1;
    console.log("Enemy is dead!");
    this.skin = "💀";
    this.death = true;
  }
}

module.exports = Enemy;
