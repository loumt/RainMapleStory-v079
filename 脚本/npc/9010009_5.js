load("nashorn:mozilla_compat.js");
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
            txt = "����ÿ����������NPC���ڶ���.\r\n\r\n";

            if (cm.getPS() == 1){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�10����ˮ����#v4000010#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ���˵ڶ��֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000010,10)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000010, -10);
                cm.gainMeso(+10000);//��ȡ����
                cm.gainExp(+1000);
				cm.gainItem(4000313,10);
                cm.sendOk("���̵ڶ������!��ý��=10000������=1000���ƽ��Ҷ10��\r\n\r\n���Ѿ���ɹ���Ȼ���˵ڶ��֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�10����ˮ����#v4000010#������!");
                cm.dispose();
            }
        }
    }
}
