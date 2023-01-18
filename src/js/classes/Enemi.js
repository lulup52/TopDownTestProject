class Enemi extends Sprite {
    constructor({
        colisionBlocks =[],
        position = "",
        initialPosition = "",
        imageSrc,
        frameNumber,
        animations,
        behavior = "",
        hitBox = {},
        walkingAreaSize= {},
        walkingAreaLocation = "",
        id = "none",
        }) {
        super({ imageSrc, frameNumber, animations, hitBox,id , walkingAreaLocation})
        this.initialPosition = initialPosition
        this.position = position
        this.moveSpeed = 5
        this.behavior = behavior
        this.walkingAreaSize = walkingAreaSize
        this.walkingAreaLocation = {
            y : this.initialPosition.y - this.walkingAreaSize.y,
            x : this.initialPosition.x - this.walkingAreaSize.x,
            height : this.walkingAreaSize.y * 3 ,
            width : this.walkingAreaSize.x * 3 ,

        }
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
        this.hitBox = hitBox
        this.direction = 3
    }
    behaviorControler = () => {
        switch(this.behavior) {
            case "iaLvl1" :
                this.iaLvl1()
                break
        }
    }
    update() {
        if (worldPause) {
            return
        } 
        this.updateHitbox()
        this.behaviorControler()
        this.position.x += this.velocity.x
        // this.updateHitbox()
        // this.checkForHZCol() 
        this.position.y += this.velocity.y
        // this.updateHitbox()
        // this.checkForVTCol() 
        // this.colideWithObject()
    }
    // switchSprite(name) {
    //     if (this.image === this.animations[name].image) {
    //         return
    //     }
    //     this.curentFrame = 0
    //     this.image = this.animations[name].image
    //     this.frameNumber = this.animations[name].frameNumber
    //     this.frameBuffer = this.animations[name].frameBuffer
    //     this.currentAnimation = this.animations[name]
    // }
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
    // checkForHZCol() {
    //     for(let i = 0; i < this.colisionBlocks.length; i++) {
    //         const colisionBlock = this.colisionBlocks[i]
    //         //if a colision exist
    //         if (
    //             this.hitbox.position.x <=
    //               colisionBlock.position.x + colisionBlock.width &&
    //             this.hitbox.position.x + this.hitbox.width >=
    //               colisionBlock.position.x &&
    //             this.hitbox.position.y + this.hitbox.height >=
    //               colisionBlock.position.y &&
    //             this.hitbox.position.y <=
    //               colisionBlock.position.y + colisionBlock.height
    //           ) {
    //             //colision in x axis to the lef
    //             if (this.velocity.x < 0) {
    //                 this.velocity.y = 0
    //                 this.velocity.x = 0
    //                 const offset = this.hitbox.position.x - this.position.x
    //                 this.position.x = colisionBlock.position.x + colisionBlock.width - offset  + 0.01
    //                 break
    //             }

    //             //colision in x axis to the right
    //             if (this.velocity.x > 0) {
    //                 this.velocity.y = 0
    //                 this.velocity.x = 0
    //                 const offset = this.hitbox.position.x + this.hitbox.width  - this.position.x
    //                 this.position.x = colisionBlock.position.x - offset - 0.01
    //                 break
    //             }
                
    //         }
    //     }
    // }
    // checkForVTCol() {
    //     for(let i = 0; i < this.colisionBlocks.length; i++) {
    //         const colisionBlock = this.colisionBlocks[i]
    //         //if a colision exist
    //         if (
    //             this.hitbox.position.x <= colisionBlock.position.x + colisionBlock.width &&
    //             this.hitbox.position.x + this.hitbox.width >= colisionBlock.position.x &&
    //             this.hitbox.position.y + this.hitbox.height >= colisionBlock.position.y &&
    //             this.hitbox.position.y <= colisionBlock.position.y + colisionBlock.height
    //           ) {
               
               
    //             //colision in y to the botom
    //             if (this.velocity.y < 0) {
    //                 this.velocity.y = 0
    //                 this.velocity.x = 0
    //                 const offset = this.hitbox.position.y - this.position.y 
    //                 this.position.y = colisionBlock.position.y + colisionBlock.height - offset + 0.01
    //                 break
    //             }

    //             //colision in left axis to the right
    //             if (this.velocity.y > 0) {
    //                 this.velocity.y = 0
    //                 this.velocity.x = 0
    //                 const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
    //                 this.position.y = colisionBlock.position.y - offset- 0.01
    //                 break
    //             }
                
    //         }
    //     }
    // }
    
    // colideWithObject() {
    //     globalEvents.playerActionActivated = "no"
        
    //     for (let i = 0; i < colidableActors.length; i++) {
    //         for (let j = 0; j < colidableActors[i].content.length; j++) {
    //             let actor = colidableActors[i].content[j]
    //             if (actor.hitboxAction) {
    //                 if (
    //                     //check hitboxAction collision to let player activate the object
    //                     actor.hitboxAction 
    //                     && this.hitbox.position.x <= actor.hitboxAction.position.x + actor.hitboxAction.width
    //                     && this.hitbox.position.x + this.hitbox.width >= actor.hitboxAction.position.x 
    //                     && this.hitbox.position.y + this.hitbox.height >= actor.hitboxAction.position.y 
    //                     && this.hitbox.position.y <= actor.hitboxAction.position.y + actor.hitboxAction.height 
    //                 ) {
                        
    //                         if (actor.id.includes("transitionto")) {
    //                             lvl = actor.to
    //                             initialiseContent()
    //                             console.log(lvl)

    //                             player.position =  {
    //                                 x: actor.newPlayerDest.x !== false ? actor.newPlayerDest.x : player.position.x,
    //                                 y: actor.newPlayerDest.y !== false ? actor.newPlayerDest.y : player.position.y,
    //                             }
    //                         }   
                        
    //                     if (actor.id.includes("coin") || actor.id.includes("sword")) {
    //                         actor.erase()
    //                     }
    //                         globalEvents.playerActionActivated = actor.id
    //                 } 
    //             }
    //             if (actor.hitbox) {
                    
    //                 if (globalEvents.specialAnimationPlayed === "") {
                        
    //                     if (
    //                         //manage hitbox colisions
    //                         this.hitbox.position.x <= actor.hitbox.position.x + actor.hitbox.width 
    //                         && this.hitbox.position.x + this.hitbox.width >= actor.hitbox.position.x
    //                         && this.hitbox.position.y + this.hitbox.height >= actor.hitbox.position.y 
    //                         && this.hitbox.position.y <= actor.hitbox.position.y + actor.hitbox.height 
    //                     ) {
    //                         //check colision with door
    //                         //colision in y to the botom
    //                         // if () {

    //                         // }
    //                         if (this.hitbox.position.y < actor.hitbox.position.y + actor.hitbox.height) {
    
    //                             if (this.velocity.y < 0) {
    //                                 this.velocity.y = 0
    //                                 this.velocity.x = 0
    
    //                                 const offset = this.hitbox.position.y - this.position.y 
    //                                 this.position.y = actor.hitbox.position.y + actor.hitbox.height - offset + 0.01
    //                                 break
    //                             }
    //                         }
    //                     //colision in y axis to the top
    //                         if (this.hitbox.position.y + this.hitbox.height > actor.hitbox.position.y) {
    //                             if (this.velocity.y > 0) {
    //                                 this.velocity.y = 0
    //                                 this.velocity.x = 0
    //                                 const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
    //                                 this.position.y = actor.position.y - offset - 0.01
    //                                 break
    //                             }
    //                         }
                            
                           
    //                         //colision in x axis to the lef
    //                         if ( this.hitbox.position.x < actor.hitbox.position.x + actor.hitbox.width) {
    //                             if (this.velocity.x < 0) {
    //                                 this.velocity.y = 0
    //                                 this.velocity.x = 0
    //                                 const offset = this.hitbox.position.x - this.position.x
    //                                 this.position.x = actor.position.x + actor.width - offset  + 0.01
    //                                 break
    //                             }
    //                         }
    
    //                         //colision in x axis to the right
    //                         if (this.hitbox.position.x + this.hitbox.width > actor.hitbox.position.x) {
    //                             if (this.velocity.x > 0) {
    //                                 this.velocity.y = 0
    //                                 this.velocity.x = 0
    //                                 const offset = this.hitbox.position.x + this.hitbox.width  - this.position.x
    //                                 this.position.x = actor.position.x - offset - 0.01
    //                                 break
    //                             }
    //                         }
                            
    //                     } 
    //                 }
                    
    //             } else {
    //                 if (
    //                     this.hitbox.position.x <= actor.position.x + actor.width 
    //                     && this.hitbox.position.x + this.hitbox.width >= actor.position.x 
    //                     && this.hitbox.position.y + this.hitbox.height >= actor.position.y 
    //                     && this.hitbox.position.y <= actor.position.y + actor.height
    //                 ) {
    //                     globalEvents.playerActionActivated = actor.id
    //                 } 
    //             }
    //         }

    //     } 
       


        
    // } 

    iaLvl1() {
        // console.log(
        // )
        if (
        this.hitbox.position.x  > this.walkingAreaLocation.x &&
        this.hitbox.position.y > this.walkingAreaLocation.y &&
        this.hitbox.position.x + this.hitbox.width < this.walkingAreaLocation.x + this.walkingAreaLocation.height &&
        this.hitbox.position.y + this.hitbox.height < this.walkingAreaLocation.y + this.walkingAreaLocation.height
        ) {
            switch(this.direction) {
                case 1: 
                    this.velocity.y = -1
                    this.velocity.x = 0
                    break;
                case 2: 
                    this.velocity.x = 1
                    this.velocity.y = 0
                    break;
                case 3: 
                    this.velocity.y = 1
                    this.velocity.x = 0
                    break;
                case 4: 
                    this.velocity.x = -1
                    this.velocity.y = 0

                    break;
                }  
        } else {
           
            this.velocity.x = 0
            this.velocity.y = 0
            
            this.position.x -= 1
            this.position.y -= 1
            this.direction = Math.ceil(Math.random() * 4)
            
            console.log(this.direction)
        }
    }
}
