/* global cm */

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t  #e#d��ӭ����#b" + cm.ms() + "#e#d\r\n\tע�����ϵͳ��¼����벻Ҫ���Ž���������\r\n\r\n"

            if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() == 0) {
                text += "#L1##r" + ��ɺ� + "�ȼ��ﵽ20����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() > 0) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ20����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ20����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() == 1) {
                text += "#L2##r" + ��ɺ� + "�ȼ��ﵽ30����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() > 1) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ30����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ30����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() == 2) {
                text += "#L3##r" + ��ɺ� + "�ȼ��ﵽ50����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() > 2) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ50����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ50����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() == 3) {
                text += "#L4##r" + ��ɺ� + "�ȼ��ﵽ70����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() > 3) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ70����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ70����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() == 4) {
                text += "#L5##r" + ��ɺ� + "�ȼ��ﵽ100����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() > 4) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ100����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ100����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() == 5) {
                text += "#L6##r" + ��ɺ� + "�ȼ��ﵽ120����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() > 5) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ120����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ120����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() == 6) {
                text += "#L7##r" + ��ɺ� + "�ȼ��ﵽ150����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() > 6) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ150����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ150����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() == 7) {
                text += "#L8##r" + ��ɺ� + "�ȼ��ﵽ170����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() > 7) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ170����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ170����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() == 8) {
                text += "#L9##r" + ��ɺ� + "�ȼ��ﵽ180����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() > 8) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ180����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ180����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() == 9) {
                text += "#L10##r" + ��ɺ� + "�ȼ��ﵽ190����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() > 9) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ190����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ190����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() == 10) {
                text += "#L11##r" + ��ɺ� + "�ȼ��ﵽ199����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() > 10) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ199����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ199����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() == 11) {
                text += "#L12##r" + ��ɺ� + "�ȼ��ﵽ200����" + ��� + "���þ�x1000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() > 11) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ200����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ200����#l" + ���ڽ����� + "\r\n"
            }
            
            cm.sendSimple(text);
        } else if (selection == 1) {
	if(cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() == 0){
	    cm.gainDY(1000);
            cm.setdjjl(1);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ20������ȡ�˵��þ�x1000��Ŷ~!");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 2) {
	if(cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() == 1){
	    cm.gainDY(1000);
            cm.setdjjl(2);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ30������ȡ�˵��þ�x1000��Ŷ~!");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 3) {
	if(cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() == 2){
	    cm.gainDY(1000);
            cm.setdjjl(3);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ50������ȡ�˵��þ�x1000��Ŷ~!");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 4) {
	if(cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() == 3){
	    cm.gainDY(1000);
            cm.setdjjl(4);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ70������ȡ�˵��þ�x1000��Ŷ~!");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 5) {
	if(cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() == 4){
	    cm.gainDY(1000);
            cm.setdjjl(5);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ100������ȡ�˵��þ�x1000��Ŷ~!");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 6) {
	if(cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() == 5){
	    cm.gainDY(1000);
            cm.setdjjl(6);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ120������ȡ�˵��þ�x1000��Ŷ~��");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 7) {
	if(cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() == 6){
            cm.gainDY(1000);
            cm.setdjjl(7);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ150������ȡ�˵��þ�x1000��Ŷ~��");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 8) {
	if(cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() == 7){
            cm.gainDY(1000);
            cm.setdjjl(8);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ170������ȡ�˵��þ�x1000��Ŷ~��");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 9) {
	if(cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() == 8){
	    cm.gainDY(1000);
            cm.setdjjl(9);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ180������ȡ�˵��þ�x1000��Ŷ~��");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 10) {
	if(cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() == 9){
	    cm.gainDY(1000);
            cm.setdjjl(10);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ190������ȡ�˵��þ�x1000��Ŷ~��");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 11) {
	if(cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() == 10){
	    cm.gainDY(1000);
            cm.setdjjl(11);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ199������ȡ�˵��þ�x1000��Ŷ~��");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
        } else if (selection == 12) {
	if(cm.getPlayer().getLevel() == 200 && cm.getPlayer().getdjjl() == 11){
            cm.gainDY(10000);
            cm.setdjjl(12);
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ200������ȡ�˵��þ�1��㣡");
            cm.dispose();
	}else{
	    cm.sendOk("���Ѿ���ȡ����");
	}
         
        }
    }
}


