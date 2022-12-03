const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4,
};


window.onload = function () {
    const canvasOg = document.querySelector("canvas");
    const context = canvasOg.getContext('2d');

    canvasOg.width = GameViewport.WIDTH;
    canvasOg.height = GameViewport.HEIGHT;

    const [ryu, background] = document.querySelectorAll('img');
    const position = {
        x: GameViewport.WIDTH / 2 - ryu.width / 2,
        y: 110,
    };

    let velocity = 3;

function frame() {
    position.x += velocity;

    if (position.x > GameViewport.WIDTH - ryu.width || position.x < 0) {
        velocity = -velocity;
    }

    // context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
    context.drawImage(background, 0,0);

    // context.strokeStyle = 'yellow';
    // context.moveTo(0,0);
    // context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    // context.moveTo(GameViewport.WIDTH, 0);
    // context.lineTo(0, GameViewport.HEIGHT);
    // context.stroke();

    context.drawImage(ryu, position.x, position.y);

    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);
 
// console.log(context);
} 