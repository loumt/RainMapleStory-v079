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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t  #e��ӭ����#bMapleStory #k!#n\r\n\r\n"
	//		text += "\t#r��Ҷ�һ����ʼ������ۿ�1:1!#n\r\n"
            text += "#L1##b200����Ҷ�һ�1000���#l\r\n\r\n"//3
         //   text += "#L2##b5����Ҷ�һ�5���#l\r\n\r\n"//3
         //   text += "#L3##b10����Ҷ�һ�10���#l\r\n\r\n"//3
         //   text += "#L4##b100����Ҷ�һ�100���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.haveItem(4001126,200)){
				cm.gainNX(1000);
				cm.gainItem(4001126,-200);
				cm.sendOk("200����Ҷ�һ�1000���ɹ���");
	//		    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]250����Ҷ�һ�100���ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��200����Ҷ�޷��һ�1000���");
				cm.dispose();
			}
        } else if (selection == 2) {  
			if(cm.haveItem(4001126,500)){
				cm.gainDY(200);
				cm.gainItem(4001126,-500);
				cm.sendOk("500����Ҷ�һ�200���ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]500����Ҷ�һ�200���ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��500����Ҷ�޷��һ�200���");
				cm.dispose();
			}
        } else if (selection == 3) { 
			if(cm.haveItem(4001126,1000)){
				cm.gainDY(400);
				cm.gainItem(4001126,-1000);
				cm.sendOk("1000����Ҷ�һ�400���ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000����Ҷ�һ�400���ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��1000����Ҷ�޷��һ�400���");
				cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(4001126,2500)){
				cm.gainDY(1000);
				cm.gainItem(4001126,-2500);
				cm.sendOk("2500����Ҷ�һ�1000���ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]2500����Ҷ�һ�1000���ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��2500����Ҷ�޷��һ�1000���");
				cm.dispose();
			}
		}
    }
}


