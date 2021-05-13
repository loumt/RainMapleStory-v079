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
    Array(50000, "1�� ~ 10��"),
    Array(100010100, "3�� ~ 10��"),
    Array(104040000, "8�� ~ 15��"),
    Array(102030000, "15�� ~ 20��"),
    Array(105050000, "20�� ~ 40��"),
    Array(551000200, "50�� ~ 70��"),
    Array(600020300, "70�� ~ 80��"),
    Array(702010000, "80�� ~ 90��"),
    Array(220060000, "90�� ~ 100��"),
    Array(541010010, "90�� ~ 100��"),
    Array(220060200, "100�� ~ 110��"),
    Array(220060201, "110�� ~ 120��"),
    Array(240040510, "120������"),
    Array(270030100, "150������"),
    Array(270030500, "160������")
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
var bossMaps = Array(541020700,//���������ż�(ǧ��������)
    551030100,//��ɭ�������
    220080000,//ʱ���������س���
    211042300,//�������
    240050400,//����������Ѩ���
    270050000//��ȴ�Ļƻ�
);

var status = 0;
var selects = 0;
var selectType;

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
        }else {
            cm.dispose();
            return;
        }

        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            var content = "����������ӵ������ط���\r";
            content += "\n#L" + ziYouSelector + "# " + head + " �����г� ";
            content += "\n#L" + townSelector + "# " + head + " �����ͼ ";
            content += "\n#L" + updateLevelSelector + "# " + head + " ������ͼ ";
            content += "\r\n#L" + arriveSelector + "# " + head + " ���ε�ͼ ";
            content += "\n#L" + bossSelector + "# " + head + " BOSS��ͼ ";
            cm.sendSimple(content)
        } else if (status == 1) {
            var content = "��ѡ����Ҫ�����ĵط���\r\n#b"

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
            cm.sendYesNo("������������������ȷ��Ҫȥ����Ҫȥ�ĵط�����");
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