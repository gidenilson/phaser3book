# Path e follower

No Phaser podemos fazer com que sprites percorram um caminho pré-traçado. Isso é feito criando-se o caminho ``path`` e um sprite especial que é uma instância da classe
``Phaser.GameObjects.PathFollower``. Um ``PathFollower`` é um sprite que possui funcionalidades adicionais para atuar como ``Follower`` (seguidor). Tudo que podemos fazer com um sprite comum podemos também aplicar a um sprite do tipo ``Follower``.

A forma mais comum de instanciar a um PathFollower é usando o método ``this.add.follower(path, x, y, texture [, frame])``, onde ``this`` referencia a scene em que estamos trabalhando.

Vamos ver como fazer com que um sprite follower percorra um caminho?

```javascript
var config = {
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)
function preload() {
  //Carrega o spritesheet dos peixes
  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}
function create() {
  //cria um path com 4 vértices (cantos)
  this.path = new Phaser.Curves.Path(50, 50).lineTo(500, 50).lineTo(500, 300).lineTo(50, 300)
  //pinta o path para que fique visível (isto é opcional)
  this.graphics = this.add.graphics()
  this.graphics.lineStyle(1, 0xffffff, 1)
  this.path.draw(this.graphics, 128)
  //instancia o sprite follower, definindo o path a ser seguido
  this.peixe = this.add.follower(this.path, 0, 0, 'peixes', 0);
  //inicializa o movimento do follower no path
  this.peixe.startFollow({
    positionOnPath: true,
    duration: 3000,
    yoyo: true,
    repeat: -1,
    rotateToPath: true,
    verticalAdjust: true
  })
}
```
Neste exemplos usamos o método ``lineTo`` para criar um path formado por linhas retas, mas também podemos traçar curvas como no próximo exemplo:

```javascript
var config = {
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)
function preload() {
  //Carrega o spritesheet dos peixes
  this.load.spritesheet('peixes', 'spritesheet_peixes.png', {
    frameWidth: 136,
    frameHeight: 80
  })
}
function create() {
  //cria um path com curvas
  this.path = new Phaser.Curves.Path(50, 100).splineTo([ 164, 46, 274, 142, 412, 57, 522, 141, 664, 64 ])
  //pinta o path para que fique visível (isto é opcional)
  this.graphics = this.add.graphics()
  this.graphics.lineStyle(1, 0xffffff, 1)
  this.path.draw(this.graphics, 128)
  //instancia o sprite follower, definindo o path a ser seguido
  this.peixe = this.add.follower(this.path, 0, 0, 'peixes', 0);
  //inicializa o movimento do follower no path
  this.peixe.startFollow({
    positionOnPath: true,
    duration: 3000,
    yoyo: true,
    repeat: -1,
    rotateToPath: true,
    verticalAdjust: true
  })
}
```

O método ``splineTo`` é responsável por criar uma curva, a partir dos vértices passados num array. Este array contém as coordenadas x e y de cada vértice pretendido seguindo a seguinte convenção:

``spliteTo([x1, y1, x2, y2, x3, y3, ... xn, yn])
