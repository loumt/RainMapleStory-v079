/**
 * PB守门人(内)
 * @type {number}
 */
function start() {
    if (cm.isLeader()) {
        cm.sendYesNo("如果你们现在离开，你们将不得不重新开始。你们确定要离开这里到外面去吗？");
    }else{
        cm.sendYesNo("如果你现在离开，你将不能再次进入。你确定要离开这里到外面去吗？");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.isLeader()) {
            cm.warpParty(270050000, 0)
        }else{
            cm.warp(270050000, 0);
        }
    }
    cm.dispose();
}