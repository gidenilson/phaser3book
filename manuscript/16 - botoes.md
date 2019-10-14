# Botões

Até a versão 2 do Phaser havia uma classe específica para criar botões no jogo. A partir do Phaser3 essa classe deixou de existir, até mesmo porque é muito fácil implementarmos nossos próprios botões utilizando os eventos do mouse.
Neste capítulo vamos fazer exatamente isto. Vamos lá?

Faremos o seguinte:
1. criar a classe ImageButton extendendo de ``Phaser.GameObjects.Image``.
2. instanciar 2 botões a partir de spritesheets diferentes, para um botão redondo e para outro botão retangular.

Primeiro vamos escrever nosso arquivo index.html, porque acrescentaremos um detalhe que não tínhamos usado até agora, o atributo ``type="module"`` na tag ``script``.

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Phaser3</title>
  </head>
  <body>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.20.0/dist/phaser.js"></script>
    <script type="module" src="game1.js"></script>
  </body>
</html>
```
Com esse atributo com o uso de ``type="module"`` poderemos trabalhar diretamente com módulos no javascript. Atualmente a grande maioria dos browsers dão suporte a essa forma de trabalho modular.

Vamos agora ver como fica a classe do nosso componente "ImageButton":

BtnButton.js
```javascript
class ImageButton extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 0)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerover', () => this.setFrame(1))
    this.on('pointerout', () => this.setFrame(0))
    this.on('pointerdown', () => this.setFrame(2))
    this.on('pointerup', () => {
      this.setFrame(0)
      this.emit('click')
    })
  }
}
export default ImageButton
```

Vamos analisar linha por linha.
Na linha 1 estamos declarando nossa classe ``ImageButton`` que herda de ``Phaser.GameObjects.Image``

Na segunda linha chamamos o constructor que recebe a scene, a posição x e y do botão e o spritesheet a ser utilizado.

Na linha 3 chamamos o constructor da super classe (classe pai), passando os parâmetros para inicializá-la, por meio do método ``super``. Esse passo é obrigatório, ou seja: toda vez que herdamos de algo precisaremos chamar o método ``super`` passando os parâmetros que a classe pai exige.

Na linha 4 adicionamos o nosso botão (referenciado por this) na nossa scene com o método ``scene.add.existing(this)``.

Na linha 5 chamamos o método ``setInteractive()`` para habilitar a escuta dos eventos do mouse em nosso botão.

Nas linha de 6 a 9 definimos que frame do spritesheet será utilizado em cada estado do mouse. Iremos padronizar que os spritesheets dos botões terão 3 frames. Um para o estado normal, outro para o estado pointerover, e outro para o estado pointerdown. Para o estado pointerup utilizaremos o mesmo frame do estado pointerup.

Na linha 11 disparamos o evento personalizado ``click`` para podermos 'escutá-lo' no game.

Na última linha exportamos nossa classe como um módulo.

Vamos agora ao código do game1.js

```javascript
import ImageButton from './ImageButton.js'
var config = {
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)
function preload() {
  this.load.spritesheet('botao', 'botao.png', {
    frameWidth: 80,
    frameHeight: 80
  })
  this.load.spritesheet('btnIniciar', 'botao2.png', {
    frameWidth: 100,
    frameHeight: 34
  })
}
function create() {
  this.botao = new ImageButton(this, 100, 100, 'botao')
  this.botao.on('click', () => console.log('click botão'))

  this.btnIniciar = new ImageButton(this, 100, 200, 'btnIniciar')
  this.btnIniciar.on('click', () => console.log('click botão iniciar'))
}
```

Na linha 1 importamos a classe ImageButton.

Na linha 11 carregamos o primeiro spritesheet (botao.png)

Na linha 15 carregamos o segundo spritesheet (botao2.png)

Na linha 21 criamos uma instância da nossa classe ``ImageButton`` passando como parâmetros a scene, a posição x e y, e a referência ao spritesheet 'botao'.

Na linha 22 definimos a escuta do evento ``click`` axecuntando a função de callback que irá apenas imprimir uma mensagem no console do browser.

Nas linha 24 e 25 fazemos um segundo botão, só que desta vez utilizando o spritesheet 'btnIniciar'.

Aqui temos a figura dos 2 spritesheets utilizados neste exemplo:

![fig 28](resources/img/fig028.png)

![fig 29](resources/img/fig029.png)

Acabamos de desenvolver nosso botão personalizável com o Phaser. Fizemos o botão com imagens, mas é possível fazer outros botões que trabalhem com texto simples e bitmapfontes. Iremos voltar a falar de botões quando estivermos desenvolvendo os jogos deste curso.
