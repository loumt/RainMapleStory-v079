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
                
   cm.sendOk("��л��Ĺ��٣�");
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
   cm.sendSimple("#e�ؽ�Ƹ������#r�һ���������#k\r\n�������ͨ��Ŭ���һ����༫Ʒװ���� \r\n#b#L0#�һ�����#l #k\r\n\r\n #L1#64����Ҷ����#l #L4#120��������װ#l #L6#135��������#l\r\n #L2#145���޽�#l    #L5#135��������#l   #L3#150��������#l \r\n #L7#160��������  #L8#150��������װ #L9#150���߹�#l\r\n #L10##r�ٱ�ר����#k   #L13##r�سɾ���һ�#k");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e���ֶһ����Ͽ���ͨ����ִ�BOSS��ã�Ŭ�������꣡�����������#rQQȺ������940329930#k");
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

