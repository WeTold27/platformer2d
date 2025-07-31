import Enemy from './Enemy';
import initAnims from './anims/birdmanAnims'

class Birdman extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 'birdman');
        initAnims(scene.anims);
    }
    
    update(time, delta) {
        super.update(time, delta);
        this.play('birdman-idle', true);
    }
    
    // shootProjectile() {
    //    
    // }
}

export default Birdman;

// class Snaky extends Enemy {
//     constructor(scene, x, y) {
//         super(scene, x, y, 'snaky');
//     }
//     superAttack() {
//        
//     }
// }
//
// export default Snaky;
//
// class Tank extends Enemy {
//     constructor(scene, x, y) {
//         super(scene, x, y, 'tank');
//     }
//    
//     defensiveShield() {
//        
//     }
// }
//
// export default Tank;