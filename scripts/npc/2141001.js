/**
 * PB������
 * @type {number}
 */
var status = 0;
var ItemIcon = "#fUI/UIWindow/Quest/icon3/6#";

function start() {
    // status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    }

    if (status == 0) {
        cm.sendNext("#b����ȥ��ս\t#k#rPB#k#k#b��ÿ����ս��Ҫ��������Ӳ��ܽ�ȥŶ!");
    } else if (status == 1) {
        if (cm.getPlayer().getLevel() >= 120) {
            if (cm.getParty() == null) { // û�п�����
                cm.sendOk("�����û��һ��#r����#k,���ǲ��������ȥ��.");
                cm.dispose();
                return;
            }

            if (cm.getBossLog('PB') >= 5) {
                cm.sendOk("#e������Ѿ���ս����ˣ�����������.");
                cm.dispose();
                return;
            }

            if (!cm.isLeader()) { // ���Ƕӳ�
                cm.sendSimple("���������սһ��PB, �������Ӷӳ������ң�");
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                // if (party.size() != 1) {
                //     cm.sendOk("#r��������ֻ��6����Ӳμ�Ŷ.");
                //     cm.dispose();
                //     return;
                // }

                if(!cm.allMembersHere()){
                    cm.sendOk("#r��Ա��δ����.");
                    cm.dispose();
                    return;
                }

                cm.sendYesNo("ȷ�Ͽ�ʼ��ɱ #rPB#k �� \r \r \t" + ItemIcon +"  ��ǰ��������: " + party.size() + " ��");
            }
        } else {
            cm.sendOk("#e#r�Բ���,��ĵȼ�̫��.");
            cm.dispose();
        }
    }else if(status == 2){
        // var em = cm.getEventManager("pbquest");
        var em = cm.getEventManager("PinkBeanBattle");
        if (em == null) {
            cm.sendOk("�����ڸ�event�ļ���");
        } else {
            // cm.setBossLog('PB');
            // log(cm.getChar().getEventInstance())
            em.startInstance(cm.getParty(), cm.getChar().getMap());

            /**
             * //TODO ʵ��
             * @type {any[]}
             */
            // party = cm.getChar().getEventInstance().getPlayers();
            party = Array(cm.getChar())
        }
        cm.dispose();
    }
}


function log(msg){
    cm.getPlayer().dropMessage('PB\t' + msg);
}