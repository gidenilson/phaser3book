# Tween

Tween é uma funcionalidade que permite criar "movimentos" para alterar dinamicamente as propriedades dos objetos. Existem várias equações que definem o comportamento do tween, onde cada uma delas descreve um padrão de movimento.

As equações disponíveis são:

Linear
Quad.easeIn, Cubic.easeIn, Quart.easeIn, Quint.easeIn, Sine.easeIn, Expo.easeIn, Circ.easeIn, Elastic.easeIn, Back.easeIn, Bounce.easeIn, Quad.easeOut, Cubic.easeOut, Quart.easeOut, Quint.easeOut, Sine.easeOut, Expo.easeOut, Circ.easeOut, Elastic.easeOut, Back.easeOut, Bounce.easeOut, Quad.easeInOut, Cubic.easeInOut, Quart.easeInOut, Quint.easeInOut, Sine.easeInOut, Expo.easeInOut, Circ.easeInOut, Elastic.easeInOut, Back.easeInOut, Bounce.easeInOut

Observe este exemplo:

```javascript
var config = {
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)
function preload() {
  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}
function create() {
  var amarelo = this.add.image(0, 80, 'peixes', 0)
  var verde = this.add.image(250, 80, 'peixes', 1)
  var rosa = this.add.image(400, 80, 'peixes', 2)
  //tween do peixe amarelo
  this.tweens.add({
    targets: amarelo,
    props: {
      x: {
        value: 700,
        duration: 4000,
        flipX: true
      }
    },
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: -1
  })
  //tween do peixe verde
  this.tweens.add({
    targets: verde,
    props: {
      y: {
        value: 500,
        duration: 4000
      }
    },
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: -1
  })
  //tween do peixe rosa
  this.tweens.add({
    targets: rosa,
    props: {
      x: {
        value: 700,
        duration: 4000,
        flipX: true
      },
      y: {
        value: 500,
        duration: 4000
      },
      scale: {
        value: 2,
        duration: 4000
      }
    },
    ease: 'Sine.easeInOut',
    yoyo: true,
    repeat: -1
  })
}
```
No peixe amarelo estamos alterando o propriedade x, no verde apenas a propriedade y e no rosa estamos alterando x, y e scale. Em todos os tweens estamos utilizando a equação ``Sine.easeInOut``. Experimente trocar por outras equações para observar a mudança do comportamento. Para ver outros exemplos visite a documentação e os exemplos no site do Phaser.

# Timeline

Timeline é um funcionalidade que permite que apliquemos vários tweens *consecutivos* em um objeto.

Vamos ao exemplo:

```javascript
var config = {
  scene: {
    preload: preload,
    create: create
  }
}

var game = new Phaser.Game(config)

function preload() {

  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}

function create() {
  var amarelo = this.add.image(0, 80, 'peixes', 0)
  var timeline = this.tweens.createTimeline()
  //tween em x
  timeline.add({
    targets: amarelo,
    props: {x: 600},
    ease: 'Linear',
    duration: 3000
  })
  //tween em y
  timeline.add({
    targets: amarelo,
    props: {y: 500},
    ease: 'Linear',
    duration: 3000
  })
  //tween em x
  timeline.add({
    targets: amarelo,
    props: {x: 100},
    ease: 'Linear',
    duration: 3000
  })
  //tween em y
  timeline.add({
    targets: amarelo,
    props: {y: 100},
    ease: 'Linear',
    duration: 3000
  })

  timeline.play();
}
```
Também podemos criar timelines nas outras propriedades...

```javascript
var config = {
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)
function preload() {
  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}
function create() {
  var verde = this.add.image(0, 200, 'peixes', 1)
  var timeline = this.tweens.createTimeline()
  //tween em x
  timeline.add({
    targets: verde,
    props: {
      x: 600
    },
    ease: 'Elastic.easeOut',
    duration: 3000
  })
  //tween em scale
  timeline.add({
    targets: verde,
    props: {
      scale: 2
    },
    ease: 'Linear',
    duration: 3000
  })
  //tween em rotation
  timeline.add({
    targets: verde,
    props: {
      rotation: 3
    },
    ease: 'Linear',
    duration: 3000
  })
  timeline.play();
}
```
Observe que no primeiro tween utilizamos a equação ``Elastic.easeOut``, o que causou um comportamento de **elástico**.
