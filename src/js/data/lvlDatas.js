let lvlDatas = {
    "lvl1" : {
        doors : [
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
                animations : {
                    doorTransparentOppening : {
                        frameNumber: 6,
                        frameBuffer : 3,
                        loop : false,
                        imageSrc : DoorAnimList.doorTransparentOppening,
                       
                    },
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
                itemReqToActive : "key01",
                nameItemReqToActive : "Clée de la cabane",
                id : "unlockable-door-00",
               
                
            }),
            new InteractiveObject({
                position : {
                    x: 448,
                    y: 64,
                },
               
                animations : {
                    doorOppening : {
                        frameNumber : 6,
                        frameBuffer : 3,
                        loop : false,
                        autoplay : false,
                        imageSrc : DoorAnimList.doorOppening,
                        onCompleteWithTransition : () => {
                            player.moveTo("down", { x: 448, y: 128 - player.hitbox.height})
                           
                        }
                    },
                },
                imageSrc : DoorAnimList.doorOppening,

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
                id : "destination-door-00",
                to : 2,
                
                toPlayerPosition : {
                    x: 448,
                    y: 128,
                }
            }),
          
        ],
        chest : [
           
        ],
        coins : [
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
        ],
        transisionsBetweenLvls : [
            new InteractiveObject({
                id : "transitionto-lvl2-00",
                to : 2,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: 6 * 64,
                        y: (9 * 64) + 40,
                    },
                    width : 64 * 9, 
                    height: 1,
                },
                newPlayerDest : {
                    x : false,
                    y : -34 ,
                },
                
                
            }),
            new InteractiveObject({
                id : "transitionto-lvl4-00",
                to : 4,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: -20,
                        y: 2 * 64  ,
                    },
                    width : 1, 
                    height: 5 *  64,
                },
                newPlayerDest : {
                    x : (64 * 16) - 20 ,
                    y : false,
                },
             
                
            }),
        ],
        enemis : [
            new Enemi({
                imageSrc: HeroAnimationsSprites.iddleDown,
                frameNumber : 6,
                animations : HeroAnimations,
                id : 'enemi-00',
                behavior : "iaLvl1",
                walkingAreaSize : {x : 64 * 1, y : 64 * 1} ,
                position : {
                    x: 400,
                    y: 400
                },
                initialPosition : {
                    x: 400,
                    y: 400
                }
            }) 
        ],
        questItems : [
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
        ],
    },
    "lvl2" : {
        doors : [
        ],
        chest : [
        ],
        coins : [],
        transisionsBetweenLvls : [
            new InteractiveObject({
                id : "transitionto-lvl3-01",
                to : 3,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: -20,
                        y: 2 * 64 ,
                    },
                    width : 1, 
                    height: 64 * 5,
                },
                newPlayerDest : {
                    x : (64 * 16) - 20 ,
                    y : false,
                },
                
                
            }),
            new InteractiveObject({
                id : "transitionto-lvl1-00",
                to : 1,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: 6 * 64,
                        y: -10,
                    },
                    width : 64 * 9, 
                    height: 1,
                },
                newPlayerDest : {
                    x : false,
                    y : 64 * 8 + 40,
                },
               
                
            }),
        ],
        enemis : [
        ],
        questItems : [
        ]
    },
    "lvl3" : {
        doors : [
        ],
        chest : [
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
                id : "oppenable-chest00",
                itemContent : "key01",
                nameitemContent : "Clée de la cabane",
                animations : {
                    chestOppening : {
                        frameNumber: 4,
                        frameBuffer : 8,
                        loop : true,
                        imageSrc : ChestAnimList.chestOppening,
                    },
                },
                
            }),
        ],
        coins : [],
        transisionsBetweenLvls : [
            new InteractiveObject({
                id : "transitionto-lvl2-00",
                to : 2,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: (16 * 64) + 24,
                        y: 64 * 2 ,
                    },
                    width : 1, 
                    height: 64 * 5,
                },
                newPlayerDest : {
                    x : -40,
                    y : false,
                },
                
                
            }),
            new InteractiveObject({
                id : "transitionto-lvl4-00",
                to : 4,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: 1 * 64,
                        y: -10,
                    },
                    width : 64 * 9, 
                    height: 1 ,
                },
                newPlayerDest : {
                    x : false,
                    y : 64 * 8 + 40,
                },
                
                
            }),
        ],
        enemis : [
        ],
        questItems : [
        ]
    },
    "lvl4" : {
        doors : [
        ],
        chest : [
        ],
        coins : [],
        transisionsBetweenLvls : [
            new InteractiveObject({
                id : "transitionto-lvl3-00",
                to : 3,
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: 1 * 64,
                        y: 64 * 9 + 40 ,
                    },
                    width : 64 * 9, 
                    height: 1,
                },
                newPlayerDest : {
                    x : false,
                    y : -34,
                },
                
                
            }),
            new InteractiveObject({
                position : {
                    x: 500,
                    y: 500,
                },
                imageSrc : transisionContainer.container,
                frameNumber : "",
                frameBuffer : "",
                hitbox : {
                    position : {
                        x: 0,
                        y: 0 ,
                    },
                    width : 0, 
                    height: 0,
                },
               
                hitboxAction : {
                    color: "rgba(255,0,0,0.4)",
                    position : {
                        x: 16 * 64 + 24,
                        y: 64 * 2 ,
                    },
                    width : 64, 
                    height: 64 * 5,
                },
                newPlayerDest : {
                    x : -40,
                    y : false,
                },
                id : "transitionto-lvl1-00",
                to : 1,
                
            }),
        ],
        enemis : [
        ],
        questItems : [
        ]
    },
}