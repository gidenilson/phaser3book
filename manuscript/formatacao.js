var config = {
  scene: {
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)

function create() {
  this.pointer = this.input.activePointer
  this.text1 = this.add.text(10, 10, 'ponto do click:')
  this.text2 = this.add.text(10, 50, 'distância:')
  this.text3 = this.add.text(10, 100, 'ângulo em radianos:')
  this.input.on('pointerdown', (pointer) => {
    this.text1.setText(`ponto do click: ${pointer.x}, ${pointer.y}`)
  })
}

function update() {
  this.text2.setText(`distância: ${this.pointer.getDistance()}`)
  this.text3.setText(`ângulo em radianos: ${this.pointer.getAngle()}`)
}