export default {
    addCollider(otherGame, callback) {
        this.scene.physics.add.collider(this, otherGameobject, callback, null, this);
    }
}