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
			cm.sendSimple("#b��ӭ�� #r#h ##k ,��������Ҷһ�ƽ̨\r\n\r\n#rע�����ֻ����ʱ��������м��ʵõ��~��\r\n\r\n#b�һ�ǰ��ȷ�ϱ�������,�������Ը�����" +           
"#k\r\n#L101##r���#i4310030##bx30#r�һ�#b�������#i2049100#x1\r\n#L102##r���#i4310030##bx50#r�һ�#bף������#i2340000#x1\r\n#L103##r���#i4310030##bx100#r�һ� #k3000���x1\r\n#L104##r���#i4310030##bx200#r�һ�#b����#i4032170#x1\r\n#L105##r���#i4310030##bx300#r�һ�#b#v1142617#x1\r\n");

        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4310030, 30) ) {
                    cm.gainItem(4310030, -30);
                    cm.gainItem(2049100, 1);
                    cm.sendOk("��ϲ�����#i2049100#����л������͸�����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��30��#i4310030#,���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4310030, 50) ) {
                    cm.gainItem(4310030, -50);
                    cm.gainItem(2340000, 1);
                    cm.sendOk("��ϲ�����#i2340000#x1����л�������͸�����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��50��#i4310030#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4310030, 100) ) {
                    cm.gainItem(4310030, -100);
                    cm.gainNX(3000);
                    cm.sendOk("��ϲ�����3000�����л������͸���");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��100��#i4310030#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4310030, 200) ) {
                    cm.gainItem(4310030, -200);
                    cm.gainItem(4032170, 1);
                    cm.sendOk("��ϲ���������֮һ #i4032170#x1 �ռ������Ǽ���ע��װ��������������~��л������͸�����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��200��#i4310030#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(4310030, 300) ) {
                    cm.gainItem(4310030, -300);
	        cm.gainItem(1142617,9,9,9,9,1000,1000,8,8,50,50,15,15,5,5,0,0,0);
                    cm.sendOk("��ϲ���������ǿ��� #i1142617#x1 ��л������͸���~");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��300��#i4310030#,���ڴ�ȷ��");
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

	