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
                
   cm.sendOk("��лʹ��.");
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
	text += "�������Ҿ��Ǳ����ľ�������ɵɵ�������޴��ľ��ѷ����ɰ������#v1102163##r����������#k���һ��#b�񼶾���#k\r\n��Ҫ������Ʒ�����Ѿ���ɹ��񼶾��ѵĹ���������Ч����\r\n#v1102163# * 1��\r\n#v4021000##d#z4021000# * 30��\r\n#v4011006##d#z4011006# * 30��\r\n#v4021006##d#z4021006# * 30��\r\n#v4000313##d#z4000313# * 300��\r\n#v4032226##d#z4032226# * 300ֻ\r\n#v2140002##d��� * 2000W\r\n~\r\n"
	text += "\r\n#L1##b���ռ���������Ʒ��ȷ����ʼ����װ��";
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
            cm.sendOk("���ѳɹ�������ͻ����ʣ�");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�����������񼶾��ѳɹ�������ͻ����ʣ���ϲ����");
			}else{
            cm.sendOk("�޷�������������Ĳ��ϲ��㣬���߱�����û����Ӧװ������˶Բ��Ϻ����ԣ�\r\n");
            cm.dispose();
			}
		}
    }
}




