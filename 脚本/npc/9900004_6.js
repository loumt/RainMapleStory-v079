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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#r������ÿ����������\r\n����������Ҫ70���ſ�����ȡ��\r\n\r\n"//3
            text += "#L1# ÿ�ո�������.#l\r\n\r\n"//3
            text += "#L2# ÿ��ɱ������.#l\r\n\r\n"//3
            text += "#L3# ÿ���ͽ�����.#l\r\n\r\n"//3
            text += "#L4# ÿ��BOSS����.#l\r\n\r\n"//3
            text += "#L5# ÿ���ܻ�����.#l#L6# �ܻ�����״̬��ѯ.#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9900004, 100);
        } else if (selection == 2) {
		cm.openNpc(9900004, 101);
        } else if (selection == 3) {
		cm.openNpc(9900004, 102);
        } else if (selection == 4) {
		cm.openNpc(9900004, 103);
        } else if (selection == 5) {
		cm.openNpc(9900004, 104);
        } else if (selection == 6) {
		cm.openNpc(9900004, 105);
	}
    }
}


