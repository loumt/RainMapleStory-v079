/* global cm */

function start() {
//�����ǽű���ʼ��
//4000463 - �������� - �ǹ�������
//970030020 - ���ص�ͼ - ������Ա����
    //�ж���ұ����Ƿ���ڹ���ң�����������ڵ�ͼ��- ���ص�ͼ - ������Ա����
    if (cm.haveItem(4000463) && cm.getChar().getMapId() == 970030020) {
        cm.sendSimple("#b" + cm.getChar().getName() + "\r\n\r\n��δ����27������ \r\n\r\n#L1#��Ҫ�뿪����#l");
    } else {
        cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������");
        cm.dispose();
    }
}
function action(mode, type, selection) {
    cm.dispose();
    if (selection == 0) {
        if (cm.getBossLog("ÿ������") == 0) {//
            cm.warp(970030100, 0);//���ͽ����һ��
            cm.setBossLog('ÿ������');
            cm.dispose();
        } else {
            cm.sendOk("��ÿ��ֻ����սһ��27����������");
            cm.dispose();
        }
    } else if (selection == 1) {
        cm.warp(910000000, 0);//���͵������г�
        cm.dispose();
    }
}