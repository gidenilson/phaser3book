# Imagens e sprites

Uma imagem no Phaser é uma instância da classe ``Phaser.GameObjects.Image``.

Uma imagem é um objeto de jogo leve, útil para a exibição de imagens estáticas no seu jogo, como logotipos, planos de fundo, cenário ou outros elementos não animados. As imagens podem receber eventos do mouse, podem ter corpos físicos, ou serem interpoladas, coloridas ou roladas.

A principal diferença entre uma imagem e um Sprite é que você não pode animar uma imagem, pois ela não possui o componente Animação.

Para utilizar uma imagem a primeira coisa a fazer é carregar tal imagem para o cache do Phaser chamando ``this.load.image(key, url)``, onde this referencia a scene de onde estamos chamando o método.

Exemplo:

````javascript
function preload ()
{
  this.load.image('logo', 'images/logotipo.png')
}
````
Ao invés de passar argumentos, podemos passar um objeto de configuração para carregar a imagem.

````javascript
function preload()
{
  this.load.image({
    key: 'logo',
    url: 'images/logotipo.png'
  })
}
````
Para mais detalhes sobre o objeto de configuração de imagem, procure na documentação do Phaser por ``Phaser.Types.Loader.FileTypes.ImageFileConfig``.

Depois do carregamento, podemos utilizar a imagem na nossa cena chamando o método ``this.add.image(x, y, key)``.

Exemplo:

````javascript
function create()
{
  this.add.image(x, y, 'logo')
}
````
