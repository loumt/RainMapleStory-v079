/* Dr. Feeble
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("�뻻��������? �����������µ���ò���³���������? ��~ �Ұ�����Ը�Գ�.\r\n#L0##b ����(ʹ�����ִ�����������ͨ��Ա��)#l\r\n\r\n\r\n#r ���۾���ɫֻ�������Ŷ��ѡ�в�һ����������Ǹ���ɫ��#l\r\n#L1##b�������绻ɫ����(#kʹ��#b���ִ����������߼���Ա��#k)#l");
    } else if (status == 1) {
		if (selection == 0) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
        } else {
            facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
        if (cm.setRandomAvatar(5152001, facetype) == 1) {
            cm.sendOk("����,���������һ���ϲ�������!");
        } else {
            cm.sendOk("��...��û������ҽԺ���ִ�����������ͨ��Ա��...������˼�޷����������������ޡ�");
        }
		}else if(selection == 1){
        var face1 = cm.getPlayerStat("FACE");
				beauty = 1;
            var hair_Colo_new = [];
				if (cm.getChar().getGender() == 0 && face1 < 21000) {
					var current = face1 % 100 + 20000;
				}else if(cm.getChar().getGender() == 0){
					var current = face1 % 100 + 23000;
				}else if (cm.getChar().getGender() == 1 && face1 >= 21000 && face1 < 23000) {
					var current = face1 % 100 + 21000;
				}else if(cm.getChar().getGender() == 1){
					var current = face1 % 100 + 24000;
				}
				colors = Array();
           // for (var i = 0; i < 7; i++) {
            //    colors = Array(current + (i * 100));
            //}
				colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
				//cm.sendStyle("��ѡ����ϲ������ɫ.", colors,5152001);
			    cm.askAvatar("��ѡ����ϲ������ɫ", 5152001, colors);
        }
		}else if (status == 2){		
		if(beauty ==1 ){
        if (cm.setRandomAvatar(5152001, colors) == 1) {
            cm.sendOk("����,���������һ���ϲ�������!");
        } else {
            cm.sendOk("��...��û������ҽԺ���ִ�����������ͨ��Ա��...������˼�޷����������������ޡ�");
        }
        cm.dispose();
			}
    }
}