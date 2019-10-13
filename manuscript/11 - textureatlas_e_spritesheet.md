# TextureAtlas e Spritesheet

O termo 'Sprite Sheet' no Phaser significa uma imagem formada por inúmeros frames onde todos eles tem exatamente o mesmo tamanho. Você faz referência a esses frames usando números e não os seus nomes.

Exemplo de sprite sheet:

![fig 20](resources/img/fig020.png)

Já num 'Textura Atlas' os frames são arranjados dentro da imagem de maneira que ocupem o menor espaço possível, e esses frames são referenciados pelos seus nomes com o auxílio de uma arquivo XML ou JSON que contém todos os dados de cada frame.
É bom salientar que alguns artigos e softwares usam o termo 'Sprite Sheet' como sinônimo de 'Texture Atlas'. Então temos que ter cuidado para não confundir as coisas quando trabalhamos com o Phaser.

Exemplo de texture atlas:

![fig 21](resources/img/fig021.png)


Nós podemos criar imagens estáticas ou animações utilizando tanto sprite sheet quanto texture atlas.

Por enquanto vamos ver um exemplo de imagem estática criada com sprite sheet e textura atlas.

```javascript
function preload ()
{
  // sprite sheet
  this.load.spritesheet('bot', 'images/robot.png', {
    frameWidth: 32, frameHeight: 38 })

  // texture Atlas
  this.load.atlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.json')
}
```

Exemplos de utilização:

```javascript
function create()
{
  // criando sprites
  this.add.sprite(100, 50, 'bot', 2)
  this.add.sprite(200, 300, 'mainmenu', 'btnStart')

  // criando imagens
  this.add.image(200, 50, 'bot', 2)
  this.add.image(200, 400, 'mainmenu', 'btnStart')
}
```

A princípio não faz diferença se colocamos uma figura na tela com ``sprite`` ou com ``image``. Mas, como já dissemos antes, se queremos uma animação temos que usar os sprites. Então não utilize sprites para imagens estáticas por motivo de economia de recursos da máquina.

Vamos agora criar uma scene com alguns objetos ``sprite`` e ``image``:

``index.html``
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Phaser3</title>
  </head>
  <body>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.20.0/dist/phaser.js"></script>
    <script src="game1.js"></script>
  </body>
</html>
```
``game1.js``
```javascript
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
}
var game = new Phaser.Game(config);

function preload ()
{
  // sprite sheet
  this.load.spritesheet('sheet', 'spritesheet.png', {
    frameWidth: 54, frameHeight: 59 })

  // texture Atlas
  this.load.atlas('atlas', 'atlas.png', 'atlas.json')
}

function create ()
{
    // criando sprites
  this.add.sprite(50, 100, 'sheet', 2)
  this.add.sprite(300, 150, 'atlas', 'btnJogarOut')

  // criando imagens
  this.add.image(50, 150, 'sheet', 10)
  this.add.image(300, 300, 'atlas', 'parabens')
}
```
![fig 22](resources/img/fig022.png)
Dê uma olhada no conteúdo dos arquivos, ``atlas.png``, ``atlas.json`` e ``spritesheet.png``, e observe como são e as diferenças entre eles. No decorrer do curso vamos ver bastante esse assunto.

## Free Texture Packer

O Free Texture Packer é um software open source que tem uma interface gráfica muito simples e intuitiva. Com ele você poderá gerar facilmente seus texture atlas.

Ao abrir o programa temos do lado esquerdo uma área para onde podemos arrastar as figuras ou adicionar uma pasta inteira.
No centro fica o preview da textura, e do lado direito uma seção de configuração com valores padrão que não precisam nem de ajustes.

![fig 23](resources/img/fig023.png)
Talvez a única configuração que você vai querer fazer é definir a largura máxima do  arquivo PNG que será gerado. Isso pode ser feito na caixa ``Width`` que fica bem na metade da seção de configuração. Neste exemplo estou deixando o tamanho máximo de 512 pixels de largura. Outra configuração comumente ajustada é a opção de recortar as imagens, tirando as sobras, e a opção de permitir que o programa rotacione as imagens individualmente para economizar espaço.

No mais, é só você dar uma mexidinha no programa para aprender rapidamente a utilizá-lo.
Você pode baixá-lo em http://free-tex-packer.com
