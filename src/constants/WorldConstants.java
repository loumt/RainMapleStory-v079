package constants;

import server.ServerProperties;

public class WorldConstants {

    public static Option WORLD = WorldOption.雪吉拉;
    public static boolean ADMIN_ONLY = true;
    public static boolean JZSD = false;
    public static boolean WUYANCHI = true;
    public static boolean LieDetector = false;
    public static boolean DropItem = true;
    public static int USER_LIMIT = 10000;
    public static int DEFAULT_CHARSLOT = 3;
    public static int MAX_CHAR_VIEW = 20;
    public static boolean GMITEMS = false;
    public static boolean CS_ENABLE = true;
    public static int EXP_RATE = 1;
    public static int MESO_RATE = 1;
    public static int DROP_RATE = 1;
    public static byte FLAG = 3;
    public static int CHANNEL_COUNT = 2;
    public static String WORLD_TIP = "請享受楓之谷的冒險之旅吧!";
    public static String SCROLL_MESSAGE = "";
    public static boolean AVAILABLE = true;
    public static final int gmserver = -1; // -1 = no gm server
    public static final byte recommended = (byte) -1; //-1 = no recommended
    public static final String recommendedmsg = recommended < 0 ? "" : "        Join " + getById(recommended).name() + ",       the newest world! (If youhave friends who play, consider joining their worldinstead. Characters can`t move between worlds.)";

    public static interface Option {

        public int getWorld();

        public String name();
    }

    /**
     *
     * @Warning: World will be duplicated if it's the same as the gm server
     */
    public static enum WorldOption implements Option {

        泰勒熊(16),
        神獸(15),
        皮卡啾(14),
        鯨魚號(13),
        電擊象(12),
        海努斯(11),
        巴洛古(10),
        蝴蝶精(9),
        火獨眼獸(8),
        木妖(7),
        三眼章魚(6),
        綠水靈(5),
        藍寶(4),
        緞帶肥肥(3),
        星光精靈(120),
        菇菇寶貝(1),
        雪吉拉(0);
        private final int world;

        WorldOption(int world) {
            this.world = world;
        }

        @Override
        public int getWorld() {
            return world;
        }
    }

    public static enum TespiaWorldOption implements Option {

        測試機("t0");
        private final int world;
        private final String worldName;

        TespiaWorldOption(String world) {
            this.world = Integer.parseInt(world.replaceAll("t", ""));
            this.worldName = world;
        }

        @Override
        public int getWorld() {
            return world;
        }
    }

    public static Option[] values() {
        return ServerConstants.TESPIA ? TespiaWorldOption.values() : WorldOption.values();
    }

    public static Option valueOf(String name) {
        return ServerConstants.TESPIA ? TespiaWorldOption.valueOf(name) : WorldOption.valueOf(name);
    }

    public static Option getById(int g) {
        for (Option e : values()) {
            if (e.getWorld() == g) {
                return e;
            }
        }
        return null;
    }

    public static boolean isExists(int id) {
        return getById(id) != null;
    }

    public static String getNameById(int serverid) {
        if (getById(serverid) == null) {
            System.err.println("World doesn't exists exception. ID: " + serverid);
            return "";
        }
        return getById(serverid).name();
    }

    public static void loadSetting() {
        ADMIN_ONLY = ServerProperties.getProperty("server.settings.admin", ADMIN_ONLY);
        FLAG = ServerProperties.getProperty("server.settings.flag", FLAG);
        EXP_RATE = ServerProperties.getProperty("server.settings.expRate", EXP_RATE);
        MESO_RATE = ServerProperties.getProperty("server.settings.mesoRate", MESO_RATE);
        DROP_RATE = ServerProperties.getProperty("server.settings.dropRat", DROP_RATE);
        WORLD_TIP = ServerProperties.getProperty("server.settings.eventMessage", WORLD_TIP);
        SCROLL_MESSAGE = ServerProperties.getProperty("server.settings.serverMessage", SCROLL_MESSAGE);
        CHANNEL_COUNT = ServerProperties.getProperty("server.settings.channel.count", CHANNEL_COUNT);
        USER_LIMIT = ServerProperties.getProperty("server.settings.userlimit", USER_LIMIT);
        DEFAULT_CHARSLOT = ServerProperties.getProperty("server.settings.maxCharacters", DEFAULT_CHARSLOT);
        MAX_CHAR_VIEW = ServerProperties.getProperty("server.settings.maxCharView", MAX_CHAR_VIEW);
        GMITEMS = ServerProperties.getProperty("server.settings.gmitems", GMITEMS);
        CS_ENABLE = ServerProperties.getProperty("server.settings.cashshop.enable", CS_ENABLE);
    }

    static {
        loadSetting();
    }
}
