/* global cm */

function start() {
    cm.sendSimple("����Ҫ��ս��ͨ��������������ˣ�������ҡ�\r\nÿ��ÿ����Խ���10��Ŷ~��\r\n#k#L0#��ս��������(��ͨ) \r\n#L1#��ȥ�ˣ��Һ���#k \r\n")
}


function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getLevel() < 120) {
                cm.sendOk("��ս��ͨ������������͵ȼ�Ϊ120������ȥ�����ɣ�");
            } else if (cm.getBossLog('ptheilong') > 5) {
                cm.sendOk("��Ǹ��ֻ�ܲμ�5��");
                cm.dispose();
            } else {
                cm.setBossLog('ptheilong');
                cm.warp(240060200, 0);
		cm.deleteboss();
                cm.getPlayer().bossmap(cm.getPlayer().getId(), 240060200, 3);
                cm.serverNotice("����ս����������" + cm.getChar().getName() + "������η����ȥ��ս������BOSS(��ͨ�Ѷ�)ȥ��");
                cm.dispose();
            }
            break;
        case 1:
            cm.sendOk("���㿼�Ǻ��������Ұ�");
            cm.dispose();

    }
}
