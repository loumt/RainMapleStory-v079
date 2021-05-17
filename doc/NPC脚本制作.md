
NPC 脚本目录

 ```
  scripts/npc/*.js
```

```
***********彩虹工作室整理***********
* 		 作用：NPC字符串格式	   *
************************************

#e            		= 加粗字体
#n					= 正常字体/移除加粗
#b					= 蓝色字体
#g					= 绿色字体
#d					= 紫色字体
#r					= 红色字体
#k              	= 黑色字体
#c[itemid]#         = 显示玩家背包[itemid]的道具数量
#l					= #L#的结束符
#m[mapid]#			= 显示地图名称
#o[mobid]#			= 显示怪物名称
#p[npcid]#			= 显示NPC名称
#q[skillid]#		= 显示技能名称
#t[itemid]#			= 显示道具名称
#z[itemid]#			= 显示道具名称与详细信息
#h #				= 显示玩家名称，空格键不可忽略
#f[imagelocation]#	= 显示在.wz文件文件夹里的图案
#i[itemid]#			= 显示道具图片
#s[skillid]#		= 显示技能图片
#v[itemid]#			= 显示道具图片与详细信息
#x					= 显示当前经验百分比
\r\n				= 換行
```

```
# 爱心
var LOVE = "~~#fEffect/CharacterEff/1082229/0/0#~~";
var LOVE = "~~#fEffect/CharacterEff/1112905/0/1#~~";

#蓝色朝右箭头
var iconEvent ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
#红色朝右箭头
var iconEvent ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2

# '无条件获得'提示图标
var iconEvent ="#fUI/UIWindow/Quest/basic#";

# 蓝色小圆圈
var iconEvent ="#fUI/UIWindow/Quest/icon3/6#"

# 美化‘New’
var iconEvent ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"

var iconEvent ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
```
 
 
 NPC功能制作
 
```
#获得物品
cm.gainItem(2010007, 1);

  #打开仓库
 cm.sendStorage();
    cm.dispose();

# 获取职业
cm.getJob()

# 获得金币
 cm.gainMeso(meso);

# 移动到某个地图
  cm.warp(mapCode);

# 队伍
cm.getParty();

#获取等级
cm.getPlayer().getLevel()


# 获取金币数
  cm.getMeso()

#获取地图ID
cm.getMapId()

# 是否有道具
cm.haveItem(1002798, 1)
```   


 NPC对话制作
 ```
    #普通单次对话
  function start() {
      action(1, 0, 0);
  }
  
  function action(mode, type, selection) {
      cm.sendOk("鱼鱼鱼~");
      cm.dispose();
  }


# 确认框
cm.sendYesNo("xxxxx吗？");

# 多句话
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 1){
        status ++
    }

    if(status == 0) {
        cm.sendNext("快看, 那个人在钓鱼.....");
    }else if(status == 1) {
        cm.sendOk("快快快......鱼鱼鱼.....");
        cm.dispose();
    }
}

 ```   