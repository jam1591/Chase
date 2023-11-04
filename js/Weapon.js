function damageChoice() {
    if (weaponChoice === 0) {
        for (let mob of mobs) {
            let distanceSquared = collisionAI(mob.x, mob.size, circle.x, mob.y, mob.size, circle.y)
            if (distanceSquared < ((circle.r) * (circle.r))) {
                mob.hp -= (player.damage);
                if (mob.hp <= 0) {
                    mob.hp = 0;
                }
            }
        }
    }
}