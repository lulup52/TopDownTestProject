
class InteractiveObject extends Sprite {
    constructor({
        position = {},
        imageSrc,
        frameNumber,
        frameBuffer = 3,
        colisionBlocks =[],
        hitbox = {},
        hitboxAction = {},
        animations,
        loop = false,
        autoplay = false,
        id = "none",
        to = "",
        itemContent = "",
        currentAnimation = ""

        }) {
        super({ imageSrc, frameNumber, frameBuffer, animations, hitbox, hitboxAction,id,loop,autoplay,position,to })
        
        if (animations){
            console.log(animations)
            this.image = this.animations.chestOppening.image
            this.frameNumber = this.animations.chestOppening.frameNumber
            this.frameBuffer = this.animations.chestOppening.frameBuffer
            this.currentAnimation = this.animations.chestOppening
        }
        this.to = to
    
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
        if (this.currentAnimation?.onComplete) {
            if(this.curentFrame === 1 && !this.currentAnimation.isActive) {
                this.currentAnimation.onComplete()
                this.currentAnimation.isActive = true
            }
        }
    }
}
