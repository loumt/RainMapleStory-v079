var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
        }
        else {
            status--;
        }
        if (status == 0) {
            if (cm.getJob() >= 0 && cm.getJob() <= 522 && cm.hasSkill(1017) == false) {
                cm.teachSkill(1017, 1, 1);
            } else if (cm.getJob() >= 1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false) {
                cm.teachSkill(20001019, 1, 1);
            }
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#b#v4031344##v4031344##v4031344##v3994071##v3994067##v3994071##v3994067##v4031344##v4031344##v4031344##k\r\n";
            text += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
            text += " \t\t\t  #e#d欢迎来到#r米米冒险岛#k#n              \r\n"
            text += "#d角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"
            text += "#d点卷余额：#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d 抵用余额：#b" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n"
            text += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
            var tex2 = "" + cm.getHyPay(1) + "";
            text += "#L1##b" + 蓝色角点 + "全能传送#l#l#L2##b" + 蓝色角点 + "在线奖励#l#l#L3##b" + 蓝色角点 + "快捷商店#l\r\n"//3
            text += "#L7##b" + 蓝色角点 + "发型脸型#l#l#L10999##b" + 蓝色角点 + "查看爆率#l#l#L6##b" + 蓝色角点 + "点券商城#l\r\n#L999##b"
                + 蓝色角点 + "快速转职#l#L1999##b" + 蓝色角点 + "皇家骑宠#l#L11999##b" + 蓝色角点 + "副本系统#l\r\n#L111999##b" +
                蓝色角点 + "随身音乐#l#L1111999##b" + 蓝色角点 + "兑换系统#l#L14##b" + 蓝色角点 + "兑换商人#l#l\r\n#L2999##b" +
                蓝色角点 + "每日任务#l#L3999##b" + 蓝色角点 + "每日签到#l#L4999##b" + 蓝色角点 + "流浪商人#l#l\r\n#L5999##b" +
                蓝色角点 + "血衣制作#l#L6999##b" + 蓝色角点 + "金叶抽奖#l#L7999##b" + 蓝色角点 + "觉醒商人#l#l\r\n#L8999##b" +
                蓝色角点 + "21点游戏#l#L9999##b" + 蓝色角点 + "开锁游戏#l#L15##b" + 蓝色角点 + "删除物品#l#l\r\n\r\n"//3

            text += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
            text += "#L1234##b" + 红色箭头 + "限时答题#l#l#L1235##b" + 红色箭头 + "杀怪奖励#l#l#L1236##b" + 红色箭头 + "金榜题名#l\r\n\r\n"
            text += "#L1237##b" + 红色箭头 + "每日赏金#l#l#L1247##b" + 红色箭头 + "家族任务#l#l#L1248##b" + 红色箭头 + "师徒系统#l\r\n\r\n"
            text += "#L1240##b" + 红色箭头 + "升星系统#l#l#L1241##b" + 红色箭头 + "副本征集#l#l#L1242##b" + 红色箭头 + "重返BOSS#l\r\n\r\n"
            text += "#L1243##b" + 红色箭头 + "澳门赌博#l#l#L1244##b" + 红色箭头 + "线上赌场#l#l#L1245##b" + 红色箭头 + "点券抽奖#l\r\n\r\n"
            text += "#L1246##b" + 红色箭头 + "砸卷强化#l#l#L1252##b" + 红色箭头 + "宝石致富#l#l#L1253##b" + 红色箭头 + "超级强化#l\r\n\r\n"
            text += "#L1249##b" + 红色箭头 + "技能全满#l#l#L1250##b" + 红色箭头 + "改变职业#l#l#L1251##b" + 红色箭头 + "属性重置#l\r\n\r\n"
            text += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n\r\n"
            if (cm.getPlayer().isGM()) {
                text += " \t\t#r以下功能，仅管理员可见，普通玩家看不见\r\n"
                text += "#L1000#快捷传送#l\t#L1001#快速转职#l\t#L1002#刷物品#l\t#L1003#满技能#l\r\n#L1004#刷点卷金币#l\r\n"
                //  text += "#L8##b" + 红色箭头 + "精灵吊坠#l#l\r\n\r\n"//3
                //   text += "#L10##b" + 红色箭头 + "免费点装#l#l#L18##b" + 红色箭头 + "排行榜单#l#l#L12##b" + 红色箭头 + "豆豆兑换#l\r\n\r\n"//3
                //  text += "#L13##b" + 红色箭头 + "勋章领取#l#l#L14##b" + 红色箭头 + "本服介绍#l#l#L15##b" + 红色箭头 + "充值介绍#l\r\n\r\n"//3
                // text += "#L17##b" + 红色箭头 + "装备制造#l#l#L19##r" + 蓝色角点 + "限时装备购买#l#l\r\n\r\n"//3
                //text += "#L20##b" + 红色箭头 + "黄金枫叶武器制造#l#l\r\n\r\n"//3
                //text += "#L11##e#r兑换充值礼包#l#L15##e#r兑换新手礼包#l#L14##e#r纪念币交易所#l\r\n"//3
                //text += "#L4##e#r角色快捷转职#l#L2##e#d坐骑任务补给#l#L13##e#r同步点装商城#l\r\n"//3
                //text += "#L8##e#r枫叶换抵用卷#l#L9##e#d在线时间奖励#l#L16##e#d删除指定道具#l\r\n\r\n"//3

            }
            cm.sendSimple(text);
        } else if (selection == 1) {//活动传送
            cm.openNpc(9900004, 1);
        } else if (selection == 2) {//在线奖励
            cm.openNpc(9900004, 9);
        } else if (selection == 3) { //快捷商店
            cm.openNpc(9250010, 0);
        } else if (selection == 999) {//在线奖励
            cm.openNpc(9900004, 2);
        } else if (selection == 1999) {//在线奖励
            cm.dispose();
            cm.openNpc(9050002);
        } else if (selection == 11999) {//在线奖励
            cm.dispose();
            cm.openNpc(9310032);
        } else if (selection == 4) {//枫叶兑换
            cm.openNpc(9900004, 5);
        } else if (selection == 5) {//删除物品
            cm.openNpc(9900004, 444);
        } else if (selection == 6) {//点卷商城
            cm.openNpc(9900004, 13);
        } else if (selection == 7) {//发型脸型
            cm.openNpc(9900004, 77);
        } else if (selection == 8) {//快速升级
            cm.openNpc(9900004, 78);
        } else if (selection == 9) {//跑商送货
            cm.openNpc(9010009, 0);
        } else if (selection == 10) {//免费点装
            cm.openNpc(9310071, 0);
        } else if (selection == 11) {//坐骑补给
            cm.openNpc(9900004, 68);
        } else if (selection == 12) {//豆豆兑换
            cm.openNpc(2000, 22);
        } else if (selection == 13) {//勋章领取
            cm.openNpc(9900004, 7);
        } else if (selection == 14) {//本服介绍
            cm.openNpc(9310033, 0);
        } else if (selection == 15) {//充值介绍
            cm.openNpc(9900004, 81);
        } else if (selection == 16) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 2999) {//每日任务
            cm.openNpc(1200004, 0);
        } else if (selection == 3999) {//每日签到
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//流浪商人
            cm.openNpc(9000036, 0);
        } else if (selection == 5999) {//血衣制作
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//抽奖
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//觉醒
            cm.openNpc(9000021, 0);
        } else if (selection == 8999) {//21点
            cm.openNpc(9330031, 0);
        } else if (selection == 9999) {//开锁
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
            cm.openNpc(2000, 0);
        } else if (selection == 1234) {//
            cm.openNpc(9900004, 1234);
        } else if (selection == 1235) {//
            cm.openNpc(9900004, 1235);
        } else if (selection == 1236) {//
            cm.openNpc(9900004, 1236);
        } else if (selection == 1237) {//
            cm.openNpc(9900004, 1237);
        } else if (selection == 1238) {//
            cm.openNpc(9900004, 1238);
        } else if (selection == 1239) {//
            cm.openNpc(9900004, 1239);
        } else if (selection == 1240) {//
            cm.openNpc(9900004, 1240);
        } else if (selection == 1241) {//
            cm.openNpc(9900004, 1241);
        } else if (selection == 1242) {//
            cm.openNpc(9900004, 1242);
        } else if (selection == 1243) {//
            cm.openNpc(9900004, 1243);
        } else if (selection == 1244) {//
            cm.openNpc(9900004, 1244);
        } else if (selection == 1245) {//
            cm.openNpc(9900004, 1245);
        } else if (selection == 1246) {//
            cm.openNpc(9900004, 1246);
        } else if (selection == 1247) {//
            cm.openNpc(9900004, 1247);
        } else if (selection == 1248) {//
            cm.openNpc(9900004, 1248);
        } else if (selection == 1249) {//
            cm.openNpc(9900004, 1249);
        } else if (selection == 1250) {//
            cm.openNpc(9900004, 1250);
        } else if (selection == 1251) {//
            cm.openNpc(9900004, 1251);
        } else if (selection == 1252) {//
            cm.openNpc(9270052, 0);
        } else if (selection == 1253) {//
            cm.openNpc(9900004, 1253);
        } else if (selection == 1254) {//
            cm.openNpc(9900004, 1254);
        } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 1002) {//
            cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) {//
            cm.dispose();
            cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
            cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
            cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);
            ;
            cm.gainMeso(210000000);
            cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
            cm.dispose();
        } else if (selection == 999) {//
            if (cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215, 3) && cm.getLevel() >= 8) {
                cm.setBossLog("2016活动");
                cm.gainItem(4001215, 3);
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
                cm.sendOk("领取成功！");
                cm.dispose();
            } else {
                cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
                cm.dispose();
            }
        }
    }
}


