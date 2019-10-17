# Configuração do Phaser

Até agora já criamos muitos exemplos com o Phaser, e em todos eles formatamos um objeto de configuração que é passado na criação do objeto da classe ``Phaser.Game``. Neste capítulo vamos estudar mais a fundo este objeto de configuração.

Aqui está a relação completa das propriedades que um objeto de configuração do Phaser pode ter:

| Nome | Padrão | Descrição |
|------|--------|-----------|
| width | 1024 | Largura do game em pixels. |
| height | 768 | Altura do game em pixels. |
| zoom | 1 | Escala a ser aplicada ao canvas do game. 2 é o dobro, 0.5 é metade e etc. |
| resolution | 1 | Tamanho de cada pixel do jogo. Valores maiores que 1 são alta-resolução. |
| type | CONST.AUTO | Que render será usado: Phaser.AUTO, Phaser.CANVAS, Phaser.HEADLESS ou Phaser.WEBGL. AUTO |
| parent | null | O elemento DOM que conterá o canvas do game, ou o seu id. Se for omitido, o canvas do game será inserido no elemento body. |
| canvas | null | Fornece seu próprio elemento canvas para o Phaser ao invés de deixar o Phaser criar um. |
| canvasStyle | null | CSS a ser aplicado ao canvas do game ao invés do CSS padrão o Phaser. |
| context | | Fornece seu próprio Canvas Context para o Phaser ao invés de deixá-lo criar um. |
| scene | null | Uma cena ou cenas para adicionar ao jogo. Se várias são dadas, a primeira é iniciada; o restante será iniciado apenas se eles tiverem {active: true}. Veja o argumento sceneConfig em Phaser.Scenes.SceneManager # add. |
| seed | | Semente para o gerador de números aleatórios. |
| title | | O título do game. Mostrado no console do browser. |
| url | http://phaser.io | A URL do game. Mostrada no console do browser. |
| version | | A versão do game. Mostrada no console do browser. |
| autoFocus | true | Chama automaticamente ``window.focus()`` quando o game é iniciado. Normalmente é necessário para capturar eventos se o game está em um frame separado. |
| input | | Configuração input, ou ``false`` para desabilitar todas as formas de input do game. |
| disableContextMenu | false | Desabilita o menu de contexto padrão que geralmente é disparado com o click no botão direito do mouse. |
| transparent | false | Se o canvas do game terá um background transparente. |
| banner | false | Configuração para imprimir o banner no console do browser quando o game inicia. |
| dom | | The DOM Container configuration object.O objeto de configuração do container do DOM. |
| fps | | Objeto de configuração do loop do game. |
| render | | Objeto de configuração do render do game. |
| backgroundColor | 0x000000 | Cor do background do game. O padrão é black. |
| callbacks | | Callbacks opcionais para serem executados antes ou depois do boot do game. |
| loader | | Objeto de configuração do loader. |
| images | | Objeto de configuração das imagens. |
| physics | | Objeto de configuração da física do game. |
| plugins | | Plugins para instalar. |
| scale | | Objeto de configuração do gerenciador de escala (Scale Manager). |
| audio | | Objeto de configuração do áudio. |

A maioria das propriedades desse objeto de configuração são auto-descritivas, mas você pode consultar a documentação do Phaser para saber mais.

Agora vamos estudar mas detalhadamente a propriedade ``scale``.

O objeto de configuração dessa propriedade tem o seguinte conteúdo:




| Nome   | Padrão    | Descrição        |
| ------ | --------- | ---------------- |
| width  | 1024      | A largura do game. Pode ser um inteiro ou uma string: ‘100%’. Se uma string for passada isto só funcionará se você setar o elemento pai do canvas com uma largura. |
| height | 768       | A altura do game. Pode ser um inteiro ou uma string: ‘100%’. Se uma string for passada isto só funcionará se você setar o elemento pai do canvas com uma altura.   |
| zoom   | 1         | O valor do zoom do   canvas  |
| resolution  | 1    | A resolução do canvas. Esta propriedade ainda não está implementada no Phaser versão 3.|
| parent      |      | O elemento DOM que contém o canvas do game ou o id deste elemento. |
| expandParent | true | O Scale Manager pode ajustar a propriedade CSS height do pai e / ou body do documento para 100%?  |
| mode   | Phaser.Scale.ScaleModes.NONE  | O Modo de escala. |
| min              |   | A mínima largura e altura em que o canvas pode ser escalado.   |
| max              |   | A máxima largura e altura em que o canvas pode ser escalado.   |
| autoRound        | true | Automaticamente arrendonda o canvas        |
| autoCenter       | Phaser.Scale.Center.NO_CENTER | Automaticamente centraliza o canvas no elemento pai? |
| resizeInterval   | 500  | Quantos milessegundos devem ser considerados para checar se o tamanho da tela do browser foi alterada.  |
| fullscreenTarget |      | O elemento do DOM que será utilizado para o modo full screen, ou o seu id. |

Neste último objeto temos a propriedade ``mode`` que define diretamente o modo como o game será escalonado. Vejamos os valores possíveis:

| Constante (modo) | Descrição |
| ---- | --------- |
| Phaser.Scale.ENVELOP | A largura e a altura são ajustadas automaticamente para fazer com que o tamanho cubra toda a área de destino, mantendo a proporção da imagem. |
| Phaser.Scale.FIT | A largura e a altura são ajustadas automaticamente para caber dentro da área de destino especificada, mantendo a proporção da imagem. Dependendo da proporção, pode haver algum espaço dentro da área que não é coberto. |
| Phaser.Scale.HEIGHT_CONTROLS_WIDTH | A largura é automaticamente ajustada com base na altura. |
| Phaser.Scale.NONE | Nenhuma escala é aplicada. |
| Phaser.Scale.RESIZE | O Canvas é redimensionado para caber em todo o espaço pai disponível, independentemente da proporção. |
| Phaser.Scale.WIDTH_CONTROLS_HEIGHT | A altura é automaticamente ajustada com base na largura. |

Veremos na prática algumas dessas configurações quando desenvolvermos os jogos do curso.
