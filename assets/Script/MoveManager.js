cc.Class({
    extends: cc.Component,

    properties: {
        track: {
            default: null, type: cc.Node,
        },
        trackNext: {
            default: null, type: cc.Node,
        },
        landFront: {
            default: null, type: cc.Node,
        },
        landFrontNext: {
            default: null, type: cc.Node,
        },
        landBack: {
            default: null, type: cc.Node,
        },
        landBackNext: {
            default: null, type: cc.Node,
        },
        wind: {
            default: null, type: cc.Node,
        },
        windNext: {
            default: null, type: cc.Node,
        },
        flyThings: {
            default: null, type: cc.Node,
        },
        sky: {
            default: null, type: cc.Node,
        },
        skyNext : {
            default: null, type: cc.Node,
        },

        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
