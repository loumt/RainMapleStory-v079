var icon = "#fEffect/CharacterEff/1112900/1/0#";
var head = "#fEffect/CharacterEff/1082229/0/0#";

var ziYouSelector = 0;
var ziYouMap = 910000000;

var townSelector = 1;
var townMaps = Array(
    2000000,
    104000000,
    100000000,
    101000000,
    102000000,
    103000000,
    120000000,
    200000000,
    211000000,
    550000000,
    230000000,
    222000000,
    220000000,
    701000000,
    250000000,
    702000000,
    260000000,
    600000000,
    240000000,
    261000000,
    221000000,
    251000000,
    300000000,
    270000000,
    702100000,
    800000000,
    130000000);

var updateLevelSelector = 2;
var updateLevelMaps = Array(
    Array(50000, "1级 ~ 10级"),
    Array(100010100, "3级 ~ 10级"),
    Array(104040000, "8级 ~ 15级"),
    Array(102030000, "15级 ~ 20级"),
    Array(105050000, "20级 ~ 40级"),
    Array(551000200, "50级 ~ 70级"),
    Array(600020300, "70级 ~ 80级"),
    Array(702010000, "80级 ~ 90级"),
    Array(220060000, "90级 ~ 100级"),
    Array(541010010, "90级 ~ 100级"),
    Array(220060200, "100级 ~ 110级"),
    Array(220060201, "110级 ~ 120级"),
    Array(240040510, "120级以上"),
    Array(270030100, "150级以上"),
    Array(270030500, "160级以上")
);

var arriveSelector = 3;
var arriveMaps = Array(500000000,
    702000000,
    700000000,
    600000000,
    540000000,
    800000000,
    701000000,
    702100000,
    550000000
);

var bossSelector = 4;
var bossMaps = Array(541020700,//克雷塞尔遗迹(千年树妖王)
    551030100,//阴森世界入口
    220080000,//时间塔的隐秘场所
    211042300,//扎昆入口
    240050400,//暗黑龙王洞穴入口
    270050000//忘却的黄昏
);

var status = 0;
var selects = 0;
var selectType;

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
        }else {
            cm.dispose();
            return;
        }

        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            var content = "这里可以连接到各个地方：\r";
            content += "\n#L" + ziYouSelector + "# " + head + " 自由市场 ";
            content += "\n#L" + townSelector + "# " + head + " 城镇地图 ";
            content += "\n#L" + updateLevelSelector + "# " + head + " 升级地图 ";
            content += "\r\n#L" + arriveSelector + "# " + head + " 旅游地图 ";
            content += "\n#L" + bossSelector + "# " + head + " BOSS地图 ";
            cm.sendSimple(content)
        } else if (status == 1) {
            var content = "请选择你要接连的地方：\r\n#b"

            if(selection === ziYouSelector){
                cm.warp(ziYouMap);
                cm.dispose();
                return;
            }

            switch (selection) {
                case townSelector:
                    for (var i = 0; i < townMaps.length; i++) {
                        content += "#L" + i + "# " + icon + " #m" + townMaps[i] + "# "+  ((i+1)%3 === 0? "\r": "")  +"\n"
                    }
                    selectType = townSelector
                    break;
                case updateLevelSelector:
                    for (var i = 0; i < updateLevelMaps.length; i++) {
                        content += "#L" + i + "# " + icon + " #m" + updateLevelMaps[i][0] + "# (" + updateLevelMaps[i][1] + ")\r\n"
                    }
                    selectType = updateLevelSelector
                    break;
                case arriveSelector:
                    for (var i = 0; i < arriveMaps.length; i++) {
                        content += "#L" + i + "# " + icon + " #m" + arriveMaps[i] + "# \r\n"
                    }
                    selectType = arriveSelector
                    break;
                case bossSelector:
                    for (var i = 0; i < bossMaps.length; i++) {
                        content += "#L" + i + "# " + icon + " #m" + bossMaps[i] + "# \r\n"
                    }
                    selectType = bossSelector
                    break;
            }
            cm.sendSimple(content);
        } else if (status == 2) {
            selects = selection;
            cm.sendYesNo("在这里的事情办完了吗？确定要去你像要去的地方了吗？");
        } else if (status == 3) {
            switch (selectType) {
                case townSelector:
                    cm.warp(townMaps[selects]);
                    toMapDropMessage(townMaps[selects]);
                    break;
                case updateLevelSelector:
                    cm.warp(updateLevelMaps[selects][0]);
                    toMapDropMessage(updateLevelMaps[selects][0]);
                    break;
                case arriveSelector:
                    cm.warp(arriveMaps[selects]);
                    toMapDropMessage(arriveMaps[selects]);
                    break;
                case bossSelector:
                    cm.warp(bossMaps[selects]);
                    toMapDropMessage(bossMaps[selects]);
                    break;
            }
            cm.dispose();
        }
    }
}


function toMapDropMessage(mapId){
    cm.getPlayer().dropMessage('=>' + mapId);
}