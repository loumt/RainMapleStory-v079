//odinms_MS
load("nashorn:mozilla_compat.js");
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r��������#bϵ��#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getMeso() + "\r\n====================================================\r\n#���Ǻ��������ľȱ������ȣ���\r\n#k#r#e���м�Ʒ��ָ�������⣡#n\r\n\r\n#L1##r#e�����Ҹ�������������˵���#b#n\r\n\r\n#L2#�Ϲ����Ž�ָ��ȫ����200==#r300��#k#v4000313#��#b#n\r\n\r\n#L3#ȫ�ܽ�ָ��ȫ����200==#r300��#k#v4000313#��#b#n\r\n\r\n#L4#���յ�������ָ��ȫ����200==#r300��#k#v4000313#��#b#n\r\n\r\n#L5#ð�ռҵĸ���̩˹��ָ��ȫ����200==#r300��#k#v4000313#��#b#n\r\n\r\n#L6#��˵��Ҷ����ָ��ȫ����200==#r300��#k#v4000313#��");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b�ͷ���С�������#n#d\r\n====================================================#k\r\n�������¾�������ȥ�ɣ��ǵø�Ⱥ������Ŷ�������Ǹ������ʵ�Ĵ���ˣ�#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e��ϲ�����ȫ����200���Ϲ����Ž�ָLV50.");
                cm.gainItem(1112495,200,200,200,200,200,200,20,20,200,200,50,50,5,5);
                cm.gainItem(4000313,-300);
                cm.����(3,"������word�磡����ϲ�������ȫ����200���Ϲ����Ž�ָLV50����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e��ϲ�����ȫ����200��ȫ�ܽ�ָ.");
                cm.gainItem(1112593,200,200,200,200,200,200,20,20,200,200,50,50,5,5);
                cm.gainItem(4000313,-300);
                cm.����(3,"������word�磡����ϲ�������ȫ����200��ȫ�ܽ�ָ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e��ϲ�����ȫ����200�����յ�������ָ.");
                cm.gainItem(1112592,200,200,200,200,200,200,20,20,200,200,50,50,5,5);
                cm.gainItem(4000313,-300);
                cm.����(3,"������word�磡����ϲ�������ȫ����200�����յ�������ָ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e��ϲ�����ȫ����300��ð�ռҵĸ���̩˹��ָ.");
                cm.gainItem(1112659,200,200,200,200,200,200,20,20,200,200,50,50,5,5);
                cm.gainItem(4000313,-300);
                cm.����(3,"������word�磡����ϲ�������ȫ����300��ð�ռҵĸ���̩˹��ָ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e��ϲ�����ȫ����200�Ĵ�˵��Ҷ����ָ.");
                cm.gainItem(1112670,200,200,200,200,200,200,20,20,200,200,200,200,20,20);
                cm.gainItem(4000313,-300);
                cm.����(3,"������word�磡����ϲ�������ȫ����200�Ĵ�˵��Ҷ����ָ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300��������֮�ͷ�����.");
                cm.gainItem(1092084,300,300,300,300,300,300,0,0,300,300,300,300,20,20);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300��������֮�ͷ����ܣ���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
