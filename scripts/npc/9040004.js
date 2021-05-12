var name = '荣耀之石';
var code = '9040004';


var red = '#r';
var blue = '#b';
var green = '#g';

// var LOVE = "#fEffect/CharacterEff/1042176/0/0#";
var LOVE = "#fEffect/CharacterEff/1082229/0/0#";

var menus = [
    {
        name: "家族排名",
        selector: 0,
        color: red,
        fun: function(){
            cm.displayGuildRanks();
            cm.dispose();
        }
    },
    {
        name: "玩家排名",
        selector: 1,
        color: blue,
        fun: function(){
            cm.showlvl();
            cm.dispose();
        }
    },
    {
        name: "金币排名",
        selector: 2,
        color: green,
        fun: function(){
            cm.showmeso();
            cm.dispose();
        }
    }
]

function createItem(name, color, selector) {
    return ' \r\n#L' + selector + '#' + color + name + '\n#l ';
}


function createMenu() {
    var result = '';
    for (var i = 0; i < menus.length; i++) {
        result += createItem(menus[i].name, menus[i].color, menus[i].selector)
    }
    return result;
}

function dispatch(selector) {
    menus.forEach(function(menu){
        if(menu.selector === selector) {
            menu.fun()
        }
    })
}

function getLove(){
    return LOVE + LOVE + LOVE + LOVE +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE+ LOVE +LOVE + LOVE  +LOVE + LOVE +LOVE + LOVE +LOVE + LOVE
}

function start() {
    cm.sendSimple(getLove() + " \r #b你好 #k#h  ##e #k " + createMenu() +' \n\r\n\r ' +  getLove());
}

function action(mode, type, selection) {
    cm.dispose();

    dispatch(selection);
}
