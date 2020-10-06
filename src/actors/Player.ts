class Player extends Phaser.GameObjects.Sprite{
    private movementSpeed: number = 20;
    private left: Phaser.Input.Keyboard.Key;
    private right: Phaser.Input.Keyboard.Key;

    constructor(scene: Phaser.Scene, x: number, y: number,){
        super(scene,x, y, "boiko" );
        this.left = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    private keyboardInput(){
        if(this.left.isDown && this.x<950)
        this.x+=this.movementSpeed;

        if(this.right.isDown && this.x>0)
        this.x-=this.movementSpeed;
    }

    public update(){
        this.keyboardInput();
    }
    
}

export { Player }