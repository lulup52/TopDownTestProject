
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
        itemContent = false,
        actionAnimComplete = "",
        itemReqToActive = ""
        }) {
        super({ imageSrc, frameNumber, frameBuffer, animations, hitbox, hitboxAction,id,loop,autoplay,position,to, actionAnimComplete })
        this.animations = animations
        this.itemContent = itemContent
        this.itemReqToActive = itemReqToActive
        if (this.itemContent) {
            this.actionAnimComplete = () => {
                equipedItems.keykItems.push(this.itemContent)
                globalEvents.specialAnimationPlayed = "heroGetKey"

            }
        }
        

        if (animations){
            this.image = this.animations[`${Object.keys(this.animations)[0]}`].image
            this.frameNumber = this.animations[`${Object.keys(this.animations)[0]}`].frameNumber
            this.frameBuffer = this.animations[`${Object.keys(this.animations)[0]}`].frameBuffer
            this.currentAnimation = this.animations[`${Object.keys(this.animations)[0]}`]
        }
        this.to = to
    
    }
    
}
