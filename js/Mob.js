function mobPath(event) {
    for (let mob of mobs) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        let distanceX = mob.x - mouseX;
        let distanceY = mob.y - mouseY;
        if (distanceX < 0 && distanceY < 0) {
            mob.x += mob.speed;
            mob.y += mob.speed;
        }
        if (distanceX > 0 && distanceY > 0) {
            mob.x -= mob.speed;
            mob.y -= mob.speed;
        }
        if (distanceX < 0 && distanceY > 0) {
            mob.x += mob.speed;
            mob.y -= mob.speed;
        }
        if (distanceX > 0 && distanceY < 0) {
            mob.x -= mob.speed;
            mob.y += mob.speed;
        }
    }
}

function mobKill() {
    for (let mob of mobs) {
        let valueToExclude = mob.name;
        if (mob.hp <= 0) {

            let myAudioMobDeath = document.getElementById("myAudioMobDeath");
            myAudioMobDeath.play();
            myAudioMobDeath.muted = false;

            let filteredMobs = mobs.filter(function (mob) {
                return mob.name !== valueToExclude;
            });

            

            mobs = filteredMobs;
            killCounter += 1;
            exp += mobExp;

            if ( exp > 300) {
                level += 1;
                exp = 0;
                
                let myAudioLevelUp = document.getElementById("myAudioLevelUp");
                myAudioLevelUp.play();
                myAudioLevelUp.muted = false;

                let levelUpgradeChance = Math.random();

                if (levelUpgradeChance <= 0.33) {
                    //need to do maxHP later
                    hp + healthLevel;

                    picked = {};
                    picked.name = Math.random();
                    picked.type = item.type;
                    picked.x = player.x;
                    picked.y = player.y;
                    picked.a = 1;
                    picked.unicode = `+${healthLevel} \u{2764}`;
                }  else if (levelUpgradeChance > 0.33 && levelUpgradeChance <= 0.66) {
                    player.damage += damageLevel;

                    picked = {};
                    picked.name = Math.random();
                    picked.type = item.type;
                    picked.x = player.x;
                    picked.y = player.y;
                    picked.a = 1;
                    picked.unicode = `+${damageLevel} \u{1F525}`;
                    pickedItems.push(picked);
                } else if (levelUpgradeChance > 0.66 && levelUpgradeChance <= 0.99) {
                    circle.r += rangeLevel;

                    picked = {};
                    picked.name = Math.random();
                    picked.type = item.type;
                    picked.x = player.x;
                    picked.y = player.y;
                    picked.a = 1;
                    picked.unicode = `+${rangeLevel} \u{1F3AF}`;
                    pickedItems.push(picked);    
                }
            }
 
            let itemChance = Math.random();
            if (itemChance < dropChance) {
                let randomItem = Math.ceil(Math.random() * 3);
                for (let i = 0; i < items.length; i++) {
                    let dict = items[i];
                    if (dict.id === randomItem && randomItem === 1) {
                        item = {};
                        item.name = Math.random();
                        item.size = 30;
                        item.x = mob.x;
                        item.y = mob.y;
                        item.type = dict.type;
                        item.unicode = `\u{1F525}`;
                        genItems.push(item);
                    } else if (dict.id === randomItem && randomItem === 2) {
                        item = {};
                        item.name = Math.random();
                        item.size = 30;
                        item.x = mob.x;
                        item.y = mob.y;
                        item.type = dict.type;
                        item.unicode = `\u{2764}`;
                        genItems.push(item);
                    } else if (dict.id === randomItem && randomItem === 3) {
                        item = {};
                        item.name = Math.random();
                        item.size = 30;
                        item.x = mob.x;
                        item.y = mob.y;
                        item.type = dict.type;
                        item.unicode = `\u{1F3AF}`;
                        genItems.push(item);
                    }
                }
            }
        }
    }
}