
var status = 0; 
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
            cm.sendNext("#b����ȥ��ս#k#rPB#k#k#b��ÿ����ս��Ҫ��������Ӳ��ܽ�ȥŶ!"); 
        } else if (status == 1) { 
            if(cm.getLevel() >= 120 ){  //�ж�����ȼ� 
                if (cm.getParty() == null) { // û�п����� 
                    cm.sendOk("#e�����û��һ������,���ǲ��������ȥ��."); 
                    cm.dispose();
                    return ; 
                    }
                     if ( cm.getBossLog('PB') >= 5) { 
                    cm.sendOk("#e������Ѿ���ս����ˣ�����������."); 
                    cm.dispose();
                    return ; 
                    } 
            if (!cm.isLeader()) { // ���Ƕӳ� 
                cm.sendSimple("���������սһ��PB, �������Ӷӳ������ң�"); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() != 1){
                    next = false; 
                    cm.sendOk("#r��������ֻ��6����Ӳμ�Ŷ."); 
                    cm.dispose();
                    return ; 
                    } 
                if (next) { 
            var em = cm.getEventManager("pbquest"); 
                if (em == null) { 
                    cm.sendOk("error��"); 
                } else {  
                cm.setBossLog('PB');
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
               party = cm.getChar().getEventInstance().getPlayers(); 
              
                } 
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("#e#r�Բ���,��ĵȼ�̫��."); 
                cm.dispose(); 
            } 
        } 
    } 
}    