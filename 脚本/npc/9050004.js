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
                
   cm.sendOk("感谢使用.");
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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "哈哈，我就是本服的觉醒商人傻傻猪，我有愚蠢的觉醒方法可帮助你把#v1102163##r★贵族披风★#k完成一次#b神级觉醒#k\r\n需要以下物品：（已经完成过神级觉醒的贵族披风无效！）\r\n#v1102163# * 1个\r\n#v4021000##d#z4021000# * 30个\r\n#v4011006##d#z4011006# * 30个\r\n#v4021006##d#z4021006# * 30个\r\n#v4000313##d#z4000313# * 300张\r\n#v4032226##d#z4032226# * 300只\r\n#v2140002##d金币 * 2000W\r\n~\r\n"
	text += "\r\n#L1##b我收集了以上物品。确定开始觉醒装备";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4000313,300) && cm.haveItem(4021000,30) && cm.haveItem(4011006,30) && cm.haveItem(4021006,30)  && cm.haveItem(4032226,300) && cm.haveItem(1102163,1)){
				cm.gainItem(4000313, -300);
				cm.gainItem(4021000, -30);
				cm.gainItem(4011006, -30);
				cm.gainItem(4021006, -30);
				cm.gainItem(4032226, -300);
                                cm.gainMeso(-20000000);
				cm.gainItem(1102163, -1);
                                cm.gainItem(1102163,200,200,200,200,200,200,100,100,200,200,200,200,20,20,0,0,0);
            cm.sendOk("觉醒成功，威力突破天际！");
            cm.dispose();
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]★贵族披风★神级觉醒成功，威力突破天际，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你的材料不足，或者背包里没有相应装备，请核对材料后再试！\r\n");
            cm.dispose();
			}
		}
    }
}




