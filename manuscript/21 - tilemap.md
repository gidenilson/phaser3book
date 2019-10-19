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
