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
   cm.sendSimple("      #e���ã�����#r��������#k��������Σ�������˿\r\n\r\n  #d��Ŀǰӵ�еĽ��:#r" + cm.getMeso() + "    \r\n#r #L0#������ʲô����������#l #k\r\n\r\n #b#L1#�ؼ���Ʒר��#l #b#L4#������Ʒר��#l #L6#����Ʒר��#l     \r\n#l #L2#δ֪��Ʒר��#l #L11#��Ʒ��ָר��#l \r\n\r\n #L7#�ؼ�����ר�� #L8#��������ר��#l #L9#������ר��#l   \r\n #L3#��Ʒѫ��ר�� #l#L10#��Ʒ����ר��#l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e����������һȺ���ص��������ˣ����Ƿ�ɢ��ð�մ�½�ĸ������䣬����Я����ð�մ�½������װ������������Ҫ�ҵ����ǿɲ���һ�����׵��£���ͨ��#r��ʾ������#k�ҵ����ǣ����Ͱɣ�");
            cm.dispose();
    }else if  (selection == 1) {
            cm.sendOk("#eԶ����ߣ�������ǰ�����д���Ҳ��");
		       cm.dispose();
    }else if  (selection == 4) {
           cm.sendOk("#e�������ֿ���ɮ��������Ǻ�ͺ¿����˵�������»�úܲ�");
		       cm.dispose();
    }else if  (selection == 6) {
           cm.sendOk("#e�޺�������壬�Ѻʹ帽������ȥ");
		       cm.dispose(); 
    }else if  (selection == 2) {
           cm.sendOk("#e��ѩ������ʿɽ���仨�׷�ӣ�������²�������Ⱥ�ܱ����ң�");
		       cm.dispose(); 
    }else if  (selection == 7) {
           cm.sendOk("#e�����㲻�������׷������������Ⱥ��֪�������ģ�");
		       cm.dispose();
    }else if  (selection == 8) {
           cm.sendOk("#e����ķ���������һֻ�أ���˵�ڡ�����");
		       cm.dispose();
    }else if  (selection == 9) {
          cm.sendOk("#e������ݣ�˭������");
		       cm.dispose(); 
    }else if  (selection == 3) {
           cm.sendOk("#eɽ��ˮ�㣬�������ƣ������˽�֮��");
		       cm.dispose();
    }else if  (selection == 10) {
           cm.sendOk("#e�����ĳ����أ�֪�����İɣ�");
		       cm.dispose();
    }else if  (selection == 11) {
           cm.sendOk("#e�й��˵ĵ��̣��Լ��ң�");
		       cm.dispose();


}
}
}
}

