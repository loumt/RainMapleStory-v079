function start(npcid) {
	cm.sendOk("��~ ����û������NPC.\r\n�ҵĴ����� #r" + npcid.toString() + "#k." + "����������ͱ�ʾ��� NPC û�й���\r\n������Ǹ�����Ҫ�� NPC ����ϵ GM\r\nлл�� !");
	cm.safeDispose();
}

function action(mode, type, selection) {
	cm.sendOk("����������ͱ�ʾ��� NPC û�й���\r\n������Ǹ�����Ҫ�� NPC ����ϵ GM\r\nлл�� !");
	cm.safeDispose();
}