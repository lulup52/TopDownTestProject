window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w':
            console.log(inventory)
            console.log(equipedItems)
           debugWatcher.drawHitbox = !debugWatcher.drawHitbox
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
                        actor.play()
                        if (actor.to !== "") {
                            if (actor.id.includes("porte")) {
                                globalEvents.specialAnimationPlayed = "enter"
                            }
                        }
                        
                        if (actor.id.includes("oppenable")) {
                            console.log(actor.hitbox)
                            actor.hitbox = ""
                            console.log(actor.hitbox)
                        }
                    } else {
    
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