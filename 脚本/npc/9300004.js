/* 
	�ű�����: 		NPC
	���ڵ�ͼ:		���ǵ�
	�ű�����:		���NPC
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("��ã�����������Ҫ��ʲô��\r\n#b#L0#��Ҫ���#l\r\n#L1#ɾ����ָ#l#k");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendYesNo("�������ȷ����������飿ȷ�����Ҫ�������");
        } else {
            var selStr = "ɾ����ָ�����ҿ�������ʲô...";
            var found = false;
            for (var i = 1112300; i < 1112312; i++) {
                if (cm.haveItem(i)) {
                    found = true;
                    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
                }
            }
            for (var i = 2240004; i < 2240016; i++) {
                if (cm.haveItem(i)) {
                    found = true;
                    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
                }
            }
            if (!found) {
                cm.sendOk("��û�п�ɾ���Ľ�ָ��");
                cm.dispose();
            } else {
                cm.sendSimple(selStr);
            }
        }
    } else if (status == 2) {
        if (selection == -1) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendNext("�Ҳ��������ʲô�����ģ����������û�н�飿");
                cm.dispose();
            } else {
                if (cm.getMeso() >= 1000000) {
                    cm.handleDivorce();
                    cm.gainMeso( - 1000000);
                } else {
                    cm.sendNext("�����������Ҫ100����,��û���㹻�Ľ�ҡ�");
                    cm.dispose();
                }
            }
        } else {
            if (selection >= 1112300 && selection < 1112312) {
                cm.gainItem(selection, -1);
                cm.sendOk("�Ѿ������ #v" + selection + "##t" + selection + "##l ɾ��..");
            } else if (selection >= 2240004 && selection < 2240016) {
                cm.gainItem(selection, -1);
                cm.sendOk("�Ѿ������ #v" + selection + "##t" + selection + "##l ɾ��..");
            }
        }
        cm.dispose();
    }
}
