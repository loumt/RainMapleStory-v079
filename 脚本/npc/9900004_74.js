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
            text += "#L1##r#v4001245#��ȡ1000Ԫ�ۼƳ�ֵ�����#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4001245,1)){
				cm.gainItem(4001245, -1);
				cm.gainItem(2340000, 20);//ף��
				cm.gainItem(2049100, 20);//����
				cm.gainItem(1112424,8,8,8,8,200,200,8,8,50,50,50,50,5,5);////��ָ
				cm.gainItem(3015051, 1);//���ްԷɻ�
				cm.gainItem(1022224, 1);//���۾���֮��Lv.1
				cm.gainItem(1032206, 1);//�񻰶�����ԭ��1�׶�
				cm.gainItem(2040807, 3);//���׹���
				cm.gainItem(1012172, 1);//������150
				cm.gainItem(1142907,20,20,20,20,1000,1000,20,20,100,100,50,50,15,15);//ð�յ��ղؼ�
				cm.gainMeso(10000000);
                                cm.gainNX(80000); //���
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��Ե�� 1000Ԫ�ۼƳ�ֵ��л�������л����֧�֣�");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
		}
    }
}


