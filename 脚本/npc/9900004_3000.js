/* global cm */

function start() {
    cm.sendSimple("����Ҫ��ս����������ˣ�������ҡ�\r\nÿ��ÿ����Խ���10��Ŷ~��\r\n#k#L0#��ս���� \r\n#L1#��ȥ�ˣ��Һ���#k \r\n")
}


function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getLevel() < 100) {
                cm.sendOk("��ս���ӵ���͵ȼ�Ϊ100������ȥ�����ɣ�");
            } else if (cm.getBossLog('naozhong') > 10) {
                cm.sendOk("��Ǹ��ÿ��ֻ�ܲμ�10��");
                cm.dispose();
            } else {
                cm.setBossLog('naozhong');
                cm.warp(220080001, 0);
		cm.deleteboss();
                cm.getPlayer().bossmap(cm.getPlayer().getId(), 220080001, 1);
                cm.serverNotice("����ս���ӡ�����" + cm.getChar().getName() + "������η����ȥ��ս����BOSSȥ��");
                cm.dispose();
            }
            break;
        case 1:
            cm.sendOk("���㿼�Ǻ��������Ұ�");
            cm.dispose();

    }
}
