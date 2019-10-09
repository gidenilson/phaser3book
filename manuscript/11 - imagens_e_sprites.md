# Imagens e sprites

Uma imagem no Phaser é uma instância da classe ``Phaser.GameObjects.Image``.

Uma imagem é um objeto de jogo leve, útil para a exibição de imagens estáticas no seu jogo, como logotipos, planos de fundo, cenário ou outros elementos não animados. As imagens podem receber eventos do mouse, podem ter corpos físicos, ou serem interpoladas, coloridas ou roladas.

A principal diferença entre uma imagem e um Sprite é que você não pode animar uma imagem, pois ela não possui o componente Animação.

Para utilizar uma imagem a primeira coisa a fazer é carregar tal imagem para o cache do Phaser chamando ``this.load.image(key, url)``, onde this referência à scene de onde estamos chamando o método.

Exemplo:

```javascript
function preload ()
{
  this.load.image('logo', 'images/logotipo.png')
}
```
Ao invés de passar argumentos, podemos passar um objeto de configuração para carregar a imagem.

```javascript
function preload()
{
  this.load.image({
    key: 'logo',
    url: 'images/logotipo.png'
  })
}
```
Para mais detalhes sobre o objeto de configuração de imagem, procure na documentação do Phaser por ``Phaser.Types.Loader.FileTypes.ImageFileConfig``.

Depois do carregamento, podemos utilizar a imagem na nossa cena chamando o método ``this.add.image(x, y, key)``.

Exemplo:

```javascript
function create()
{
  this.add.image(x, y, 'logo')
}
```
Um sprite é uma instância da classe ``Phaser.GameObjects.Sprite``
É um objeto usado para mostrar imagens estáticas ou animados em nosso game. Assim como as imagens, os sprites podem receber eventos de mouse (ou touch) e podem ganhar corpos físicos. Tabém podem trabalhar com tween e scroll.

Para adicionar um sprite à nossa scene devemos, como sempre, primeiro carregar a imagem dentro do método ``preload()`` da scene.

Por enquanto vamos apenas carregar uma imagem comum em nosso sprite. Mas na frente iremos aprender a trabalhar com sprites animados.

Uma vez que a imagem já foi carregada no método ``preload()`` criamos o sprite chamando o método ``this.add.sprite(x, y, texture [, frame])`` onde this faz referência à scene onde estamos carregando o sprite. Por enquanto não vamos trabalhar com o último parâmetro ``frame``. Veremos isso mais a frente quando estudarmos sprites animados.

Exemplo:

```javascript
function create()
{
  this.add.sprite(x, y, 'imagem')
}
```
