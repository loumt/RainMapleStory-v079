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
   cm.sendSimple("      #e您好！我是#r流浪商人#k活动中心主任：克莱丽丝\r\n\r\n  #d您目前拥有的金币:#r" + cm.getMeso() + "    \r\n#r #L0#告诉我什么是流浪商人#l #k\r\n\r\n #b#L1#特级饰品专卖#l #b#L4#究极饰品专卖#l #L6#神级饰品专卖#l     \r\n#l #L2#未知饰品专卖#l #L11#极品戒指专卖#l \r\n\r\n #L7#特级武器专卖 #L8#究极武器专卖#l #L9#神级武器专卖#l   \r\n #L3#极品勋章专卖 #l#L10#极品盾牌专卖#l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e流浪商人是一群神秘的旅行商人，他们分散在冒险大陆的各个角落，随身携带着冒险大陆中最顶尖的装备和武器，想要找到他们可不是一件容易的事，可通过#r提示、剧情#k找到他们，加油吧！");
            cm.dispose();
    }else if  (selection == 1) {
            cm.sendOk("#e远在天边，近在眼前，和尚大宝是也！");
		       cm.dispose();
    }else if  (selection == 4) {
           cm.sendOk("#e昔日少林俊武僧，如今落魄黑秃驴，听说在少林寺混得很惨");
		       cm.dispose();
    }else if  (selection == 6) {
           cm.sendOk("#e霓虹猥琐大叔，昭和村附近看看去");
		       cm.dispose(); 
    }else if  (selection == 2) {
           cm.sendOk("#e白雪皑皑富士山，落花纷纷樱花树，猜不到就问群管别问我！");
		       cm.dispose(); 
    }else if  (selection == 7) {
           cm.sendOk("#e法海你不懂爱，雷峰塔会掉下来，群主知道他在哪！");
		       cm.dispose();
    }else if  (selection == 8) {
           cm.sendOk("#e海外的飞天猪，是哪一只呢？听说在。。。");
		       cm.dispose();
    }else if  (selection == 9) {
          cm.sendOk("#e俯瞰神州，谁与争锋");
		       cm.dispose(); 
    }else if  (selection == 3) {
           cm.sendOk("#e山清水秀，云雾缭绕，地灵人杰之地");
		       cm.dispose();
    }else if  (selection == 10) {
           cm.sendOk("#e海盗的出生地，知道在哪吧！");
		       cm.dispose();
    }else if  (selection == 11) {
           cm.sendOk("#e中国人的地盘，自己找！");
		       cm.dispose();


}
}
}
}

