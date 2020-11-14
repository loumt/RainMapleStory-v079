/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
    cm.sendSimple("��ã������泡����Ա.\n\r�������Ҫ���е��㣬�뵽[�̳�]����[�����]������ͷ�#v5340001:#/#v5340000:#���֣��߼�10���һ���㣬��ͨ����20��һ�Σ����˽�����ô�࣬����Ѽ��һ�������ɣ�\n\r #b#L0# #v4000411#  ������㳡.#l \n\r #L1##v3011000#  ���������.#l \n\r #L6##v2300000#   �������.#l \n\r #L2##v5350000#  �һ����(�̳ǹ���).#l \n\r #L3##v4161001#   ����ָ��.#l \n\r #L5##v4001200#   С��һ�����.#l ");
       } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.haveItem(5340000) || cm.haveItem(5340001)) {
		if (cm.haveItem(3011000)) {
		    cm.saveLocation("FISHING");
		    cm.warp(741000200);
		    cm.dispose();
		} else {
		    cm.sendNext("���������������Ա��ܵ��㣡");
		    cm.safeDispose();
		}
	    } else {
		cm.sendNext("���������ˣ��������");
		cm.safeDispose();
	    }
	}
	if (sel == 1) {
	    if (cm.haveItem(3011000)) 
		{
		cm.sendNext("���Ѿ���һ�ѵ����Ρ�ÿ����ɫֻ����1�������Ρ�");
	    } else {
		if (cm.canHold(3011000) && cm.getMeso() >= 500000) {
		    cm.gainMeso(-500000);
		    cm.gainItem(3011000, 1);
		    cm.sendNext("���ֵ���~");
		} else {
		    cm.sendOk("�����Ƿ��������5W��һ��㹻�ı����ռ䡣");
		}
	    }
	    cm.safeDispose();
	}	
	if (sel == 2) {
	    if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(5350000,-1);
			cm.gainItem(2300001, 120);
		    cm.sendNext("���ֵ���~");
		} else {
		    cm.sendNext("�߼��ն��һ��ɹ���");
		}
	    } else {
		cm.sendOk("�����Ƿ����㹻�ı����ռ����ζ���ն����Դ���������Ҳ����ȥ�̳�������");
	    }
	    cm.safeDispose(); 
	}	
	if (sel == 3) {
	    cm.sendOk("����Ҫ10�����ϣ�����͡���������ν�����������ÿ1���Ӿ�Ҫһ��һ�εľ��̡������˴������˿����㲶׽��¼��");
	    cm.safeDispose();
	    } 		
	if (sel == 4) {
		cm.openNpc(9330045, 2);
	    } 		
	if (sel == 5) {
		cm.openNpc(9330045, 4);
	    }  		
	if (sel == 6) {
	    cm.sendYesNo("��Ҫ��������𣿣�40000���/120����");	
	    if (cm.canHold(2300000,120) && cm.getMeso() >= 40000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-40000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("���ֵ���~");
		} else {
		    cm.sendNext("�ú������ն���������֡�");
		}
	    } else {
		cm.sendOk("�����Ƿ��������3000000��һ��㹻�ı����ռ䡣");
	    }
	    cm.safeDispose();
	}
    }
}	
