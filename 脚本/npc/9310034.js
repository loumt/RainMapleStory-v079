//odinms_MS
load("nashorn:mozilla_compat.js");
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k嘘~~~轻点声#b我可是偷跑出来的，我在这等你！\r\n#k#r#e所有全属性30的装备都在我这！#n\r\n\r\n#L1##r#e告诉我关于流浪商人更多的信息#b#n\r\n\r\n#L2#草莓雪糕（全属性30==#r30张#k#v4000313#）#b#n\r\n\r\n#L3#猫头鹰（全属性30==#r30张#k#v4000313#）#b#n\r\n\r\n#L4#天使的祝福（全属性30==#r30张#k#v4000313#）#b#n\r\n\r\n#L30#休彼德蔓的项链（全属性30==#r30张#k#v4000313#）#b#n\r\n\r\n#L6#一代不速之客耳环（全属性30==#r30张#k#v4000313#）#b#n\r\n\r\n#L7#工地手套（全属性30==#r30张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b流浪商人大调查（必看）#n#d\r\n====================================================#k\r\n本服务器开放极品装备兑换交易，任何玩家通过自身努力均可获得#r全属性极品装备#k！#d\r\n====================================================#k\r\n言归正传，我师叔开的理发店倒闭了，为了还债背着师傅偷偷的将寺里的装备藏起来了，你一定要找到他#d\r\n====================================================#k\r\n顺便泄露下下天机，赚取黄金枫叶的方法可以通过每日任务、签到福利、刷怪、刷BOSS、枫叶兑换获得，快去找我师叔吧！#k#d\r\n====================================================#k\r\n想要获得更多信息咨询，请加入我们的怀旧单机群一起讨论：#r30421239130#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e恭喜您获得全属性30的草莓雪糕.");
                cm.gainItem(1012070,30,30,30,30,30,30,3,3,0,0,30,30,3,3,0,0,0);
                cm.gainItem(4000313,-30);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的草莓雪糕！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e恭喜您获得全属性30的猫头鹰.");
                cm.gainItem(1022047,30,30,30,30,30,30,3,3,0,0,30,30,0,0,0,0,0);
                cm.gainItem(4000313,-30);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的猫头鹰！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e恭喜您获得全属性30的天使的祝福.");
                cm.gainItem(1112585,30,30,30,30,30,30,3,3,0,0,30,30,0,0,0,0,0);
                cm.gainItem(4000313,-30);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的天使的祝福！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 30){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e恭喜您获得全属性30的休彼德蔓的项链.");
                cm.gainItem(1122007,30,30,30,30,30,30,3,3,30,30,30,30,0,0,0,0,0);
                cm.gainItem(4000313,-30);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的休彼德蔓的项链！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e恭喜您获得全属性30的一代不速之客耳环.");
                cm.gainItem(1032080,30,30,30,30,30,30,10,10,0,0,30,30,0,0,0,0,0);
                cm.gainItem(4000313,-30);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的一代不速之客耳环！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,30)){
                cm.sendOk("#r#e恭喜您获得全属性30的工地手套.");
                cm.gainItem(1082002,30,30,30,30,30,30,3,3,0,0,30,30,0,0,0,0,0);
                cm.gainItem(4000313,-30);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的工地手套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
