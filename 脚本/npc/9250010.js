function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#e���ã���ӭ����#r����ð�յ�������#k�������Զ��ۻ�Ա:\r\n\r\n  #dʣ����:#r" + cm.getMeso() + "    \r\n#g#L0#��Ҷһ�����#l #k\r\n\r\n #L1#�ӻ�С��#l #L4#�弶����#l #L6#�弶����#l\r\n #L2#��������#l #L5#��������#l #L3#��ָר��#l \r\n #L13#��Ҷר�� #L8#��Ʒ���� #L9#ͷ������#l\r\n #L10#�߼����� #L11#�ٻ��̵� #L12#�ٻ�BOSS #L14#ѫ���̵�");
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendOk("#e��Ϸ�еĽ����ȫ���Կ�Ŭ���Լ�׬ȡ�������г����Ž�Ҷһ�ϵͳ�������������QQȺ������940329930");
                cm.dispose();
            } else if (selection == 1) {
                cm.openShop(30);
                cm.dispose();
            } else if (selection == 4) {
                cm.openShop(74);
                cm.dispose();
            } else if (selection == 6) {
                cm.openShop(63);
                cm.dispose();
            } else if (selection == 2) {
                cm.openShop(109);
                cm.dispose();
            } else if (selection == 5) {
                cm.openShop(108);
                cm.dispose();
            } else if (selection == 3) {
                cm.openShop(104);
                cm.dispose();
            } else if (selection == 7) {
                cm.openShop(110);
                cm.dispose();
            } else if (selection == 8) {
                cm.openShop(111);
                cm.dispose();
            } else if (selection == 9) {
                cm.openShop(93);
                cm.dispose();
            } else if (selection == 10) {
                cm.openShop(66);
                cm.dispose();
            } else if (selection == 11) {
                cm.openShop(112);
            } else if (selection == 12) {
                cm.openNpc(2071000, 0);
            } else if (selection == 13) {
                cm.openShop(103);
            } else if (selection == 14) {
                cm.openShop(113);
            }
        }
    }
}

