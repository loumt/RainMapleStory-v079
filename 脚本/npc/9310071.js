/*
*   �����̵꣬��ǿ��  NPC
*   By: ZreHy_MS               �����Ҫ�Ķ����������޸ģ����˿����õ�~
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ��������ð�յ���#r�һ�ϵͳ#k������\r\n\r\n��Ŀǰ�У� #e#r" + cm.getMeso() + "#k#n ���\r\n#L0##e100W ���====#r10W ����#n#l#k\r\n\r\n#L1##e100W ���====#r10,000 ��ȯ#k#n#l#k\r\n\r\n#L10##e500W ���====#r50,000 ��ȯ#k#n#l#k\r\n\r\n#L11##e1000W ���====#r100,000 ��ȯ#k#n#l#k\r\n\r\n#L12##e5000W ���====#r500,000 ��ȯ#k#n#l#k\r\n#L2#100��#d#v4001126##d=====#r20,000��ȯ#k#n#l\r\n#L3#100��#d#v4001126##d=====#r200W ���#n#l#k\r\n#L6#100��#d#v4001126##d=====#r10��#k#v4000313##n#l#k\r\n#L4#10��#d#v4000313##d======#r200W ���#n#l#k\r\n#L5#10ֻ#d#v4032226##d=====#r200W ���#n#l#k\r\n\r\n#L7##e1000W ���====#r200W ����#n#l#k\r\n\r\n#L8##e1�� ���====#r5000W����#n#l#k");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getMeso() >= 1000000){
                cm.sendOk("��ϲ�㣬������ 100000 ����ֵ! .");
                cm.gainMeso(-1000000);
                cm.gainExp(100000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getMeso() >= 1000000){
                cm.sendOk("��ϲ�㣬������ 10000 ��ȯ! .");
                cm.gainMeso(-1000000);
                cm.gainNX(10000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 10: 
            if(cm.getMeso() >= 5000000){
                cm.sendOk("��ϲ�㣬������ 50000 ��ȯ! .");
                cm.gainMeso(-5000000);
                cm.gainNX(50000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 5000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 11: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("��ϲ�㣬������ 100000 ��ȯ! .");
                cm.gainMeso(-10000000);
                cm.gainNX(100000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 10000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 12: 
            if(cm.getMeso() >= 50000000){
                cm.sendOk("��ϲ�㣬������ 500000 ��ȯ! .");
                cm.gainMeso(-50000000);
                cm.gainNX(500000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 50000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                cm.gainNX(20000);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 20000 ��ȯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�20000���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                cm.gainMeso(2000000);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 2000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�2000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000313,10)){
                //cm.gainDY(100);
                cm.gainMeso(2000000);
				cm.gainItem(4000313,-10);
				cm.sendOk("��ϲ�㣬������ 2000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10�Żƽ��Ҷ�һ�2000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,10)){
                //cm.gainDY(100);
                cm.gainMeso(2000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("��ϲ�㣬������ 2000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10ֻ�ƽ�����һ�2000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ������Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 10�Żƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�10�Żƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("��ϲ�㣬������ 2000000 ����ֵ! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 10000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("��ϲ�㣬������ 50000000 ����ֵ! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1�� ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}