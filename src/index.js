
let debugWatcher = {
    drawHitbox : true
}


const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

let parsedCollisions 
let colisionBlocks
let background
let doors
let chest
let colidableActors

let lvl = 1
let levels = {
    1 : {
        init : () => {
            parsedCollisions = collisionsLvl1.parse2D()
            colisionBlocks = parsedCollisions.createObjectsFrom2D()
            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : './img/mapBg/testTopDownLvl1.png',
            
            })
            doors = [
                new Sprite({
                    position : {
                        x: 448,
                        y: 64,
                    },
                    imageSrc : DoorAnimList.doorOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    hitbox : {
                        position : {
                            x: 448,
                            y: 64 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    id : "porte00",
                    
                }),
                new Sprite({
                    position : {
                        x: 448,
                        y: 440,
                    },
                    imageSrc : DoorAnimList.doorOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    hitbox : {
                        position : {
                            x: 448,
                            y: 440 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    hitboxAction : {
                        color: "rgba(0,255,255,0.4)",
                        position : {
                            x: 448,
                            y: 504 ,
                        },
                        width : 64, 
                        height: 20,
                    },
                    id : "porte01"
                }),
                new Sprite({
                    position : {
                        x: 550,
                        y: 440,
                    },
                    imageSrc : DoorAnimList.doorOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    id : "porte02"
                })
            ]
            chest = [
                new Sprite({
                    position : {
                        x: 128,
                        y: 128,
                    },
                    imageSrc : ChestAnimList.chestOppening,
                    frameNumber : 4,
                    frameBuffer : 3,
                    hitbox : {
                        position : {
                            x: 128,
                            y: 128 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    hitboxAction : {
                        color: "rgba(0,255,255,0.4)",
                        position : {
                            x: 118,
                            y: 128 ,
                        },
                        width : 84, 
                        height: 74,
                    },
                    loop: false,
                    autoplay : false,
                    id : "chest00"
                }),
            ]
            colidableActors = [
                {content : doors},
                {content : chest}
            ]
            player.colisionBlocks =  colisionBlocks

        }
    },
    2 : {
        init : () => {
            parsedCollisions = collisionsLvl1.parse2D()
            colisionBlocks = parsedCollisions.createObjectsFrom2D()
            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc : './img/mapBg/testTopDownLvl1.png',
            
            })
            doors = [
                new Sprite({
                    position : {
                        x: 448,
                        y: 64,
                    },
                    imageSrc : DoorAnimList.doorOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    hitbox : {
                        position : {
                            x: 448,
                            y: 64 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    id : "porte00",
                    
                }),
                new Sprite({
                    position : {
                        x: 448,
                        y: 440,
                    },
                    imageSrc : DoorAnimList.doorOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    hitbox : {
                        position : {
                            x: 448,
                            y: 440 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    hitboxAction : {
                        color: "rgba(0,255,255,0.4)",
                        position : {
                            x: 448,
                            y: 504 ,
                        },
                        width : 64, 
                        height: 20,
                    },
                    id : "porte01"
                }),
                new Sprite({
                    position : {
                        x: 550,
                        y: 440,
                    },
                    imageSrc : DoorAnimList.doorOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    id : "porte02"
                })
            ]
            chest = [
                new Sprite({
                    position : {
                        x: 256,
                        y: 256,
                    },
                    imageSrc : ChestAnimList.chestOppening,
                    frameNumber : 4,
                    frameBuffer : 3,
                    hitbox : {
                        position : {
                            x: 256,
                            y: 256 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    hitboxAction : {
                        color: "rgba(0,255,255,0.4)",
                        position : {
                            x: 118,
                            y: 128 ,
                        },
                        width : 84, 
                        height: 74,
                    },
                    loop: false,
                    autoplay : false,
                    id : "chest00"
                }),
            ]
            colidableActors = [
                {content : doors},
                {content : chest}
            ]
            player.colisionBlocks =  colisionBlocks

        }
    }
}




// const colidableActors = {
//     doors,
//     chest
// }


console.log()
let globalEvents = {
    playerActionActivated : "no",
    specialAnimationPlayed : "",
}

const player = new Player({
    imageSrc: HeroAnimList.iddleDown,
    frameNumber : 6,
    animations : {
        idleright : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idleRight,
        },
        idleleft : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idleLeft,
        },
        idletop : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idleUp,
        },
        idledown : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.iddleDown,
        },
        walkright : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkRight,
            
        },
        walkleft : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkLeft,
        },
        walktop : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkUp,
        },
        walkdown : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.WalkDown,
        },    
        walkInDoor : {
            frameNumber: 12,
            frameBuffer : 6,
            loop : false,
            imageSrc : HeroAnimList.walkInDoor,
            onComplete : () => {

                gsap.to(overlay, {
                    duration: 1,
                    opacity : 1,
                    onComplete : () => {
                        lvl++
                        levels[lvl].init()
                        gsap.to(overlay, {
                            duration: 1,
                            opacity : 0,
                        })
                    }
                })
            }
        },    
        
    },
    colidableActors,
    id : 'Player',
})

const keys = {
    z: {
        pressed: false
    },
    s: {
        pressed: false
    },
    q: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const overlay = {
    opacity : 0,
}
function animate(){
    
    window.requestAnimationFrame(animate)

    background.draw()
    colisionBlocks.forEach(colisionBlock => {
        colisionBlock.draw()
    })
    
    colidableActors.forEach(actorType => {
        actorType.content.forEach(actor => {
            actor.draw()
        })
    })
    //old actor one by one drawing
    // colidableActors.doors.forEach(door => {
    //     door.draw()
    // })
    // colidableActors.chest.forEach(door => {
    //     door.draw()
    // })
      c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width, canvas.height)
    c.restore()
    player.velocity.y = 0
    player.velocity.x = 0
    if (globalEvents.specialAnimationPlayed === "enter") {
        player.switchSprite("walkInDoor")
        player.velocity.y = -.4
        if (player.curentFrame === 11) {
            globalEvents.specialAnimationPlayed = ''
            return
        }
    } else if(keys.d.pressed){
        player.switchSprite("walkright")
        player.velocity.x = player.moveSpeed
        player.velocity.y = 0
        player.lastDirection = "right"
    }else if(keys.q.pressed){
        player.switchSprite("walkleft")
        player.velocity.x = -player.moveSpeed
        player.velocity.y = 0
        player.lastDirection = "left"
    }else if(keys.z.pressed){
        player.switchSprite("walktop")
        player.velocity.y = -player.moveSpeed
        player.velocity.x = 0
        player.lastDirection = "up"
    }else if(keys.s.pressed){
        player.switchSprite("walkdown")
        player.velocity.y = player.moveSpeed
        player.velocity.x = 0
        player.lastDirection = "down"
    } else {
        if (player.lastDirection === "left") {
            player.switchSprite("idleleft")
        } else if (player.lastDirection === "right") {
            player.switchSprite("idleright")
        } else if (player.lastDirection === "up") {
            player.switchSprite("idletop")
        } else if (player.lastDirection === "down") {
            player.switchSprite("idledown")
        }

    }
    
    player.draw()
    player.update()

  
}

levels[lvl].init()
animate()
// action when press input

