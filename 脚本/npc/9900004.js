var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
        }
        else {
            status--;
        }
        if (status == 0) {
            if (cm.getJob() >= 0 && cm.getJob() <= 522 && cm.hasSkill(1017) == false) {
                cm.teachSkill(1017, 1, 1);
            } else if (cm.getJob() >= 1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false) {
                cm.teachSkill(20001019, 1, 1);
            }
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#b#v4031344##v4031344##v4031344##v3994071##v3994067##v3994071##v3994067##v4031344##v4031344##v4031344##k\r\n";
            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += " \t\t\t  #e#d��ӭ����#r����ð�յ�#k#n              \r\n"
            text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"
            text += "#d�����#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d ������#b" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n"
            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            var tex2 = "" + cm.getHyPay(1) + "";
            text += "#L1##b" + ��ɫ�ǵ� + "ȫ�ܴ���#l#l#L2##b" + ��ɫ�ǵ� + "���߽���#l#l#L3##b" + ��ɫ�ǵ� + "����̵�#l\r\n"//3
            text += "#L7##b" + ��ɫ�ǵ� + "��������#l#l#L10999##b" + ��ɫ�ǵ� + "�鿴����#l#l#L6##b" + ��ɫ�ǵ� + "��ȯ�̳�#l\r\n#L999##b"
                + ��ɫ�ǵ� + "����תְ#l#L1999##b" + ��ɫ�ǵ� + "�ʼ����#l#L11999##b" + ��ɫ�ǵ� + "����ϵͳ#l\r\n#L111999##b" +
                ��ɫ�ǵ� + "��������#l#L1111999##b" + ��ɫ�ǵ� + "�һ�ϵͳ#l#L14##b" + ��ɫ�ǵ� + "�һ�����#l#l\r\n#L2999##b" +
                ��ɫ�ǵ� + "ÿ������#l#L3999##b" + ��ɫ�ǵ� + "ÿ��ǩ��#l#L4999##b" + ��ɫ�ǵ� + "��������#l#l\r\n#L5999##b" +
                ��ɫ�ǵ� + "Ѫ������#l#L6999##b" + ��ɫ�ǵ� + "��Ҷ�齱#l#L7999##b" + ��ɫ�ǵ� + "��������#l#l\r\n#L8999##b" +
                ��ɫ�ǵ� + "21����Ϸ#l#L9999##b" + ��ɫ�ǵ� + "������Ϸ#l#L15##b" + ��ɫ�ǵ� + "ɾ����Ʒ#l#l\r\n\r\n"//3

            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += "#L1234##b" + ��ɫ��ͷ + "��ʱ����#l#l#L1235##b" + ��ɫ��ͷ + "ɱ�ֽ���#l#l#L1236##b" + ��ɫ��ͷ + "�������#l\r\n\r\n"
            text += "#L1237##b" + ��ɫ��ͷ + "ÿ���ͽ�#l#l#L1247##b" + ��ɫ��ͷ + "��������#l#l#L1248##b" + ��ɫ��ͷ + "ʦͽϵͳ#l\r\n\r\n"
            text += "#L1240##b" + ��ɫ��ͷ + "����ϵͳ#l#l#L1241##b" + ��ɫ��ͷ + "��������#l#l#L1242##b" + ��ɫ��ͷ + "�ط�BOSS#l\r\n\r\n"
            text += "#L1243##b" + ��ɫ��ͷ + "���ŶĲ�#l#l#L1244##b" + ��ɫ��ͷ + "���϶ĳ�#l#l#L1245##b" + ��ɫ��ͷ + "��ȯ�齱#l\r\n\r\n"
            text += "#L1246##b" + ��ɫ��ͷ + "�Ҿ�ǿ��#l#l#L1252##b" + ��ɫ��ͷ + "��ʯ�¸�#l#l#L1253##b" + ��ɫ��ͷ + "����ǿ��#l\r\n\r\n"
            text += "#L1249##b" + ��ɫ��ͷ + "����ȫ��#l#l#L1250##b" + ��ɫ��ͷ + "�ı�ְҵ#l#l#L1251##b" + ��ɫ��ͷ + "��������#l\r\n\r\n"
            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n\r\n"
            if (cm.getPlayer().isGM()) {
                text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\t#L1002#ˢ��Ʒ#l\t#L1003#������#l\r\n#L1004#ˢ�����#l\r\n"
                //  text += "#L8##b" + ��ɫ��ͷ + "�����׹#l#l\r\n\r\n"//3
                //   text += "#L10##b" + ��ɫ��ͷ + "��ѵ�װ#l#l#L18##b" + ��ɫ��ͷ + "���а�#l#l#L12##b" + ��ɫ��ͷ + "�����һ�#l\r\n\r\n"//3
                //  text += "#L13##b" + ��ɫ��ͷ + "ѫ����ȡ#l#l#L14##b" + ��ɫ��ͷ + "��������#l#l#L15##b" + ��ɫ��ͷ + "��ֵ����#l\r\n\r\n"//3
                // text += "#L17##b" + ��ɫ��ͷ + "װ������#l#l#L19##r" + ��ɫ�ǵ� + "��ʱװ������#l#l\r\n\r\n"//3
                //text += "#L20##b" + ��ɫ��ͷ + "�ƽ��Ҷ��������#l#l\r\n\r\n"//3
                //text += "#L11##e#r�һ���ֵ���#l#L15##e#r�һ��������#l#L14##e#r����ҽ�����#l\r\n"//3
                //text += "#L4##e#r��ɫ���תְ#l#L2##e#d�������񲹸�#l#L13##e#rͬ����װ�̳�#l\r\n"//3
                //text += "#L8##e#r��Ҷ�����þ�#l#L9##e#d����ʱ�佱��#l#L16##e#dɾ��ָ������#l\r\n\r\n"//3

            }
            cm.sendSimple(text);
        } else if (selection == 1) {//�����
            cm.openNpc(9900004, 1);
        } else if (selection == 2) {//���߽���
            cm.openNpc(9900004, 9);
        } else if (selection == 3) { //����̵�
            cm.openNpc(9250010, 0);
        } else if (selection == 999) {//���߽���
            cm.openNpc(9900004, 2);
        } else if (selection == 1999) {//���߽���
            cm.dispose();
            cm.openNpc(9050002);
        } else if (selection == 11999) {//���߽���
            cm.dispose();
            cm.openNpc(9310032);
        } else if (selection == 4) {//��Ҷ�һ�
            cm.openNpc(9900004, 5);
        } else if (selection == 5) {//ɾ����Ʒ
            cm.openNpc(9900004, 444);
        } else if (selection == 6) {//����̳�
            cm.openNpc(9900004, 13);
        } else if (selection == 7) {//��������
            cm.openNpc(9900004, 77);
        } else if (selection == 8) {//��������
            cm.openNpc(9900004, 78);
        } else if (selection == 9) {//�����ͻ�
            cm.openNpc(9010009, 0);
        } else if (selection == 10) {//��ѵ�װ
            cm.openNpc(9310071, 0);
        } else if (selection == 11) {//���ﲹ��
            cm.openNpc(9900004, 68);
        } else if (selection == 12) {//�����һ�
            cm.openNpc(2000, 22);
        } else if (selection == 13) {//ѫ����ȡ
            cm.openNpc(9900004, 7);
        } else if (selection == 14) {//��������
            cm.openNpc(9310033, 0);
        } else if (selection == 15) {//��ֵ����
            cm.openNpc(9900004, 81);
        } else if (selection == 16) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 2999) {//ÿ������
            cm.openNpc(1200004, 0);
        } else if (selection == 3999) {//ÿ��ǩ��
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//��������
            cm.openNpc(9000036, 0);
        } else if (selection == 5999) {//Ѫ������
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//�齱
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//����
            cm.openNpc(9000021, 0);
        } else if (selection == 8999) {//21��
            cm.openNpc(9330031, 0);
        } else if (selection == 9999) {//����
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
            cm.openNpc(2000, 0);
        } else if (selection == 1234) {//
            cm.openNpc(9900004, 1234);
        } else if (selection == 1235) {//
            cm.openNpc(9900004, 1235);
        } else if (selection == 1236) {//
            cm.openNpc(9900004, 1236);
        } else if (selection == 1237) {//
            cm.openNpc(9900004, 1237);
        } else if (selection == 1238) {//
            cm.openNpc(9900004, 1238);
        } else if (selection == 1239) {//
            cm.openNpc(9900004, 1239);
        } else if (selection == 1240) {//
            cm.openNpc(9900004, 1240);
        } else if (selection == 1241) {//
            cm.openNpc(9900004, 1241);
        } else if (selection == 1242) {//
            cm.openNpc(9900004, 1242);
        } else if (selection == 1243) {//
            cm.openNpc(9900004, 1243);
        } else if (selection == 1244) {//
            cm.openNpc(9900004, 1244);
        } else if (selection == 1245) {//
            cm.openNpc(9900004, 1245);
        } else if (selection == 1246) {//
            cm.openNpc(9900004, 1246);
        } else if (selection == 1247) {//
            cm.openNpc(9900004, 1247);
        } else if (selection == 1248) {//
            cm.openNpc(9900004, 1248);
        } else if (selection == 1249) {//
            cm.openNpc(9900004, 1249);
        } else if (selection == 1250) {//
            cm.openNpc(9900004, 1250);
        } else if (selection == 1251) {//
            cm.openNpc(9900004, 1251);
        } else if (selection == 1252) {//
            cm.openNpc(9270052, 0);
        } else if (selection == 1253) {//
            cm.openNpc(9900004, 1253);
        } else if (selection == 1254) {//
            cm.openNpc(9900004, 1254);
        } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 1002) {//
            cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) {//
            cm.dispose();
            cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
            cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
            cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);
            ;
            cm.gainMeso(210000000);
            cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
            cm.dispose();
        } else if (selection == 999) {//
            if (cm.getBossLog("2016�") <= 0 && cm.canHold(4001215, 3) && cm.getLevel() >= 8) {
                cm.setBossLog("2016�");
                cm.gainItem(4001215, 3);
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��ȡ��2016-04-10���ϻ���影�������x3��");
                cm.sendOk("��ȡ�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
                cm.dispose();
            }
        }
    }
}


