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
            txt = "����ÿ����������NPC���ھ���.\r\n\r\n";

            if (cm.getPS() == 8){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�50����Ƥ#v4000030#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ���˵ھ��֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000030,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000030, -50);
                cm.gainMeso(+5000000);//��ȡ����
                cm.gainExp(+100000);
				cm.gainNX(50000);
				cm.gainItem(4000313,90);
				cm.gainvip(+1);
                cm.sendOk("���̵ھ������!��ý��=5000000������=100000����ȯ5W���ƽ��Ҷ90�š�VIP�ȼ�+1\r\n\r\n���Ѿ���ɹ���Ȼ���˵ھ��֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50����Ƥ#v4000030#������!");
                cm.dispose();
            }
        }
    }
}
