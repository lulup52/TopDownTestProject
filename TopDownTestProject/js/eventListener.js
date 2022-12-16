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
            console.log(globalEvents)
            
            for (let i = 0; i < colidableActors.doors.length ; i++){
                if (globalEvents.playerActionActivated === colidableActors.doors[i].id) {
                    colidableActors.doors[i].play()
                } else {

                }
            }
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