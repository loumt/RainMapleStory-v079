/**
 * PB������(��)
 * @type {number}
 */
function start() {
    if (cm.isLeader()) {
        cm.sendYesNo("������������뿪�����ǽ����ò����¿�ʼ������ȷ��Ҫ�뿪���ﵽ����ȥ��");
    }else{
        cm.sendYesNo("����������뿪���㽫�����ٴν��롣��ȷ��Ҫ�뿪���ﵽ����ȥ��");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.isLeader()) {
            cm.warpParty(270050000, 0)
        }else{
            cm.warp(270050000, 0);
        }
    }
    cm.dispose();
}