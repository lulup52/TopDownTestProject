class Player extends Sprite {
    constructor({
        colisionBlocks =[],
        imageSrc,
        frameNumber,
        animations,
        }) {
        super({ imageSrc, frameNumber, animations })
        this.position = {
            x: 350,
            y: 350
        }
        this.moveSpeed = 3

        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 64
        this.height = 64
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.colisionBlocks = colisionBlocks
        this.actionAvailable = ""
        this.overlapedDoor = ""

    }
    
    update() {
        this.position.x += this.velocity.x
        this.updateHitbox()
        this.checkForHZCol() 
        this.position.y += this.velocity.y
        this.updateHitbox()
        this.checkForVTCol() 
       
        this.colideWithObject()

    }
    switchSprite(name) {
        if (this.image === this.animations[name].image) {
            return
        }
        this.curentFrame = 0
        this.image = this.animations[name].image
        this.frameNumber = this.animations[name].frameNumber
        this.frameBuffer = this.animations[name].frameBuffer
    }
    updateHitbox() {
        this.hitbox = {
            position : {
                x: this.position.x + 21,
                y: this.position.y + 33,
            },
            width : 22, 
            height: 20
        }
    }
    checkForHZCol() {
        for(let i = 0; i < this.colisionBlocks.length; i++) {
            const colisionBlock = this.colisionBlocks[i]
            //if a colision exist
            if (
                this.hitbox.position.x <=
                  colisionBlock.position.x + colisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >=
                  colisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >=
                  colisionBlock.position.y &&
                this.hitbox.position.y <=
                  colisionBlock.position.y + colisionBlock.height
              ) {
                //colision in x axis to the lef
                if (this.velocity.x < 0) {
                    this.velocity.y = 0
                    this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = colisionBlock.position.x + colisionBlock.width - offset  + 0.01
                    break
                }

                //colision in x axis to the right
                if (this.velocity.x > 0) {
                    this.velocity.y = 0
                    this.velocity.x = 0
                    const offset = this.hitbox.position.x + this.hitbox.width  - this.position.x
                    this.position.x = colisionBlock.position.x - offset - 0.01
                    break
                }
                
            }
        }
    }
    checkForVTCol() {
        for(let i = 0; i < this.colisionBlocks.length; i++) {
            const colisionBlock = this.colisionBlocks[i]
            //if a colision exist
            if (
                this.hitbox.position.x <= colisionBlock.position.x + colisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= colisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= colisionBlock.position.y &&
                this.hitbox.position.y <= colisionBlock.position.y + colisionBlock.height
              ) {
               
               
                //colision in y to the botom
                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.velocity.x = 0
                    const offset = this.hitbox.position.y - this.position.y 
                    this.position.y = colisionBlock.position.y + colisionBlock.height - offset + 0.01
                    break
                }

                //colision in left axis to the right
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.velocity.x = 0
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.position.y = colisionBlock.position.y - offset- 0.01
                    break
                }
                
            }
        }
    }
    
    colideWithObject() {
        globalEvents.playerActionActivated = "no"
        for (let i = 0; i < colidableActors.doors.length ; i++) {
            if (
                this.hitbox.position.x <= colidableActors.doors[i].position.x + colidableActors.doors[i].width 
                && this.hitbox.position.x + this.hitbox.width >= colidableActors.doors[i].position.x 
                && this.hitbox.position.y + this.hitbox.height >= colidableActors.doors[i].position.y 
                && this.hitbox.position.y <= colidableActors.doors[i].position.y + colidableActors.doors[i].height
            ) {
                globalEvents.playerActionActivated = colidableActors.doors[i].id
            } 

        }
    } 
    
}