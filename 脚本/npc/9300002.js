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
	text += "�������Ҿ��Ǳ����ľ������˴�ʦ������רҵ�ľ��ѷ������԰������#v1142007##r�ﰵ������ɱ��ѫ�¡�#k���һ��#b�м�����#k\r\n��Ҫ������Ʒ�����Ѿ���ɹ��м����ѵ�װ����Ч����\r\n#v1142007# * 1��\r\n#v4000006##d#z4000006# * 100��\r\n#v4000023##d#z4000023# * 100��\r\n#v4000095##d#z4000095# * 100��\r\n#v4000313##d#z4000313# * 200��\r\n#v4032226##d#z4032226# * 200ֻ\r\n#v2140002##d��� * 1000W\r\n~\r\n"
	text += "\r\n#L1##b���ռ���������Ʒ��ȷ����ʼ����װ��";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4000313, 200) && cm.haveItem(4000006,100) && cm.haveItem(4000023,100) && cm.haveItem(4000095,100)  && cm.haveItem(4032226,200) && cm.haveItem(1142007,1)){
				cm.gainItem(4000313, -200);
				cm.gainItem(4000006, -100);
				cm.gainItem(4000023, -100);
				cm.gainItem(4000095, -100);
				cm.gainItem(4032226, -200);
                                cm.gainMeso(-10000000);
				cm.gainItem(1142007, -1);
                                cm.gainItem(1142007,600,600,600,600,600,600,300,300,350,350,350,350,30,30,0,0,0);
            cm.sendOk("���ѳɹ�����������������");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ﰵ������ɱ��ѫ�¡��м����ѳɹ�������������������ϲ����");
			}else{
            cm.sendOk("�޷�������������Ĳ��ϲ��㣬��˶Բ��Ϻ����ԣ�\r\n");
            cm.dispose();
			}
		}
    }
}




