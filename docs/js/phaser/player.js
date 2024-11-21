class CustomPlayer {
    constructor () {}
    preload (phaser) 
    {
        phaser.load.image('samplebackground', 'assets/artwork/samplebackground.png');
    }

    create (phaser)
    {
        phaser.add.image(400, 300, 'samplebackground');
    }

    update (phaser)
    {

    }
}

export default CustomPlayer;