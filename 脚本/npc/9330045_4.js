/*
 * 
 * @��֮��
 * ��������ϵͳ - ħ��˫��
 */
importPackage(net.sf.odinms.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt1 = "#d#L1ʹ��##v4031627##z4031627#�һ�����#r10000\r\n";
			var txt2 = "#d#L2ʹ��##v4031633##z4031633#�һ�����#r11000\r\n";
            var txt3 = "#d#L3ʹ��##v4031634##z4031634#�һ�����#r12000\r\n";
			var txt4 = "#d#L4ʹ��##v4031635##z4031635#�һ�����#r13000\r\n";
            var txt5 = "#d#L5ʹ��##v4031636##z4031636#�һ�����#r14000\r\n";
			var txt6 = "#d#L6ʹ��##v4031630##z4031630#�һ�����#r15000\r\n";
            var txt7 = "#d#L7ʹ��##v4031637##z4031637#�һ�����#r16000\r\n";
			var txt8 = "#d#L8ʹ��##v4031638##z4031638#�һ�����#r17000\r\n";
            var txt9 = "#d#L9ʹ��##v4031639##z4031639#�һ�����#r20000\r\n";
            var txt10 = "#d#L10ʹ��##v4031640##z4031640#�һ�����#r23000\r\n";
			var txt11 = "#d#L11ʹ��##v4031628##z4031628#�һ�����#r25000\r\n";
            var txt12 = "#d#L12ʹ��##v4031641##z4031641#�һ�����#r27000\r\n";
            var txt13 = "#d#L13ʹ��##v4031642##z4031642#�һ�����#r30000\r\n";
            var txt14 = "#d#L14ʹ��##v4031643##z4031643#�һ�����#r33000\r\n";
			var txt15 = "#d#L15ʹ��##v4031644##z4031644#�һ�����#r35000\r\n";
			var txt16 = "#d#L16ʹ��##v4031631##z4031631#�һ�����#r37000\r\n";
            var txt17 = "#d#L17ʹ��##v4031645##z4031645#�һ�����#r40000\r\n";
            var txt18 = "#d#L18ʹ��##v4031646##z4031646#�һ�����#r43000\r\n";
            var txt19 = "#d#L19ʹ��##v4031647##z4031647#�һ�����#r45000\r\n";
			var txt20 = "#d#L20ʹ��##v4031648##z4031648#�һ�����#r47000\r\n";


            cm.sendSimple("ʹ��#b���ֵ�������#k���Զһ�����Ŷ����֪�������öһ������أ�\r\n" + txt1 + "" + txt2 + "" + txt3 + "" + txt4 + "" + txt5 + "" + txt6 + "" + txt7 + "" + txt8 + "" + txt9 + "" + txt10 + "" + txt11 + "" + txt12 + "" + txt13 + "" + txt14 + "" + txt15 + "" + txt16 + "" + txt17 + "" + txt18 + "" + txt19 + "" + txt20 + "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4031627, 1)) {
                    cm.gainItem(4031627, -1);
                    cm.gainExp(+10000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4031633, 1)) {
                    cm.gainItem(4031633, -1);
                    cm.gainExp(+11000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4031634, 1)) {
                    cm.gainItem(4031634, -1);
                    cm.gainExp(+12000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4031635, 1)) {
                    cm.gainItem(4031635, -1);
                    cm.gainExp(+13000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4031636, 1)) {
                    cm.gainItem(4031636, -1);
                    cm.gainExp(+14000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4031630, 1)) {
                    cm.gainItem(4031630, -1);
                    cm.gainExp(+15000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(4031637, 1)) {
                    cm.gainItem(4031637, -1);
                    cm.gainExp(+16000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.haveItem(4031638, 1)) {
                    cm.gainItem(4031638, -1);
                    cm.gainExp(+17000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(4031639, 1)) {
                    cm.gainItem(4031639, -1);
                    cm.gainExp(+20000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4031640, 1)) {
                    cm.gainItem(4031640, -1);
                    cm.gainExp(+23000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.haveItem(4031628, 1)) {
                    cm.gainItem(4031628, -1);
                    cm.gainExp(+25000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.haveItem(4031641, 1)) {
                    cm.gainItem(4031641, -1);
                    cm.gainExp(+27000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 13) {
                if (cm.haveItem(4031642, 100)) {
                    cm.gainItem(4031642, -100);
                    cm.gainExp(+30000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 14) {
                if (cm.haveItem(4031643, 1)) {
                    cm.gainItem(4031643, -1);
                    cm.gainExp(+33000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 15) {
                if (cm.haveItem(4031644, 1)) {
                    cm.gainItem(4031644, -1);
                    cm.gainExp(+35000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            }else if(selection == 16){
                 if (cm.haveItem(4031631, 1)) {
                    cm.gainItem(4031631, -1);
                    cm.gainExp(+37000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
					}
            }else if(selection == 17){
                 if (cm.haveItem(4031645, 1)) {
                    cm.gainItem(4031645, -1);
                    cm.gainExp(+40000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
					}
            }else if(selection == 18){
                 if (cm.haveItem(4031646, 1)) {
                    cm.gainItem(4031646, -1);
                    cm.gainExp(+43000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
					}
            }else if(selection == 19){
                 if (cm.haveItem(4031647, 1)) {
                    cm.gainItem(4031647, -1);
                    cm.gainExp(+45000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
					}
            }else if(selection == 20){
                 if (cm.haveItem(4031648, 1)) {
                    cm.gainItem(4031648, -1);
                    cm.gainExp(+47000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            }
        }
    }
}
