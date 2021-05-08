/* Author: Xterminator (Modified by RMZero213)
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
	任务 - 罗杰和苹果
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("哈喽, 小家伙~跟我聊聊啊？哈哈！我是专门为初来这里的冒险家们提供信息的教官， #p2000#。");
        } else if (status == 1) {
            qm.sendNextPrev("你问我是谁指认我为教官的？呵呵，你的好奇心还挺多啊！不错不错~是我自己喜欢当教官的。");
        } else if (status == 2) {
            qm.askAcceptDecline("来。。。开个小玩笑怎么样？咦！");
        } else if (status == 3) {
            if (qm.getPlayerStat("HP") >= 50) {
                // qm.setHP(-25);
                //qm.getPlayer().updateSingleStat(MapleStat.HP, 25);
            }
            if (!qm.haveItem(2010007)) {
                qm.gainItem(2010007, 1);
            }
            qm.sendNext("是不是吓了一跳？HP跌到0就坏了。来，给你#r#t2010007##k，把它吃掉就会恢复了。你打开道具窗看看#I");
        } else if (status == 4) {
            qm.sendPrev("你要把我给你的#t2010007#全部吃掉，停滞在一个地方什么都不做HP也会恢复的。。。你恢复了全部的HP在跟我聊聊吧。#I");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (qm.getPlayerStat("HP") < 50) {
                qm.sendNext("嗨，你的HP还没有完全恢复，使用我给你的苹果来补充吧！快去试试!");
                qm.dispose();
            } else {
                qm.sendNext("消耗道具。。。怎么样？很简单吧？可以在右下角设定#b快捷键#k，你还不知道吧？哈哈~");
            }
        } else if (status == 1) {
            qm.sendNextPrev("不错！学得很好应该给你礼物。这些都是在旅途中必需的，谢谢我吧！危机的时候好好使用。");
        } else if (status == 2) {
            qm.sendNextPrev("我能教你的只有这些了。有点儿舍不得也没办法，到了要离别的时候。路上小心，一路顺风啊！！！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
        } else if (status == 3) {
            qm.gainExp(10);
            qm.gainItem(2010000, 3);
            qm.gainItem(2010009, 3);
            //温度计
            qm.gainItem(1402014, 1);
            //超人气王勋章
            qm.gainItem(1142003, 1);
            //铁剑一把
            qm.gainItem(1302000, 1);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}