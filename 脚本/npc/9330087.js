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
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k您好，欢迎来到#b百草堂#k，我是全属性装备兑换商人查尔斯\r\n#k#r#e所有好的勋章都在我这哦！#n\r\n\r\n#L1##r#e询问更多关于流浪商人的信息#b#n\r\n\r\n#L2#诚实的冒险家勋章（全属性10==100W）#b#n\r\n\r\n#L3#任务狂人勋章（全属性30==300W）#b#n\r\n\r\n#L4#超人气王勋章（全属性50==500W）#b#n\r\n\r\n#L5#冒险岛偶像明星勋章（全属性100（20G）==#r200张#k#v4000313#）#b#n\r\n\r\n#L6#传说中的冒险家勋章（全属性200（50G）==#r388张#k#v4000313#）#b#n\r\n\r\n#L7#暗黑龙王杀手勋章（全属性350（100G）==#r588张#k#v4000313#）#b#n\r\n\r\n#L8#英雄战神勋章（全属性500（200G）==#r888张#k#v4000313#）");			               
 } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t        #e#b流浪商人系列#n#d\r\n====================================================#k\r\n本服务器开放极品装备兑换交易，任何玩家通过自身努力均可获得#r全属性极品装备#k！#d\r\n====================================================#k\r\n废话不多说，下一个流浪商人在海盗的码头，是个妹子！#d\r\n====================================================#k\r\n怀旧单机讨论群：940329930玩家发现BUG请及时反馈给我们，共同维护一个良好的游戏环境！#k#d\r\n====================================================#k\r\n顺便泄露下下天机，还有很多流浪商人出售各种好东东，记得多旅游才能发现他们哦！#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.getMeso() >=1000000){
                cm.sendOk("#r#e恭喜您获得全属性10的诚实的冒险家勋章.");
                cm.gainItem(1142000,10,10,10,10,10,10,2,2,10,10,10,10,10,10,0,0,0);
                cm.gainMeso(-1000000);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性10的诚实的冒险家勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的金币进行购买,请努力赚钱吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.getMeso() >=3000000){
                cm.sendOk("#r#e恭喜您获得全属性30的任务狂人勋章.");
                cm.gainItem(1142001,30,30,30,30,30,30,5,5,15,15,30,30,10,10,0,0,0);
                cm.gainMeso(-30000000);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性30的任务狂人勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的金币进行购买,请努力赚钱吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.getMeso() >=5000000){
                cm.sendOk("#r#e恭喜您获得全属性50的超人气王勋章.");
                cm.gainItem(1142003,50,50,50,50,50,50,10,10,20,20,50,50,10,10,0,0,0);
                cm.gainMeso(-5000000);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性50的超人气王勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的金币进行购买,请努力赚钱吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,200)){
                cm.sendOk("#r#e恭喜您获得全属性100的冒险岛偶像明星勋章.");
                cm.gainItem(1142006,100,100,100,100,100,100,20,20,30,30,100,100,15,15,0,0,0);
                cm.gainItem(4000313,-200);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性100的冒险岛偶像明星勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,388)){
                cm.sendOk("#r#e恭喜您获得全属性200的传说中的冒险家勋章.");
                cm.gainItem(1142005,200,200,200,200,200,200,50,50,40,40,50,50,20,20,0,0,0);
                cm.gainItem(4000313,-388);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的传说中的冒险家勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,588)){
                cm.sendOk("#r#e恭喜您获得全属性350的暗黑龙王杀手勋章.");
                cm.gainItem(1142007,350,350,350,350,350,350,100,100,55,55,350,350,30,30,0,0,0);
                cm.gainItem(4000313,-588);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性350的暗黑龙王杀手勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,888)){
                cm.sendOk("#r#e恭喜您获得全属性500的英雄战神勋章.");
                cm.gainItem(1142133,500,500,500,500,500,500,200,200,88,88,500,500,50,50,0,0,0);
                cm.gainItem(4000313,-888);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性500的英雄战神勋章！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
