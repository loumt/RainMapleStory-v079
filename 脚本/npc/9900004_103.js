load("nashorn:mozilla_compat.js");
importPackage(Packages.client);
var random = java.lang.Math.floor(Math.random() * 7 + 1);
var randoma = java.lang.Math.floor(Math.random() * 8 + 1);
var sgsj = java.lang.Math.floor(Math.random() * 2 + 1);
var sgsja = java.lang.Math.floor(Math.random() * 2 + 1);
var item = java.lang.Math.floor(Math.random() * 100 + 1);

var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            var txta = "";
            var txtas = "";
			if(cm.getPlayer().getLevel() < 70){
                txt += "��70���Ժ��������ҽ�����";
                cm.sendOk(txt);
                cm.dispose();
			}else if (cm.getSBOSSRW() == 0 && cm.getSBOSSRWA() == 0 &&��cm.getPlayer().getmrsbossrw() == 0 && cm.getPlayer().getmrsbossrwa() == 0){
				txt = "��ã�������ÿ��BOSS������Ұ������ɱBOSS��ͬʱҲ������������ִ����ܲ���ɡ�\r\n\r\n";
                txt += "#L1##b��ȡÿ�ջ�ɱBOSS����#l";
                cm.sendSimple(txt);
			}else if (cm.getPlayer().getmrsbossrw() > 0 && cm.getPlayer().getmrsbossrwa() > 0 && cm.getSBOSSRW() < cm.getPlayer().getmrsbossrws() || cm.getSBOSSRWA() < cm.getPlayer().getmrsbossrwas()){
				txt = "��ã�������ÿ��BOSS������Ұ������ɱBOSS��ͬʱҲ������������ִ����ܲ���ɡ�\r\n\r\n";
				if(cm.getPlayer().getmrsbossrw() == 2220000){
					txtas = "����ţ��";
				}else if(cm.getPlayer().getmrsbossrw() == 3220000){
					txtas = "������";
				}else if(cm.getPlayer().getmrsbossrw() == 6300005){
					txtas = "��ʬĢ����";
				}else if(cm.getPlayer().getmrsbossrw() == 5220002){
					txtas = "��ʿ��";
				}else if(cm.getPlayer().getmrsbossrw() == 5220003){
					txtas = "��Ī";
				}else if(cm.getPlayer().getmrsbossrw() == 6130101){
					txtas = "Ģ����";
				}else if(cm.getPlayer().getmrsbossrw() == 6220000){
					txtas = "���";
				}
				if(cm.getPlayer().getmrsbossrwa() == 6220001){
					txta = "��ŵ";
				}else if(cm.getPlayer().getmrsbossrwa() == 7220000){
					txta = "�ϵ���";
				}else if(cm.getPlayer().getmrsbossrwa() == 7220001){
					txta = "��β��";
				}else if(cm.getPlayer().getmrsbossrwa() == 7220002){
					txta = "������ʦ";
				}else if(cm.getPlayer().getmrsbossrwa() == 8150000){
					txta = "����ħ";
				}else if(cm.getPlayer().getmrsbossrwa() == 9600009){
					txta = "�������";
				}else if(cm.getPlayer().getmrsbossrwa() == 8180000){
					txta = "������";
				}else if(cm.getPlayer().getmrsbossrwa() == 8180001){
					txta = "��ӥ";
				}
                txt += "#b�㵱ǰ������ɽ��ȣ�#l\r\n\r\n";
                txt += "#r"+txtas+"���������� "+cm.getPlayer().getmrsbossrws()+"/"+cm.getSBOSSRW()+" Ŀǰ�Ѿ���ɱ#l\r\n";
                txt += "#r"+txta+"���������� "+cm.getPlayer().getmrsbossrwas()+"/"+cm.getSBOSSRWA()+" Ŀǰ�Ѿ���ɱ#l";
                cm.sendOk(txt);
                cm.dispose();
			}else if (cm.getSBOSSRW() >= cm.getPlayer().getmrsbossrws() && cm.getSBOSSRWA() >= cm.getPlayer().getmrsbossrwas() && cm.getPlayer().getmrsbossrws() > 0 &&  cm.getPlayer().getmrsbossrwas() > 0){
				txt = "��ã�������ÿ��BOSS������Ұ������ɱBOSS��ͬʱҲ������������ִ����ܲ���ɡ�\r\n\r\n";
                txt += "#L2##b��ϲ�����ÿ��ɱboss����[������ȡ����]��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (random <= 1){
                
				cm.getPlayer().setmrsbossrw(2220000);	
				cm.getPlayer().setmrsbossrws(sgsj);	
            }else if(random == 2){
                
				cm.getPlayer().setmrsbossrw(3220000);
				cm.getPlayer().setmrsbossrws(sgsj);		
            }else if(random == 3){
                
				cm.getPlayer().setmrsbossrw(6300005);
				cm.getPlayer().setmrsbossrws(sgsj);		
            }else if(random == 4){
                
				cm.getPlayer().setmrsbossrw(5220002);	
				cm.getPlayer().setmrsbossrws(sgsj);	
            }else if(random == 5){
                
				cm.getPlayer().setmrsbossrw(5220003);	
				cm.getPlayer().setmrsbossrws(sgsj);	
            }else if(random == 6){
                
				cm.getPlayer().setmrsbossrw(6130101);	
				cm.getPlayer().setmrsbossrws(sgsj);	
            }else if(random >= 7){
                
				cm.getPlayer().setmrsbossrw(6220000);	
				cm.getPlayer().setmrsbossrws(sgsj);	
            }
			
            if (randoma <= 1){
                
				cm.getPlayer().setmrsbossrwa(6220001);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma == 2){
                
				cm.getPlayer().setmrsbossrwa(7220000);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma == 3){
                
				cm.getPlayer().setmrsbossrwa(7220001);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma == 4){
                
				cm.getPlayer().setmrsbossrwa(7220002);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma == 5){
                
				cm.getPlayer().setmrsbossrwa(8150000);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma == 6){
                
				cm.getPlayer().setmrsbossrwa(9600009);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma == 7){
                
				cm.getPlayer().setmrsbossrwa(8180000);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }else if(randoma >= 8){
                
				cm.getPlayer().setmrsbossrwa(8180001);	
				cm.getPlayer().setmrsbossrwas(sgsja);	
            }
                cm.sendOk("�ɹ���ȡÿ��ɱBOSS����\r\n#r�����´��Ҳ鿴�����Լ�Ҫɱ��BOSS���#l");
                cm.dispose();
        } else if (selection == 2) {
			if(item > 50){
					cm.gainItem(4000463, 5);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
				cm.getPlayer().setmrsbossrw(0);	
				cm.getPlayer().setmrsbossrws(0);
				cm.getPlayer().setmrsbossrwa(0);	
				cm.getPlayer().setmrsbossrwas(0);	
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]���ÿ�ջ�ɱBOSS���񣬴��һ��Ĥ�ݰɡ�");
                cm.sendOk("��ϲ�����ÿ��ɱBOSS��������������!");
                cm.dispose();
        }
    }
}
