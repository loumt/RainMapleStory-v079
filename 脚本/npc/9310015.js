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
	text += "��Ҫ#v1122000##r��������#k\r\n��Ҫ������Ʒ������ͨ���ԣ�δ����ͨ������������\r\n#v4000313##d#z4000313# * 200��\r\n#v4032226##d#z4032226# * 200ֻ\r\n#v2140002##d��� * 2000W\r\n~\r\n"
	text += "\r\n#L1##b���Ѽ�����Ʒ��ȷ���һ�װ��";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4000313,200) &&  cm.haveItem(4032226,200)){
				cm.gainItem(4000313, -200);
				cm.gainItem(4032226, -200);
                                cm.gainMeso(-20000000);
                                cm.gainItem(1122000,1);
            cm.sendOk("��ϲ�㣬�һ��ɹ����촩�����ɣ�");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]��������һ��ɹ�����ϲ����");
			}else{
            cm.sendOk("�޷�������������Ĳ��ϲ��㣬��˶Բ��Ϻ����ԣ�\r\n");
            cm.dispose();
			}
		}
    }
}




