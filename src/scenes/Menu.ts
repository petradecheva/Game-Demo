class Menu extends Phaser.Scene{
    private startText: Phaser.GameObjects.Text;
    private titleText: Phaser.GameObjects.Text;
    constructor(){
        super("menu");
    }

    create(){
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.height;
        let startText = this.add.text(width/2 - 80, height/2 + 100, "старт", {font: "40px Monospace"});

        startText.setInteractive();
        startText.on('pointerdown', () => {this.scene.start("game")});
        this.add.existing(startText);

        let titleText = this.add.text(200, 150, "обери държавата!", {font: "70px Monospace"});
        this.add.existing(titleText);
    }
}

export { Menu }