//Mina_MS
var status = 0;
var typeName = new Array("������","��˫��","��С��","���С�","����","��һ�㡿","�����㡿","�����㡿","���ĵ㡿","����㡿","�����㡿");
var selectTouType=new Array(2,2,3,3,3,6,6,6,6,6,6);
var selectTouNum=new Array(1,5,1,3,5,1,2,3,4,5,6);
var selectTou=-1;
var nx=500;
var race;
var num;
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (mode == 1)
status++;
else
status--;
		if (status == -1) {
			cm.dispose();
		 } 
		else if (status == 0) {
		 var where ="ð�յ��Ĳ�ϵͳ\r\n�������н���,Ҫ�۵�5%��Ӷ��.���ĵ������Ϊ:#r"+cm.getChar().getNX()+"\r\nѡ����Ҫ��ע��ѡ�\r\n";
		 if(cm.getChar().isGM()){
		 where+="#r����Ա��ʾ:#k�Խ����:#r"+cm.seeAlltouzhu()+"#k ������:#r"+cm.seeAllpeichu()+"#k(��GM�ɼ�.)\r\n";
		 }
		 where+="#r2������#k\r\n#L0##b������#k#l#L1##b��˫��#k#l\r\n\r\n";
		 where+="#r3������#k\r\n#L2##b��С��#k#l#L3##b���С�#k#l#L4##b����#k#l\r\n\r\n";
		 where+="#r6������#k\r\n#L5##b��һ��#k#l#L6##b������#k#l#L7##b������#k#l#L8##b���ġ�#k#l#L9##b���塿#k#l#L10##b������#k#l\r\n\r\n\r\n";
		 where+="���ڿ���ǰͶעͳ��,ÿ5���ӿ���ˢ��ͳ��:\r\n";
		 where+="#b2��Ͷע����ǰ:#k"+cm.seeTouzhuByType(2)+"��Ͷע\r\n";
		 where+="#b3��Ͷע��:#k"+cm.seeTouzhuByType(3)+"\r\n";
		 where+="#b6��Ͷע��:#k"+cm.seeTouzhuByType(6)+"\r\n\r\n";

		 where+="#r��ϵͳ����Ƶ��1��Ч,ÿ5���ӿ���һ��,�벻Ҫ�������Ƶ����������.������ɻ񽱵��ʧ,�������貹����#k"
		 cm.sendSimple(where);
		 } 
		else if (status == 1) {
			if(cm.getChar().getClient().getChannel()!=1){
			cm.sendOk("��ϵͳ����Ƶ��1���š����������Ƶ���������ý�����");
				cm.dispose();
			}
				else
			if(cm.getChar().getTouzhuNum()>0){
				cm.sendOk("���ο���ǰ���Ѿ�Ͷ��ע�ˡ�����Ͷע���:"+cm.getChar().getTouzhuNX());
				cm.dispose();
			}else{
		selectTou=selection;
		race=selectTouType[selectTou];
		num=selectTouNum[selectTou];
		var prompt="��ѡ���Ͷע����Ϊ:"+typeName[selectTou]+"����Ϊ:"+selectTouType[selectTou]+"\r\n���Ͷע10000�㣬���Ͷע500�㡣\r\n���ĵ������Ϊ:"+cm.getChar().getNX()+"\r\n��������ҪͶע�ĵ����Ŀ��";
		cm.sendGetNumber(prompt,500,500,10000);
		}
		} 
		else if (status == 2) {
			status=4;
			nx=selection;
			cm.sendYesNo("��ȷ��ҪͶע "+nx+" ���𣿱���:"+race+" ����:"+num);
		} 
		else if (status == 3) {
        cm.sendOk("�������㻹����ԥ���Ǿ�����������ɣ�");
        cm.dispose();
		} 
		else if (status == 4) {
			cm.sendOk("лл");
        cm.dispose();
		} 
		else if (status == 5) {
			if(nx>cm.getChar().getNX()){
			cm.sendOk("���ĵ���� "+nx+" ��");
			cm.dispose();
			}else
		if(cm.touzhu(race, nx, num)){
				cm.sendOk("Ͷע���,ÿ���ӿ������벻Ҫ�뿪ม�");
				cm.dispose();
			}else{
		cm.sendOk("Ͷע���ִ���");
        cm.dispose();
		}
		} 
		else if (status == 6) {
		cm.sendOk("6");
        cm.dispose();
		} 
		else if (status == 7) {
        cm.dispose();
		} 
}
}  
