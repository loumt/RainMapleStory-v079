var name = '�泡���������';
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
            cm.sendNext("�쿴, �Ǹ����ڵ���.....");
        }else{
            cm.sendNext("����������� ..... �쿴, �Ǹ����ڵ���.....");
            cm.gainItem(1432039, 1);
        }
    }else if(status == 1) {
        cm.sendOk("����......������.....");
        cm.dispose();
    }
}