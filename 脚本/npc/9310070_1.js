var status = 0;
var fstype = 0;
var price = 0; //�Ҿ�۸�
var types = new Array("װ����", "������", "������", "������", "�ֽ���");
var chance3 = (Math.floor(Math.random() * 8) + 1);

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
        if (mode == 1) status++;
        if (status == 0) {
            cm.sendSimple("\r\n#L0##r<�߼�ǿ��+3> 30��#v4000313##b����װ���Ҿ����#l");
        } else if (status == 1) {
            if (selection == 0) { 
                fstype = 1;
                cm.sendNext("��Ŀǰѡ�����30��#v4000313##b����װ���Ҿ����#k\r\n\r\n#rע�⣺50%���ʳɹ�");
            } else if (selection == 1) {
                fstype = 2;
                cm.sendSimple("Ŀǰֻ����#rװ����#k��#r�ֽ���#k������λ������������Ҫ���ǵ��������������޷������װ�����⣬û�еط��ţ�#r����㲻��Ҫĳ��װ������ѡ�����ɾ��~�ǲ��Ǻܷ��㣿ע�⣬�˴�����Ϊ���ɻָ�������������׼������ǰһ���������.\r\n#b#L1#��Ҫ��������װ����ĳһ��װ��#l\r\n#L2#��Ҫ���������ֽ���ĳһ��װ��#l");
            } else if (selection == 2) { //�ƽ��Ҷ
                fstype = 3;
                cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+1���ƽ��Ҷ\r\n#rע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\n#r��ʾ#k��#b�ƽ��Ҷ#k��ͨ��#g����ת��#k���,ÿת��һ�οɻ��1���ƽ��Ҷ");
            } else if (selection == 3) { //��ɫ��Ҷ
                fstype = 4;
                cm.sendNext("��Ŀǰѡ�����#r�漴����װ��ȫ����(10~20)#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+50����ɫ��Ҷ\r\n#bע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\nʲô���漴����ȫ�����أ�����ѡ��Ҫ�ӵ�װ���󣬻��漴����װ����ȫ�������һ��(10~20)��ȫƾ��ƷӴ\r\n#r��ʾ#k��#b��ɫ��Ҷ#k��ͨ����ɱ#g����#k����");
            } else if (selection == 4) { //���ñ�
                fstype = 5;
                cm.sendNext("��Ŀǰѡ�����#r�漴����װ��ȫ����(20~50)#k\r\n�����Ŀǰ��Ҫ��������2000���ñ�\r\n#bע��,����100%���ʳɹ�Ӵ#k,��Ȼ�Ͳ��õ���ʧ����~\r\nʲô���漴����ȫ�����أ�����ѡ��Ҫ�ӵ�װ���󣬻��漴����װ����ȫ�������һ��(20~50)��ȫƾ��ƷӴ");
            } else if (selection == 5) { //���˽�ֺ
                fstype = 6;
                cm.sendNext("��Ŀǰѡ�����#r�漴����װ��ȫ����(10~20)#k\r\n�����Ŀǰ��Ҫ��������1Eð�ձ�+100�������˽�ֺ\r\n#bע�⣺50%���ʳɹ�#k,��Ȼʧ�ܻ᷵����һ��������ѷ���\r\nʲô���漴����ȫ�����أ�����ѡ��Ҫ�ӵ�װ���󣬻��漴����װ����ȫ�������һ��(10~20)��ȫƾ��ƷӴ\r\n#r��ʾ#k��#b�����˽�ֺ#k��ͨ����ɱ#g������#k����");
            } else if (selection == 6) {
                cm.dispose();
                cm.openNpc(9900000, 1);
            } else if (selection == 105) {
                cm.dispose();
                cm.openNpc(9900000, 3);
            } else if (selection == 245) {
                cm.dispose();
                cm.openNpc(9310072,2);
            } else if (selection == 7) { //װ�������û�
                fstype = 7;
                cm.sendNext("��Ŀǰѡ�����#rװ�������û�#k\r\n�����Ŀǰ��Ҫ��������#e#r8888���ñ�#b#l\r\n#bע��,����100%���ʳɹ�Ӵ#k,��Ȼ�Ͳ��õ���ʧ����~\r\nʲô��װ�������û��أ�\r\n���ǰ�#e#rװ�����ĵ�һ��ķ��㲻��Ҫ������װ��\r\n�ڶ��������Ҫ����װ��#k\r\n��һ���װ���ͻ���ʧ!���Ի��Ƶ��ڶ�����װ����\r\n\r\n#e#r�����ݲ�֧������ ���� ��ݮ���� ���̳ǵ��װ�� ��ʧ������#b#l");
            }
        } else if (status == 2) {
            if (fstype == 1) { //�����
                fstype = 13;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "##z" + item.getItemId() + "#��");
                }
            }
            if (fstype == 2) { //����װ��
                if (selection == 1) {
                    var it;
                    var texts = "#r---------------��ѡ����Ҫ�����װ��----------------#b\r\n";
                    var inv = cm.getInventory(1);
                    for (var i = 1; i <= 96; i++) {
                        it = inv.getItem(i);
                        if (it != null) {
                            texts += "#L" + i + "#װ��ͼƬ:#v" + it.getItemId() + "# װ�����Ƽ�����:#g#z" + it.getItemId() + "##l#b\r\n"
                        }
                    }
                    fstype = 101;
                    cm.sendSimpleS(texts, 2);
                } else if (selection == 2) {
                    var it;
                    var texts = "#r---------------��ѡ����Ҫ�����װ��----------------#b\r\n";
                    var inv = cm.getInventory(5);
                    for (var i = 1; i <= 96; i++) {
                        it = inv.getItem(i);
                        if (it != null) {
                            texts += "#L" + i + "#װ��ͼƬ:#v" + it.getItemId() + "# װ�����Ƽ�����:#g#z" + it.getItemId() + "##l#b\r\n"
                        }
                    }
                    fstype = 102;
                    cm.sendSimpleS(texts, 2);
                }
            }
            if (fstype == 3) { //�ƽ��Ҷ
                fstype = 14;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "##z" + item.getItemId() + "#��");
                }
            }
            if (fstype == 4) { //��ɫ��Ҷ
                fstype = 15;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "##z" + item.getItemId() + "#��");
                }
            }
            if (fstype == 5) { //���ñ�
                fstype = 16;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "##z" + item.getItemId() + "#��");
                }
            }
            if (fstype == 6) { //��ֺ
                fstype = 17;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "##z" + item.getItemId() + "#��");
                }
            }
            if (fstype == 7) { //�����û�
                fstype = 18;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var item2 = cm.getInventory(1).getItem(2);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (item2 == null) {
                    cm.sendOk("�Բ���,��װ�����ڶ���û��װ��!");
                    cm.dispose();
                } else if (cm.getSpace(1) < 2) {  
                   cm.sendOk("#r - �����û� >> #k\r\n\r\n�����û�ʧ�ܣ�����װ����С��2����");  
                    cm.dispose(); 
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�ݲ�֧���̳���Ʒ.");
                    cm.dispose();           
                } else {
                    cm.sendNext("��ȷ������Ҫ��#r#z" + item.getItemId() + "##k�������滻��#b#z" + item2.getItemId() + "##k������,�滻�ɹ���#r#z" + item.getItemId() + "##k����ʧ.");
                }
            }
        } else if (status == 3) {
            if (fstype == 13) {
               if (cm.haveItem(4000313, 30) == false) {
                    cm.sendOk("�Բ���,��û���㹻��#v4000313#����");
                    cm.dispose();
                    return;
                }
                var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 3));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000313, -30);
                    cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]��װ������,ʹ�ûƽ��ҶΪ����������3���Ҿ����");
                    cm.dispose();
                } else {
                    cm.gainItem(4000313, -10);
                    cm.sendOk("���ź�������ʧ�ܣ��۳�������10�Żƽ��Ҷ");
                }
                cm.dispose();
                return;
            }
            if (fstype == 14) {
                if (cm.getMeso() < price || cm.haveItem(4310003, 1) == false) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4310003#");
                    cm.dispose();
                    return;
                }
                var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainMeso(-price);
                    cm.gainItem(4310003, -1);
                    cm.sendOk("��ϲ��ɹ�������쿴��İ����ɣ�");
                    cm.worldMessage("[��������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ûƽ��ҶΪ����������1���Ҿ����");
                    cm.dispose();
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4310003, -1);
                    cm.sendOk("���ź�������ʧ��");
                }
                cm.dispose();
                return;
            }
            if (fstype == 15) {
                if (cm.getMeso() < price || cm.haveItem(4032733, 50) == false) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4032733#");
                    cm.dispose();
                    return;
                }
                var chance1 = Math.floor(Math.random() * 2);
                if (chance1 == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var chance = Math.floor(Math.random() * 100);
                    var lvsj = Math.floor(Math.random() * 10) + 10;
                    cm.gainMeso(-price);
                    cm.gainItem(4032733, -50);
                    if (chance <= 5) { //watk
                        item.setWatk(item.getWatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ�����������Ĺ���");
                    } else if (chance > 2 && chance <= 6) { //matk
                        item.setMatk(item.getMatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#kħ��.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ������������ħ������");
                    } else if (chance > 20 && chance <= 40) { //str
                        item.setStr(item.getStr() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
                    } else if (chance > 40 && chance <= 60) { //dex
                        item.setDex(item.getDex() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
                    } else if (chance > 60 && chance <= 80) { //luk
                        item.setInt(item.getInt() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
                    } else if (chance > 80) { //int
                        item.setLuk(item.getLuk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�òʺ��Ҷ����������������");
                    }
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4032733, -25);
                    cm.sendOk("���ź�������ʧ��");
                }
                cm.dispose();
                return;
            }
            if (fstype == 17) {
                if (cm.getMeso() < price || cm.haveItem(4000054, 100) == false) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,������û���㹻��#z4000054#");
                    cm.dispose();
                    return;
                }
                var chance1 = Math.floor(Math.random() * 2);
                if (chance1 == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var chance = Math.floor(Math.random() * 100);
                    var lvsj = Math.floor(Math.random() * 10) + 10;
                    cm.gainMeso(-price);
                    cm.gainItem(4000054, -100);
                    if (chance <= 5) { //watk
                        item.setWatk(item.getWatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ�����������Ĺ���");
                    } else if (chance > 2 && chance <= 4) { //matk
                        item.setMatk(item.getMatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#kħ��.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ������������ħ������");
                    } else if (chance > 5 && chance <= 10) { //str
                        item.setStr(item.getStr() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
                    } else if (chance > 11 && chance <= 20) { //dex
                        item.setDex(item.getDex() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
                    } else if (chance > 21 && chance <= 50) { //luk
                        item.setInt(item.getInt() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
                    } else if (chance > 81) { //int
                        item.setLuk(item.getLuk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ����������������");
					} else if (chance > 51 && chance <= 70) { //Hp
                        item.setHp(item.getHp() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#khp.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ������������Hp");
				    } else if (chance > 71 && chance <= 80) { //Mp
                        item.setMp(item.getMp() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#kMP.");
                        cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�ð����˽�ֺ������������MP");
                    }
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4000054, -50);
                    cm.sendOk("���ź�������ʧ��");
                }
                cm.dispose();
                return;
            }
            if (fstype == 16) {
                if (cm.getHyPay(1) < 2000) {
                    cm.sendOk("�Բ���,��û���㹻�����ñ�");
                    cm.dispose();
                    return;
                }
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var chance = Math.floor(Math.random() * 100);
                var lvsj = Math.floor(Math.random() * 30) + 50;
                cm.addHyPay(2000,true);
                if (chance <= 5) { //watk
                    item.setWatk(item.getWatk() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ñ�Ҷ����������" + lvsj + "����.");
                } else if (chance > 5 && chance <= 20) { //matk
                    item.setMatk(item.getMatk() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#kħ��.");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ñ�Ҷ����������" + lvsj + "ħ������");
                } else if (chance > 20 && chance <= 40) { //str
                    item.setStr(item.getStr() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ñ�Ҷ����������" + lvsj + "����");
                } else if (chance > 40 && chance <= 60) { //dex
                    item.setDex(item.getDex() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ñ�Ҷ����������" + lvsj + "����");
                } else if (chance > 60 && chance <= 80) { //luk
                    item.setInt(item.getInt() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ñ�Ҷ����������" + lvsj + "����");
                } else if (chance > 80) { //int
                    item.setLuk(item.getLuk() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + lvsj + "#k����.");
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]���г�Kin����ʹ�����ñ�Ҷ����������" + lvsj + "����");
                }
                cm.dispose();
                return;
            }
            if (fstype == 18) {
                if (cm.getHyPay(1) < 15888) {
                    cm.sendOk("�Բ���,��û���㹻�����ñ�");
                    cm.dispose();
                    return;
                }
                cm.addHyPay(15888,true);
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy(); //��ȡ��һ���װ��
                var item2 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).copy(); //��ȡ�ڶ����װ��
                item2.setStr(item.getStr());
                item2.setDex(item.getDex());
                item2.setInt(item.getInt());
                item2.setLuk(item.getLuk());
                item2.setHp(item.getHp());
                item2.setMp(item.getMp());
                item2.setWatk(item.getWatk());
                item2.setMatk(item.getMatk());
                item2.setWdef(item.getWdef());
                item2.setMdef(item.getMdef());
                item2.setAcc(item.getAcc());
                item2.setAvoid(item.getAvoid());
                item2.setHands(item.getHands());
                item2.setSpeed(item.getSpeed());
                item2.setJump(item.getJump());
                item2.setPotential1(item.getPotential1());
                item2.setPotential2(item.getPotential2());
                item2.setPotential3(item.getPotential3());
                item2.setPotential4(item.getPotential4());
                item2.setPotential5(item.getPotential5());
                item2.setSocket1(item.getSocket1());
                item2.setSocket2(item.getSocket2());
                item2.setSocket3(item.getSocket3());
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
		cm.getPlayer().getInventory(type).addItem(item2);
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
                cm.sendOk("��ϲ,�����û��ɹ�.�쿴����İ����ɣ�");
                cm.worldMessage("[�����û�]����ϲ[" + cm.getChar().getName() + "]���г��ɹ�ʹ���������û�����.");
                cm.dispose();
            }
            if (fstype == 101) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, selection, 1, true);
                cm.sendOk("��ϲ,�˵����ѱ����.");
                cm.dispose();
            }
            if (fstype == 102) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.CASH, selection, 1, true);
                cm.sendOk("��ϲ,�˵����ѱ����.");
                cm.dispose();
            }
        }
    }
	    }
