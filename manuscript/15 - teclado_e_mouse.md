# Teclado e mouse

O Phaser tem muitos recursos par trabalhar com teclado e mouse. Neste curso não vamos focar nas funcionalidades básicas para utilizar-mos nos jogos que iremos programar. Mas uma vez fica a recomendação de que você pesquise os exemplos do Phaser para aprender sobre todos os recursos de entrada de teclado e mouse.

## Teclado

É muito simples capturar uma tecla pressionada com o Phaser.

```javascript
var config = {
  type: Phaser.AUTO,
  scene: {
    create: create
  }
}
var game = new Phaser.Game(config)
function create() {
  this.input.keyboard.on('keydown', function(event) {
    console.dir(event.key)
  })
}
```
Com este código nós capturamos qualquer tecla pressionada e imprimimos o valor no console de desenvolvimento do browser.

Mas e se quisermos saber se uma tecla específica foi pressionada dentre outras acionadas simultaneamente, precisamos fazer de outra forma. Vamos por exemplo querer saber quais as setas do teclado estão pressionadas. Neste caso precisaremos "escutar" essas teclas individualmente. Felizmente o Phaser já traz uma funcionalidade específica para trabalhar com as setas do teclado, que é chamada de "cursor".

Com o código seguinte imprimiremos no console a identificação das setas do teclado. Este será um recurso que utilizaremos bastante.

```javascript
var config = {
  type: Phaser.AUTO,
  scene: {
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)
function create() {
  cursors = this.input.keyboard.createCursorKeys()
}
function update() {
  if (cursors.left.isDown) {
    console.log('esquerda')
  } else if (cursors.right.isDown) {
    console.log('direita')
  }
  if (cursors.up.isDown) {
    console.log('cima')
  } else if (cursors.down.isDown) {
    console.log('baixo')
  }
}
```

Uma outra forma de capturar o teclado é criando um objeto `key` para uma tecla específica e testando o acionamento da mesma no método update ou em um callback. No exemplo a seguir vemos como isso pode ser feito:

```javascript
var config = {
  type: Phaser.AUTO,
  scene: {
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)
function create() {
  keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
}
function update() {
  if (keyA.isDown) {
    console.log('A')
  }
}
```
Uma coisa interessante nesta forma de capturar o teclado é que as teclas são capturadas independentemente de estarem com o capslook, shift ou tab pressionados.

Observe que devemos passar como parâmetro do método ``this.input.keyboard.addKey()`` um valor de uma constante declarada no código do Phaser. A seguir temos uma relação de todas essas constantes:

```
Phaser.Input.Keyboard.KeyCodes.BACKSPACE
Phaser.Input.Keyboard.KeyCodes.TAB
Phaser.Input.Keyboard.KeyCodes.ENTER
Phaser.Input.Keyboard.KeyCodes.SHIFT
Phaser.Input.Keyboard.KeyCodes.CTRL
Phaser.Input.Keyboard.KeyCodes.ALT
Phaser.Input.Keyboard.KeyCodes.PAUSE
Phaser.Input.Keyboard.KeyCodes.CAPS_LOCK
Phaser.Input.Keyboard.KeyCodes.ESC
Phaser.Input.Keyboard.KeyCodes.SPACE
Phaser.Input.Keyboard.KeyCodes.PAGE_UP
Phaser.Input.Keyboard.KeyCodes.PAGE_DOWN
Phaser.Input.Keyboard.KeyCodes.END
Phaser.Input.Keyboard.KeyCodes.HOME
Phaser.Input.Keyboard.KeyCodes.LEFT
Phaser.Input.Keyboard.KeyCodes.UP
Phaser.Input.Keyboard.KeyCodes.RIGHT
Phaser.Input.Keyboard.KeyCodes.DOWN
Phaser.Input.Keyboard.KeyCodes.PRINT_SCREEN
Phaser.Input.Keyboard.KeyCodes.INSERT
Phaser.Input.Keyboard.KeyCodes.DELETE
Phaser.Input.Keyboard.KeyCodes.ZERO
Phaser.Input.Keyboard.KeyCodes.ONE
Phaser.Input.Keyboard.KeyCodes.TWO
Phaser.Input.Keyboard.KeyCodes.THREE
Phaser.Input.Keyboard.KeyCodes.FOUR
Phaser.Input.Keyboard.KeyCodes.FIVE
Phaser.Input.Keyboard.KeyCodes.SIX
Phaser.Input.Keyboard.KeyCodes.SEVEN
Phaser.Input.Keyboard.KeyCodes.EIGHT
Phaser.Input.Keyboard.KeyCodes.NINE
Phaser.Input.Keyboard.KeyCodes.NUMPAD_ZERO
Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE
Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO
Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE
Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR
Phaser.Input.Keyboard.KeyCodes.NUMPAD_FIVE
Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX
Phaser.Input.Keyboard.KeyCodes.NUMPAD_SEVEN
Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT
Phaser.Input.Keyboard.KeyCodes.NUMPAD_NINE
Phaser.Input.Keyboard.KeyCodes.A
Phaser.Input.Keyboard.KeyCodes.B
Phaser.Input.Keyboard.KeyCodes.C
Phaser.Input.Keyboard.KeyCodes.D
Phaser.Input.Keyboard.KeyCodes.E
Phaser.Input.Keyboard.KeyCodes.F
Phaser.Input.Keyboard.KeyCodes.G
Phaser.Input.Keyboard.KeyCodes.H
Phaser.Input.Keyboard.KeyCodes.I
Phaser.Input.Keyboard.KeyCodes.J
Phaser.Input.Keyboard.KeyCodes.K
Phaser.Input.Keyboard.KeyCodes.L
Phaser.Input.Keyboard.KeyCodes.M
Phaser.Input.Keyboard.KeyCodes.N
Phaser.Input.Keyboard.KeyCodes.O
Phaser.Input.Keyboard.KeyCodes.P
Phaser.Input.Keyboard.KeyCodes.Q
Phaser.Input.Keyboard.KeyCodes.R
Phaser.Input.Keyboard.KeyCodes.S
Phaser.Input.Keyboard.KeyCodes.T
Phaser.Input.Keyboard.KeyCodes.U
Phaser.Input.Keyboard.KeyCodes.V
Phaser.Input.Keyboard.KeyCodes.W
Phaser.Input.Keyboard.KeyCodes.X
Phaser.Input.Keyboard.KeyCodes.Y
Phaser.Input.Keyboard.KeyCodes.Z
Phaser.Input.Keyboard.KeyCodes.F1
Phaser.Input.Keyboard.KeyCodes.F2
Phaser.Input.Keyboard.KeyCodes.F3
Phaser.Input.Keyboard.KeyCodes.F4
Phaser.Input.Keyboard.KeyCodes.F5
Phaser.Input.Keyboard.KeyCodes.F6
Phaser.Input.Keyboard.KeyCodes.F7
Phaser.Input.Keyboard.KeyCodes.F8
Phaser.Input.Keyboard.KeyCodes.F9
Phaser.Input.Keyboard.KeyCodes.F10
Phaser.Input.Keyboard.KeyCodes.F11
Phaser.Input.Keyboard.KeyCodes.F12
Phaser.Input.Keyboard.KeyCodes.SEMICOLON
Phaser.Input.Keyboard.KeyCodes.PLUS
Phaser.Input.Keyboard.KeyCodes.COMMA
Phaser.Input.Keyboard.KeyCodes.MINUS
Phaser.Input.Keyboard.KeyCodes.PERIOD
Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH
Phaser.Input.Keyboard.KeyCodes.BACK_SLASH
Phaser.Input.Keyboard.KeyCodes.QUOTES
Phaser.Input.Keyboard.KeyCodes.BACKTICK
Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET
Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET
Phaser.Input.Keyboard.KeyCodes.SEMICOLON_FIREFOX
Phaser.Input.Keyboard.KeyCodes.COLON
Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX_WINDOWS
Phaser.Input.Keyboard.KeyCodes.COMMA_FIREFOX
Phaser.Input.Keyboard.KeyCodes.BRACKET_RIGHT_FIREFOX
Phaser.Input.Keyboard.KeyCodes.BRACKET_LEFT_FIREFOX
```

## Mouse

O Phaser tem também muitas funcionalidades para trabalharmos com os eventos do mouse. Vamos começar com um exemplo bem simples:

```javascript
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
```
Rode este código e em seguida clique e arraste o mouse pela tela.

Você terá a posição inicial do clique, a distância entre o ponto de arraste e a posição inicial, e também o ângulo em radianos. Este exemplo funciona tanto para o mouse como para o touch. Interessante, não?
