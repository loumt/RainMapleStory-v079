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
var bossMaps = Array(Array(541020700,"���������ż�(ǧ��������)"),Array(551030100,"��ɭ�������"),Array(220080000,"ʱ���������س���"),Array(211042300,"�������"),Array(240050400,"����������Ѩ���"),Array(270050000,"��ȴ�Ļƻ�"));

var selectResultMap = {};
/******************************************************************************************��ͼ����**********************************************************************/


/******************************************************************************************����תְ**********************************************************************/
var quickChangJobSelector = 2;
/******************************************************************************************����תְ**********************************************************************/

/******************************************************************************************��������**********************************************************************/
var fullOfSkillSelector = 3;
/******************************************************************************************��������**********************************************************************/


function start() {
    // cm.getPlayer().dropMessage("�Ƿ�:" + cm.haveItem(4000003, 1));
    cm.getPlayer().dropMessage("��ǰ��ͼID:" + cm.getMapId());
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
            content += "\n#L" + quickChangJobSelector + "# " + ItemIcon + "  ����תְ ";
            content += "\n#L" + fullOfSkillSelector + "# " + ItemIcon + "  �������� ";
            cm.sendSimple(content);
        } else if (status == 1) {
            if(selection === mapChangeSelector){
                selectResultMap.seleted = true;
                var content = MenuIcon + "#rRainð�յ�#b" + MenuIcon + "\r";
                content += "\n#d" + "      >> ���紫��#b\r";
                content += "\r\n\t#L" + ziYouSelector + "# " + ToMapIcon + "   �����г�\t";
                content += "\n\t#L" + ziYou1DoorSelector + "# " + ToMapIcon + "   �����г�1��\r";
                content += "\n\t#L" + townSelector + "# " + ItemIcon + "   �����ͼ\t";
                content += "\n\t#L" + updateLevelSelector + "# " + ItemIcon + "   ������ͼ\r";
                content += "\n\t#L" + arriveSelector + "# " + ItemIcon + "   ���ε�ͼ\t";
                content += "\n\t#L" + bossSelector + "# " + ItemIcon + "   BOSS��ͼ";
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


function showChangJob(level, job){
    switch (job) {
        /**
         * һת
         */
        case 0:
            /**
             * ����תְ
             */
            if(level < 8) {
                cm.sendOk("���ĵȼ���̫��, �����Ŭ��Ŷ!");
                cm.dispose();
                return;
            }
            if(level == 8) {
                cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L200#ħ��ʦ");
            }else{
                cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L100#սʿ#L200#ħ��ʦ#L300#������#L400#����#L500#����\r\n#L1100#����ʿ#L1200#����ʦ#L1300#����ʹ��#L1400#ҹ����#L1500#��Ϯ��\r\n#L2100#ս��1ת\r\n#L2200#����#L430#��Ӱ˫��#L3200#���鶷ʦ#L3300#��������#L3500#��еʦ\r\n#L2300#˫����#L501#������#L3100#��ħ����\r\n#L508#���Ĵ���#L5100#��֮��ʿ#L2400#�ֵ���Ӱ");
            }
            break;
//��ת
        case 100:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L110#����\r\n#L120#׼��ʿ\r\n#L130#ǹսʿ");
            //cm.openNpc(9000069,2);
            break;
        case 200:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L210#�𶾷�ʦ\r\n#L220#���׷�ʦ\r\n#L230#��ʦ");
            break;
        case 300:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L310#����\r\n#L320#����");
            break;
        case 400:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L410#�̿�\r\n#L420#����");
            break;
        case 500:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L510#ȭ��\r\n#L520#��ǹ��");
            break;

        case 1100:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1110#����ʿ2ת");
            break;
        case 1200:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1210#����ʦ2ת");
            break;
        case 1300:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1310#����ʹ��2ת");
            break;
        case 1400:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1410#ҹ����2ת");
            break;
        case 1500:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1510#��Ϯ��2ת");
            break;

        case 2100:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2110#ս��2ת");
            break;
        case 430:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L432#˫��2ת");
            break;
        case 3200:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3210#����2ת");
            break;
        case 3300:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3310#����2ת");
            break;
        case 3500:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3510#��е2ת");
            break;
        case 2300:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2310#����2ת");
            break;
        case 501:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L530#����2ת");
            break;
        case 3100:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3110#��ħ2ת");
            break;
        case 5100:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L5110#�׹���2ת");
            break;
        case 2400:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2410#��Ӱ2ת");
            break;
        case 508:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L570#���Ĵ���2ת");
            break;

//��ת
        case 110:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L111#��ʿ");
            break;
        case 120:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L121#��ʿ");
            break;
        case 130:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L131#����ʿ");
            break;
        case 210:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L211#����ʦ");
            break;
        case 220:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L221#������ʦ");
            break;
        case 230:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L231#����");
            break;
        case 310:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L311#����");
            break;
        case 320:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L321#����");
            break;
        case 410:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L411#��Ӱ��");
            break;
        case 420:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L421#���п�");
            break;
        case 510:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L511#��ʿ");
            break;
        case 520:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L521#���");
            break;

        case 1110:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1111#����ʿ3ת");
            break;
        case 1210:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1211#����ʦ3ת");
            break;
        case 1310:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1311#����ʹ��3ת");
            break;
        case 1410:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1411#ҹ����3ת");
            break;
        case 1510:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L1511#��Ϯ��3ת");
            break;

        case 2110:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2111#ս��3ת");
            break;
        case 432:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L433#˫��3ת");
            break;
        case 3210:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3211#����3ת");
            break;
        case 3310:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3311#����3ת");
            break;
        case 3510:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3511#��еʦ3ת");
            break;
        case 2310:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2311#����3ת");
            break;
        case 530:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L531#������3ת");
            break;
        case 3110:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3111#��ħ3ת");
            break;
        case 5110:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L5111#�׹���3ת");
            break;
        case 2410:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2411#��Ӱ3ת");
            break;
        case 570:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L571#���Ĵ���3ת");
            break;

//��ת
        case 111:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L112#Ӣ��");
            break;
        case 121:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L122#ʥ��ʿ");
            break;
        case 131:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L132#����ʿ");
            break;
        case 211:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L212#��ħ��ʦ");
            break;
        case 221:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L222#����ħ��ʦ");
            break;
        case 231:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L232#����");
            break;
        case 311:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L312#������");
            break;
        case 321:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L322#����");
            break;
        case 411:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L412#��ʿ");
            break;
        case 421:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L422#����");
            break;
        case 511:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L512#���ӳ�");
            break;
        case 521:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L522#����");
            break;

        case 2111:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2112#ս��4ת");
            break;
        case 433:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L434#˫��4ת");
            break;
        case 3211:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3212#����4ת");
            break;
        case 3311:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3312#����4ת");
            break;
        case 3511:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3512#��еʦ4ת");
            break;
        case 2311:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2312#����4ת");
            break;
        case 531:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L532#������4ת");
            break;
        case 3111:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L3112#��ħ4ת");
            break;
        case 5111:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L5112#�׹���4ת");
            break;
        case 2411:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2412#��Ӱ4ת");
            break;
        case 571:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L572#���Ĵ���4ת");
            break;

//����
        case 2200:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2210#����2ת");
            break;
        case 2210:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2211#����3ת");
            break;
        case 2211:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2212#����4ת");
            break;
        case 2212:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2213#����5ת");
            break;
        case 2213:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2214#����6ת");
            break;
        case 2214:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2215#����7ת");
            break;
        case 2215:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2216#����8ת");
            break;
        case 2216:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2217#����9ת");
            break;
        case 2217:
            cm.sendSimple("��ѡ����Ҫתְ��ְҵ\r\n#b#L2218#����10ת");
            break;

        default:
            cm.sendOk("�������Ҫתְ�Ļ��ǵ�����");
            cm.dispose();
    }
}