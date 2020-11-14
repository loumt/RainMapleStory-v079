var weapon = [3015304,3015312,3015315,3015330,3015332,3015370,3015371,3015372,3015374,3015419,3015375,3015378,3015379,3015415,3015338,3015339,3015340,3015300,3015297,3015267,3015258,3015259,3015260,3015264,3015240,3015234,3015235,3015227,3015225,3015195,3015183,3015100,3015106,3015107,3015114,3015115,3015120,3015133,3015143,3015144,3015155,3015173,3015099,3015098,3015096,3015092,3015089,3010417, 3010416,3012019,3012020,3012023,3012024,3012025, 3015051, 3010070, 3010788,3012030,3012031,3015057,3015058,3015088, 1112584, 1132085, 1012239, 1122104, 1032093, 1112597, 1112782, 1132187, 1112783, 1132188, 1112784, 1132189, 1112662, 1132104, 1122149, 1012283, 1032110];
var req = [
    [4000313, 10],
    [4021006, 5],
    [4011006, 5],
    [4021000, 5],
    [4032226, 10]
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d需要:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d百宝在手，天下我有  #r百宝专卖#k的首任店长就是我了！\r\n\r\n必须亲自找到我才能兑换装备哦，我在#r自由市场#k！\r\n\r\n#b(我这椅子非常多~~)\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b你身上没有#r足够的材料#k，继续收集材料去吧！");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要兑换装备#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b已经兑换了装备 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}