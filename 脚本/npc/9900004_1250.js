function start() { 


    cm.sendSimple("��, ����#e#d����תְNPC#n#k��������Ҫת��ʲôְҵ?#n\r\n#L28#  �����֡�    #L15#�������ߡ�     #L16#��ս��        \r\n\r\n#e#d#L30#��ð�ռҡ�\r\n#n#d#L31#     սʿְҵ#r#l\r\n#L1#    ��Ӣ�ۡ�        #L2#��ʥ��ʿ��    \#L3#������ʿ��\r\n#d#L32#     ��ʦְҵ#r#l\r\n#L4#    �����ס�        #L5#���𶾡�        #L6#�����̡�\r\n#d#L33#      ����ְҵ#r#l\r\n#L8#    ������        #L7#�������֡�\r\n#d#L34#     ����ְҵ#r#l\r\n#L9#    ����ʿ��    #L10#��������\r\n#d#L35#     ����ְҵ#r#l\r\n#L12#    �����ӳ���        #L13#��������"); 
} 
function action(mode, type, selection) { 
 cm.dispose(); 
    if (selection == 1) { 
        cm.changeJob (112); 
      } else if (selection == 2) { 
        cm.changeJob (122); 
      } else if (selection == 3) { 
        cm.changeJob (132); 
      } else if (selection == 4) { 
        cm.changeJob (212); 
      } else if (selection == 5) { 
        cm.changeJob (222); 
      } else if (selection == 6) { 
        cm.changeJob (232); 
      } else if (selection == 7) { 
        cm.changeJob (312); 
      } else if (selection == 8) { 
        cm.changeJob (322); 
      } else if (selection == 9) { 
        cm.changeJob (412); 
      } else if (selection == 10) { 
        cm.changeJob (422); 
      } else if (selection == 11) { 
        cm.changeJob (434); 
      } else if (selection == 12) { 
        cm.changeJob (512); 
      } else if (selection == 13) { 
        cm.changeJob (522); 
      } else if (selection == 14) { 
        cm.changeJob (532); 
      } else if (selection == 15) { 
        cm.changeJob (1000); 
      } else if (selection == 16) { 
        cm.changeJob (2000); 
      } else if (selection == 17) { 
        cm.changeJob (2218); 
      } else if (selection == 18) { 
        cm.changeJob (2312); 
      } else if (selection == 19) { 
        cm.changeJob (3112); 
      } else if (selection == 20) { 
        cm.changeJob (3212); 
      } else if (selection == 21) { 
        cm.changeJob (3312); 
      } else if (selection == 22) { 
        cm.changeJob (3512); 
      } else if (selection == 23) { 
        cm.changeJob (2112); 
      } else if (selection == 24) { 
        cm.changeJob (1000); 
      } else if (selection == 25) { 
        cm.changeJob (2003); 
      } else if (selection == 26) { 
        cm.changeJob (572); 
      } else if (selection == 27) { 
        cm.changeJob (910); 
		} else if (selection == 28) { 
        cm.changeJob (000);
     } else { 
        cm.sendOk("����û��ѡ��ְҵ!"); 
        cm.dispose(); 
    } 
} 

