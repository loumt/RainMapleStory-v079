/* global cm */

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("ллʹ�ã�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            //��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d BOSS�����ط�����#l\r\n\r\n"//3
            text += "#L1##r�ط�����#l #L2##r�ط�����#l #L3##r�ط�����#l #L4##r�ط�����#l \r\n\r\n"//
            text += "#L10##r�鿴����BOSS״̬#l\r\n\r\n"//
            text += "#L11##r�鿴����BOSS״̬#l\r\n\r\n"//
            text += "#L12##r�鿴����BOSS״̬#l\r\n\r\n"//
            text += "#L13##r�鿴����BOSS״̬#l\r\n\r\n"//
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getMap(220080001).getCharactersSize() > 0) {
                cm.warp(220080001);//���ӵ�ͼ
                cm.dispose();
            } else {
                cm.sendOk("���ӵ�ͼ�Ѿ�û���ˡ������ط���ֱ��ȥ��ս��");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getMap(280030000).getCharactersSize() > 0) {
                cm.warp(280030000);//������ͼ
                cm.dispose();
            } else {
                cm.sendOk("������ͼ�Ѿ�û���ˡ������ط���ֱ��ȥ��ս�ɣ�");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getMap(240060200).getCharactersSize() > 0) {
                cm.warp(240060200);//������ͼ
                cm.dispose();
            } else {
                cm.sendOk("������ͼ�Ѿ�û���ˡ������ط���ֱ��ȥ��ս�ɣ�");
                cm.dispose();
            }

        } else if (selection == 4) {
            if (cm.getMap(230040420).getCharactersSize() > 0) {
                cm.warp(230040420);//������ͼ
                cm.dispose();
            } else {
                cm.sendOk("������ͼ�Ѿ�û���ˡ������ط���ֱ��ȥ��ս�ɣ�");
                cm.dispose();
            }
            
            
        } else if (selection == 10) {
            cm.sendOk("����BOSS����ǰ��ս����Ϊ:"+cm.getMap(220080001).getCharactersSize()+"��.");
            cm.dispose();
        } else if (selection == 11) {
            cm.sendOk("����BOSS����ǰ��ս����Ϊ:"+cm.getMap(280030000).getCharactersSize()+"��.");
            cm.dispose();
        } else if (selection == 12) {
            cm.sendOk("����BOSS����ǰ��ս����Ϊ:"+cm.getMap(240060200).getCharactersSize()+"��.");
            cm.dispose();
        } else if (selection == 13) {
            cm.sendOk("����BOSS����ǰ��ս����Ϊ:"+cm.getMap(230040420).getCharactersSize()+"��.");
            cm.dispose();
            }
        }
    }



