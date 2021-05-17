/**
 * �̳� =�� �ٱ���
 */
var ItemIcon = "#fUI/UIWindow/Quest/icon3/6#";
var ToMapIcon = "#fUI/UIWindow/Quest/icon6/7#";
var AddressIcon ="#fUI/UIWindow/Quest/icon2/7#";
var MenuIcon ="#fEffect/ItemEff/1112002/1/4#"

var status = 0;

/******************************************************************************************��ͼ����**********************************************************************/
var mapChangeSelector = 1;

var ziYouSelector = 10;
var ziYouMap = 910000000;
//����1��
var ziYou1DoorSelector = 11;
var ziYouMap1Door = 910000001;
//�����ͼ
var townSelector = 12;
var townMaps = Array(2000000, 104000000, 100000000, 101000000, 102000000, 103000000, 120000000, 200000000, 211000000, 550000000, 230000000, 222000000, 220000000, 701000000, 250000000, 702000000, 260000000, 600000000, 240000000, 261000000, 221000000, 251000000, 300000000, 270000000, 702100000, 800000000, 130000000);
//������ͼ
var updateLevelSelector = 13;
var updateLevelMaps = Array(Array(50000, "1�� ~ 10��"), Array(100010100, "3�� ~ 10��"), Array(104040000, "8�� ~ 15��"), Array(102030000, "15�� ~ 20��"), Array(105050000, "20�� ~ 40��"), Array(551000200, "50�� ~ 70��"), Array(600020300, "70�� ~ 80��"), Array(702010000, "80�� ~ 90��"), Array(220060000, "90�� ~ 100��"), Array(541010010, "90�� ~ 100��"), Array(220060200, "100�� ~ 110��"), Array(220060201, "110�� ~ 120��"), Array(240040510, "120������"), Array(270030100, "150������"), Array(270030500, "160������"));
//���ε�ͼ
var arriveSelector = 14;
var arriveMaps = Array(500000000, 702000000, 700000000, 600000000, 540000000, 800000000, 701000000, 702100000, 550000000);
//BOSS��ͼ
var bossSelector = 15;
var bossMaps = Array(Array(541020700,"ǧ��������"),Array(551030100,"��ɭ�������"),Array(220080000,"ʱ���������س���"),Array(211042300,"�������"),Array(240050400,"����������Ѩ���"),Array(270050000,"��ȴ�Ļƻ�"));

var selectResultMap = {};


function start() {
    cm.getPlayer().dropMessage("��ͼID:" + cm.getMapId());
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
            var content = MenuIcon + "#rRainð�յ�#b" + MenuIcon + "\r";
            content += "\n#L" + mapChangeSelector + "# " + ItemIcon + "  ���紫�� ";
            cm.sendSimple(content);
        } else if (status == 1) {
            if(selection == mapChangeSelector){
                selectResultMap.seleted = true;
                var content = MenuIcon + "#rRainð�յ�#b" + MenuIcon + "\r";
                content += "\n#g"+AddressIcon + "> ���紫��#b\r";
                content += "\r\n\t#L" + ziYouSelector + "# " + ToMapIcon + "   �����г�\t";
                content += "\n\t#L" + ziYou1DoorSelector + "# " + ToMapIcon + "   �����г�1��\r";
                content += "\n\t#L" + townSelector + "# " + ItemIcon + "   �����ͼ\t";
                content += "\n\t#L" + updateLevelSelector + "# " + ItemIcon + "   ������ͼ\r";
                content += "\n\t#L" + arriveSelector + "# " + ItemIcon + "   ���ε�ͼ\t";
                content += "\n\t#L" + bossSelector + "# " + ItemIcon + "   BOSS��ͼ";
                cm.sendSimple(content);
            }
        } else if (status == 2) {

            /**
             * ѡ���˳�����
             */
            if(selectResultMap.seleted) {
                /**
                 * �̶��ƶ���
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
                    var content = "��ѡ����Ҫ�����ĵط���\r\n#b"
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
                cm.sendYesNo("������������������ȷ��Ҫȥ����Ҫȥ�ĵط�����");
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