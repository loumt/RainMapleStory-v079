
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
            text += "#e#d���ã�������ʣ�ྭ��һ���Ʒ��,�ȼ����뵽��70���ſɿ�ʼʹ��\r\n\r\n��ͬ�ȼ��ľ���ɶһ���ͬ����ƷŶ~��.#l\r\n\r\n"//3
            text += "#e#d����ǰ��ʣ�ྭ��ֵΪ��" + cm.getPlayer().getExp() + ".#l\r\n\r\n"//3

            text += "#L1##r��Ҫ��ʣ�ྭ��ֵ�һ�һ��#k�����飨���ӣ�#r(�ﵽ70����Ҫ200����ֵ)#l\r\n\r\n"//3

            text += "#L2##r��Ҫ��ʣ�ྭ��ֵ�һ�һ��#k���õ��#r(�ﵽ90����Ҫ500����ֵ)#l\r\n\r\n"//3

            text += "#L3##r��Ҫ��ʣ�ྭ��ֵ�һ�һ��#k����ֹͣ��#r(�ﵽ120����Ҫ1000����ֵ)#l\r\n\r\n"//3

            text += "#L4##r��Ҫ��ʣ�ྭ��ֵ�һ�һ��#k����֮һ(��Ȩ)#r(�ﵽ130����Ҫ5000����ֵ)#l\r\n\r\n"//3

            text += "#L5##r��Ҫ��ʣ�ྭ��ֵ�һ�һ��#k��Ӵ�����ѫ��#r(�ﵽ143����Ҫ1�ھ���ֵ)#l\r\n\r\n"//3

            cm.sendSimple(text);
        } else if (selection == 1) {//��Ʒ����
            if (cm.getPlayer().getExp() >= 2000000 && cm.getPlayer().getLevel() >= 70) {
                cm.gainItem(2370000, 1);// ����Ʒ
                cm.getPlayer().gainExp(-2000000, true, true, true);
                cm.ˢ��״̬();
                cm.sendOk("�һ��ɹ���");
                cm.����(1, "��ң�[" + cm.getName() + "]��200��ʣ�ྭ��ֵ�һ��˱����飨���ӣ�һ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ʣ�ྭ��ֵ���㣬�����ĵȼ�����70����");
                cm.dispose();
            }
        } else if (selection == 2) {//�����Ƿ�������Ҫ���
            if (cm.getPlayer().getExp() >= 5000000 && cm.getPlayer().getLevel() >= 90) {
                cm.gainItem(2022154, 1);// ����Ʒ
                cm.getPlayer().gainExp(-5000000, true, true, true);
                cm.ˢ��״̬();
                cm.sendOk("�һ��ɹ���");
                cm.����(1, "��ң�[" + cm.getName() + "]��500��ʣ�ྭ��ֵ�һ��˻��õ��һ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ʣ�ྭ��ֵ���㣬�����ĵȼ�����90����");
                cm.dispose();
            }
        } else if (selection == 3) {//�����Ƿ�������Ҫ���
            if (cm.getPlayer().getExp() >= 10000000 && cm.getPlayer().getLevel() >= 120) {
                cm.gainItem(2022245, 1);// ����Ʒ
                cm.getPlayer().gainExp(-10000000, true, true, true);
                cm.ˢ��״̬();
                cm.sendOk("�һ��ɹ���");
                cm.����(1, "��ң�[" + cm.getName() + "]��1000��ʣ�ྭ��ֵ�һ�������ֹͣ��һ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ʣ�ྭ��ֵ���㣬�����ĵȼ�����120����");
                cm.dispose();
            }
        } else if (selection == 4) {//�����Ƿ�������Ҫ���
            if (cm.getPlayer().getExp() >= 50000000 && cm.getPlayer().getLevel() >= 130) {
                cm.gainItem(4031674, 1);// ����Ʒ
                cm.getPlayer().gainExp(-50000000, true, true, true);
                cm.ˢ��״̬();
                cm.sendOk("�һ��ɹ���");
                cm.����(1, "��ң�[" + cm.getName() + "]��3000��ʣ�ྭ��ֵ�һ�������֮һ ��Ȩ һ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ʣ�ྭ��ֵ���㣬�����ĵȼ�����130����");
                cm.dispose();
            }
        } else if (selection == 5) {//�����Ƿ�������Ҫ���
            if (cm.getPlayer().getExp() >= 100000000 && cm.getPlayer().getLevel() >= 143) {
                cm.gainItem(1142299, 12, 12, 12, 12, 1000, 1000, 10, 10, 50, 50, 15, 15, 5, 5, 0, 0,0);
                cm.getPlayer().gainExp(-100000000, true, true, true);
                cm.ˢ��״̬();
                cm.sendOk("�һ��ɹ���");
                cm.����(1, "��ң�[" + cm.getName() + "]��1��ʣ�ྭ��ֵ�һ��� ��Ӵ����� - ��鹲ð��ѫ�� һ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("����ʣ�ྭ��ֵ���㣬�����ĵȼ�����143����");
                cm.dispose();
            }
        } else if (selection == 2) {//�����Ƿ�������Ҫ���
            if (cm.getPlayer().getExp() >= 100000 && cm.getPlayer.getLevel >= 50) {
                cm.gainItem(1113166, 1);// ����Ʒ
                cm.sendOk("�һ��ɹ���");
                cm.����(1, "��ң�[" + cm.getName() + "]��10��ʣ�ྭ��ֵ�һ���xxxxxһ�����ٽ�����Ŷ��");
                cm.dispose();
            } else {
                cm.sendOk("���Ĳ��ϲ��㣡");
                cm.dispose();
            }
        }
    }
}


