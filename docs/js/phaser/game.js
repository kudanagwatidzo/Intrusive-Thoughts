import CustomPlayer from './player.js';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

var player = new CustomPlayer();

function preload ()
{
    player.preload(this);
}

function create ()
{
    player.create(this);
}

function update ()
{
    player.update(this);
}