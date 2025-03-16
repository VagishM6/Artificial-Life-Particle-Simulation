let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 700
canvas.height = 400

class createParticle{
    constructor(){
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.r = Math.floor(Math.random() * Math.random() * 10)
        this.speedX = Math.random() * 1
        this.speedY = Math.random() * 1
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        // ctx.stroke();    
        ctx.fillStyle = "white";
        ctx.fill()
    }

    move(){
        this.x = this.x + 1 * this.speedX
        this.y = this.y + 1 * this.speedY
        // this.y = this.y + 2

        if(this.x + this.r >= canvas.width || this.x - this.r <= 0){
            this.speedX *= -1
        }

        if(this.y + this.r > canvas.height || this.y - this.r <= 0){
            this.speedY *= -1
        }
    }
}

particle_list = []

for(let i=0; i < 300; i++){
    particle_list.push(new createParticle())
}

function animation(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(let i=0; i < particle_list.length; i++){
        particle_list[i].draw()
        particle_list[i].move()

        let population_count = document.getElementById("population").textContent = `population count: ${particle_list.length}`
        let pos_x = document.getElementById("posX").textContent = `x position: ${Math.floor(particle_list[0].x)}`
        let pos_y = document.getElementById("posY").textContent = `y position: ${Math.floor(particle_list[0].y)}`
    }    
}

setInterval(animation, 10)
