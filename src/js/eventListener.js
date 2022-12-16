window.addEventListener('keydown', (event) => {
    switch(event.key) {
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
            
            // for (let i = 0; i < colidableActors.doors.length ; i++){
            //     if (globalEvents.playerActionActivated === colidableActors.doors[i].id) {
            //         colidableActors.doors[i].play()
            //     } else {

            //     }
            // }
            // for (let i = 0; i < colidableActors.chest.length ; i++){
            //     if (globalEvents.playerActionActivated === colidableActors.chest[i].id) {
            //         colidableActors.chest[i].play()
            //     } else {

            //     }
            // }
            colidableActors.forEach(actorType => {
                actorType.content.forEach(actor => {
                    if (globalEvents.playerActionActivated === actor.id) {
                        actor.play()
                        console.log(actor)
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