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
            text += "#b特别注意：萌新请看群文件萌新必看说明，这个很重要\r\n\r\n"//3
            text += "#r1.本服经验-金币-爆率：10倍#l\r\n\r\n"//3
            text += "#r2.为了给大家创造更好的游戏环境，请自觉遵守群规则，禁止使用GM工具修改帐号和角色信息，否则帐号就会被永久封禁！#l\r\n\r\n"//3
            //text += "#r3.本服充值比例：1:150#l\r\n\r\n"//3
            text += "#r4.目前只开放职业：战士.魔法师.弓箭手.飞侠.海盗\r\n(骑士团和战神修复部分内容，仅供娱乐)#l\r\n\r\n"//3
            text += "#r3.修复所有副本+任务+部分游戏功能，增加流浪商人系列设定#l\r\n\r\n"//3
          //  text += "#r6.买卖账号只允许在游戏里面喊，在群里发卖号信息的一律T群并且封闭账号，我说到做到！#l\r\n\r\n"//3
            text += "#r4.出现假死情况请点击拍卖边上的"+ 聊天 +"按钮即可解除假死#l\r\n\r\n"//3
            text += "#r5.欢迎加入我们的怀旧单机群一起讨论：940329930#l\r\n\r\n"//3
            cm.sendOk(text);
		    cm.dispose();
		}
    }
}


