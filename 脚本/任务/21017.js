var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 5) {
	    qm.sendNext("#b(�ú��µ����鰴�¾ܾ��������ֲ�����������..���������̸������)#k", 2);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("���ڽ��Ӧ�ö��ɿ��˰ɣ���ʱ���ϸ�Ķ���������ӵ�������Ļ����������ã���ô���Ǽ������л�������������", 8);
    } else if (status == 1) {
	qm.sendNextPrev("����ǰ�� #b#m140020200##k ���� #r#o0100133#s#k ֻҪ����....#r20ֻ#k ���ң��ͻ���������кܴ�İ������ã���ȥ��...�ף����л���˵��", 8);
    } else if (status == 2) {
	qm.sendNextPrev(".....Ϊʲô������������.....", 2);
    } else if (status == 3) {
	qm.sendNextPrev("��Ȼ�����ӡ���ѽ�������� 20ֻ̫���� ��ôȥ����100ֻ��ô����������������ȻҪ��������ô��Ч����ô��ĳ��Ҫ��ȥץ 999ֻ����...", 8);
    } else if (status == 4) {
	qm.sendNextPrev("�����������������͹��ˡ�", 2);
    } else if (status == 5) {
	qm.askAcceptDecline("��ѽ��ѽ��û�б�Ҫ�ƴǡ����꣡ȫ���ģ��˽�Ӣ�������ǿ�����顣Ӣ�����̫ΰ����...");
    } else if (status == 6) {
	qm.StartQuest();
	qm.sendNextS('#b(����һ�κ������Ҫ��ȥ���� 999ֻ���ɴ��Ӧ���ˡ�)#k', 2);
    } else if (status == 7) {
	qm.sendNextPrev('��ô����� #o0100133# 20ֻ�ɣ�', 8);
    } else if (status == 8) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
