/**
 * PB触发
 * 奇拉
 * If accepted  = summon PB + Kriston Disappear + 1 hour timer
 * If deny = NoTHING HAPPEN
 */
function start() {
    if (cm.isLeader()) {
        cm.askAcceptDecline("如果我有善良之镜,我就能召唤黑魔法师!\r\n等等!好像哪里错了!为什么召唤不了黑魔法师?我感觉到跟黑魔法师完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(请把奇拉的使命传递下去.)");
    }else{
        cm.sendSimple("让你的组队队长来找我！");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.isLeader()) {
            cm.removeNpc(270050100, 2141000);
            cm.forceStartReactor(270050100, 2709000);
        }else{
            cm.sendSimple("让你的组队队长来找我！");
            cm.dispose();
        }
    }
    cm.dispose();
}