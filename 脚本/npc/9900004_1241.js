/* global cm, text */

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��Ҫ������������������ң�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "���Ƿ���Ѱ��һ�����Ժ��㹲ͬ���#b�������#k�Ķ���?ʹ���ҵĹ��ܣ�����Ϊ�㷢һ��#d������ӵ�����#k��\r\n\r\n";
            text += "#L1##bӢ��ѧԺ������������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L2##b������Ӹ�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L3##b����������Ӹ�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L4##b������껪������������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L5##b���101��Ӹ�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L6##b���Ů������Ӹ�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L7##b������Ӹ�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L8##b������Ӹ�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L9##b����ŷ������Ҷ��������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L10##bǧ���������ż�����������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L11##b��żʦBOSS��ս��������<100000ð�ձ�>#l\r\n\r\n";
            text += "#L12##b��ַ����Կ�ս��������<100000ð�ձ�>#l\r\n\r\n";
            cm.sendSimple(text);
            
            //cm.sendSimple("\r\n\r\n#L1##k����������������<20000ð�ձ�>#l#r\r\n\r\n#L3##b��߳���������<30000ð�ձ�>#l\r\n\r\n#L4##r#d���Ů������������<50000ð�ձ�>\r\n\r\n#L5##d糺���������<100000ð�ձ�>")
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿһ�����[Ӣ��ѧԺ����].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ�����Ӣ��帱����͵ȼ�10����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿһ�����[������Ӹ���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ�����������Ӹ�����͵ȼ�10����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.getPlayer().getLevel() >= 21 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿһ�����[����������Ӹ���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ��������������Ӹ�����͵ȼ�21����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[������껪����].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ����������껪������͵ȼ�30����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.getPlayer().getLevel() >= 35 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[���101��Ӹ���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ��������101��Ӹ�����͵ȼ�35����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.getPlayer().getLevel() >= 51 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[���Ů������Ӹ���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ��������Ů������Ӹ�����͵ȼ�51����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.getPlayer().getLevel() >= 55 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[������Ӹ���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ����㺣����Ӹ�����͵ȼ�55����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[����ɭ����Ӹ���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ����㶾��ɭ����Ӹ�����͵ȼ�70����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[����ŷ������Ҷ����].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ���������ŷ������Ҷ������͵ȼ�100����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[ǧ���������ż���].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ�����ǧ���������ż��򸱱���͵ȼ�120����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.getPlayer().getLevel() >= 130 && cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[��żʦBOSS��ս����].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1����ĵȼ�������żʦBOSS��ս������͵ȼ�130����Ҫ��\r\n���ܵ�ԭ��2�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.getPlayer().getMeso() >= 100000) {
                    cm.gainMeso(-100000);
                    cm.�����������(1, "Ƶ����" + cm.getC().getChannel() + ",��ң�" + cm.getPlayer().getName() + "����Ҫ������ʿ���жԿ�����[��ַ����Կ�����].");
                    cm.dispose();
                } else {
                    cm.sendOk("�������ʧ���ˣ�\r\n���ܵ�ԭ��1�����ð�ձҲ���ʮ���޷�ˢ�������");
                    cm.dispose();
                }
            }
        }
    }
}


