var status = -1;
var job = 0;
var type = -1;
var skill = [[1004],[10001004],[20001004]];
var skill2 = [[8],[10000018],[20000024]];

function start(){
	action(1, 0, 0);
}

function action(mode, type ,selection) {
	if(mode == 0 && status == 0) {
		status --;
	} else if(mode == 1) {
		status ++;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {//-����#s1007#-�ʼ���輼��#s1013#
		cm.sendOk("����ȼ�30������������԰���һ��ѧ������Ⱥ�輼��Ŷ��\r\n#L1#����ѧϰ��輼��(��Ҫ10000000���)\r\n\r\n#L2#����ѧϰȺ�輼��(��Ҫ10000000���)");
	} else if (selection == 1){
		if(cm.getPlayer().getLevel() < 30){
			cm.sendNext("��ĵȼ�û�дﵽ30��");
			cm.dispose();
		} else if(cm.getMeso() < 10000000){
			cm.sendNext("��Ľ�Ҳ���1ǧ��\r\n�㵱ǰӵ��"+ cm.getMeso() +"���");
			cm.dispose();
			return;
		}
		cm.gainMeso(-10000000);
		job = cm.getPlayer().getJob();
		if (job < 1000){// Adv(0 ~ 522)
			type = 0;
		} else if (job < 2000) {// Cy(1000 ~ 1512)
			type = 1;
		} else if (job < 3000) {// Aran(2000 ~ 2112)
			type = 2;
		} else {
			cm.dispose();
			return;
		}
		for(var i = 0; i < skill[type].length;i++){
			var level = 1;
			if(i == 2) {
				level = 3;
			}
			cm.teachSkill(skill[type][i], level);
		}
		cm.sendNext("���޼����Ѿ�ѧϰ�ɹ��ˣ�");
		cm.dispose();
	} else if (selection == 2){
		if(cm.getPlayer().getLevel() < 30){
			cm.sendNext("��ĵȼ�û�дﵽ30��");
			cm.dispose();
			return;
		}
		if(cm.getMeso() < 10000000){
			cm.sendNext("��Ľ�Ҳ���1ǧ��\r\n�㵱ǰӵ��"+ cm.getMeso() +"���");
			cm.dispose();
			return;
		}
		cm.gainMeso(-10000000);
		job = cm.getPlayer().getJob();
		if (job < 1000){// Adv(0 ~ 522)
			type = 0;
		} else if (job < 2000) {// Cy(1000 ~ 1512)
			type = 1;
		} else if (job < 3000) {// Aran(2000 ~ 2112)
			type = 2;
		} else {
			cm.dispose();
			return;
		}
		for(var i = 0; i < skill2[type].length;i++){
			var level = 1;
			if(i == 2) {
				level = 3;
			}
			cm.teachSkill(skill2[type][i], level);
		}
		cm.sendNext("Ⱥ�輼���Ѿ�ѧϰ�ɹ��ˣ�");
		cm.dispose();

	} else {
		cm.dispose();
	}
}