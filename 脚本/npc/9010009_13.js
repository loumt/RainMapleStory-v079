importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ����������NPC����ʮ��.\r\n\r\n";

            if (cm.getPS() == 9){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�20����ͷ#v4000017#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ���˵�ʮ�֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000017,20)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000017, -20);
                cm.gainMeso(+800000);//��ȡ����
                cm.gainExp(+60000);
				cm.gainItem(4000313,100);
				cm.gainvip(+3);
				cm.gainNX(80000);
                cm.sendOk("���̵�ʮ�����!��ý��=800000������=60000��vip�ȼ�+3����ȯ8W\r\n\r\n���Ѿ���ɹ���Ȼ���˵�ʮ�֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�20����ͷ#v4000017#������!");
                cm.dispose();
            }
        }
    }
}
