var status = -1;

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendSimple("�ط����ϻ���Ҫ#b�����Ԫ��#k...#b\r\n#L0#�Ҵ���10�������Ԫ��Т������#l\r\n#L1#��Ҫ��20������������һ���ñ\r\n#L2#��Ҫ������#l#k");
	} else if (status == 1) {
		if (selection == 0) {
			if (!cm.isLeader()) {
				cm.sendNext("ֻ�жӳ������Ҳ�Ҫ��");
		                cm.dispose();
			} else {
				if (cm.haveItem(4001101,10)) {
					cm.gainItem(4001101, -10);
					cm.showEffect(true, "quest/party/clear");
					cm.playSound(true, "Party1/Clear");
					cm.givePartyExp(1600);
					cm.endPartyQuest(1200);
					cm.warpParty(910010100);
		                        cm.dispose();
				} else {
					cm.sendNext("���� ��Ҫ����");
		                        cm.dispose();
				}
			}
			} else if (selection == 2) {
          cm.warp(910000000, 0);			
		} else if (selection == 1) {
	if (cm.haveItem(1002798,1)) {
	    cm.sendOk("���Ѿ�����");
	} else if (!cm.canHold(1002798,1)) {
	    cm.sendOk("���Ѿ�����");
	} else if (cm.haveItem(4001101,20)) {
	    cm.gainItem(4001101,-20); //should handle automatically for "have"
	    cm.gainItem(1002798,1);
	} else {
	    cm.sendOk("����Ҫ20�������Ԫ��");
	}
		cm.dispose();
	}
	}
}