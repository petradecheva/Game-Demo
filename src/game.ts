import 'phaser';
import { Boot } from './scenes/Boot';
import { Main } from './scenes/Main';
import { Preload } from './scenes/Preload';

class GameApp extends Phaser.Game{
    constructor(){
        super();
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: 'black',
    width: 1000,
    height: 800,
    scene: [Preload]
};

const game = new Phaser.Game(config);
