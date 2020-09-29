class Preload extends Phaser.Scene{
    private readonly BOX_WIDTH: number = 500;
    private readonly BOX_HEIGHT: number = 50;
    private readonly OFFSET: number = 10;

    private progressBox: Phaser.GameObjects.Graphics;
    private progressBar: Phaser.GameObjects.Graphics;
    private loadingText: Phaser.GameObjects.Text;
    private percentText: Phaser.GameObjects.Text;
    private assetText: Phaser.GameObjects.Text;

    constructor(){
        super("preload");
    }

    create(){
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.width;

        this.progressBox = new Phaser.GameObjects.Graphics(this);
        this.progressBox.fillStyle(0x2F2F2E, 1);
        this.progressBox.fillRect(width / 2 - this.BOX_WIDTH / 2, height * 0.425 - this.BOX_HEIGHT *0.5, 
            this.BOX_WIDTH, this.BOX_HEIGHT);
        this.add.existing(this.progressBox);

        this.progressBar = new Phaser.GameObjects.Graphics(this);
        this.progressBar.fillStyle(0x6E6F6C,1);
        this.add.existing(this.progressBar);

        this.loadingText = this.add.text(width / 2 + 10, height * 0.5 - 140, "Loading...", {fontSize: "40px", fontFamily:'Monospace', fill: " orange "});
        this.loadingText.setOrigin(0.5, 1);
        this.add.existing(this.loadingText);

        this.percentText = this.add.text( width / 2, height * 0.45 - 25, "0 %", {font: "25px Monospace", fill: " black "});
        this.percentText.setOrigin(0.5);
        this.add.existing(this.percentText);

        this.assetText = this.add.text( width / 2, height * 0.5, " ", {font: " 25px Monospace"});
        this.assetText.setOrigin(0.5);
        this.add.existing(this.assetText);


        this.load.image("monkey", './assets/monkey.png');
        
        this.load.on("progress", this.onProgressUpdated, this);
        this.load.on("load", this.onFileLoaded, this);
        this.load.on("complete", this.onComplete, this);

        this.load.start();
    }

    private onProgressUpdated(value: number): void{
        this.progressBar.fillRect(this.cameras.main.width / 2 - this.BOX_WIDTH / 2 + this.OFFSET, 
            this.cameras.main.height * 0.5 + this.OFFSET, (this.BOX_WIDTH - this.OFFSET * 2) * value, 
            this.BOX_HEIGHT - this.OFFSET * 2);

            this.percentText.setText(Math.trunc(value*100) + " %");
    }

    private onFileLoaded(file: Phaser.Loader.File): void {
        this.assetText.setText("Loading asset: " + file.key);
    }

    private onComplete(): void{
        console.log(" complete :)");
    }
}

export { Preload }