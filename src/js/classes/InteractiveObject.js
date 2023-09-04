
class InteractiveObject extends Sprite {
    constructor({
        position = {},
        imageSrc,
        frameNumber,
        frameBuffer = 3,
        StaticColisionBlocks =[],
        hitbox = {},
        hitboxAction = {},
        animations,
        loop = false,
        autoplay = false,
        id = "none",
        to = "",
        itemContent = false,
        actionAnimComplete = "",
        itemReqToActive = "",
        newPlayerDest = "",
        nameItemReqToActive = "",
        nameitemContent = "",
        }) {
        super({ imageSrc, frameNumber, frameBuffer, animations, hitbox, hitboxAction,id,loop,autoplay,position,to, actionAnimComplete })
        this.animations = animations
        this.itemContent = itemContent
        this.itemReqToActive = itemReqToActive
        this.newPlayerDest = newPlayerDest
        this.nameItemReqToActive = nameItemReqToActive
        this.nameitemContent = nameitemContent
        if (this.itemContent) {
            this.actionAnimComplete = () => {
                activeDialogContainer(this.nameitemContent, "nameitemContent")
                equipedItems.keykItems.push(this.itemContent)
                globalEvents.specialAnimationPlayed = "heroGetFromChest"

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
