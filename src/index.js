
let debugWatcher = {
    activate : true,
    drawHitbox : true,
    superPause : false
}
const checkPlayerLastInput = () => {
    return player.lastDirection
}
const activeDialogContainer = (element, behavior) => {
    let sentence = ""
    switch(behavior) {
        case 'itemReqToActive' :
            sentence =  `j'ai besoin de ${element}`
            break
        case 'nameitemContent' :
            sentence =  `Vous obtenez ${element}`
            break
    }

    document.querySelector("#textBoxContainer #dialogContainer p").innerText = sentence
    document.querySelector("#textBoxContainer").style.display = "flex"
    setTimeout(() => {
        document.querySelector("#textBoxContainer").style.display = "none"
    }, 2500);
}

const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

let parsedCollisions 
let StaticColisionBlocks
let background
let doors
let coins
let chest
let colidableActors

let inventory = {
    coins : 0,
    items : [] 
}
let equipedItems = {
    weapons : [],
    stuf : [],
    keykItems : []
}

let lvl = 1


const initialiseContent = () => {
    parsedCollisions = allStaticCollisions[`lvl${lvl}`].parse2D()
    StaticColisionBlocks = parsedCollisions.createObjectsFrom2D()
    
    background = new Sprite({
        id : 'test', 
        position: {
            x: 0,
            y: 0,
        },
        imageSrc : `./img/mapBg/testTopDownLvl${lvl}.png`,
    
    })
    doors = lvlDatas[`lvl${lvl}`].doors
    chest = lvlDatas[`lvl${lvl}`].chest
    coins = lvlDatas[`lvl${lvl}`].coins
    questItems =  lvlDatas[`lvl${lvl}`].questItems

    colidableActors = [
        {
            name: 'door',
            content : lvlDatas[`lvl${lvl}`].doors,
        },
        {
            name: 'chest',
            content : lvlDatas[`lvl${lvl}`].chest
        },
        {
            name: 'coin',
            content : lvlDatas[`lvl${lvl}`].coins
        },
        {
            name: 'questItems',
            content : lvlDatas[`lvl${lvl}`].questItems,
        },
        {
            name: 'transisionsBetweenLvls',
            content : lvlDatas[`lvl${lvl}`].transisionsBetweenLvls,
        },
        {
            name: 'enemis',
            content : lvlDatas[`lvl${lvl}`].enemis,
        },
        {
            name: 'projectiles',
            content : [],
        },
    ]
    player.StaticColisionBlocks =  StaticColisionBlocks
}


// const colidableActors = {
//     doors,
//     chest
// }


let globalEvents = {
    principalItemHolded : "",
    playerActionActivated : "no",
    specialAnimationPlayed : "",
}
const setGlobalEvents = (event, value) => {
    globalEvents[`${event}`] = value
}
const player = new Player({
    imageSrc: HeroAnimationsSprites.iddleDown,
    frameNumber : 6,
    animations : HeroAnimations,
    colidableActors,
    id : 'Player',
})

const keys = {
    u: {
        pressed: false
    },
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
    if (!debugWatcher.superPause) {
    window.requestAnimationFrame(animate)

    background.draw()
    StaticColisionBlocks.forEach(colisionBlock => {
        colisionBlock.draw()
    })
    colidableActors.forEach(actorType => {
        if(! actorType.content) {
            return
        }
        actorType.content.forEach(actor => {
            actor.draw()
            if (actor.id.includes('enemi')) {
                actor.update()

            }
        })
    })
    
    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width, canvas.height)
    c.restore()
    if (!keys.u.pressed) {
        player.velocity.y = 0
        player.velocity.x = 0
        if (globalEvents.specialAnimationPlayed === "enter") {
            player.switchSprite("walkInDoor")
            player.velocity.y = -.4
            if (player.curentFrame === 11) {
                globalEvents.specialAnimationPlayed = ''
                return
            }
        } else if (globalEvents.specialAnimationPlayed === "heroGetFromChest") {
            player.switchSprite("heroGetFromChest")
            
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
    }
    player.draw()
    player.update()
    }
}

initialiseContent()
animate()

// action when press input

