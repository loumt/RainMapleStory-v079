function start() {
    cm.sendYesNo("����������뿪���㽫���ò����¿�ʼ����ȷ��Ҫ�뿪���ﵽ����ȥ��");
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (!cm.isLeader()) {
            cm.deleteboss();
            cm.warpParty(270050000);
        }
        cm.dispose();
    }
}