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
            text += "#e#d���ã�������ɱ�������һ���Ʒ��\r\n\r\n�һ���۳���Ӧɱ�ִ�����.#l\r\n\r\n"//3
            text += "#e#d����ǰ��ɱ������Ϊ��" + cm.getPlayer().getsg() + ".#l\r\n\r\n"//3
            text += "#L1##r��Ҫ��1���ɱ�������һ�#k300Wð�ձ�#l\r\n\r\n"//3
            text += "#L2##r��Ҫ��5���ɱ�ִ����һ�#k����֮һ(���)#l\r\n\r\n"//3
            text += "#L3##r��Ҫ��10��ɱ�ִ����һ�#kɱ����ѫ��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getPlayer().getsg() >= 10000) {
                cm.getPlayer().gainsg(-10000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainMeso(3000000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1���[ɱ������]�һ���300��ð�ձң��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������1��");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getsg() >= 50000) {
                cm.getPlayer().gainsg(-50000);
               cm.gainItem(4032169,1);//��Ʒ�Լ���
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��5���[ɱ������]�һ�������֮һ(���)���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������5��");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getsg() >= 100000) {
                cm.getPlayer().gainsg(-100000);
                //cm.getPlayer().modifyCSPoints(1, 1000, true);
                cm.gainItem(1142650, 10, 10, 10, 10, 1000, 1000, 8, 8, 50, 50, 15, 15, 5, 5, 0, 0, 0);
                //cm.gainMeso(100000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��10��[ɱ������]�һ���ɱ����ѫ�£��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������10��");
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.getPlayer().getsg() >= 1000) {
                cm.getPlayer().gainsg(-1000);
                cm.getPlayer().modifyCSPoints(1, 1000, true);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainMeso(100000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1000��[ɱ������]�һ���1000����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           } 
        }
    }
}


