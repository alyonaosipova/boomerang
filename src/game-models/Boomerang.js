// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = "🌀";
    this.position = 1;
  }

  fly() {
    this.moveRight();
  }

  moveLeft() {
    setInterval(() => {
      this.position -= 1;
    }, 100);
  }

  moveRight() {
    setInterval(() => {
      this.position += 1;
    }, 100);
  }
}

module.exports = Boomerang;
