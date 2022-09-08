/**
 * 商城 =》 百宝箱
 */
var ItemIcon = "#fUI/UIWindow/Quest/icon3/6#";
var ToMapIcon = "#fUI/UIWindow/Quest/icon6/7#";
var AddressIcon ="#fUI/UIWindow/Quest/icon2/7#";
var MenuIcon ="#fEffect/ItemEff/1112002/1/4#"

var status = 0;

/******************************************************************************************地图传送**********************************************************************/
var mapChangeSelector = 1;

var ziYouSelector = 10;
var ziYouMap = 910000000;
//自由1洞
var ziYou1DoorSelector = 11;
var ziYouMap1Door = 910000001;
//城镇地图
var townSelector = 12;
var townMaps = Array(2000000, 104000000, 100000000, 101000000, 102000000, 103000000, 120000000, 200000000, 211000000, 550000000, 230000000, 222000000, 220000000, 701000000, 250000000, 702000000, 260000000, 600000000, 240000000, 261000000, 221000000, 251000000, 300000000, 270000000, 702100000, 800000000, 130000000);
//升级地图
var updateLevelSelector = 13;
var updateLevelMaps = Array(Array(50000, "1级 ~ 10级"), Array(100010100, "3级 ~ 10级"), Array(104040000, "8级 ~ 15级"), Array(102030000, "15级 ~ 20级"), Array(105050000, "20级 ~ 40级"), Array(551000200, "50级 ~ 70级"), Array(600020300, "70级 ~ 80级"), Array(702010000, "80级 ~ 90级"), Array(220060000, "90级 ~ 100级"), Array(541010010, "90级 ~ 100级"), Array(220060200, "100级 ~ 110级"), Array(220060201, "110级 ~ 120级"), Array(240040510, "120级以上"), Array(270030100, "150级以上"), Array(270030500, "160级以上"));
//旅游地图
var arriveSelector = 14;
var arriveMaps = Array(500000000, 702000000, 700000000, 600000000, 540000000, 800000000, 701000000, 702100000, 550000000);
//BOSS地图
var bossSelector = 15;
var bossMaps = Array(Array(541020700,"克雷塞尔遗迹(千年树妖王)"),Array(551030100,"阴森世界入口"),Array(220080000,"时间塔的隐秘场所"),Array(211042300,"扎昆入口"),Array(240050400,"暗黑龙王洞穴入口"),Array(270050000,"忘却的黄昏"));

var selectResultMap = {};
/******************************************************************************************地图传送**********************************************************************/


/******************************************************************************************快速转职**********************************************************************/
var quickChangJobSelector = 2;
/******************************************************************************************快速转职**********************************************************************/

/******************************************************************************************技能满级**********************************************************************/
var fullOfSkillSelector = 3;
/******************************************************************************************技能满级**********************************************************************/


function start() {
    // cm.getPlayer().dropMessage("是否:" + cm.haveItem(4000003, 1));
    cm.getPlayer().dropMessage("当前地图ID:" + cm.getMapId());
    status = -1;
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
            return;
        }

        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            var content = MenuIcon + "#rRain冒险岛#b" + MenuIcon + "\r";
            content += "\n#L" + mapChangeSelector + "# " + ItemIcon + "  世界传送 ";
            content += "\n#L" + quickChangJobSelector + "# " + ItemIcon + "  快速转职 ";
            content += "\n#L" + fullOfSkillSelector + "# " + ItemIcon + "  技能满级 ";
            cm.sendSimple(content);
        } else if (status == 1) {
            if(selection === mapChangeSelector){
                selectResultMap.seleted = true;
                var content = MenuIcon + "#rRain冒险岛#b" + MenuIcon + "\r";
                content += "\n#d" + "      >> 世界传送#b\r";
                content += "\r\n\t#L" + ziYouSelector + "# " + ToMapIcon + "   自由市场\t";
                content += "\n\t#L" + ziYou1DoorSelector + "# " + ToMapIcon + "   自由市场1洞\r";
                content += "\n\t#L" + townSelector + "# " + ItemIcon + "   城镇地图\t";
                content += "\n\t#L" + updateLevelSelector + "# " + ItemIcon + "   升级地图\r";
                content += "\n\t#L" + arriveSelector + "# " + ItemIcon + "   旅游地图\t";
                content += "\n\t#L" + bossSelector + "# " + ItemIcon + "   BOSS地图";
                cm.sendSimple(content);
            }

            if(selection === quickChangJobSelector) {
                showChangJob(cm.getPlayer().getLevel(), cm.getJob());
            }

            if(selection === fullOfSkillSelector) {
                cm.maxSkillsByJob();
                cm.dispose();
                return;
            }
        } else if (status == 2) {

            /**
             * 选择了城镇传送
             */
            if(selectResultMap.seleted) {
                /**
                 * 固定移动点
                 */
                if (selection === ziYouSelector) {
                    cm.warp(ziYouMap);
                    cm.dispose();
                    return;
                }else if(selection === ziYou1DoorSelector) {
                    cm.warp(ziYouMap1Door);
                    cm.dispose();
                    return;
                }else{
                    var content = "请选择你要接连的地方：\r\n#b"
                    switch (selection) {
                        case townSelector:
                            for (var i = 0; i < townMaps.length; i++) {
                                content += "#L" + i + "# " + ToMapIcon + " #m" + townMaps[i] + "# " + ((i + 1) % 2 === 0 ? "\r " : " ")
                            }
                            selectResultMap.type = townSelector
                            break;
                        case updateLevelSelector:
                            for (var i = 0; i < updateLevelMaps.length; i++) {
                                content += "#L" + i + "# " + ToMapIcon + " #m" + updateLevelMaps[i][0] + "# (" + updateLevelMaps[i][1] + ")\r\n"
                            }
                            selectResultMap.type = updateLevelSelector
                            break;
                        case arriveSelector:
                            for (var i = 0; i < arriveMaps.length; i++) {
                                content += "#L" + i + "# " + ToMapIcon + " #m" + arriveMaps[i] + "# \r\n"
                            }
                            selectResultMap.type = arriveSelector
                            break;
                        case bossSelector:
                            for (var i = 0; i < bossMaps.length; i++) {
                                content += "#L" + i + "# " + ToMapIcon + " #m" + bossMaps[i] + "# \r\n"
                            }
                            selectResultMap.type = bossSelector
                            break;
                    }
                    cm.sendSimple(content);
                }
            }
        } else if (status == 3) {


            if(selectResultMap.seleted && selectResultMap.type){
                selectResultMap.select = selection;
                cm.sendYesNo("在这里的事情办完了吗？确定要去你像要去的地方了吗？");
            }

        }else if(status == 4) {
            if(selectResultMap.seleted && selectResultMap.type){
                switch (selectResultMap.type) {
                    case townSelector:
                        cm.warp(townMaps[selectResultMap.select]);
                        toMapDropMessage(townMaps[selectResultMap.select]);
                        break;
                    case updateLevelSelector:
                        cm.warp(updateLevelMaps[selectResultMap.select][0]);
                        toMapDropMessage(updateLevelMaps[selectResultMap.select][0]);
                        break;
                    case arriveSelector:
                        cm.warp(arriveMaps[selectResultMap.select]);
                        toMapDropMessage(arriveMaps[selectResultMap.select]);
                        break;
                    case bossSelector:
                        cm.warp(bossMaps[selectResultMap.select][0]);
                        toMapDropMessage(bossMaps[selectResultMap.select][0]);
                        break;
                }
                cm.dispose();
            }
        }
    }
}


function toMapDropMessage(mapId) {
    // cm.getPlayer().dropMessage('=>' + mapId);
}


function showChangJob(level, job){
    switch (job) {
        /**
         * 一转
         */
        case 0:
            /**
             * 新手转职
             */
            if(level < 8) {
                cm.sendOk("您的等级还太低, 请继续努力哦!");
                cm.dispose();
                return;
            }
            if(level == 8) {
                cm.sendSimple("请选择你要转职的职业\r\n#b#L200#魔法师");
            }else{
                cm.sendSimple("请选择你要转职的职业\r\n#b#L100#战士#L200#魔法师#L300#弓箭手#L400#飞侠#L500#海盗\r\n#L1100#魂骑士#L1200#炎术师#L1300#风灵使者#L1400#夜行者#L1500#奇袭者\r\n#L2100#战神1转\r\n#L2200#龙神#L430#暗影双刀#L3200#幻灵斗师#L3300#豹弩游侠#L3500#机械师\r\n#L2300#双弩精灵#L501#火炮手#L3100#恶魔猎手\r\n#L508#龙的传人#L5100#光之骑士#L2400#怪盗幻影");
            }
            break;
//二转
        case 100:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L110#剑客\r\n#L120#准骑士\r\n#L130#枪战士");
            //cm.openNpc(9000069,2);
            break;
        case 200:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L210#火毒法师\r\n#L220#冰雷法师\r\n#L230#牧师");
            break;
        case 300:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L310#猎人\r\n#L320#弩弓手");
            break;
        case 400:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L410#刺客\r\n#L420#侠客");
            break;
        case 500:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L510#拳手\r\n#L520#火枪手");
            break;

        case 1100:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1110#魂骑士2转");
            break;
        case 1200:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1210#炎术师2转");
            break;
        case 1300:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1310#风灵使者2转");
            break;
        case 1400:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1410#夜行者2转");
            break;
        case 1500:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1510#奇袭者2转");
            break;

        case 2100:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2110#战神2转");
            break;
        case 430:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L432#双刀2转");
            break;
        case 3200:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3210#幻灵2转");
            break;
        case 3300:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3310#豹弩2转");
            break;
        case 3500:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3510#机械2转");
            break;
        case 2300:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2310#精灵2转");
            break;
        case 501:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L530#火炮2转");
            break;
        case 3100:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3110#恶魔2转");
            break;
        case 5100:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L5110#米哈尔2转");
            break;
        case 2400:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2410#幻影2转");
            break;
        case 508:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L570#龙的传人2转");
            break;

//三转
        case 110:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L111#勇士");
            break;
        case 120:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L121#骑士");
            break;
        case 130:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L131#龙骑士");
            break;
        case 210:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L211#火毒巫师");
            break;
        case 220:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L221#冰雷巫师");
            break;
        case 230:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L231#祭祀");
            break;
        case 310:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L311#射手");
            break;
        case 320:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L321#游侠");
            break;
        case 410:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L411#无影人");
            break;
        case 420:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L421#独行客");
            break;
        case 510:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L511#斗士");
            break;
        case 520:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L521#大幅");
            break;

        case 1110:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1111#魂骑士3转");
            break;
        case 1210:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1211#炎术师3转");
            break;
        case 1310:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1311#风灵使者3转");
            break;
        case 1410:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1411#夜行者3转");
            break;
        case 1510:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L1511#奇袭者3转");
            break;

        case 2110:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2111#战神3转");
            break;
        case 432:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L433#双刀3转");
            break;
        case 3210:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3211#幻灵3转");
            break;
        case 3310:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3311#豹弩3转");
            break;
        case 3510:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3511#机械师3转");
            break;
        case 2310:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2311#精灵3转");
            break;
        case 530:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L531#火炮手3转");
            break;
        case 3110:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3111#恶魔3转");
            break;
        case 5110:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L5111#米哈尔3转");
            break;
        case 2410:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2411#幻影3转");
            break;
        case 570:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L571#龙的传人3转");
            break;

//四转
        case 111:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L112#英雄");
            break;
        case 121:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L122#圣骑士");
            break;
        case 131:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L132#黑骑士");
            break;
        case 211:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L212#火毒魔导师");
            break;
        case 221:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L222#冰雷魔导师");
            break;
        case 231:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L232#主教");
            break;
        case 311:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L312#神射手");
            break;
        case 321:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L322#箭神");
            break;
        case 411:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L412#隐士");
            break;
        case 421:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L422#侠盗");
            break;
        case 511:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L512#冲锋队长");
            break;
        case 521:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L522#船长");
            break;

        case 2111:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2112#战神4转");
            break;
        case 433:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L434#双刀4转");
            break;
        case 3211:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3212#幻灵4转");
            break;
        case 3311:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3312#豹弩4转");
            break;
        case 3511:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3512#机械师4转");
            break;
        case 2311:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2312#精灵4转");
            break;
        case 531:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L532#火炮手4转");
            break;
        case 3111:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L3112#恶魔4转");
            break;
        case 5111:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L5112#米哈尔4转");
            break;
        case 2411:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2412#幻影4转");
            break;
        case 571:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L572#龙的传人4转");
            break;

//龙神
        case 2200:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2210#龙神2转");
            break;
        case 2210:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2211#龙神3转");
            break;
        case 2211:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2212#龙神4转");
            break;
        case 2212:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2213#龙神5转");
            break;
        case 2213:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2214#龙神6转");
            break;
        case 2214:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2215#龙神7转");
            break;
        case 2215:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2216#龙神8转");
            break;
        case 2216:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2217#龙神9转");
            break;
        case 2217:
            cm.sendSimple("请选择你要转职的职业\r\n#b#L2218#龙神10转");
            break;

        default:
            cm.sendOk("如果你需要转职的话记得找我");
            cm.dispose();
    }
}