/*
 By ����
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=��ʾ;false=��ʼ�
          if(Editing){
          cm.sendOk("��ͣ����");
          cm.dispose();
          return;
        } 
			cm.sendSimple("#b��ӭ�� #r#h ##k ,�����Ǵ������ż��һ�ר�����ȼ��ﵽ120�����ɿ�ʼ����ʹ�2��������ɸ���������ȡ��������Զ�����ż�ร�ÿ������������ͬ\r\n\r\n���¸�������ʹ�2������-���˵ȼ�Ҫ��10����40����\r\n\r\n������������ʹ�2������-���˵ȼ�Ҫ��21����60����\r\n\r\n��߸�������ʹ�2������-���˵ȼ�Ҫ��35����70����\r\n\r\n��ո�������ʹ�2������-���˵ȼ�Ҫ��51��100��\r\n\r\n������������ʹ�2������-���˵ȼ�Ҫ��55��100��\r\n\r\n#rע��ֻ�жӳ��콱���߽��봫���Ų����ż���Ҫ���ŵ����ӣ�\r\n\r\n#b�һ�ǰ��ȷ�ϱ�������,�������Ը�����" +           
 

"#k\r\n#L101##r�ż�#i4032327##bx10#r�һ�#b�������#i2049100#x1\r\n#L102##r�ż�#i4032327##bx20#r�һ�#bף������#i2340000#x2\r\n#L103##r�ż�#i4032327##bx40#r�һ� #k4000���x1\r\n#L104##r�ż�#i4032327##bx60#r�һ�#b����#i4031568#x1\r\n#L105##r�ż�#i4032327##bx100#r�һ�#b#v1102489##z1102489#x1\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4032327, 10) ) {
                    cm.gainItem(4032327, -10);
                    cm.gainItem(2049100, 1);
                    cm.sendOk("��ϲ�����#i2049100#����л������͸�����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��10��#i4032327#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4032327, 20) ) {
                    cm.gainItem(4032327, -20);
                    cm.gainItem(2340000, 2);
                    cm.sendOk("��ϲ�����#i2340000#x2����л�������͸�����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��20��#i4032327#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4032327, 40) ) {
                    cm.gainItem(4032327, -40);
                    cm.gainNX(4000);
                    cm.sendOk("��ϲ�����4000�����л������͸���");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��40��#i4032327#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4032327, 60) ) {
                    cm.gainItem(4032327, -60);
                    cm.gainItem(4031568, 1);
                    cm.sendOk("��ϲ���������֮һ #i4031568#x1 �ռ������Ǽ���ע��װ��������������~��л������͸�����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��60��#i4032327#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(4032327, 100) ) {
                    cm.gainItem(4032327, -100);
                    cm.gainItem(1102489, 1);
                    cm.sendOk("��ϲ���������ǿ��� #i1102489#x1 ��л������͸���~");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��100��#i4032327#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 106) {
                if (cm.haveItem(4032327, 200) ) {
                    cm.gainItem(4032327, -200);
                    cm.gainItem(1142288, 1);
                    cm.sendOk("��ϲ��������Գ���ǿ��� #i1142288#x1 ��л��ĸ�����Tos�ٴθ�л��");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��200��#i4032327#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 107) {
                if (cm.haveItem(4032226, 1) ) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022488, 1);
                    cm.sendOk("���#i2022488#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 108) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022489, 1);
                    cm.sendOk("���#i2022489#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 109) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022490, 1);
                    cm.sendOk("���#i2022490#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }
        }
    }
}

	