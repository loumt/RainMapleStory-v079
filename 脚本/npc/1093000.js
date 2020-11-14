//odinms_MS
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
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#别老盯着人家看，会害羞的啦。。。\r\n#k#r#e所有全属性盾牌都在我这！#n\r\n\r\n#L1##r#e告诉我更多关于流浪商人的事#b#n\r\n\r\n#L2#木盾（全属性50==#r50张#k#v4000313#）#b#n\r\n\r\n#L3#锅盖（全属性100==#r150张#k#v4000313#）#b#n\r\n\r\n#L4#调色板盾牌（全属性200==#r300张#k#v4000313#黄金枫叶）#b#n\r\n\r\n#L5#至尊不速之客战士盾（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L6#至尊不速之客法师盾（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L7#至尊不速之客飞侠盾（全属性300==#r500张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b和布巴美眉的闲聊#n#d\r\n====================================================#k\r\n曾经对爱情充满幻想的我和一位小哥邂逅，发生了一段美好的故事，然而这个负心汉竟然嫌我胖，我要减肥减肥，瘦了去找他算账，他在#r中国#k的某个地图中，你能找到他吗？#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,50)){
                cm.sendOk("#r#e恭喜您获得全属性50的木盾.");
                cm.gainItem(1092003,50,50,50,50,50,50,0,0,50,50,50,50,5,5,0,0,0);
                cm.gainItem(4000313,-50);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性50的木盾！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,150)){
                cm.sendOk("#r#e恭喜您获得全属性100的锅盖.");
                cm.gainItem(1092008,100,100,100,100,100,100,0,0,100,100,100,100,5,5,0,0,0);
                cm.gainItem(4000313,-150);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性100的锅盖！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的调色板盾牌.");
                cm.gainItem(1092022,200,200,200,200,200,200,0,0,200,200,200,200,10,10,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的调色板盾牌！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的至尊不速之客战士盾.");
                cm.gainItem(1092074,300,300,300,300,300,300,0,0,300,300,300,300,20,20,0,0,0);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的至尊不速之客战士盾！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的至尊不速之客法师盾.");
                cm.gainItem(1092079,300,300,300,300,300,300,0,0,300,300,300,300,20,20,0,0,0);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的至尊不速之客法师盾！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的至尊不速之客飞侠盾.");
                cm.gainItem(1092084,300,300,300,300,300,300,0,0,300,300,300,300,20,20,0,0,0);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的至尊不速之客飞侠盾！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
