# Flying bee

Neste jogo nosso objetivo é matar as abelhas clicando sobre elas. Inicialmente este jogo foi pensado para mobile, pois a jogabilidade fica bem melhor com o touch do que com o mouse, por isso você vai perceber que a tela do game está em formato retrato (altura > largura). No entanto optamos por incluí-lo no curso como um bonus. Você encontra gratuitamente um curso na Udemy que ensina publicar um app HTML5 na PlayStore. <https://www.udemy.com/course/phonegap-android-playstore>

![fig 178](resources/img/fig178.png)

A base de implementação desse game são as funcionalidades Path e Follower do Phaser, que já estudamos anteriormente.

Basicamente fazemos o seguinte:

* Criamos um path de 4 pontos aleatórios.
* Criamos o sprite da abelha e o fazemos seguir o path criado.
* Quando o jogador consegue clicar na abelha o tempo é resetado.
* O jogador tem 10 segundos para clicar na abelha, e esse tempo diminui a cada nível.

Se você for rodar esse jogo como mobile eu aconselho a diminuir o tempo para 5 segundos pois, como já dissemos, a jogabilidade com o touch é bem melhor.

Passemos então ao código.

## Estrutura de arquivos e pastas

![fig 179](resources/img/fig179.png)

## index.html

![fig 180](resources/img/fig180.png)

Para este game utlizaremos a fonte BigShouldersDisplay-Medium.tff, que pode ser encontrada no GoogleFonts. Mas no código fonte já temos disponível. Neste trecho de código definimos também padding e margin para 0 e deixamos um background preto.

![fig 181](resources/img/fig181.png)

Nas linhas 19 e 20 adicionamos uma div que não será visível na tela, só com a função de forçar o carregamento da fonte.

A partir da linha 21 temos um caso diferente que nos games anteriores. Aqui não vamos importar as scenes e as classes como módulos, mas como arquivos simples de Javascript. Então precisaremos importar cada scene e classe como um script no body do html.

Nas linhas 21 e 22 carregamos a biblioteca do Phaser e o script de configuração.

![fig 182](resources/img/fig182.png)

Nas linhas 24 a 29 carregamos as classes do game.

![fig 183](resources/img/fig183.png)

Nas linhas 31 a 35 carregamos as scenes, e na linha 37 carregamos o script de inicialização do game.

Os scripts precisam ser carregados nesta ordem para que o código funcione.

## game.js

![fig 184](resources/img/fig184.png)

Aqui registramos as scenes e na linha 13 instanciamos e damos início ao game. Observe que não precisamos utilizar de ``import`` porque já carregamos todos os scripts no ``index.html``.

## scene/BootScene.js

![fig 185](resources/img/fig185.png)

## scene/CreditsScene.js

Esta classe não está implementada, mas o código roda sem ela.

![fig 186](resources/img/fig186.png)

## scene/PreloaderScene.js

Aqui são carregados os assets do game.

![fig 187](resources/img/fig187.png)

![fig 188](resources/img/fig188.png)

![fig 189](resources/img/fig189.png)

![fig 190](resources/img/fig190.png)

![fig 191](resources/img/fig191.png)

![fig 192](resources/img/fig192.png)

![fig 193](resources/img/fig193.png)

![fig 194](resources/img/fig194.png)

![fig 195](resources/img/fig195.png)

![fig 196](resources/img/fig196.png)

## scene/MenuScene.js

![fig 197](resources/img/fig197.png)

![fig 198](resources/img/fig198.png)

## Classes do game

Antes de continuarmos a análise da GameScene, vamos estudar as classes dos objetos do jogo.

### class/Gui.js

Esta classe é responsável por mostrar o score e o level em que o jogo se encontra. A implementação herda de ``Phaser.GameObjects.Container``, sendo portanto um container onde estão os textos que mostram as informações.

![fig 199](resources/img/fig199.png)

![fig 200](resources/img/fig200.png)

![fig 201](resources/img/fig201.png)

![fig 202](resources/img/fig202.png)

### class/Timer.js

Esta classe é responsável por executar a contagem regressiva e emitir o evento 'endtime' se a contagem chegar a zero.

![fig 203](resources/img/fig203.png)

![fig 204](resources/img/fig204.png)

![fig 205](resources/img/fig205.png)

![fig 206](resources/img/fig206.png)

![fig 207](resources/img/fig207.png)

![fig 208](resources/img/fig208.png)

### class/Bee.js

Esta é a classe que define a abelha. Ela é responsável por criar a curva a ser seguida pela abelha, criar as animações, escutar os eventos de click na abelha, entre outras coisas.

![fig 209](resources/img/fig209.png)

![fig 210](resources/img/fig210.png)

![fig 211](resources/img/fig211.png)

![fig 212](resources/img/fig212.png)

![fig 213](resources/img/fig213.png)

![fig 214](resources/img/fig214.png)

![fig 215](resources/img/fig215.png)

![fig 216](resources/img/fig216.png)

![fig 217](resources/img/fig217.png)

![fig 218](resources/img/fig218.png)

### class/Death.js

Esta classe herda de ``Phaser.GameObjects.Sprite`` e é responsável por mostrar a abelha morrendo. A lógica consiste em substituir a abelha por esse sprite adicionado exatamente da posição da abelha. Vamos entender melhor quando estudarmos a GameScene.

![fig 219](resources/img/fig219.png)

### class/Message.js

Esta classe é bem simple. A função dela é mostrar no centro da tela uma mensagem de texto. Ela será utilizada apenas para colocar a mensagem de "Game Over" na tela. Não seria tão necessário criar uma classe só para isso ao invés de criar o objeto texto diretamente na GameScene, no entanto optamos por fazer dessa forma por questões de não quebrar a padrão de desenvolvimento que estamos utilizando no game.

![fig 220](resources/img/fig220.png)

### class/GameSound.js

Aqui definimos a música e os sons do game, como já vimos nos games anteriores.

![fig 221](resources/img/fig221.png)

Nas linhas 4 a 6 instanciamos os objetos de som a partir do método ``this.scene.sound.add()``. Este método vem da scene passada como parâmetro.

![fig 222](resources/img/fig222.png)

No método ``play()`` tocamos em loop a música e o som da abelha. E no método ``stop()`` paramos esses sons.

![fig 223](resources/img/fig223.png)

No método ``pause()`` pausamos a música e o som da abelha, e no método ``splash()`` tocamos o som da morte.

## scene/GameScene.js

Aqui temos a alma do game. Dentro desta classe instanciamos todas as outras classes já vistas até aqui.

![fig 224](resources/img/fig224.png)

![fig 225](resources/img/fig225.png)

![fig 226](resources/img/fig226.png)

![fig 227](resources/img/fig227.png)

![fig 228](resources/img/fig228.png)

![fig 229](resources/img/fig229.png)

![fig 230](resources/img/fig230.png)
