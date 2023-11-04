
function updatePlayer() {
    let myAudioStageOne = document.getElementById("myAudioStageOne");
    myAudioStageOne.play();
    myAudioStageOne.muted = false;
    
    //Clear All
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Background
    createBox(0, 0, canvas.width, canvas.height, 'black');

    //Weapon
    if (weaponChoice === 0) {
        createCircle(circle.x, circle.y, circle.r, 'black', 0, 'black', 'white', 5);
    }

    //Player
    createBox(player.x, player.y, player.size, player.size, 'red', 'red', 20);

    //Health Bar
    createBox(canvas.width / 2 - ((hp * 3) / 2), 10, hp * 3, 30, 'red', 'red', 20);
    createText(`\u{2764} HEALTH: ${Math.round(hp)}/100`, (canvas.width / 2 - ((hp * 3) / 2)) + (hp * 0.6), 33, 'black', 'black', 20, '24px Mortal Kombat');

    //Exp bar
    createBox(canvas.width / 2 - (300 / 2), 45, exp, 2, 'yellow', 'yellow', 5);
    createText(`Lv: ${level}`, ((canvas.width / 2) + 180), 40, 'white', 'white', 20, '38px Mortal Kombat');

    //Mobs
    const latestMobs = mobs.slice(-50);

    for (let mob of latestMobs) {
        createBox(mob.x, mob.y, mob.size, mob.size, 'white', 'white', 5);
        createBox(mob.x, mob.y + mob.size + 7, mob.hp, 5, 'white', 'white', 5);
    }

    //Items
    for (let item of genItems) {
        createText(item.unicode, item.x, item.y, 'red', 'white', 20, '22px Mortal Kombat');
    }

    //Stats
    createText(`SCORE: ${Math.round(score)}`, 10, 30, 'white', 'transparent', 0, '15px Mortal Kombat');
    createText(`\u{1F525} DAMAGE: ${ Math.round(player.damage* 100) / 100 }`, 10, 60, 'white', 'transparent', 0, '15px Mortal Kombat');
    createText(`\u{1F3AF} RANGE: ${(circle.r)}`, 10, 90, 'white', 'transparent', 0, '15px Mortal Kombat');
    createText(`KILL COUNTER: ${(killCounter)}`, 10, 120, 'white', 'transparent', 0, '15px Mortal Kombat');
    createText(`SPAWN RATE: ${(spawnRate - killCounter)}`, 10, 150, 'white', 'transparent', 0, '15px Mortal Kombat');
    createText(`MOB SIZE MODIFIER: ${mobSizeModifier}`, 10, 180, 'white', 'transparent', 0, '15px Mortal Kombat');
    createText(`MOB SPEED MODIFIER: ${mobSpeedModifier}`, 10, 210, 'white', 'transparent', 0, '15px Mortal Kombat');

    //Item pickup message

       for (let picked of pickedItems) {

        function drawTemp() {

            ctx.fillStyle = `rgba(255, 32, 32, ${picked.a})`;
            ctx.font = '18px Mortal Kombat';
            ctx.fillText(picked.unicode, picked.x, picked.y);

            picked.a -= 0.0005;

            if ( picked.a < 0) {
                picked.a=0;
            }
            if (picked.a > 0) {
                requestAnimationFrame(drawTemp);
            }

        }
        drawTemp();
    }
}