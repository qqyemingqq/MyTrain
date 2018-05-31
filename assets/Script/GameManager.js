// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var GameManager = cc.Class({
    extends: cc.Component,
    properties: {
        trainSpeed : 20,
    },
    statics:{
        _instance : null
    },
    onLoad(){
        cc.warn(" ============== GameManager init" );
        GameManager._instance = this; 
         //设置帧率
        cc.game.setFrameRate(60);
        //设置该对象为不销毁
        cc.game.addPersistRootNode(this.node);
    },
    start () {
        
    },

    // update (dt) {},
});
GameManager.instance = new GameManager();
module.exports = GameManager;
