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
            txt = "����ÿ����������NPC���ڰ���.\r\n\r\n";

            if (cm.getPS() == 7){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�50����Ұ�����#v4000024#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ���˵ڰ��֣�����������һ����.!\r\n��ڶ���������ɱ����ڣ�";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000024,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000024, -50);
                cm.gainMeso(+80000);//��ȡ����
                cm.gainExp(+8000);
				cm.gainNX(50000);
				cm.gainItem(4000313,80);
                cm.sendOk("���̵ڰ������!��ý��=80000������=8000���ƽ��Ҷ80�š���ȯ5W\r\n\r\n���Ѿ���ɹ���Ȼ���˵ڰ��֣�����������һ����.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50����Ұ�����#v4000024#������!");
                cm.dispose();
            }
        }
    }
}
