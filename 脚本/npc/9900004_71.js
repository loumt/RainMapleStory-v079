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
            text += "#L1##r#v4170010#��ȡ100Ԫ�׳������#l\r\n\r\n"//3
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
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
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
			}else */if(cm.haveItem(4170010,1)){
				cm.gainItem(4170010, -1);
				cm.gainItem(2040807, 2);//���׾�
				cm.gainItem(2340000, 5);//ף��
				cm.gainItem(2049100, 5);//���� 
				cm.gainItem(3015332, 1);//babyƷ����
				cm.gainItem(1142792,5,5,5,5,200,200,5,5,50,50,50,50,15,15);////�������ѫ��
				cm.gainItem(1112421,8,8,8,8,200,200,8,8,50,50,50,50,5,5);////��ָ
				cm.gainMeso(1000000);
                                cm.gainNX(20000); //���
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��Ե�� 100Ԫ�׳��л�������л����֧�֣�");
            cm.dispose();
			}else{
            cm.sendOk("�㻹û�н����׳䣡");
            cm.dispose();
			}
		}
    }
}


