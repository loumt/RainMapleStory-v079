/* global cm */

function start() {
    cm.sendSimple("����Ҫ��ս����BOSS������ˣ�������ҡ�\r\nÿ��ÿ����Խ���10��Ŷ~��\r\n#k#L0#��ս���� \r\n#L1#��ȥ�ˣ��Һ���#k \r\n")
}


function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getLevel() < 100) {
                cm.sendOk("��ս��������͵ȼ�Ϊ100������ȥ�����ɣ�");
            } else if (cm.getBossLog('yuwang') > 10) {
                cm.sendOk("��Ǹ��ÿ��ֻ�ܲμ�10��");
                cm.dispose();
            } else {
                cm.setBossLog('yuwang');
                cm.warp(230040420, 0);
		cm.deleteboss();
                cm.getPlayer().bossmap(cm.getPlayer().getId(), 230040420, 4);
                cm.serverNotice("����ս����������" + cm.getChar().getName() + "������η����ȥ��ս����BOSSȥ��");
                cm.dispose();
            }
            break;
        case 1:
            cm.sendOk("���㿼�Ǻ��������Ұ�");
            cm.dispose();

    }
}
