importPackage(net.sf.odinms.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


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

	    var textz = "\r\n您好，尊敬的 #b#h ##k,欢迎来到米米冒险岛#r签到中心#k，\r\n新人记得每天签到，福利多多哦！#l\r\n#b注：以下四种签到奖励，到达等级即可每日领取一次\r\n高等级者可#r兼领数种#k#b签到奖励！ 更有金叶、VIP等级赠送#l\r\n";


		textz += "#d#L0##r领取初级签到奖励（LV10）#k\r\n";

		textz += "#d#L1##r领取中级签到奖励（LV30）#k\r\n";

		textz += "#d#L2##r领取高级签到奖励（LV70）#k\r\n";

		textz += "#d#L3##r领取神级签到奖励（LV120）#k\r\n";

                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {
if (cm.getLevel()>= 10 && cm.getBossLog('PlayQuest1') < 1) {
cm.dispose();

 			cm.sendOk("恭喜您签到成功，签到奖励发放到您背包了，请注意查收！#k");
      			cm.dispose();
		cm.setBossLog('PlayQuest1');
                cm.gainItem(4001126,100);
                cm.gainNX( + 10000);
                cm.gainMeso(+ 1000000);
                cm.gainItemPeriod(5072000,10,1);
                cm.gainItem(2022118, 10);
		cm.dispose();
	} else 
		cm.sendOk("#r注:等级达到10级的玩家，每天只能领取一次该签到奖励哦！#k");
		cm.dispose();
	    


}else if (selection == 1) {
	if (cm.getLevel()>= 30 && cm.getBossLog('PlayQuest2') < 1) {
cm.dispose();

 			cm.sendOk("恭喜您签到成功，签到奖励发放到您背包了，请注意查收！#k");
      			cm.dispose();
		cm.setBossLog('PlayQuest2');
                cm.gainItem(4032226, 10);
                cm.gainItem(4000313, 10);
                cm.gainNX( + 20000);
                cm.gainMeso(+ 2000000);
				cm.gainItem(4000313,30);
                cm.gainItemPeriod(5073000,10,1);
		cm.dispose();
	} else 
		cm.sendOk("#r注:等级达到30级的玩家，每天只能领取一次该签到奖励哦！#k");
		cm.dispose();
	    

}else if (selection == 2) {
	if (cm.getLevel()>= 70 && cm.getBossLog('PlayQuest3') < 1) {
cm.dispose();

 			cm.sendOk("恭喜您签到成功，VIP等级+1，签到奖励发放到您背包了，请注意查收！#k");
      			cm.dispose();
		cm.setBossLog('PlayQuest3');
                cm.gainItem(4000313, 20);
                cm.gainItem(4000313, 20);
                cm.gainNX( + 30000);
                cm.gainMeso(+ 3000000);
				cm.gainItem(4000313,50);
				cm.gainvip(+1);
                cm.gainItemPeriod(5390000,10,1);
		cm.dispose();
	} else 
		cm.sendOk("#r注:等级达到70级的玩家，每天只能领取一次该签到奖励哦！#k");
		cm.dispose();

}else if (selection == 3){
	if (cm.getLevel()>= 120 && cm.getBossLog('PlayQuest4') < 1) {
cm.dispose();

 			cm.sendOk("恭喜您签到成功，VIP等级+1，签到奖励发放到您背包了，请注意查收！#k");
      			cm.dispose();
		cm.setBossLog('PlayQuest4');
                cm.gainItem(4000313, 50);
                cm.gainItem(4000313, 50);
                cm.gainNX( + 50000);
                cm.gainMeso(+ 5000000);
				cm.gainItem(4000313,100);
				cm.gainvip(+1);
                cm.gainItemPeriod(5390006,10,1);
		cm.dispose();
	} else 
		cm.sendOk("#r注:等级达到120级的玩家，每天只能领取一次该签到奖励哦！#k");
		cm.dispose();

}else if (selection == 4){
	if (cm.haveItem(4000273,88) && cm.getBossLog('PlayQuest5') < 1) {
		cm.gainItem(4000273,-88);
		cm.setBossLog('PlayQuest5');
		cm.gainItem(2340000,1);
		cm.sendOk("任务完成,获得以下奖励:\r\n#祝福卷轴!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 5){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest6') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest6');
		cm.gainExp( + 2000000);
		cm.sendOk("任务完成,获得以下奖励:\r\n#200万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 6){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest7') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest7');
		cm.gainItem(4001126,2500);
		cm.sendOk("任务完成,获得以下奖励:\r\n#2500张枫叶!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 7){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest8') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest8');
		cm.gainItem(4001126,5000);
		cm.sendOk("任务完成,获得以下奖励:\r\n5000张枫叶");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 8){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest9') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest9');
		cm.gainNX(1000);
		cm.sendOk("任务完成,获得以下奖励:\r\n1000点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 9){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest10') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest10');
		cm.gainNX(1000);
		cm.sendOk("任务完成,获得以下奖励:\r\n1000点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 10){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest11') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest11');
		cm.gainNX(2000);
		cm.sendOk("任务完成,获得以下奖励:\r\n2000点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();



}else if (selection == 11){
	if (cm.haveItem(4001126,1000) && cm.getBossLog('PlayQuest14') < 1) {
		cm.gainItem(4001126,-1000);
		cm.setBossLog('PlayQuest14');
		cm.gainNX(1000);
		cm.sendOk("任务完成,获得以下奖励:\r\n1000点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();


}
}
}
}
