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
	text += "�������Ҿ��Ǳ����ľ����������ᣬ����ǿ���ľ��ѷ������԰������#v1142007##r�ﰵ������ɱ��ѫ�¡�#k���һ��#b�񼶾���#k\r\n��Ҫ������Ʒ�����Ѿ���ɹ��߼����ѵ�װ����Ч����\r\n#v1142007# * 1��\r\n#v4000021##d#z4000021# * 500��\r\n#v4000237##d#z4000237# * 200��\r\n#v4000331##d#z4000331# * 200��\r\n#v4000313##d#z4000313# * 300��\r\n#v4032226##d#z4032226# * 300ֻ\r\n#v2140002##d��� * 2000W\r\n~\r\n"
	text += "\r\n#L1##b���ռ���������Ʒ��ȷ����ʼ����װ��";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4000313, 500) && cm.haveItem(4000021,500) && cm.haveItem(4000237,200) && cm.haveItem(4000331,200)  && cm.haveItem(4032226,500) && cm.haveItem(1142007,1)){
				cm.gainItem(4000313, -500);
				cm.gainItem(4000021, -500);
				cm.gainItem(4000237, -200);
				cm.gainItem(4000331, -200);
				cm.gainItem(4032226, -500);
                                cm.gainMeso(-50000000);
				cm.gainItem(1142007, -1);
                                cm.gainItem(1142007,888,888,888,888,888,888,666,666,600,600,600,600,60,60,0,0,0);
            cm.sendOk("���ѳɹ�������ѫ���Ѿ���Խ�Ž�");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ﰵ������ɱ��ѫ�¡��񼶾��ѳɹ�������ͻ����ʣ���ϲ����");
			}else{
            cm.sendOk("�޷�������������Ĳ��ϲ��㣬��˶Բ��Ϻ����ԣ�\r\n");
            cm.dispose();
			}
		}
    }
}




