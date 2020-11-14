var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var 红色 = "#fEffect/CharacterEff/1114000/2/0#";
var status = 0;
var fstype = 0;


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

	    var textz = "#r使用母矿可以在我这里强化装备.有几率失败.祝您好运! #k\r\n注意:装备请放第一格，#r强化成功会扣除升级次数!#k\r\n";

		textz += "------------------------------------------------------\r\n";
		textz += "#b#L0#" + 红色 + "使用10个#z4005000##v4005000#增加装备50力量\r\n";

		textz += "#b#L1#" + 红色 + "使用10个#z4005001##v4005001#增加装备50智力\r\n";

		textz += "#b#L2#" + 红色 + "使用10个#z4005002##v4005002#增加装备50敏捷\r\n";

		textz += "#b#L3#" + 红色 + "使用10个#z4005003##v4005003#增加装备50运气\r\n";
               
	    textz += "#b#L9#" + 红色 + "使用10个#z4005004##v4005004#增加装备500HP\r\n";
		
		textz += "#r#L4#" + 蓝色角点 + "用1个闹钟象征增加装备四维50（100%成功）\r\n";

		textz += "#r#L5#" + 蓝色角点 + "用1个鱼王象征增加装备四维100（100%成功）\r\n";

		textz += "#r#L6#" + 蓝色角点 + "用1个扎昆象征增加装备四维200（100%成功）\r\n";

		textz += "#r#L7#" + 蓝色角点 + "用1个黑龙之角增加装备四维300（100%成功）\r\n";

		//textz += "#r#L8#" + 蓝色角点 + "用1个时间之泪增加装备攻击10（100%成功，扣除回合）\r\n";



		cm.sendSimple (textz);  
  
//----------------------------------------------------------------------------------------------------------------------------------------------	
//----------------------------------------------------------------------------------------------------------------------------------------------		
	}else if (status == 1) {

            if (selection == 0) { //力量母矿
                fstype = 0;
                cm.sendNext("你目前选择的是用力量母矿增加装备50力量（有几率失败，失败退回一半，成功了回合减1）");

            }else if (selection == 1) { //智慧母矿
                fstype = 1;
                cm.sendNext("你目前选择的是用智慧母矿增加装备50智力（有几率失败，失败退回一半，成功了回合减1）");

            }else if (selection == 2) { //敏捷母矿
                fstype = 2;
                cm.sendNext("你目前选择的是用敏捷母矿增加装备50敏捷（有几率失败，失败退回一半，成功了回合减1）");

            }else if (selection == 3) { //幸运母矿
                fstype = 3;
                cm.sendNext("你目前选择的是用幸运母矿增加装备50运气（有几率失败，失败退回一半，成功了回合减1）");
        
   }else if (selection == 9) { //黑暗母矿
                fstype = 9;
                cm.sendNext("你目前选择的是用幸运母矿增加装备500HP（加工费100万冒险币（100%成功，不减回合））");

            }else if (selection == 4) { //象征
                fstype = 4;
                cm.sendNext("你目前选择的是用闹钟象征增加装备四维各50.加工费500万冒险币（100%成功，不减回合）");

            }else if (selection == 5) { //象征
                fstype = 5;
                cm.sendNext("你目前选择的是用鱼王象征增加装备四维各100加工费500万冒险币（100%成功，不减回合）");

            }else if (selection == 6) { //象征
                fstype = 6;
                cm.sendNext("你目前选择的是用扎昆象征增加装备四维各200.加工费1000万冒险币（100%成功，不减回合）");

            }else if (selection == 7) { //黑龙角
                fstype = 7;
                cm.sendNext("你目前选择的是用黑龙之角增加装备四维各300.加工费2000点卷（100%成功，回合减1）");

            }else if (selection == 8) { //时间之石
                fstype = 8;
                cm.sendNext("你目前选择的是用时间之石增加装备攻击、魔法力10.加工费2000点卷（100%成功，回合减1）");
                }

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------

      } else if (status == 2) {

            if (fstype == 0) { //力量母矿
                fstype = 0;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
  
                }
            }


            if (fstype == 1) { //智慧母矿
                fstype = 1;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }

            if (fstype == 2) { //敏捷母矿
                fstype = 2;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }

            if (fstype == 3) { //运气母矿
                fstype = 3;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }
             if (fstype == 9) { //运气母矿
                fstype = 9;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }

            if (fstype == 4) { //运气母矿
                fstype = 4;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }


            if (fstype == 5) { //运气母矿
                fstype = 5;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }


            if (fstype == 6) { //运气母矿
                fstype = 6;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }


            if (fstype == 7) { //运气母矿
                fstype = 7;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }

            if (fstype == 8) { //运气母矿
                fstype = 8;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持点券装备升星，请使用普通装备！");
                    cm.dispose();
                }
            }


//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
	if (fstype == 0) {
		if (!cm.haveItem(4005000,10))  {
                    cm.sendOk("请带来#r 10 #k个#z4005000##v4005000#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setStr(item.getStr()+50);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005000,-10);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        成功为装备增加50力量"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005000,-1);
		 cm.sendOk("强化失败，退回你9个力量水晶");	
		}
		 cm.dispose();
		}



	} else if (fstype == 1) {
		if (!cm.haveItem(4005001,10))  {
                    cm.sendOk("请带来#r 10 #k个#z4005001##v4005001#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setInt(item.getInt()+50);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005001,-10);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        成功为装备增加50智力"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005001,-1);
		 cm.sendOk("强化失败，退回你9个智慧水晶");	
		}
		 cm.dispose();
		}

	} else if (fstype == 2) {
		if (!cm.haveItem(4005002,10))  {
                    cm.sendOk("请带来#r 10 #k个#z4005002##v4005002#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setDex(item.getDex()+50);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005002,-10);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        成功为装备增加50敏捷"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005002,-1);
		 cm.sendOk("强化失败，退回你9个敏捷水晶");	
		}
		 cm.dispose();
		}

	} else if (fstype == 3) {
		if (!cm.haveItem(4005003,10))  {
                    cm.sendOk("请带来#r 10 #k个#z4005003##v4005003#");
                    cm.dispose();
		}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
			
		} else {

                 var chance = Math.floor(Math.random() * 4);
                 if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		 item.setLuk(item.getLuk()+50);
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005003,-10);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『强化系统』：恭喜"+ cm.getChar().getName() +"        成功为装备增加50运气"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		} else {
		 cm.gainItem(4005003,-1);
		 cm.sendOk("强化失败，退回你9个运气水晶");	
		}
		 cm.dispose();
		}

	} else if (fstype == 9) {
		if (!cm.haveItem(4005004,10)){
                    cm.sendOk("请带来#r 10 #k个#z4005004##v4005004#");
                    cm.dispose();
		}else if (cm.getMeso() <= 1000000){
                    cm.sendOk("请带来100万加工费");
                    cm.dispose();
		//}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                   // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();
			
		} else {

                 //var chance = Math.floor(Math.random() * 3);
                // if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
		item.setHp(item.getHp()+500);
                 //item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 cm.gainItem(4005004,-10);
		 cm.gainMeso(-1000000);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『象征强化装备』：恭喜"+ cm.getChar().getName() +"        成功为装备增加500HP"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		//} else {
		 //cm.gainItem(4005003,-1);
		 //cm.sendOk("强化失败，退回你9个运气母矿");	
		//}
		 cm.dispose();
		}

	} else if (fstype == 4) {
		if (!cm.haveItem(4001084,1)){
                    cm.sendOk("请带来#r 1 #k个#z4001084##v4001084#");
                    cm.dispose();
		}else if (cm.getMeso() <= 5000000){
                    cm.sendOk("请带来500万加工费");
                    cm.dispose();
		//}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                   // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();
			
		} else {

                 //var chance = Math.floor(Math.random() * 3);
                // if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr()+50); //给予装备力量
		 item.setDex(item.getDex() + 50);//给予装备敏捷
		 item.setInt(item.getInt() + 50);//给予装备智力
		 item.setLuk(item.getLuk() + 50);//给予装备运气
		 cm.gainItem(4001084,-1);
		 cm.gainMeso(-5000000);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『闹钟象征强化装备』：恭喜"+ cm.getChar().getName() +"        使用1个闹钟象征为装备增加四维各50"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		//} else {
		 //cm.gainItem(4005003,-5);
		 //cm.sendOk("强化失败，退回你5个运气母矿");	
		//}
		 cm.dispose();
		}

	} else if (fstype == 5) {
		if (!cm.haveItem(4001085,1)){
                    cm.sendOk("请带来#r 1 #k个#z4001085##v4001085#");
                    cm.dispose();
		}else if (cm.getMeso() <= 5000000){
                    cm.sendOk("请带来500万加工费");
                    cm.dispose();
		//}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                   // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();
			
		} else {

                 //var chance = Math.floor(Math.random() * 3);
                // if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr()+100); //给予装备力量
		 item.setDex(item.getDex() + 100);//给予装备敏捷
		 item.setInt(item.getInt() + 100);//给予装备智力
		 item.setLuk(item.getLuk() + 100);//给予装备运气
		 cm.gainItem(4001085,-1);
		 cm.gainMeso(-5000000);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『鱼王象征强化装备』：恭喜"+ cm.getChar().getName() +"        使用1个鱼王象征为装备增加四维各100"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		//} else {
		 //cm.gainItem(4005003,-5);
		 //cm.sendOk("强化失败，退回你5个运气母矿");	
		//}
		 cm.dispose();
		}

	} else if (fstype == 6) {
		if (!cm.haveItem(4001083,1)){
                    cm.sendOk("请带来#r 1 #k个#z4001083##v4001083#");
                    cm.dispose();
		}else if (cm.getMeso() <= 5000000){
                    cm.sendOk("请带来500万加工费");
                    cm.dispose();
		//}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                   // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();
			
		} else {

                 //var chance = Math.floor(Math.random() * 3);
                // if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr()+200); //给予装备力量
		 item.setDex(item.getDex() + 200);//给予装备敏捷
		 item.setInt(item.getInt() + 200);//给予装备智力
		 item.setLuk(item.getLuk() + 200);//给予装备运气
		 cm.gainItem(4001083,-1);
		 cm.gainMeso(-5000000);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『扎昆象征强化装备』：恭喜"+ cm.getChar().getName() +"        使用1个扎昆象为装备增加四维各200"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		//} else {
		 //cm.gainItem(4005003,-5);
		 //cm.sendOk("强化失败，退回你5个运气母矿");	
		//}
		 cm.dispose();
		}

	} else if (fstype == 7) {
		if (!cm.haveItem(4001430,1))  {
                    cm.sendOk("请带来#r 1 #k个#z4001430##v4001430#");
                    cm.dispose();
		}else if (cm.getPlayer().getNX() <=2000){
                    cm.sendOk("请带来2000点卷");
                    cm.dispose();
		//}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                   // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();
			
		} else {

                 //var chance = Math.floor(Math.random() * 3);
                // if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setStr(item.getStr()+300); //给予装备力量
		 item.setDex(item.getDex() + 300);//给予装备敏捷
		 item.setInt(item.getInt() + 300);//给予装备智力
		 item.setLuk(item.getLuk() + 300);//给予装备运气
		 cm.gainItem(4001430,-1);
		 cm.gainNX(-2000);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『黑龙之角强化装备』：恭喜"+ cm.getChar().getName() +"        使用1个黑龙之角为装备增加四维各300"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		//} else {
		 //cm.gainItem(4005003,-5);
		 //cm.sendOk("强化失败，退回你5个运气母矿");	
		//}
		 cm.dispose();
		}

	} else if (fstype == 8) {
		if (!cm.haveItem(4021010,1))  {
                    cm.sendOk("请带来#r 1 #k个#z4021010##v4021010#");
                    cm.dispose();
		}else if (cm.getPlayer().getNX() <=2000){
                    cm.sendOk("请带来2000点卷");
                    cm.dispose();
		//}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                   // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();
			
		} else {

                 //var chance = Math.floor(Math.random() * 3);
                // if (chance <= 1) {
                 var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                 var statup = new java.util.ArrayList();
                 item.setUpgradeSlots((item.getUpgradeSlots() - 1));
		 item.setWatk(item.getWatk() + 10);
		 item.setMatk(item.getMatk() + 10);
		 cm.gainItem(4021010,-1);
		 cm.gainNX(-2000);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                 cm.serverNotice("『黑龙之角强化装备』：恭喜"+ cm.getChar().getName() +"        使用1个时间之石为装备增加攻击10"); 
                 Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                 Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		//} else {
		 //cm.gainItem(4005003,-5);
		 //cm.sendOk("强化失败，退回你5个运气母矿");	
		//}
		 cm.dispose();
		}


}										
}
}
}
