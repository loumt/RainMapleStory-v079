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
			text += "#L13##r��Ҫ��100��ɱ�������һ�#k10ƿ#v2022117##l\r\n\r\n"//3
			text += "#L12##r��Ҫ��300��ɱ�������һ�#k10��#v2022118##l\r\n\r\n"//3
			text += "#L11##r��Ҫ��1ǧ��ɱ�������һ�#k3W��ȯ#l\r\n\r\n"//3
			text += "#L10##r��Ҫ��1ǧ��ɱ�������һ�#k300W#v5200002##l\r\n\r\n"//3
			text += "#L9##r��Ҫ��2ǧ��ɱ�������һ�#k300ƿ#v2000004##l\r\n\r\n"//3
			text += "#L8##r��Ҫ��2ǧ��ɱ�������һ�#k300��#v4001126##l\r\n\r\n"//3
			text += "#L7##r��Ҫ��3ǧ��ɱ�������һ�#k300ƿ#v2000005##l\r\n\r\n"//3
			text += "#L6##r��Ҫ��3ǧ��ɱ�������һ�#k300��#v4001126##l\r\n\r\n"//3
			text += "#L5##r��Ҫ��5ǧ��ɱ�������һ�#k300ֻ#v4032226##l\r\n\r\n"//3
			text += "#L4##r��Ҫ��5ǧ��ɱ�������һ�#k300��#v4000313##l\r\n\r\n"//3
            text += "#L1##r��Ҫ��5ǧ��ɱ�������һ�#k5000W#v5200002##l\r\n\r\n"//3
            text += "#L2##r��Ҫ��1���ɱ�ִ����һ�#k����֮һ(���)#l\r\n\r\n"//3
            text += "#L3##r��Ҫ��10��ɱ�ִ����һ�#kɱ����ѫ��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getPlayer().getsg() >= 5000) {
                cm.getPlayer().gainsg(-5000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainMeso(50000000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��5ǧ��[ɱ������]�һ���5000��ð�ձң��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������5ǧ");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getsg() >= 10000) {
                cm.getPlayer().gainsg(-10000);
               cm.gainItem(4032169,1);//��Ʒ�Լ���
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1���[ɱ������]�һ�������֮һ(���)���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ɱ����������1��");
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
        } else if (selection == 4) {
            if (cm.getPlayer().getsg() >= 5000) {
                cm.getPlayer().gainsg(-5000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4000313,300);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��5000��[ɱ������]�һ���300�Ž�Ҷ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           } 
		           } else if (selection == 5) {
            if (cm.getPlayer().getsg() >= 5000) {
                cm.getPlayer().gainsg(-5000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4032226,300);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��5000��[ɱ������]�һ���300ֻ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           } 
		   } else if (selection == 6) {
            if (cm.getPlayer().getsg() >= 3000) {
                cm.getPlayer().gainsg(-3000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4001126,300);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��3000��[ɱ������]�һ���300�ŷ�Ҷ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 7) {
            if (cm.getPlayer().getsg() >= 3000) {
                cm.getPlayer().gainsg(-3000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2000005,300);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��3000��[ɱ������]�һ���300ƿ����ҩˮ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 8) {
            if (cm.getPlayer().getsg() >= 2000) {
                cm.getPlayer().gainsg(-2000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(4001126,300);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��2000��[ɱ������]�һ���300�ŷ�Ҷ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 9) {
            if (cm.getPlayer().getsg() >= 2000) {
                cm.getPlayer().gainsg(-2000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2000004,300);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��2000��[ɱ������]�һ���300ƿ����ҩˮ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 10) {
            if (cm.getPlayer().getsg() >= 1000) {
                cm.getPlayer().gainsg(-1000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainMeso(3000000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1000��[ɱ������]�һ���300W��ң��ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 11) {
            if (cm.getPlayer().getsg() >= 1000) {
                cm.getPlayer().gainsg(-1000);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainNX(30000);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��1000��[ɱ������]�һ���3W��ȯ���ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 12) {
            if (cm.getPlayer().getsg() >= 300) {
                cm.getPlayer().gainsg(-300);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2022118,10);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��300��[ɱ������]�һ���10������Ա��ף�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
		   } else if (selection == 13) {
            if (cm.getPlayer().getsg() >= 100) {
                cm.getPlayer().gainsg(-100);
               // cm.gainItem();//��Ʒ�Լ���
                cm.gainItem(2022117,10);
                cm.sendOk("�һ��ɹ���");
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��100��[ɱ������]�һ���10ƿ��Ҷ�ǽ����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
           }
        }
    }
}


