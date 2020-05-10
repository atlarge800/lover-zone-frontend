window.addEventListener('load', function() {
    var body = document.getElementsByTagName("body")[0];
    var canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.zIndex = -1;
    canvas.style.top = 0;
    canvas.style.left = 0;
    body.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    var mp = 25;
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 4 + 1,
            d: Math.random() * mp
        })
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    var angle = 0;

    function update() {
        angle += 0.01;
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0) {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d
                    };
                } else {
                    if (Math.sin(angle) > 0) {
                        particles[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d
                        };
                    } else {
                        particles[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d
                        };
                    }
                }
            }
        }
    }
    setInterval(draw, 33);
});
