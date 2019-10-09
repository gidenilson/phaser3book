## Web fontes

No Phaser podemos utilizar web fontes a partir dos arquivos de fonte (TTF) disponíveis no código fonte dos nossos jogos. Para isso basta incluir o arquivo da fonte no CSS no index.html que carrega o jogo e fazer uma referência a essa fonte em alguma tag do html.

Como exemplo vamos incluir e utilizar a fonte Mansalva que pode ser encontrada no repositório Google Fonts. (este arquivo está no código fonte do curso)

Vamos criar a seguinte estrutura de pasta e arquivos:

```
+ webfontes
  + font
    - Mansalva-Regular.ttf
  - index.html
  - game1.js

```

Nossa webfonte está localizada dentro da pasta font.

Agora coloque o seguinte código dentro do index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Font</title>
  <style media='screen' type='text/css'>
      @font-face {
        font-family: Mansalva;
        src: url('font/Mansalva-Regular.ttf');
      }
</style>
</head>
<body>
  <div style="font-family:BigShoulders; position:absolute; left:-1000px; visibility:hidden;">.</div>

<script src="//cdn.jsdelivr.net/npm/phaser@3.19.0/dist/phaser.js"></script>
<script src="game1.js"></script>

</body>
</html>
```

E no game1.js:

```javascript
var config = {
  type: Phaser.AUTO,
  scene: {
    create
  },
  backgroundColor: 0xbdbdbd
}
var game = new Phaser.Game(config);
function create() {
  this.counter = 0
  this.texto = this.add.text(400, 300, 'Fonte Mansalva', {
    fontSize: 40,
    fontFamily: "Mansalva"
  })
  this.texto.setStroke('#aa0000', 4)
  this.texto.setShadow(2, 2, "#333333", 2, true, true)
  this.texto.setOrigin(0.5)
}
```

Rode o http-server na pasta onde está o index.html, acesse ``http://localhost:8080/index.html`` e dê um refresh no browser.

O resultado deve ser:

![fig 7](resources/img/fig007.png)
