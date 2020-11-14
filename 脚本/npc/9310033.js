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
   cm.sendSimple("#e重金聘请我做#r兑换商人主任#k\r\n这里可以通过努力兑换各类极品装备！ \r\n#b#L0#兑换帮助#l #k\r\n\r\n #L1#64级枫叶武器#l #L4#120级永恒套装#l #L6#135级布莱克#l\r\n #L2#145级巨匠#l    #L5#135级外星人#l   #L3#150级法弗纳#l \r\n #L7#160级埃苏莱  #L8#150级暴君套装 #L9#150级高贵#l\r\n #L10##r百宝专卖店#k   #L13##r必成卷轴兑换#k");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e各种兑换材料可以通过打怪打BOSS获得，努力吧少年！如有问题可在#rQQ群交流：940329930#k");
            cm.dispose();
    }else if  (selection == 1) {
           cm.openNpc(9050001, 0);
		       cm.dispose();
    }else if  (selection == 4) {
           cm.openNpc(9330065, 0);
		       cm.dispose();
    }else if  (selection == 6) {
           cm.openNpc(9050006, 0);
		       cm.dispose(); 
    }else if  (selection == 2) {
           cm.openNpc(9310069, 0);
		       cm.dispose(); 
    }else if  (selection == 5) {
           cm.openNpc(9250028, 0);
		       cm.dispose();
    }else if  (selection == 3) {
           cm.openNpc(9250016, 0);
		       cm.dispose();
    }else if  (selection == 7) {
           cm.openNpc(9270051, 0);
		       cm.dispose(); 
    }else if  (selection == 8) {
           cm.openNpc(9270048, 0);
		       cm.dispose();
    }else if  (selection == 9) {
           cm.openNpc(9270049, 0);
		       cm.dispose();
    }else if  (selection == 10) {
           cm.openNpc(2010005, 0);
                       cm.dispose();
    }else if  (selection == 11) {
           cm.openShop(112);
    }else if  (selection == 12) {
           cm.openNpc(2071000, 0);
		   }else if  (selection == 13) {
           cm.openNpc(9310093, 0);
                       cm.dispose();
      

}
}
}
}

