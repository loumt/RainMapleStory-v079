/*
 * 
 * @����
 * @������ͷ
 */
function start() {
    status = -1;
    action(1, 0, 0);
}
var ð�ձ� = 5000;
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("�������˵�ʱ������������");
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
            cm.sendSimple("#r����������\r\n<����Ϊ���¼�������>\r\n\r\n#d#L0#��ʽ����#l\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {//��������
            cm.warp(700000000,0);
            } else if (selection == 1) {//�����һ�����
              cm.openNpc(1002006,110);
            }else if(selection == 2){
                cm.openNpc(1002006,120);
        }
        }
    }
}


