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
var bossMaps = Array(Array(541020700,"千年树妖王"),Array(551030100,"阴森世界入口"),Array(220080000,"时间塔的隐秘场所"),Array(211042300,"扎昆入口"),Array(240050400,"暗黑龙王洞穴入口"),Array(270050000,"忘却的黄昏"));

var selectResultMap = {};


function start() {
    cm.getPlayer().dropMessage("地图ID:" + cm.getMapId());
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
            cm.sendSimple(content);
        } else if (status == 1) {
            if(selection == mapChangeSelector){
                selectResultMap.seleted = true;
                var content = MenuIcon + "#rRain冒险岛#b" + MenuIcon + "\r";
                content += "\n#g"+AddressIcon + "> 世界传送#b\r";
                content += "\r\n\t#L" + ziYouSelector + "# " + ToMapIcon + "   自由市场\t";
                content += "\n\t#L" + ziYou1DoorSelector + "# " + ToMapIcon + "   自由市场1洞\r";
                content += "\n\t#L" + townSelector + "# " + ItemIcon + "   城镇地图\t";
                content += "\n\t#L" + updateLevelSelector + "# " + ItemIcon + "   升级地图\r";
                content += "\n\t#L" + arriveSelector + "# " + ItemIcon + "   旅游地图\t";
                content += "\n\t#L" + bossSelector + "# " + ItemIcon + "   BOSS地图";
                cm.sendSimple(content);
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