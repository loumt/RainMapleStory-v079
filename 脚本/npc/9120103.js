var ���� = "#fUI/StatusBar/BtChat/normal/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "¥���Ǹ�#r�������#k��������ܹ����ˣ��㿴����ɫ���Ե����񣬲�֪����һ�쵽������������ʲô���ҵ�����ԶԶ�ģ���Ҳ�������ң�#l\r\n\r\n"//3
            cm.sendOk(text);
		    cm.dispose();
		}
    }
}


