class Sprite{
    constructor({ 
        id = "none",
        position,
        imageSrc, 
        frameNumber = 1, 
        animations, 
        frameBuffer = 12, 
        loop = true, 
        autoplay = true,
        hitbox =false,
        hitboxAction = false,
        actionAnimComplete = false,
        walkingAreaLocation = "",
        toPlayerPosition = ""
    }){
        this.walkingAreaLocation = walkingAreaLocation
        this.id = id
        this.position = position
        this.frameNumber = frameNumber
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameNumber
            this.height = this.image.height 
        }
        this.hitbox = hitbox
        this.image.src = imageSrc 
        this.loaded = false
        this.curentFrame = 0
        this.elapsedFrame = 0
        this.frameBuffer = frameBuffer
        this.animations = animations
        this.loop = loop
        this.autoplay = autoplay
        this.hitboxAction = hitboxAction
        this.currentAnimation
        this.actionAnimComplete = actionAnimComplete
        this.pausee = false
        //create images for all animations
        if (this.animations) {

            for (let key in this.animations) {
                const newimage = new Image()
                newimage.src = this.animations[key].imageSrc
                this.animations[key].image = newimage
            }
        }
    }
    erase() {
        // a fixer, ramasser une pièce les suprime toutes !!!!!!!!!!!
        colidableActors.forEach(props => {
            if (this.id.includes(props.name)) {
                props.content.forEach(uniqueProp => {
                    if (this.id === uniqueProp.id) {
                        const index = props.content.indexOf(uniqueProp);
                        props.content.splice(index, 1)
                        if (this.id.includes('coin') ) {
                            inventory.coins++ 
                            coinsUiUpdate()
                        }
                        if (this.id === "questItems-sword" ) {
                            equipedItems.weapons.push("questItems-sword") 
                            inventory.items.push("questItems-sword")
                        }
                    }

                    
                })
            }
        });

    }
    draw() {

        if (this.id === "Player") {

        }
        if (!this.loaded) {
            return
        }
        const cropBox = {
            position : {
                x: this.width * this.curentFrame,
                y:0
            },
            width : this.width,
            height : this.height,
            
        }
        c.drawImage(
            this.image,
            cropBox.position.x,
             cropBox.position.y,
             cropBox.width,
             cropBox.height,
             this.position.x,
             this.position.y,
             this.width,
             this.height,
        )
        this.updateFrames()

        // draw hitbox
        if (debugWatcher.drawHitbox) {
            if(this.walkingAreaLocation) {
                c.fillStyle = "rgba(200,100,0,0.6)"
                c.fillRect(this.walkingAreaLocation.x,this.walkingAreaLocation.y, this.walkingAreaLocation.width, this.walkingAreaLocation.height)
            }
            if (this.hitbox) {
                if (this.id !== "Player") {
                    c.fillStyle = "rgba(0,255,0,0.6)"
                    c.fillRect(this.hitbox.position.x,this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
                } else {
                    c.fillStyle = "rgba(255,0,0,0.4)"
                    c.fillRect(this.hitbox.position.x,this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
                }
            }
            if (this.hitboxAction) {
                c.fillStyle = this.hitboxAction.color
                c.fillRect(this.hitboxAction.position.x,this.hitboxAction.position.y, this.hitboxAction.width, this.hitboxAction.height)
            } 
        }
        
        
    }
    play() {
        this.autoplay = true
    }
    pause() {
        if(this.pause) {
            console.log('pose')
        } else {
            console.log('unpose')
            
        }
        this.pausee = !this.pausee
    }
    updateFrames() {
        if(this.pausee) {
            return
        }
        if (!this.autoplay) {
            return
        }
        this.elapsedFrame++

        if (this.elapsedFrame % this.frameBuffer === 0) {
            if (this.curentFrame < this.frameNumber - 1) {
                this.curentFrame++
               
                if (this.actionAnimComplete && this.curentFrame === this.frameNumber - 1) {
                    this.actionAnimComplete()
                }
            } else if (this.loop) {
                this.curentFrame = 0
            }
        }
        if (this.currentAnimation?.onCompleteWithTransition) {
            if(this.curentFrame === 1 && !this.currentAnimation.isActive) {
                this.currentAnimation.onCompleteWithTransition()
                this.currentAnimation.isActive = true
            }
        }
        if (this.currentAnimation?.onCompleteWithAction) {
            if(this.curentFrame === this.frameNumber - 1 && !this.currentAnimation.isActive) {
                this.pause()
                setTimeout(() => {
                this.pause()
                    this.currentAnimation.onCompleteWithAction()
                    this.currentAnimation.isActive = true                  
                }, 2000)
               
            }
        }
    }
    
}   