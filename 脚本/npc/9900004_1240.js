load("nashorn:mozilla_compat.js");
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);

var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var xnew1="��";
var xnew2="���";
var xnew3="����";
var xnew4="�����";
var xnew5="������";
var xold1="��";
var xold2="���";
var xold3="����";
var xold4="�����";
var xold5="������";
var xold0="";
//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
var textz = ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
textz += " \t\t\t #e#d��ӭ����#r����ð�յ�#k#r����ϵͳ#n \r\n"
textz += "\t\t\t#e#d  ÿ������ȫ����+100������#k#n\r\n"
textz += "#L1##b" + ��ɫ��ͷ + "����#e#b��#n#r�������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v4000313#��100��#l\r\n";
textz += "#L2##b" + ��ɫ��ͷ + "����#e#b��#n#r������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v4000313#��200��#l\r\n";
textz += "#L3##b" + ��ɫ��ͷ + "����#e#b��#n#r�����#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v4000313#��300��#l\r\n";
textz += "#L4##b" + ��ɫ��ͷ + "����#e#b��#n#r����#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v4000313#��400��#l\r\n";
textz += "#L5##b" + ��ɫ��ͷ + "����#e#b��#n#r������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v4000313#��500��#l\r\n";
 
cm.sendSimple (textz);    
				
}else if (status == 1) {

var ii = Packages.server.MapleItemInformationProvider.getInstance();
var item = cm.getInventory(1).getItem(1);
if (selection == 1) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() >= xold1){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#d����ǿ������");
cm.dispose();
return;
}
if(cm.haveItem(4000313, 100)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew1);
cm.gainItem(4000313,-100);
				var hwchancess= 100;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew1+"");
        cm.dispose();
     }else{
        cm.sendOk("û���㹻��#v4000313#");
        cm.dispose();
}


}else if (selection == 2) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold1){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(4000313, 200)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew2);
cm.gainItem(4000313,-200);
				var hwchancess= 100;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew2+"");
        cm.dispose();
     }else{
        cm.sendOk("û���㹻��#v4000313#");
        cm.dispose();
}


}else if (selection == 3) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold2){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(4000313, 300)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew3);
cm.gainItem(4000313,-300);
				var hwchancess= 100;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew3+"");
        cm.dispose();
     }else{
        cm.sendOk("û���㹻��#v4000313#");
        cm.dispose();
}


}else if (selection == 4) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold3){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(4000313, 400)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew4);
cm.gainItem(4000313,-400);
				var hwchancess= 100;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew4+"");
        cm.dispose();
     }else{
        cm.sendOk("û���㹻��#v4000313#");
        cm.dispose();
}


}else if (selection == 5) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold4){
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(4000313, 500)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew5);
cm.gainItem(4000313,-500);
				var hwchancess= 100;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew5+"");
        cm.dispose();
     }else{
        cm.sendOk("û���㹻��#v4000313#");
        cm.dispose();
}

  }
    }
      }
        }


