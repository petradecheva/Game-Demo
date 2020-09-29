class Preload extends Phaser.Scene{
    private loadingText: Phaser.GameObjects.Text;

    constructor(){
        super("preload");
    }

    create(){
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.width;

        this.loadingText = this.add.text(width/2 - 100, height/2 - 100, "Loading...", {font: "30px Monotype"});
        this.add.existing(this.loadingText);
        this.load.image("monkey", './assets/monkey.png');
        
    }
}

export { Preload }