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
                            player.lastDirection = "down"
                            player.toNewLocation =  {
                                x: 448,
                                y: 128 - player.hitbox.height,
                            }
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
                        y: 564 ,
                    },
                    width : 64 * 9, 
                    height: 64,
                },
                id : "transitionto-lvl2-00",
                to : 2,
                
            }),
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
                            player.lastDirection = "down"
                            player.toNewLocation =  {
                                x: 448,
                                y: 128 - player.hitbox.height,
                            }
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
                to : 1,
                
                toPlayerPosition : {
                    x: 448,
                    y: 128,
                }
            }),
          
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
        ]
    }
}