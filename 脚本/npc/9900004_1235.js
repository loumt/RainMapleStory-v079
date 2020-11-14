function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            //显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d您好！这里是杀怪数量兑换物品处\r\n\r\n兑换后扣除对应杀怪次数。.#l\r\n\r\n"//3
            text += "#e#d您当前的杀怪数量为：" + cm.getPlayer().getsg() + ".#l\r\n\r\n"//3
			text += "#L13##r我要用100点杀怪数量兑换#k10瓶#v2022117##l\r\n\r\n"//3
			text += "#L12##r我要用300点杀怪数量兑换#k10个#v2022118##l\r\n\r\n"//3
			text += "#L11##r我要用1千点杀怪数量兑换#k3W点券#l\r\n\r\n"//3
			text += "#L10##r我要用1千点杀怪数量兑换#k300W#v5200002##l\r\n\r\n"//3
			text += "#L9##r我要用2千点杀怪数量兑换#k300瓶#v2000004##l\r\n\r\n"//3
			text += "#L8##r我要用2千点杀怪数量兑换#k300张#v4001126##l\r\n\r\n"//3
			text += "#L7##r我要用3千点杀怪数量兑换#k300瓶#v2000005##l\r\n\r\n"//3
			text += "#L6##r我要用3千点杀怪数量兑换#k300张#v4001126##l\r\n\r\n"//3
			text += "#L5##r我要用5千点杀怪数量兑换#k300只#v4032226##l\r\n\r\n"//3
			text += "#L4##r我要用5千点杀怪数量兑换#k300张#v4000313##l\r\n\r\n"//3
            text += "#L1##r我要用5千点杀怪数量兑换#k5000W#v5200002##l\r\n\r\n"//3
            text += "#L2##r我要用1万点杀怪次数兑换#k七星之一(玉衡)#l\r\n\r\n"//3
            text += "#L3##r我要用10万杀怪次数兑换#k杀怪王勋章#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getPlayer().getsg() >= 5000) {
                cm.getPlayer().gainsg(-5000);
               // cm.gainItem();//物品自己加
                cm.gainMeso(50000000);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用5千点[杀怪数量]兑换了5000万冒险币，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的杀怪数量不足5千");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getsg() >= 10000) {
                cm.getPlayer().gainsg(-10000);
               cm.gainItem(4032169,1);//物品自己加
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用1万点[杀怪数量]兑换了七星之一(玉衡)，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的杀怪数量不足1万");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getsg() >= 100000) {
                cm.getPlayer().gainsg(-100000);
                //cm.getPlayer().modifyCSPoints(1, 1000, true);
                cm.gainItem(1142650, 10, 10, 10, 10, 1000, 1000, 8, 8, 50, 50, 15, 15, 5, 5, 0, 0, 0);
                //cm.gainMeso(100000);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用10万[杀怪数量]兑换了杀怪王勋章，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的杀怪数量不足10万");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.getPlayer().getsg() >= 5000) {
                cm.getPlayer().gainsg(-5000);
               // cm.gainItem();//物品自己加
                cm.gainItem(4000313,300);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用5000点[杀怪数量]兑换了300张金叶，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           } 
		           } else if (selection == 5) {
            if (cm.getPlayer().getsg() >= 5000) {
                cm.getPlayer().gainsg(-5000);
               // cm.gainItem();//物品自己加
                cm.gainItem(4032226,300);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用5000点[杀怪数量]兑换了300只金猪，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           } 
		   } else if (selection == 6) {
            if (cm.getPlayer().getsg() >= 3000) {
                cm.getPlayer().gainsg(-3000);
               // cm.gainItem();//物品自己加
                cm.gainItem(4001126,300);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用3000点[杀怪数量]兑换了300张枫叶，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 7) {
            if (cm.getPlayer().getsg() >= 3000) {
                cm.getPlayer().gainsg(-3000);
               // cm.gainItem();//物品自己加
                cm.gainItem(2000005,300);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用3000点[杀怪数量]兑换了300瓶超级药水，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 8) {
            if (cm.getPlayer().getsg() >= 2000) {
                cm.getPlayer().gainsg(-2000);
               // cm.gainItem();//物品自己加
                cm.gainItem(4001126,300);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用2000点[杀怪数量]兑换了300张枫叶，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 9) {
            if (cm.getPlayer().getsg() >= 2000) {
                cm.getPlayer().gainsg(-2000);
               // cm.gainItem();//物品自己加
                cm.gainItem(2000004,300);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用2000点[杀怪数量]兑换了300瓶特殊药水，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 10) {
            if (cm.getPlayer().getsg() >= 1000) {
                cm.getPlayer().gainsg(-1000);
               // cm.gainItem();//物品自己加
                cm.gainMeso(3000000);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用1000点[杀怪数量]兑换了300W金币，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 11) {
            if (cm.getPlayer().getsg() >= 1000) {
                cm.getPlayer().gainsg(-1000);
               // cm.gainItem();//物品自己加
                cm.gainNX(30000);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用1000点[杀怪数量]兑换了3W点券，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 12) {
            if (cm.getPlayer().getsg() >= 300) {
                cm.getPlayer().gainsg(-300);
               // cm.gainItem();//物品自己加
                cm.gainItem(2022118,10);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用300点[杀怪数量]兑换了10个管理员的祝福，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
		   } else if (selection == 13) {
            if (cm.getPlayer().getsg() >= 100) {
                cm.getPlayer().gainsg(-100);
               // cm.gainItem();//物品自己加
                cm.gainItem(2022117,10);
                cm.sendOk("兑换成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]用100点[杀怪数量]兑换了10瓶枫叶糖浆，再接再厉哦！");
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
           }
        }
    }
}


