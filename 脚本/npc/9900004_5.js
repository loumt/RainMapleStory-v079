/* global cm */

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            //����ǩ��״̬
            if (cm.getBossLog('playqd') > 0) {//ȡ��¼�Ƿ�ǩ����
                var qdzt = "��ǩ��";
            } else {
                var qdzt = "δǩ��";
            }

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t  ��ӭ����#b" + cm.ms() + "\r\n\t\t\t  #k��ǰ��ǩ��������#b" + cm.getPlayer().getqiandao() + "��#k\r\n\t\t\t  ����ǩ��״̬��#b" + qdzt + "#k\r\n\r\n"

            if (cm.getBossLog('playqd')) {//�ж��Ƿ����ǩ����¼
                text += "" + ��ɺ� + "����ǩ��" + ��� + "#l\r\n\r\n" //������ʾ����
            } else {
                text += "#L1#" + ���ڽ������� + "����ǩ��" + ���ڽ����� + "#l\r\n\r\n"//��������ʾ����
            }

            if (!cm.haveItem(4032398, 1)) {//�ж��Ƿ���ǩ�����ĳ�ϯͼ�£��еĻ�˵��û��ȡ����
                text += "" + ��ɺ� + "��ȡ����ǩ������" + ��� + "#l\r\n\r\n" //��������ʾ����
            } else {
                text += "#L2#" + ���ڽ������� + "��ȡ����ǩ������" + ���ڽ����� + "#l\r\n\r\n"//������ʾ����
            }
            if (cm.getqiandao() > 0){
            text += "#L3#" + ���ڽ������� + "����ǩ��3����ȡǩ������#l\r\n\r\n"//
            text += "#L4#" + ���ڽ������� + "����ǩ��5����ȡǩ������#l\r\n\r\n"//
            text += "#L5#" + ���ڽ������� + "����ǩ��7����ȡǩ������#l\r\n\r\n"//
            text += "#L6#" + ���ڽ������� + "����ǩ��15����ȡǩ������#l\r\n\r\n"//
            text += "#L7#" + ���ڽ������� + "����ǩ��20����ȡǩ������#l\r\n\r\n"//
            text += "#L8#" + ���ڽ������� + "����ǩ��25����ȡǩ������#l\r\n\r\n"//
            text += "#L9#" + ���ڽ������� + "����ǩ��30����ȡǩ������#l\r\n\r\n"//
            }
            cm.sendSimple(text);
        } else if (status == 1) {
            if (!cm.beibao(4, 1)) {
                cm.sendOk("���������಻��1���ո�");
                cm.dispose();
            } else if (selection == 1) { //ǩ��
                    if (cm.getBossLog('playqd') < 1) { //ǩ����һ�콱��
                        cm.gainItem(4032398, 1);//�����ϯͼ��1��,������ȡǩ������
                        cm.setBossLog('playqd');//д�����ݿ⣬���������ǩ��//�����24Сʱ�Զ���ʼ�����ڶ�����ٴ�ǩ��
                        cm.getPlayer().gainqiandao(1);//��gain�����ۼ���,��¼һ��ǩ������,set�����ô�����gain�ǵ��Ӽ�¼����
                        cm.��ʱ�浵();
                        cm.sendOk("��ϲ��ǩ���ɹ�����ȡ��ϯͼ��һö\r\n��ȥ��ȡǩ��������~��");
                        cm.����(1, "[ÿ��ǩ������]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ����");
                        cm.dispose();
                    } else {
                        cm.sendOk("������Ѿ�ǩ������!");
                        cm.dispose();
                    }
                } else if (selection == 2) { //ǩ��
                    if (cm.getMeso() < 2100000000) { //�ж��Ƿ���1����ϯͼ��
                        cm.gainItem(4001126, 100);//����100����Ҷ
                        cm.gainDY(100);//����100����þ�
                        cm.gainMeso(1000000);//����100����Ϸ��
                        cm.gainItem(4032398, -1);//�۳������ĳ�ϯͼ�µ���
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ��ǩ��������");
                        cm.dispose();
                    } else {
                        cm.sendOk("�޷���ȡ��\r\n���ܵ�ԭ���㱳����Ǯ�Ѿ�����21�ڣ�������ȡʧ�ܣ��ȴ����������");
                        cm.dispose();
                    }
                } else if (selection == 3) { //��ȡǩ��3�콱��
                    if (cm.getqiandao() == 3) { //�ж��Ƿ�ǩ����3��
                        cm.gainItem(4001126, 300);//����300����Ҷ
                        cm.gainDY(300);//����300����þ�
                        cm.gainMeso(3000000);//����300����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��3�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������3��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                } else if (selection == 4) { //��ȡǩ��5�콱��
                    if (cm.getqiandao() == 5) { //�ж��Ƿ�ǩ����5��
                        cm.gainItem(4001126, 500);//����500����Ҷ
                        cm.gainDY(500);//����500����þ�
                        cm.gainMeso(5000000);//����500����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��5�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������5��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                } else if (selection == 5) { //��ȡǩ��7�콱��
                    if (cm.getqiandao() == 7) { //�ж��Ƿ�ǩ����7��
                        cm.gainItem(4001126, 700);//����700����Ҷ
                        cm.gainDY(700);//����700����þ�
                        cm.gainMeso(7000000);//����700����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��7�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������7��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                } else if (selection == 6) { //��ȡǩ��15�콱��
                    if (cm.getqiandao() == 15) { //�ж��Ƿ�ǩ����15��
                        cm.gainItem(4001126, 1500);//����1500����Ҷ
                        cm.gainDY(1500);//����1500����þ�
                        cm.gainMeso(15000000);//����1500����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��15�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������15��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                } else if (selection == 7) { //��ȡǩ��20�콱��
                    if (cm.getqiandao() == 20) { //�ж��Ƿ�ǩ����20��
                        cm.gainItem(4001126, 2000);//����2000����Ҷ
                        cm.gainDY(2000);//����2000����þ�
                        cm.gainMeso(20000000);//����2000����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��20�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������20��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                } else if (selection == 8) { //��ȡǩ��25�콱��
                    if (cm.getqiandao() == 25) { //�ж��Ƿ�ǩ����25��
                        cm.gainItem(4001126, 2500);//����2500����Ҷ
                        cm.gainDY(2500);//����2500����þ�
                        cm.gainMeso(25000000);//����2500����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��25�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������25��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                } else if (selection == 9) { //��ȡǩ��30�콱��
                    if (cm.getqiandao() == 25) { //�ж��Ƿ�ǩ����30��
                        cm.gainItem(4001126, 3000);//����3000����Ҷ
                        cm.gainDY(3000);//����3000����þ�
                        cm.gainMeso(30000000);//����3000����Ϸ��
                        cm.getPlayer().gainqiandao(1);//��ȡ֮��Ҫ�ۼƼ�¼ǩ������
                        cm.��ʱ�浵();
                        cm.sendOk("��ȡ�ɹ���");
                        cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "���ɹ���ȡ������ǩ��30�콱����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȡʧ��!\r\n���ܵ�ԭ��1������ǩ������������30��\r\n���ܵ�ԭ��2��������ȡ���ˣ�\r\n����ǰ��ǩ������Ϊ��"+ cm.getPlayer().getqiandao() +"��");
                        cm.dispose();
                    }
                }
            }
        }
    }




