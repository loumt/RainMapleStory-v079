/**
 * PB守门人
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
        cm.sendNext("#b你想去挑战\t#k#rPB#k#k#b，每次挑战需要六个人组队才能进去哦!");
    } else if (status == 1) {
        if (cm.getPlayer().getLevel() >= 120) {
            if (cm.getParty() == null) { // 没有开队伍
                cm.sendOk("你好像还没有一个#r队伍#k,我是不能送你进去的.");
                cm.dispose();
                return;
            }

            if (cm.getBossLog('PB') >= 5) {
                cm.sendOk("#e你今天已经挑战五次了，请明天再来.");
                cm.dispose();
                return;
            }

            if (!cm.isLeader()) { // 不是队长
                cm.sendSimple("如果你想挑战一下PB, 让你的组队队长来找我！");
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                // if (party.size() != 1) {
                //     cm.sendOk("#r本次任务只能6人组队参加哦.");
                //     cm.dispose();
                //     return;
                // }

                if(!cm.allMembersHere()){
                    cm.sendOk("#r队员还未到达.");
                    cm.dispose();
                    return;
                }

                cm.sendYesNo("确认开始击杀 #rPB#k 吗？ \r \r \t" + ItemIcon +"  当前队伍人数: " + party.size() + " 人");
            }
        } else {
            cm.sendOk("#e#r对不起,你的等级太低.");
            cm.dispose();
        }
    }else if(status == 2){
        // var em = cm.getEventManager("pbquest");
        var em = cm.getEventManager("PinkBeanBattle");
        if (em == null) {
            cm.sendOk("不存在该event文件！");
        } else {
            // cm.setBossLog('PB');
            // log(cm.getChar().getEventInstance())
            em.startInstance(cm.getParty(), cm.getChar().getMap());

            /**
             * //TODO 实现
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