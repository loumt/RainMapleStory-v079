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
            cm.sendSimple("#e您好，欢迎来到#r米米冒险岛的世界#k，我是自动售货员:\r\n\r\n  #d剩余金币:#r" + cm.getMeso() + "    \r\n#g#L0#金币兑换帮助#l #k\r\n\r\n #L1#杂货小铺#l #L4#冲级武器#l #L6#冲级防具#l\r\n #L2#卷轴商人#l #L5#最新椅子#l #L3#戒指专卖#l \r\n #L13#枫叶专卖 #L8#饰品腰带 #L9#头盔耳环#l\r\n #L10#高级武器 #L11#召唤商店 #L12#召唤BOSS #L14#勋章商店");
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendOk("#e游戏中的金币完全可以靠努力自己赚取，自由市场开放金币兑换系统，如有问题可在QQ群交流：940329930");
                cm.dispose();
            } else if (selection == 1) {
                cm.openShop(30);
                cm.dispose();
            } else if (selection == 4) {
                cm.openShop(74);
                cm.dispose();
            } else if (selection == 6) {
                cm.openShop(63);
                cm.dispose();
            } else if (selection == 2) {
                cm.openShop(109);
                cm.dispose();
            } else if (selection == 5) {
                cm.openShop(108);
                cm.dispose();
            } else if (selection == 3) {
                cm.openShop(104);
                cm.dispose();
            } else if (selection == 7) {
                cm.openShop(110);
                cm.dispose();
            } else if (selection == 8) {
                cm.openShop(111);
                cm.dispose();
            } else if (selection == 9) {
                cm.openShop(93);
                cm.dispose();
            } else if (selection == 10) {
                cm.openShop(66);
                cm.dispose();
            } else if (selection == 11) {
                cm.openShop(112);
            } else if (selection == 12) {
                cm.openNpc(2071000, 0);
            } else if (selection == 13) {
                cm.openShop(103);
            } else if (selection == 14) {
                cm.openShop(113);
            }
        }
    }
}

