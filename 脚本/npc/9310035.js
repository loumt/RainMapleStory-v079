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
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#咳咳，我跑不动了#b方丈这个老不死的。。。所有的东西都在这了你别为难我一个糟老头子，咳咳。。。\r\n#k#r#e所有全属性88的装备都在我这！#n\r\n\r\n#L1##r#e告诉我更多关于流浪商人的事#b#n\r\n\r\n#L2#巧克力雪糕（全属性88==#r88张#k#v4000313#）#b#n\r\n\r\n#L3#猫头鹰（全属性88==#r88张#k#v4000313#）#b#n\r\n\r\n#L4#黑天使的祝福（全属性88==#r88张#k#v4000313#）#b#n\r\n\r\n#L5#休彼德蔓的项链（全属性88==#r88张#k#v4000313#）#b#n\r\n\r\n#L6#二代不速之客耳环（全属性88==#r88张#k#v4000313#）#b#n\r\n\r\n#L7#工地手套（全属性88==#r88张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b装备兑换规则（很重要）#n#d\r\n====================================================#k\r\n我的店啊，都是我的错不该贪心的。。。做了这么多年的和尚还是没能戒掉贪嗔痴。。。造孽啊！#k！#d\r\n====================================================#k\r\n上次我去随团去海外旅行，到了日本的赌场，结果把钱的输给了一个叫毛利的中年人，你看过#r名侦探柯南#k吧，就是那个#r毛利#k把我给害惨了！#d\r\n====================================================#k\r\n本来没打算下那么大的赌注，这小子连着输给我几次，还以为他很菜，谁知最后三局全部连本带利输给他了。。。#k#d\r\n====================================================#k\r\n求求你别告诉方丈我在这，作为回报我告诉你个秘密：#r那狗日的身上带着很多全属性880的极品被我看见了#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,88)){
                cm.sendOk("#r#e恭喜您获得全属性88的巧克力雪糕.");
                cm.gainItem(1012071,88,88,88,88,88,88,10,10,10,10,10,10,5,5,0,0,0);
                cm.gainItem(4000313,-88);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性88的巧克力雪糕！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,88)){
                cm.sendOk("#r#e恭喜您获得全属性88的猫头鹰.");
                cm.gainItem(1022047,88,88,88,88,88,88,10,10,10,10,10,10,5,5,0,0,0);
                cm.gainItem(4000313,-88);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性88的猫头鹰！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,88)){
                cm.sendOk("#r#e恭喜您获得全属性88的黑天使的祝福.");
                cm.gainItem(1112586,88,88,88,88,88,10,10,10,10,10,10,10,5,5,0,0,0);
                cm.gainItem(4000313,-88);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性88的黑天使的祝福！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,88)){
                cm.sendOk("#r#e恭喜您获得全属性88的休彼德蔓的项链.");
                cm.gainItem(1122007,88,88,88,88,88,10,10,10,30,30,10,10,5,5,0,0,0);
                cm.gainItem(4000313,-88);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性88的休彼德蔓的项链！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,88)){
                cm.sendOk("#r#e恭喜您获得全属性88的二代不速之客耳环.");
                cm.gainItem(1032081,88,88,88,88,88,88,10,10,10,10,10,10,5,5,0,0,0);
                cm.gainItem(4000313,-88);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性88的二代不速之客耳环！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,88)){
                cm.sendOk("#r#e恭喜您获得全属性88的工地手套.");
                cm.gainItem(1081202,88,88,88,88,88,88,10,10,10,10,10,10,5,5,0,0,0);
                cm.gainItem(4000313,-88);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性88的工地手套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
