
NPC 脚本目录

 ```
  scripts/npc/*.js
```


```
var LOVE = "~~#fEffect/CharacterEff/1082229/0/0#~~";
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