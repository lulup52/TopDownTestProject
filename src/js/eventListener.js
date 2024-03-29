let worldPause = false

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'u':
            if (keys.u.pressed) {
                return
            }
            keys.u.pressed = true
            console.log("j'apui sur U") 
            let lastInput = checkPlayerLastInput()
            switch(lastInput) {
                case 'left':
                    player.switchSprite("rollLeft")
                    player.velocity.x = -9
                    break;
                case 'right':
                    player.switchSprite("rollRight")
                    player.velocity.x = 9
                    break;
                case 'up':
                    player.velocity.y = -9
                    break;
                case 'down':
                    player.velocity.y = 9
                    break;
            }
            setTimeout(() => {
                keys.u.pressed = false
            }, 300);
        break
        case 'w':
            console.log(inventory)
            console.log(equipedItems)
           debugWatcher.drawHitbox = !debugWatcher.drawHitbox
           debugWatcher.activate = !debugWatcher.activate
        break
        case 'p':
            if (debugWatcher.activate) {
                debugWatcher.superPause = !debugWatcher.superPause
            } else {
                worldPause = !worldPause
            }
        break
        case 'z':
            keys.z.pressed = true
            console.log("j'apui sur Z") 
        break
        case 's':
            keys.s.pressed = true
            console.log("j'apui sur S") 
        break
        case 'q':
            keys.q.pressed = true
            console.log("j'apui sur Q") 
        break
        case 'd':
            keys.d.pressed = true
            console.log("j'apui sur D") 
        break
        case 'e':
            colidableActors.forEach(actorType => {
                actorType.content.forEach(actor => {
                    if (globalEvents.playerActionActivated === actor.id) {
                        
                        if (actor.id.includes("oppenable")) {
                            actor.play()
                        }
                        if (actor.to !== "") {
                            actor.play()
                            if (actor.id.includes("destination-door")) {
                                globalEvents.specialAnimationPlayed = "enter"
                            }
                        } else {
                            if (actor.id.includes("unlockable-door")) {
                                console.log(actor)

                                console.log(actor.itemReqToActive)
                                if (equipedItems.keykItems.includes(actor.itemReqToActive)) {
                                    actor.play()
                                    actor.hitbox = ""
                                } else {
                                    activeDialogContainer(actor.nameItemReqToActive, "itemReqToActive")
                                }
                            }
                        }
                    }
                })
            })
    
        break
    }
}) 
//stop moving when release input
window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'z':
            keys.z.pressed = false
        break
        case 's':
            keys.s.pressed = false
        break
        case 'q':
            keys.q.pressed = false
        break
        case 'd':
            keys.d.pressed = false
        break
    }
})