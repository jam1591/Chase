function pickItem() {
    for (let item of genItems) {

        let closestX = Math.max(item.x, Math.min(circle.x, item.x));
        let closestY = Math.max(item.y, Math.min(circle.y, item.y));
        let distanceX = circle.x - closestX;
        let distanceY = circle.y - closestY;
        distanceSquared = distanceX * distanceX + distanceY * distanceY;

        if (distanceSquared < (player.size * player.size)) {

            let valueToExclude = item.name;
            let filteredItems = genItems.filter(function (item) {
                return item.name !== valueToExclude;
            })

            genItems = filteredItems;

            if (item.type == 'health' && hp < 100) {
                hp += healthDrop;

                let myAudioPowerUp = document.getElementById("myAudioPowerUp");
                myAudioPowerUp.play();
                myAudioPowerUp.muted = false;

                picked = {};
                picked.name = Math.random();
                picked.type = item.type;
                picked.x = player.x;
                picked.y = player.y;
                picked.a = 1;
                picked.unicode = `+${healthDrop} ${item.unicode}`;
                pickedItems.push(picked);
                
            } else if (item.type == 'damage') {
                player.damage += damageDrop;


                let myAudioPowerUp = document.getElementById("myAudioPowerUp");
                myAudioPowerUp.play();
                myAudioPowerUp.muted = false;

                picked = {};
                picked.name = Math.random();
                picked.type = item.type;
                picked.x = player.x;
                picked.y = player.y;
                picked.a = 1;
                picked.unicode = `+${damageDrop} ${item.unicode}`;
                pickedItems.push(picked);

            } else if (item.type == 'range') {
                circle.r += rangeDrop;


                let myAudioPowerUp = document.getElementById("myAudioPowerUp");
                myAudioPowerUp.play();
                myAudioPowerUp.muted = false;
                
                picked = {};
                picked.name = Math.random();
                picked.type = item.type;
                picked.x = player.x;
                picked.y = player.y;
                picked.a = 1;
                picked.unicode = `+${rangeDrop} ${item.unicode}`;
                pickedItems.push(picked);

            }
        }
    }
}

function pickItemTextDelete() {
    for (let picked of pickedItems) {
        if (picked.a == 0) {
            let valueToExclude = picked.name;
            let filteredItems = pickedItems.filter(function (picked) {
                return picked.name !== valueToExclude;
            })
            pickedItems = filteredItems;
        }
    }
}
