function start() {
	if (cm.getPlayer().getClient().getChannel() == 3) {
        cm.dispose();
        cm.openNpc(2083004, 1);
    } else {
        cm.sendOk("ֻ����3Ƶ���ſ��ԲμӺ���Զ����");
        cm.dispose();
    }
}