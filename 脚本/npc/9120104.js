function start() {

if (cm.getChar().getMapId() != 209000015){
    cm.sendSimple ("#b��~������ͬ���̳ǣ�����2�и��̳�ร�������㿴~���ܻ����ظ�~\r\n#L1#ͬ���̳ǣ��£�#l#r#L2#ͬ���̳ǣ��ɣ�#l ");//\r\n\r\n #r#L3#������ȡ��ÿ������һ�Σ�#l 
    } else {
    cm.sendOk("��Ҫ�������ͼʹ����")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) { //��������
       cm.openNpc(2101017,0);
} else if (selection == 1) {
 cm.openNpc(9900004,9);

} else if (selection == 2) {
 cm.openNpc(9900004,10);

}  else if (selection == 3) {
 cm.openNpc(9900004,8888);

}   else if (selection == 4) {
 cm.openNpc(1052004);

}   else if (selection == 5) {
 cm.openNpc(1052005);

}   else if (selection == 6) {
 cm.openNpc(1012105);
}  
}