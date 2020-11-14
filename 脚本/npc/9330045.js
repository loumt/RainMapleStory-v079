/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
    cm.sendSimple("你好！我是渔场管理员.\n\r如果你想要进行钓鱼，请到[商城]购买[钓鱼竿]，钓鱼竿分#v5340001:#/#v5340000:#两种，高级10秒钓一次鱼，普通的是20秒一次，好了介绍这么多，多多搜集兑换丰厚奖励吧！\n\r #b#L0# #v4000411#  进入钓鱼场.#l \n\r #L1##v3011000#  购买钓鱼椅.#l \n\r #L6##v2300000#   鱼饵购买.#l \n\r #L2##v5350000#  兑换鱼饵(商城购买).#l \n\r #L3##v4161001#   钓鱼指南.#l \n\r #L5##v4001200#   小鱼兑换经验.#l ");
       } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.haveItem(5340000) || cm.haveItem(5340001)) {
		if (cm.haveItem(3011000)) {
		    cm.saveLocation("FISHING");
		    cm.warp(741000200);
		    cm.dispose();
		} else {
		    cm.sendNext("你必须有鱼的椅子以便能钓鱼！");
		    cm.safeDispose();
		}
	    } else {
		cm.sendNext("你必须有鱼杆，有鱼饵！");
		cm.safeDispose();
	    }
	}
	if (sel == 1) {
	    if (cm.haveItem(3011000)) 
		{
		cm.sendNext("你已经有一把钓鱼椅。每个角色只能有1个钓鱼椅。");
	    } else {
		if (cm.canHold(3011000) && cm.getMeso() >= 500000) {
		    cm.gainMeso(-500000);
		    cm.gainItem(3011000, 1);
		    cm.sendNext("快乐钓鱼~");
		} else {
		    cm.sendOk("请检查是否有所需的5W金币或足够的背包空间。");
		}
	    }
	    cm.safeDispose();
	}	
	if (sel == 2) {
	    if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(5350000,-1);
			cm.gainItem(2300001, 120);
		    cm.sendNext("快乐钓鱼~");
		} else {
		    cm.sendNext("高级诱饵兑换成功。");
		}
	    } else {
		cm.sendOk("请检查是否有足够的背包空间和美味的诱饵可以从我这里买也可以去商场里面买。");
	    }
	    cm.safeDispose(); 
	}	
	if (sel == 3) {
	    cm.sendOk("你需要10级以上，有鱼竿、鱼饵，钓椅进入钓鱼湖。你每1分钟就要一次一次的卷盘。跟湖人大马德里克看看你捕捉记录！");
	    cm.safeDispose();
	    } 		
	if (sel == 4) {
		cm.openNpc(9330045, 2);
	    } 		
	if (sel == 5) {
		cm.openNpc(9330045, 4);
	    }  		
	if (sel == 6) {
	    cm.sendYesNo("需要购买鱼饵吗？（40000金币/120个）");	
	    if (cm.canHold(2300000,120) && cm.getMeso() >= 40000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-40000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("快乐钓鱼~");
		} else {
		    cm.sendNext("拿好您的诱饵，钓鱼快乐。");
		}
	    } else {
		cm.sendOk("请检查是否有所需的3000000金币或足够的背包空间。");
	    }
	    cm.safeDispose();
	}
    }
}	
