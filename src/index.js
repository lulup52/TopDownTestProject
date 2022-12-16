
const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

const parsedCollisions = collisionsLvl1.parse2D()
const colisionBlocks = parsedCollisions.createObjectsFrom2D()

const doors = [
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
        id : "porte00"
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
const colidableActors = {
    doors
}

let globalEvents = {
    playerActionActivated : "no"
}




const player = new Player({
    colisionBlocks,
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
        
    },
    colidableActors,
})



const bgLvl1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc : './img/mapBg/testTopDownLvl1.png',
   
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
// let bottom = y + 100
function animate(){
    console.log()

    window.requestAnimationFrame(animate)

    bgLvl1.draw()
    colisionBlocks.forEach(colisionBlock => {
        colisionBlock.draw()
    })
    
    colidableActors.doors.forEach(door => {
        door.draw()
    })

    player.velocity.y = 0
    player.velocity.x = 0
    if(keys.d.pressed){
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

animate()
// action when press input

