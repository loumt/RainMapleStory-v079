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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d����5000ŮѪ��#v1052461#��Ҫ#v4011006#x100.#v4021007#x100.#v4021001#x100.#v4011004#x100.#v4011001#x100.#v4021003#x100.#v4021000#x100.#v4021002#x100.#v4021004#x100.#v4170005#x200.#v4170013#x200.#v4170002#x200.#v4011007#x30.#v4021009#x30.#v1051017#x1.#v4170016#x90.#v4031891#5000��.�Ѽ��õ����ҾͿ���Ϊ��������.#l\r\nȫ����+38.����38.ħ����50.ɣ��Ϊ����.�ϳɺ󲻼���Ӿ�����.\r\n"//3
            text += "#L1##r����5000ŮѪ��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(1051017,1) && cm.haveItem(4011006,100) && cm.haveItem(4021007,100) && cm.haveItem(4021001,100) && cm.haveItem(4011004,100) && cm.haveItem(4011001,100) && cm.haveItem(4021003,100) 
&& cm.haveItem(4021000,100) && cm.haveItem(4021002,100) && cm.haveItem(4021004,100) && cm.haveItem(4170005,200) && cm.haveItem(4170013,200) && cm.haveItem(4170002,200) && cm.haveItem(4011007,100) && cm.haveItem(4021009,100) && cm.haveItem(4170016,90) && cm.getMeso() > 50000000){
				cm.gainItem(1051017, -1);
				cm.gainItem(4011006, -100);
				cm.gainItem(4021007, -100);
				cm.gainItem(4021001, -100);
				cm.gainItem(4011004, -100);
				cm.gainItem(4011001, -100);
				cm.gainItem(4021003, -100);
				cm.gainItem(4021000, -100);
				cm.gainItem(4021002, -100);
				cm.gainItem(4021004, -100);
				cm.gainItem(4021000, -200);
				cm.gainItem(4021002, -200);
				cm.gainItem(4021004, -200);
				cm.gainItem(4011007, -20);
				cm.gainItem(4021009, -20);
				cm.gainItem(4170016, -90);
				cm.gainItem(1052461,38,38,38,38,5000,0,38,50,20,20,50,50,0,0);
				cm.gainMeso(-50000000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]������[�ռ�5000ŮѪ��)]��װ�����ȣ��������ܣ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


