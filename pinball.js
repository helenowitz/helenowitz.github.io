gameState = {};
rotateSpeed = 0.18;
function preload(){
    this.load.image('ball', './assets/ballSample.png');
    this.load.image('leftPaddle', './assets/leftPaddleSample.png');
    this.load.image('rightPaddle', './assets/rightPaddleSample.png');
}
// Move Paddles to an array of Paddles (2 left, 2 right)
// Work on creating collision for ball and Paddles

function create(){
    //gameState.circle = this.add.circle(250, 50, 10, 0xffffff);

    // This is the normal way of creating the ball with physics -- works
    gameState.ball = this.matter.add.sprite(250, 50, 'ball');
    // gameState.ball.setCircle(20);
    // gameState.ball.body.isBody = true;

    // This is a sample to see if I can create the ball with physics the long way
    /* gameState.ball = {
        scene:  {
            physics: {
                add: {
                    image: {
                        x: 250,
                        y: 50,
                        texture: 'ball'
                    }
                }
            }
        }
    } */
    // gameState.ball.body.setVelocity(0, 1).setBounce(0.5);
    

    gameState.leftPaddle = this.matter.add.sprite(50,400,'leftPaddle').setOrigin(0, 0.5);
    // gameState.leftPaddle.rotation = 0.6;
    gameState.leftPaddle.ignoreGravity = true;
    // this.physics.add.collider(gameState.ball, gameState.leftPaddle, () => { console.log('left collision') });

    gameState.rightPaddle = this.matter.add.sprite(370,400,'rightPaddle').setOrigin(1, 0.5);
    // gameState.rightPaddle.rotation = -0.6;
    // /* For Testing */ gameState.rightPaddle.body.rotation = -0.6;
    // this.physics.add.collider( gameState.rightPaddle,gameState.ball, () => { console.log('right collision') });


    console.log(gameState.rightPaddle)
    console.log(gameState.ball)


    gameState.cursors = this.input.keyboard.createCursorKeys();
    /* gameState.ball.setInteractive();
    gameState.rightPaddle.setInteractive(); */
}

function update(){
   /*  if (gameState.cursors.left.isDown){
        if (gameState.leftPaddle.rotation > -0.5){
            gameState.leftPaddle.rotation -= rotateSpeed;
        }
    } else if (gameState.cursors.left.isUp){
        if (gameState.leftPaddle.rotation < 0.6){
            gameState.leftPaddle.rotation += rotateSpeed;
        }
    }
    if (gameState.cursors.right.isDown){
        if (gameState.rightPaddle.rotation < 0.5){
            gameState.rightPaddle.rotation += rotateSpeed;
        }
    } else if (gameState.cursors.right.isUp){
        if (gameState.rightPaddle.rotation > -0.6){
            gameState.rightPaddle.rotation -= rotateSpeed;
        }
    } */
    this.input.on('pointerdown', () => {
        this.physics.pause();
    })

    this.input.on('pointerup', () => {
        this.physics.resume();
    })
}


const config = {
    type: Phaser.AUTO,
    width:420,
    height:600,
    backgroundColor: "921C33",
    physics: {
        default: 'matter',
        matter : {
            gravity: {y:1},
            debug: true
        }
    },
    scene: {
        preload,
        create,
        update
    }

}

const game = new Phaser.Game(config);