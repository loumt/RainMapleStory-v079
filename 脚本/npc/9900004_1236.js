function start() {

if (cm.getChar().getMapId() != 209000015){
    cm.sendSimple ("#b�鿴����������\r\n#L1#ɱ�����а�#l#r#L2#�������а�#l\r\n\r\n#L12#�ȼ����а�#L11#�������а�");//#L10#������а�
    } else {
    cm.sendOk("��Ҫ�������ͼʹ����")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) { //��������
       cm.openNpc(2101017,0);
} else if (selection == 1) {
	//Level
        cm.��ȡɱ�����а�();
} else if (selection == 2) {
        //MapGui
        cm.��ȡ�������а�();
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