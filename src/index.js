
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

let inventory = {
    coins : 0,
    items : [] 
}
let equipedItems = {
    weapons : [],
    stuf : [],
}

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
                new InteractiveObject({
                    position : {
                        x: 770,
                        y: 192,
                    },
                    imageSrc : DoorAnimList.doorTransparentOppening,
                    frameNumber : 6,
                    frameBuffer : 3,
                    loop: false,
                    autoplay : false,
                    hitbox : {
                        position : {
                            x: 770,
                            y: 192 ,
                        },
                        width : 64, 
                        height: 64,
                    },
                    hitboxAction : {
                        color: "rgba(0,255,255,0.4)",
                        position : {
                            x: 770,
                            y: 256 ,
                        },
                        width : 64, 
                        height: 20,
                    },
                    id : "oppenable00",
                    
                }),
                new InteractiveObject({
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
                            y: 64,
                        },
                        width : 64, 
                        height: 64,
                    },
                    hitboxAction : {
                        color: "rgba(0,255,255,0.4)",
                        position : {
                            x: 448,
                            y: 128,
                        },
                        width : 64, 
                        height: 20,
                    },
                    id : "porte01",
                    to : "1"
                }),
              
            ]
            chest = [
                new InteractiveObject({
                    position : {
                        x: 128,
                        y: 128,
                    },
                    imageSrc : ChestAnimList.chestOppening,
                    frameNumber : 4,
                    frameBuffer : 6,
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
                    id : "chest00",
                    itemContent : "key01",
                    onComplete : () => {console.log('rururu')},
                    animations : {
                        chestOppening : {
                            frameNumber: 4,
                            frameBuffer : 8,
                            loop : true,
                            imageSrc : ChestAnimList.chestOppening,
                        },
                    },
                    
                }),
            ]
            coins = [
                new Sprite({
                    position : {
                        x: 300,
                        y: 350,
                    },
                    imageSrc : "./img/props/coinTest.png",
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
                            x: 316,
                            y: 365 ,
                        },
                        width : 32, 
                        height: 32,
                    },
                    id : "coin1",
                }),
                new Sprite({
                    position : {
                        x: 400,
                        y: 350,
                    },
                    imageSrc : "./img/props/coinTest.png",
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
                            x: 416,
                            y: 365 ,
                        },
                        width : 32, 
                        height: 32,
                    },
                    id : "coin2",
                }),
                new Sprite({
                    position : {
                        x: 464,
                        y: 350,
                    },
                    imageSrc : "./img/props/coinTest.png",
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
                            x: 480,
                            y: 365 ,
                        },
                        width : 32, 
                        height: 32,
                    },
                    id : "coin3",
                }),
            ]
            questItems = [
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
            ]

            colidableActors = [
                {
                    name: 'door',
                    content : doors,
                },
                {
                    name: 'chest',
                    content : chest
                },
                {
                    name: 'coin',
                    content : coins
                },
                {
                    name: 'questItems',
                    content : questItems,
                },
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
    principalItemHolded : "",
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
        walkrightSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkrightSword,
        },    
        walkleftSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkleftSword,
        },    
        walktopSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkupSword,
        },    
        walkdownSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.walkdownSword,
        },    
        idledownSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idledownSword,
        },    
        idleleftSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idleleftSword,
        },    
        idlerightSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idlerightSword,
        },    
        idletopSword : {
            frameNumber: 6,
            frameBuffer : 8,
            loop : true,
            imageSrc : HeroAnimList.idletopSword,
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
    } else {
        let action = ""
        if (equipedItems.weapons.includes("questItems-sword")) {
            action = "Sword"
        }

        if(keys.d.pressed){
            player.switchSprite(`walkright${action}`)
            player.velocity.x = player.moveSpeed
            player.velocity.y = 0
            player.lastDirection = "right"

        }else if(keys.q.pressed){
            player.switchSprite(`walkleft${action}`)
            player.velocity.x = -player.moveSpeed
            player.velocity.y = 0
            player.lastDirection = "left"
        }else if(keys.z.pressed){
            player.switchSprite(`walktop${action}`)
            player.velocity.y = -player.moveSpeed
            player.velocity.x = 0
            player.lastDirection = "up"
        }else if(keys.s.pressed){
            player.switchSprite(`walkdown${action}`)
            player.velocity.y = player.moveSpeed
            player.velocity.x = 0
            player.lastDirection = "down"
        } else {
            if (player.lastDirection === "left") {
                player.switchSprite(`idleleft${action}`)
            } else if (player.lastDirection === "right") {
                player.switchSprite(`idleright${action}`)
            } else if (player.lastDirection === "up") {
                player.switchSprite(`idletop${action}`)
            } else if (player.lastDirection === "down") {
                player.switchSprite(`idledown${action}`)
            }
    
        }
        
    }
    
    
    
    
    player.draw()
    player.update()

  
}

levels[lvl].init()
animate()
// action when press input

