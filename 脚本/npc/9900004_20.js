function start() {

if (cm.getChar().getMapId() != 209000015){
    cm.sendSimple ("#b���봴������ô��\r\n#L1#��������#l#r#L2#��������ͼ��#l#L10#������������#l");
    } else {
    cm.sendOk("��Ҫ�������ͼʹ����")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) { //��������
       cm.openNpc(2101017,0);
} else if (selection == 1) {
         cm.openNpc(2010007);
} else if (selection == 2) {
         cm.openNpc(2010008);
}  else if (selection == 10) {
         cm.openNpc(2010009);
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