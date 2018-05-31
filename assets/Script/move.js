var GameManager = require("GameManager");
cc.Class({
    extends: cc.Component,

    properties: {
        currentSpeed: 0,
        directSpeed: 0,
        speedUp: true,
        acceleration:0.01,
    },

    onLoad() {
    },

    start() {
        this.getSpeed();
        cc.log(GameManager._instance.trainSpeed);
        cc.log(this);
    },

    update(dt) {
        // if(this.node.)
        if (this.currentSpeed < this.directSpeed && this.speedUp == true) {
            this.currentSpeed += this.acceleration;
        }
        if (this.currentSpeed > this.directSpeed && this.speedUp == false) {
            this.currentSpeed -= this.acceleration;
        }
        this.node.x -= this.currentSpeed;
        // cc.log(this.name +":"+this.node.x);
        if (this.node.x < -2000) {
            this.node.x += 4800;
        }
    },
    getSpeed() {
        this.directSpeed = GameManager._instance.trainSpeed;
    },
});
