const HeroAnimationsSprites = {
    iddleDown: "./img/actors/hero/HeroIdle.png",
    idleUp : "./img/actors/hero/idleHeroTop66px.png",
    idleRight : "./img/actors/hero/idleHeroSide66px.png",
    idleLeft : "./img/actors/hero/idleHeroLeft66px.png",
    WalkDown : "./img/actors/hero/walkHeroDown66px.png",
    walkUp : "./img/actors/hero/walkHeroUp66px.png",
    walkRight : "./img/actors/hero/walkHeroRight66px.png",
    walkLeft : "./img/actors/hero/walkHeroLeft66px.png",
    walkInDoor : "./img/actors/hero/walkIntoDoor.png",
    walkrightSword : "./img/actors/hero/walkRight-sword.png",
    walkleftSword : "./img/actors/hero/walkLeft-sword.png",
    walkupSword : "./img/actors/hero/walkUp-sword.png",
    walkdownSword : "./img/actors/hero/walkDown-sword.png",
    idledownSword : "./img/actors/hero/idleDown-sword.png",
    idleleftSword : "./img/actors/hero/idleLeft-sword.png",
    idlerightSword : "./img/actors/hero/idleright-sword.png",
    idletopSword : "./img/actors/hero/idleUp-sword.png",
    heroGetKey : "./img/actors/hero/heroGetKey.png",
    rollLeft : "./img/actors/hero/rollLeft.png",
}
const gsapTransition = (nextLvl) => {
    lvl = nextLvl

    gsap.to(overlay, {
        duration: 1,
        opacity : 1,
        
        onComplete : () => {
            if (player.toNewLocation !== "") {
                player.position = player.toNewLocation
                player.toNewLocation = ""
            }
            initialiseContent()           
        }
    })

}
const HeroAnimations = {
    idleright : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idleRight,
    },
    idleleft : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idleLeft,
    },
    idletop : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idleUp,
    },
    idledown : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.iddleDown,
    },
    walkright : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkRight,
        
    },
    walkleft : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkLeft,
    },
    walktop : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkUp,
    },
    walkdown : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.WalkDown,
    },    
    walkrightSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkrightSword,
    },    
    walkleftSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkleftSword,
    },    
    walktopSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkupSword,
    },    
    walkdownSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.walkdownSword,
    },    
    idledownSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idledownSword,
    },    
    idleleftSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idleleftSword,
    },    
    idlerightSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idlerightSword,
    },    
    idletopSword : {
        frameNumber: 6,
        frameBuffer : 8,
        loop : true,
        imageSrc : HeroAnimationsSprites.idletopSword,
    },    
    rollLeft : {
        frameNumber: 6,
        frameBuffer : 5,
        loop : false,
        imageSrc : HeroAnimationsSprites.rollLeft,
    },    
    walkInDoor : {
        frameNumber: 12,
        frameBuffer : 6,
        loop : false,
        imageSrc : HeroAnimationsSprites.walkInDoor,
        onCompleteWithTransition : () => {
            gsapTransition()
           
        }
        
    },  
    heroGetKey : {
        frameNumber: 5,
        frameBuffer : 8,
        loop : false,
        autoplay : false,
        imageSrc : HeroAnimationsSprites.heroGetKey,
        onCompleteWithAction : () => {
              globalEvents.specialAnimationPlayed = ''


        }
    },  
}

const DoorAnimList = {
    doorOppening: "./img/props/doorOpen.png",
    doorTransparentOppening: "./img/props/doorTransparentOpen.png",
}
const ChestAnimList = {
    chestOppening: "./img/props/chestOpen.png",
}
const questItemsAnimList = {
    sword: "./img/props/sword.png",
}
const transisionContainer = {
    container: "./img/props/transisionContainer.png",
}
