function start() {

if (cm.getChar().getMapId() != 209000015){
    cm.sendSimple ("#b��~�������Ǻ����������ģ�����ı������أ�ע��������ȥ̩���~\r\n#L1#�ʼҷ��ͣ������#l#r#L2#�ʼҷ��ͣ���ѡ��#l\r\n\r\n#L3#��ͨ����+Ⱦɫ����ѡ��#l\r\n\r\n#L4#�ʼ����ͣ���ѡ��#l#L5#�۾���ɫ \r\n\r\n#L6#����ɫ����ѡ��#l   ");
    } else {
    cm.sendOk("��Ҫ�������ͼʹ����")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) { //��������
       cm.openNpc(2101017,0);
} else if (selection == 1) {
 cm.openNpc(1012117);

} else if (selection == 2) {
 cm.openNpc(9105006);

}  else if (selection == 3) {
 cm.openNpc(1012103);

}   else if (selection == 4) {
 cm.openNpc(1052004);

}   else if (selection == 5) {
 cm.openNpc(1052005);

}   else if (selection == 6) {
 cm.openNpc(1012105);
}  
}