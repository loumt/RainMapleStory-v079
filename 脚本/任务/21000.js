var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("���а��� ������ʿ... ������Щ���ӣ� ֻʣ�����ǹ���͵��... ����������ʲô���壡��֪��������˵ֻ�Ǻܴ�ĸ���...���������ٿ��ǿ����ɣ�");
	    qm.dispose();
	    return;
	}
	status--
    }
    if (status == 0) {
	qm.askAcceptDecline("���ǵģ� �����м�����������ɭ���ڣ� ���ǲ����ܶ��º��������ߡ� ������ʿ... ����ȥ�Ⱦ���Щ���Ӱɣ� ��֪�����ܵ���˵��Щ����ĺܺ����޳ܣ� ����... ֻ�ܰ������ˣ�");
    } else if (status == 1) {
	qm.forceStartQuest(21000, "..w?PG??."); // Idk what data lol..
	qm.forceStartQuest(21000, "..w?PG??."); // Twice, intended..
	qm.sendNext("#b������Ӧ����ɭ���#k�� �ں�ħ��ʦ׷������֮ǰ������Ҫ�Ͻ��������뾡��Ȼ���Щ���Ӱɣ�");
    } else if (status == 1) {
	qm.sendNextPrev("����Ҫ���ǲ�Ҫ���š� ������ʿ��ŵ����Ҫȷ���������������밴�� #bQ����#k ȷ��������λ��");
    } else if (status == 2) {
	qm.sendNextPrev("�������ˣ�������ʿ����Ⱦ���Щ���ӣ��Ҳ�ϣ�������������ں�ħ��ʦ��ħ��֮�¡�");
    } else if (status == 3) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}