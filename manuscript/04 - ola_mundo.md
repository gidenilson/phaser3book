## Olá mundo

Vamos agora criar o nosso 'olá mundo'?

1. Crie uma pasta para o nosso 'olá mundo'.
2. Crie os arquivos index.html e game.js.
3. No arquivo index.html coloque o seguinte:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">  
      <title>Olá mundo</title>
    </head>
  <body>
      <script src="//cdn.jsdelivr.net/npm/phaser@3.19.0/dist/phaser.js"></script>
      <script src="game.js"></script>
  </body>
</html>
```

4. Agora no arquivo game.js:

```javascript
var config = {
  type: Phaser.AUTO,
  scene: {
    create: create
  }
}
var game = new Phaser.Game(config)
function create() {
  this.add.text(400, 300, 'Olá, mundo!')
}
```
5. Abra o GitBash na pasta do projeto e digite o comando ``http-server``
6. Abra o browser e acesse ``http://localhost:8080/index.html``
7. Pronto. Nosso olá mundo está funcionando.
