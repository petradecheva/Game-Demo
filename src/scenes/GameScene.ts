import { Player } from "../actors/Player";
import { Money } from "../actors/Money";

class Game extends Phaser.Scene{
    // private playerImage: Phaser.GameObjects.Image;
    // private moneyImg: Phaser.GameObjects.Image;
    private player: Player;
    private money: Money;
    constructor(){
        super("game");

        this.player = new Player(this, 100, 600);
        this.add.existing(this.player);
        this.money = new Money(this, 100, 300);
        this.add.existing(this.money);
    }

    // create(){
    //    this.playerImage = this.add.image(100, 600, "boiko");
    //    this.playerImage.setOrigin(0);
    //    this.playerImage.setScale(0.16);
    //    this.add.existing(this.playerImage);

    //    this.moneyImg = this.add.image(100, 300, 'money');
    //    this.moneyImg.setScale(0.2);
    //    this.add.existing(this.moneyImg);
    // }
    update(){
            this.player.update();
            this.money.update();

    }
}

export { Game }
