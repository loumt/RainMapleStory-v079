var status = 0;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("����ӵ�и����ݼ�����,��ս���и���Զ���빥��,���繭��ְҵ����������õ��ƵĻ�,���Կ��Ƿǳ�����������");
		} else if (status == 1) {
			cm.sendYesNo("��ô�����������鹭����");
		} else if (status == 2) {

			cm.warp(1020300);
			cm.dispose();
		}
	}
}	