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
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k您好，欢迎来到#b昭和村毛利诊所#k，我是整形医生#r毛利#k\r\n#k#r#e私下告诉你，表面上我是医生，实际上问谁不是为了钱，实话实说我就是流浪商人，出售所有全属性168的装备！#n\r\n\r\n#L1##r#e别以为我不知道你赌场出老千的事#n#k\r\n\r\n#L2#甜瓜雪糕（全属性168==#r168张#k#v4000313#）#n\r\n\r\n#L3#猫头鹰（全属性168==#r168张#k#v4000313#）#n\r\n\r\n#L4#白天使的祝福（全属性168==#r168张#k#v4000313#）#n\r\n\r\n#L5#休彼德蔓的项链（全属性168==#r168张#k#v4000313#）#n\r\n\r\n#L6#三代不速之客耳环（全属性168==#r168张#k#v4000313#）#n\r\n\r\n#L7#工地手套（全属性168==#r168张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("          \t\t\t#e#b会飞的流浪商人#n#d\r\n====================================================#k\r\n呵呵，我出老千也不是一次两次了，谁怕谁啊！！#d\r\n====================================================#k\r\n大哥我错了，千万别告诉暮木警官，给点面子，我告诉你一个秘密！别急听我慢慢道来。。。#d\r\n====================================================#k\r\n前些天我去买炒面，打包出门竟然看见天上有只#r会飞的猪#k。。真的会飞啊你别不信，把我的炒面都抢走了。。。\r\n====================================================#k\r\n好了，别再来问我问题，要不要买东西啊，不买就走吧！#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e恭喜您获得全属性168的甜瓜雪糕.");
                cm.gainItem(1012072,168,168,168,168,168,168,30,30,0,0,30,30,10,10,0,0,0);
                cm.gainItem(4000313,-168);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性168的甜瓜雪糕！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e恭喜您获得全属性168的猫头鹰.");
                cm.gainItem(1022047,168,168,168,168,168,168,30,30,0,0,30,30,10,10,0,0,0);
                cm.gainItem(4000313,-168);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性168的猫头鹰！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e恭喜您获得全属性168的白天使的祝福.");
                cm.gainItem(1112663,168,168,168,168,168,168,30,30,0,0,30,30,10,10,0,0,0);
                cm.gainItem(4000313,-168);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性168的白天使的祝福！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e恭喜您获得全属性168的休彼德蔓的项链.");
                cm.gainItem(1122007,168,168,168,168,168,168,30,30,0,0,30,30,10,10,0,0,0);
                cm.gainItem(4000313,-168);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性168的休彼德蔓的项链！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e恭喜您获得全属性168的三代不速之客耳环.");
                cm.gainItem(1032082,168,168,168,168,168,168,30,30,0,0,30,30,10,10,0,0,0);
                cm.gainItem(4000313,-168);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性168的三代不速之客耳环！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e恭喜您获得全属性168的工地手套.");
                cm.gainItem(1082002,168,168,168,168,168,168,30,30,0,0,30,30,10,10,0,0,0);
                cm.gainItem(4000313,-168);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性168的工地手套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
