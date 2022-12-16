class ColisionBlock {
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }

    draw() {
        c.fillStyle = "rgba(100, 0, 200, .4)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height )
    }
}