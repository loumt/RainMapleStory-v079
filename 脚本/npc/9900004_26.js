status = -1;
var event;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    event = cm.getEventManager("gailou"); //��ȡ��ű������� test ��Ӧ event Ŀ¼����� gailou.js �ļ�
    if (status == 0) {
        if (event == null) {
            cm.sendOk("��ű�����...����ϵ����Ա�޸��������´򿪡�");
            cm.dispose();
        } else if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk("�ֻ����1Ƶ�����У��ף�");
	    cm.dispose();
        } else if (event != null && event.getProperty("state").equals("true")) {
            cm.sendYesNo("�װ���#r#h ##k���ã����Ǹ�¥�Ա�����λʱ��Ϊ10����.\r\n���һ�Ƚ������Ƚ������Ƚ�.\r\nһ�Ƚ�����һ�����ｨ¥�߶ȵ���һ��һ�Ƚ���\r\n���Ƚ���һ�Ƚ�֮�������¥��10�����Ϊ���Ƚ�\r\n���Ƚ���Ϊ���������ֻ��1�������� 0 - 1000���\r\n�ǾͿ��������� ��ʼ�ɣ�");
        } else {
            cm.sendOk("���δ�������߻�Ѿ��������������������������\r\n���ע���Ǹ�¥������μӡ�\r\n���һ�Ƚ������Ƚ������Ƚ�.\r\nһ�Ƚ�����һ�����ｨ¥�߶ȵ���һ��һ�Ƚ���\r\n���Ƚ���һ�Ƚ�֮�������¥��10�����Ϊ���Ƚ�\r\n���Ƚ���Ϊ���������ֻ��1�������� 0 - 1000���");
            cm.dispose();
        }
    } else if (status == 1) {
        if (event != null && event.getProperty("state").equals("true")) {
            event.setProperty("check", "" + (parseInt(event.getProperty("check")) + 1)); //���õ������+1
            var count = parseInt(event.getProperty("check")); //����ܵ������
            var max = parseInt(event.getProperty("maxCheck"));
            var dj = rand(2000, 3000);
            var dj3 = rand(0, 1000);
            if (count == max) {
                cm.gainNX( + 5000);
                cm.����(1,"[��¥�]�� ��ϲ��� " + cm.getName() + " ����¥��л��һ�Ƚ� 5000���.");
                cm.sendOk("[��¥�] ��ϲ��������¥�һ�Ƚ���\r\n����10000�㡣");
            } else if (count > max && count <= (max + 10)) {
                cm.gainNX( + dj);
                cm.����(1,"[��¥�]�� ��ϲ��� " + cm.getName() + " ����¥��л�ö��Ƚ� " + dj + "���.");
                cm.sendOk("��ϲ��������¥����Ƚ���\r\n���� 2000 - 3000 �㲻�ȡ�");
            } else if (count > (max + 10)) {
                cm.gainNX( + dj3);
                event.setProperty("state", "false");
                event.setProperty("endEvent", "true");
                cm.����(1,"[��¥�]�� ��ϲ��� " + cm.getName() + " ����¥��л�����Ƚ� " + dj3 + "���.������¥��Ѿ�����...");
                cm.sendOk("��ϲ��������¥����Ƚ���\r\n���� 0 - 1000 �㲻�ȡ�\r\n������¥��Ѿ�����...");
            } else {
                cm.sendOk("��ǰ¥��: " + parseInt(event.getProperty("check")) + " ¥��");
            }
        } else {
            cm.sendOk("���δ�������߻�Ѿ����������н������Ѿ����ţ����´��ڲμӡ�");
        }
        cm.dispose();
    }
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}
