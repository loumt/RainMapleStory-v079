var 聊天 = "#fUI/StatusBar/BtChat/normal/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t  #e欢迎来到#r米米冒险岛 #k!#n\r\n"
            text += "#b特别注意：萌新请看群文件的新人指引说明，这个很重要\r\n\r\n"//3
            text += "#r1.本服经验-金币-爆率：5倍#l\r\n\r\n"//3
            text += "#r2.本服禁止使用GM工具修改帐号和角色信息，否则帐号或角色就会被永久封禁，请萌新必须引起注意！#l\r\n\r\n"//3
            text += "#r3.新手礼包已经发放到您的背包，请注意查收！#l\r\n\r\n"//3
            text += "#r4.目前只开放职业：战士.魔法师.弓箭手.飞侠.海盗\r\n(骑士团和战神修复部分内容，仅供娱乐)#l\r\n\r\n"//3
            text += "#r3.修复副本+任务+部分功能，增加流浪、觉醒商人系列设定#l\r\n\r\n"//3
            //  text += "#r6.买卖账号只允许在游戏里面喊，在群里发卖号信息的一律T群并且封闭账号，我说到做到！#l\r\n\r\n"//3
            text += "#r4.出现假死情况请点击拍卖边上的" + 聊天 + "按钮即可解除假死#l\r\n\r\n"//3
            text += "#r5.欢迎加入我们的免费单机群一起讨论：QQ群940329930#l\r\n\r\n"//3
            cm.sendOk(text);
            cm.喇叭(3, "欢迎新人！！大家祝贺吧！！！~又是一名新人加入了米米冒险岛~！");
            cm.dispose();
        }
    }
}


