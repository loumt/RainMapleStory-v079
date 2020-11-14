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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""
            text += "#L1##e#r100#d个#v4001126##d兑换#r10000#d点卷#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.haveItem(4001126,100)){
				//cm.gainDY(100);
                                cm.getPlayer().modifyCSPoints(1, 10000);
				cm.gainItem(4001126,-100);
				cm.sendOk("100个枫叶兑换10000点卷成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100个枫叶兑换10000点卷成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有100个枫叶无法兑换10000点卷！");
				cm.dispose();
			}
		}
    }
}


