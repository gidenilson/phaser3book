# Tilemap

Tilemap é uma técnica para criar um mundo para jogo a partir de blocos de construção modulares. O objetivo principal é economizar memória, melhorar o desempenho mesmo com um mundo bem grande e, além de tudo é uma forma muito divertida e criativa de criar o mundo para o nosso game.

Cada tile (ladrilho) faz parte de uma imagem maior, o tileset. A seguir temos um exemplo de tileset.

![tileset ](resources/img/tileset.png)

Em seguida temos uma tilemap construido a partir desse tileset.

![tilemap - mundo](resources/img/tilemap.png)

É importante observar que esta imagem final é construída dentro do Phaser em tempo de execução.

Para montar o tilemap o Phaser precisa de 2 arquivos: uma imagem (geralmente um png com fundo transparente) e um JSON com o mapeamento do tilemap.

## Tiled

Para gerar o mapa JSON a partir de um tileset, utilizaremos um aplicativo open source muito conhecido entre os desenvolvedores de games que é o Tiled, disponível para Windows, Mac e Linux.

![Tiled](resources/img/fig031.png)

A instalação é simples e corrigueira, e está disponível em <https://www.mapeditor.org>

Então, para continuarmos, baixe e instale o Tiled na sua máquina.

## Construção de um autódromo

Como nosso primeiro trabalho com o Tiled vamos construir um autódromo bem simples a partir do seguinte tileset:

![fig 32](resources/img/fig032.png)

O resultado será um tilemap como a figura a seguir. Você não precisa fazer exatamente igual, use a sua criatividade.

![fig 33](resources/img/fig033.png)

Temos aqui um passo a passo para a criação do tilemap, mas você pode também acessar esse mesmo tutorial em vídeo no Youtube em
<https://youtu.be/Pm9KSdwcwvE>.

### Passo a Passo

Abrir o Tiled e criar um novo mapa:

![fig 34](resources/img/fig034.png)

Configurar tamanho do mapa com 16 x 12 tiles.

 ![fig 35](resources/img/fig035.png)

 3. Salvar como ``autodromo.tmx``.

 ![fig 36](resources/img/fig036.png)

Clicar no botão "Novo Tileset..." e abrir a imagem ``tiles-rua-02.png`` (esta imagem está na pasta ``assets`` no código fonte baixado).

![fig 37](resources/img/fig037.png)

Configurar tileset: Largura e altura = 100px, Margem e Espaçamento = 0px.

![fig 38](resources/img/fig038.png)

Criar 3 camadas de tiles: pista, arbusto e terreno (nesta ordem).

![fig 39](resources/img/fig039.png)

Selecionar a camada pista e desenhar a pista.

![fig 40](resources/img/fig040.png)

Selecionar a camada arbusto e desenhar os arbustos.

![fig 41](resources/img/fig041.png)

Selecionar a camada terreno e desenha o terreno.

![fig 42](resources/img/fig042.png)

Exportar o map como ``autodromo.json`` (este é o JSON que vamos importar no Phaser)

![fig 43](resources/img/fig043.png)

![fig 44](resources/img/fig044.png)

Salvar o Tiled como ``autodromo.tmx``.

![fig 45](resources/img/fig045.png)

Para ver o resultado abra no seu editor de texto o arquivo ``autodromo.json`` que acabamos de criar.

### Usando o Tilemap
Vamos agora aprender como importar o tilemap para dentro do Phaser.

```javascript
var config = {
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}
var game = new Phaser.Game(config)
function preload() {
  // carrega o JSON
  this.load.tilemapTiledJSON('map', 'tilemap.json')
  // carrega o tileset
  this.load.image('tiles', 'tiles-rua-02.png')
}
function create() {
  // cria o tilemap
  var map = this.make.tilemap({key: 'map'})
  // cria o tileset onde o primeiro parâmetro é o nome do
  // mapa definido no Tiled.
  var tileset = map.addTilesetImage('tiles-rua-02', 'tiles')
  // cria o layer do terreno
  var terreno = map.createStaticLayer(0, tileset, 0, 0)
  // cria o layer do arbusto
  var arbusto = map.createStaticLayer('arbusto', tileset, 0, 0)
  // cria o layer da pista
  var pista = map.createStaticLayer('pista', tileset, 0, 0)
  // reduz escala dos layers para o tamanho da tela
  terreno.setScale(0.5)
  arbusto.setScale(0.5)
  pista.setScale(0.5)
}
```
Na linha 12 carregamos o tilemap.json gerado pelo Tiled.
Na linha 14 carregamos a imagem do tileset.
Na linha 18 criamos o mapa.
Na linha 21 criamos o tileset adicionando a imagem ao mapa.
Nas linha 23 a 27 criamos os layers. Observe na ordem em que estão os layers. No Phaser nós podemos configura a profundidade de cada layer, mas nesse exemplo vamos deixá-los já nas devidas profundidades.
Nas linha de 29 a 31 ajustamos a escala dos layers para caber na tela que definimos no objeto de configuração do game.

## Layer de objetos

Podemos ter no tilemap um layer para marcar posição de objetos no mapa. No próximo exemplo iremos criar um layer de objetos no Tiled e exportar novamente o JSON. Então usaremos a camada de objetos do novo mapa para posicionar algums jóias no mundo.
