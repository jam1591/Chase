function playerKill() {
    for (let mob of mobs) {
        let distanceSquared = collisionAI(mob.x, mob.size, circle.x, mob.y, mob.size, circle.y)
        if (distanceSquared < (player.size + mob.size)) {
            hp -= 1;
            if (hp === 0) {
                resetGame();
            }
        }
    }
    if (hp > 0) {
        score += 0.5;
    }
}

function resetGame() {
    score = 0;
    hp = 100;
    killCounter = 0;
    exp = 0;
    level = 0;
    spawnRate = 400 - killCounter;
    player.damage = 0.1;
    circle.r = 30;
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    mobs = [];
    genItems = [];
    pickedItems = [];
}

function playerPath(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    player.x = mouseX - player.size / 2;
    player.y = mouseY - player.size / 2;
    circle.x = player.x + player.size / 2;
    circle.y = player.y + player.size / 2;
}