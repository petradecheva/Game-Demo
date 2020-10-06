class Money extends Phaser.GameObjects.Sprite{
    private speed: number = 20;

    constructor(scene: Phaser.Scene, x: number, y: number){
        super(scene, x, y, "money");
    }

    private move(): void {
        this.y+=this.speed;
    }

    public update(){
        this.move();
    }

}

export { Money }