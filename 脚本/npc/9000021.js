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
   cm.sendSimple("      #e���ã�����#r��������#k��������Σ��Ѽ�\r\n\r\n  #d��Ŀǰӵ�еĽ��:#r" + cm.getMeso() + "   \r\n#r #L0#������ʲô�Ǿ�������#l #k\r\n\r\n #b#L1#����ѫ�¾���#l #b#L4#�м�ѫ�¾���#l #L6#�߼�ѫ�¾���#l     \r\n#l #L2#��ѫ�¾���#l  \r\n\r\n #L7#����ͷ���� #L8#���������#l #L9#����������#l   \r\n #L3#������� #l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e���������Ƕ������ӵ�е�#r�ض�װ��#k���о��ѽ����������ӵ��#r��Ӧװ��#k��ǰ���£�ͨ���ռ�#r���Ѳ���#k�����ɶһ�����װ�����������������������");
            cm.dispose();
    }else if  (selection == 1) {
           cm.sendOk("#e�캮�ض��ĵط�����������߳ǡ�\r\n��ʾ����ʼ�ƺ������ڰٲ��õ���������");
		       cm.dispose();
    }else if  (selection == 4) {
           cm.sendOk("#e��߳ǵĺ��У����������Ѱɣ�");
		       cm.dispose();
    }else if  (selection == 6) {
           cm.sendOk("#e��������Ҳ#k");
		       cm.dispose(); 
    }else if  (selection == 2) {
           cm.sendOk("#e�񼶾������˳�ȥ�����ˡ�����\r\n������ʾ��#r�����ǹ��ң��Լ��ң�");
		       cm.dispose(); 
    }else if  (selection == 7) {
           cm.sendOk("#e��ʾ���ɺ��Ĵ�أ������������㼣������\r\n��ʾ����ʼ����ͷ�����Ϻ�ԥ԰��");
		       cm.dispose();
    }else if  (selection == 8) {
           cm.sendOk("#e��ʾ���������ĺ��Ĳ�λ���������������ټ���\r\n��ʾ����ʼ�����������Ѻʹ廻");
		       cm.dispose();
    }else if  (selection == 9) {
          cm.sendOk("#e��ʾ�������Ѻʹ壡\r\n��ʾ����ʼ���������֮�ǻ�");
		       cm.dispose(); 
    }else if  (selection == 3) {
           cm.sendOk("#e��ʾ�������Ѻʹ壡\r\n��ʾ����ʼ��������Ϻ�ԥ԰��");
		       cm.dispose();
    }else if  (selection == 10) {
           cm.sendOk("#e��������ͷ��֪�����İɣ�");
		       cm.dispose();


}
}
}
}

