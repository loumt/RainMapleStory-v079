var name = '渔场管理人余夫';
var code = '9330045'
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 1){
        status ++
    }

    if(status == 0) {
        if(cm.haveItem(1432039, 1)){
            cm.sendNext("快看, 那个人在钓鱼.....");
        }else{
            cm.sendNext("给你个东西吧 ..... 快看, 那个人在钓鱼.....");
            cm.gainItem(1432039, 1);
        }
    }else if(status == 1) {
        cm.sendOk("快快快......鱼鱼鱼.....");
        cm.dispose();
    }
}