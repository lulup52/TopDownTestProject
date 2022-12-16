class Sprite{
    constructor({ 
        id = "none",
        position,
        imageSrc, 
        frameNumber = 1, 
        animations, 
        frameBuffer = 12, 
        loop = true, 
        autoplay = true
    }){
        this.id = id
        this.position = position
        this.frameNumber = frameNumber
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameNumber
            this.height = this.image.height 
        }
        this.image.src = imageSrc 
        this.loaded = false
        this.curentFrame = 0
        this.elapsedFrame = 0
        this.frameBuffer = frameBuffer
        this.animations = animations
        this.loop = loop
        this.autoplay = autoplay
        console.log(this.animations)
        //create images for all animations
        if (this.animations) {

            for (let key in this.animations) {
                const newimage = new Image()
                newimage.src = this.animations[key].imageSrc
                this.animations[key].image = newimage
            }
        }

    }
    draw() {
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

        
        
    }
    play() {
        this.autoplay = true
    }

    updateFrames() {
        if (!this.autoplay) {
            return
        }
        this.elapsedFrame++

        if (this.elapsedFrame % this.frameBuffer === 0) {
            if (this.curentFrame < this.frameNumber - 1) {
                this.curentFrame++

            } else if (this.loop) {
                this.curentFrame = 0
            }
        }
    }
}   