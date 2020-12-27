// var canvas = document.querySelector('canvas');
// var conText = "Xin chao Canvas!";
// console.log(canvas);
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.innerText = conText;
// canvas.style.textAlign = "center";
// var c = canvas.getContext('2d');
// // c.fillRect(200, 100, 100, 100);
// // c.strokeStyle = "#000";
// // c.fillStyle = 'red';
// // c.fillRect(400, 90, 100, 100);
// // c.strokeRect(600, 100, 100, 100);
// // //line
// // c.beginPath();
// // c.moveTo(50, 300);
// // c.lineTo(100, 20);
// // c.lineTo(200, 220);
// // c.strokeStyle = "red";
// // c.stroke();

// // for (i = 0; i < 100; i++) {
// //     var x = Math.random() * window.innerWidth;
// //     var y = Math.random() * window.innerHeight;
// //     c.beginPath();
// //     c.arc(x, y, 50, 0, 2 * Math.PI, false);
// //     c.stroke();
// // }
// var mouse = {
//     x: undefined,
//     y: undefined
// }
// window.addEventListener('mousemove', function(event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(mouse);
// });
// window.addEventListener('resize', function() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

// })
// var ColorArray = ["red", "#333", "#f3b4b5", "ff0044"];

// function Circle(x, y, dx, dy, radius) {
//     this.color = ColorArray[Math.floor(Math.random() * ColorArray.length)];
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//         c.fillStyle = this.color;

//         c.fill();

//     }
//     this.update = function() {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }
//         this.x += this.dx;
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.y += this.dy;
//         if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//             if (this.radius < 40) {
//                 this.radius += 1;
//             }
//         } else if (this.radius > 3) {
//             this.radius -= 1;
//         }

//         this.draw();
//     }

// }
// var circleArray = [];
// for (var i = 0; i < 700; i++) {
//     var x = Math.random() * (innerWidth - radius * 2) + radius;
//     var y = Math.random() * (innerHeight - radius * 2) + radius;
//     var radius = Math.random() * 3 + 1;
//     var dx = (Math.random() - 0.5);
//     var dy = (Math.random() - 0.5);


//     circleArray.push(new Circle(x, y, dx, dx, radius));
// }


// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     for (var i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }
//     // circle.update();
//     // c.beginPath();
//     // c.arc(x, y, radius, 0, 2 * Math.PI, false);
//     // c.strokeStyle = 'blue';
//     // c.stroke();
//     // if (x + radius > innerWidth || x - radius < 0) {
//     //     dx = -dx;
//     // }
//     // x += dx;
//     // if (y + radius > innerHeight || y - radius < 0) {
//     //     dy = -dy;
//     // }
//     // y += dy;



// }
// animate();
// var mouse = {
//     x: undefined,
//     y: undefined
// };

// window.addEventListener('mousemove', function(event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(mouse);
// })
// var canvas = document.querySelector('canvas');
// console.log(canvas);
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext('2d');
// var color = ["#2980b9", "#e74c3c", "#f1c40f", "#27ae60", "#9b59b6"];

// function Circle(x, y, radius, dx, dy) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = color[Math.floor(Math.random() * color.length)];
//     this.paint = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//         c.fillStyle = this.color;
//         c.fill();

//     }
//     this.update = function() {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }
//         this.x += this.dx;
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.y += this.dy;
//         if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//             if (this.radius < 40) {
//                 this.radius += 1;
//             }
//         } else if (this.radius > 3) {
//             this.radius -= 1;
//         }
//         this.paint();
//     }

// }
// circleArray = [];
// for (var i = 0; i < 3000; i++) {
//     var x = (Math.random() * (innerWidth - radius * 2)) + radius;
//     var y = (Math.random() * (innerHeight - radius * 2)) + radius;
//     var dx = (Math.random() * 0.5);
//     var dy = (Math.random() * 0.5);
//     var radius = Math.random() * 50;
//     circleArray.push(new Circle(x, y, radius, dx, dy));
// }

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     for (var i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }


//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }
//     x += dx;
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }
//     y += dy;



// }
// animate();
var canvas = document.querySelector('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 1;
var dy = 1;
var ColorArray = ["#40407a", "#706fd3", "#34ace0", "#33d9b2", "#ff5252", "#cd6133", "#ffda79"]

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = ColorArray[Math.floor(Math.random() * ColorArray.length)];
    this.radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();

    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - 50 < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        if (this.y + 50 > innerHeight || this.y - 50 < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < 40) {
                this.radius += 1;
            }
        } else if (this.radius > 3) {
            this.radius -= 1;
        }


        this.draw();
    }

}
circleArray = [];
for (var i = 0; i < 600; i++) {
    var x = (Math.random() * (innerWidth - radius * 2)) + radius;
    var y = (Math.random() * (innerHeight - radius * 2)) + radius;
    var dx = 1;
    var dy = 1;
    var radius = Math.random() * 50;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }


    if (x + 50 > innerWidth || x - 50 < 0) {
        dx = -dx;
    }
    x += dx;
    if (y + 50 > innerHeight || y - 50 < 0) {
        dy = -dy;
    }
    y += dy;
}
animate();