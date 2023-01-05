
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
        actionAnimComplete = ""
        }) {
        super({ imageSrc, frameNumber, frameBuffer, animations, hitbox, hitboxAction,id,loop,autoplay,position,to, actionAnimComplete })
        this.animations = animations
        this.itemContent = itemContent
        if (this.itemContent) {
            this.actionAnimComplete = () => {
                console.log(this.itemContent)
                console.log()
                colidableActors[3].content.push(
                    new Sprite({
                        position : {
                            x: 765,
                            y: 100,
                        },
                        imageSrc : questItemsAnimList.sword,
                        frameNumber : 1,
                        frameBuffer : 1,
                        loop: false,
                        autoplay : false,
                        hitbox : {
                            position : {
                                x: 0,
                                y: 0 ,
                            },
                            width : 0, 
                            height: 0,
                        },
                        hitboxAction : {
                            color: "rgba(0,255,255,0.4)",
                            position : {
                                x: 765,
                                y: 100 ,
                            },
                            width : 64, 
                            height: 64,
                        },
                        id : "questItems-sword",
                    }),
                )
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
