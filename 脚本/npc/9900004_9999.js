function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            //��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#L1##r������ȡ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(2022336, 1)) {//�����ж��Ƿ�����������ӣ�����������ӣ�
                cm.gainItem(2022336, -1);//ɾ�������ڵ�����
                cm.gainDY(2000);//������þ�10000��
				cm.gainItem(1142358, 1);//�ɰ�������
                cm.gainItem(5150001, 1);//����- ���ִ�������߼���Ա�� - �����ִ������������һ�εĻ�Ա��.���԰ѷ��ͱ任��Ը�������
                cm.gainItem(5152001, 1);//����- ���ִ����������߼���Ա�� - �����ִ���������ҽԺ������һ�εĻ�Ա��.���԰����任����Ҫ������.
                cm.sendOk("��ȡ�ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��ȡ��MapleStory���˴����һ�ݣ�");
                cm.dispose();
            } else {
                cm.sendOk("����أ���ȥ�ˣ���û�������������ô�򿪵ģ���");
                cm.dispose();
            }
        }
    }
}


