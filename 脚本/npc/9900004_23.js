function start() {

if (cm.getChar().getMapId() != 209000015){
    cm.sendSimple ("#b��Ҫ��װ��ע��������������ѡ��\r\n\r\n#L1#����ע����������ħ������#l    ");
    } else {
    cm.sendOk("��Ҫ�������ͼʹ����")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) { //��������
       cm.openNpc(2101017,0);
} else if (selection == 1) {
            cm.openNpc(9900004,18);
} else if (selection == 2) {
            cm.openNpc(9900004,19);
	cm.dispose(); 
}  else if (selection == 10) {
        //MapGui
        cm.��ȡ������а�();
	cm.dispose(); 
}   else if (selection == 11) {
        cm.��ȡ�������а�();
	cm.dispose(); 
}   else if (selection == 12) {
        cm.��ȡ�ȼ����а�();
}   else if (selection == 110) {
        cm.�������а�();
	cm.dispose(); 
}  
}