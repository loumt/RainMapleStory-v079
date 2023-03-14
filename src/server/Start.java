package server;

import client.SkillFactory;
import client.inventory.OnlyID;
import constants.ServerConfig;
import constants.WorldConstants;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamilyBuff;
import server.Timer.*;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.PlayerNPC;
import server.maps.MapleMapFactory;
import server.quest.MapleQuest;
import tools.MacAddressTool;

/**
 * 服务端启动类
 */
public class Start {
    public static final Start instance = new Start();

    /**
     * 初始化登录状态
     */
    private static void resetAllLoginState() {
        String name = null;
        int id = 0, vip = 0, size = 0;

//        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("UPDATE accounts SET loggedin = 0")) {
//            ps.executeUpdate();
//        } catch (SQLException ex) {
//            FileoutputUtil.outError("logs/资料库异常.txt", ex);
//            throw new RuntimeException("【错误】 请确认资料库是否正常连接");
//        }
        /*try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("SELECT count(*) FROM characters WHERE gm = 100"); ResultSet rs = ps.executeQuery()) {
            rs.beforeFirst();
            while (rs.next()) {
                size = rs.getInt(1);
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            throw new RuntimeException("【錯誤】 請確認資料庫是否正確連接");
        }
        if (size > 1) {
            System.out.println("警告：資料表內ＧＭ權限異常 ");
        }*/

 /*try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("select id, name, vip FROM accounts where vip > 12"); ResultSet rs = ps.executeQuery()) {
                rs.beforeFirst();
                while (rs.next()) {
                    name = rs.getString("name");
                    vip = rs.getInt("vip");
                    id = rs.getInt("id");
                    System.err.println("VIP權限異常: 帳號[" + name + "], 編號[" + id + "], VIP[" + vip + "]");
                }
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            throw new RuntimeException("【錯誤】 請確認資料庫是否正確連接");
        }*/

 /*try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("SELECT inventoryequipmentid FROM inventoryequipment WHERE inventoryequipmentid >= 9000000000 ORDER BY inventoryequipmentid DESC LIMIT 1"); ResultSet rs = ps.executeQuery()) {
                rs.beforeFirst();
                while (rs.next()) {
                    throw new RuntimeException("資料表[inventoryequipment] 欄位[inventoryequipmentid] 流水號已達 : " + rs.getLong("inventoryequipmentid"));
                }
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            throw new RuntimeException("【錯誤】 請確認資料庫是否正確連接");
        }

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("SELECT queststatusid FROM queststatus WHERE queststatusid >= 9000000000 ORDER BY queststatusid DESC LIMIT 1"); ResultSet rs = ps.executeQuery()) {
                rs.beforeFirst();
                while (rs.next()) {
                    throw new RuntimeException("資料表[queststatus] 欄位[queststatusid] 流水號已達 : " + rs.getLong("queststatusid"));
                }
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            throw new RuntimeException("【錯誤】 請確認資料庫是否正確連接");
        }*/
    }

    public void run() throws InterruptedException {
        System.setProperty("java.util.Arrays.useLegacyMergeSort", "true");
        System.setProperty("file.encoding", "utf-8");
        System.setProperty("path", "");
        System.out.println("【冒险岛模拟器】");
        System.out.println("【版本】 v079");

        /**
         * 重设登录状态-这边可以写一些初始化的东西
         */
        resetAllLoginState();

        if (WorldConstants.ADMIN_ONLY) {
            System.out.println("【管理员模式】开启");
        } else {
            System.out.println("【管理员模式】关闭");
        }

        if (ServerConfig.AUTO_REGISTER) {
            System.out.println("【自动注册】开启");
        } else {
            System.out.println("【自动注册】关闭");
        }

        if (!WorldConstants.GMITEMS) {
            System.out.println("【允许玩家使用管理员物品】开启");
        } else {
            System.out.println("【允许玩家使用管理员物品】关闭");
        }

        /**
         * 将配置文件的配置载入到程序中
         */
        ServerConfig.loadSetting();

        World.init();
        /* 載入計時器 */
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        MobTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
        /**
         * 读取wz文件中禁止使用的名字-Etc.wz中ForbiddenName.img.xml
         */
        LoginInformationProvider.getInstance();
        /**
         * 读取钓鱼物品
         */
        FishingRewardFactory.getInstance();
        /* 載入任務*/
        MapleQuest.initQuests();
        MapleLifeFactory.loadQuestCounts();
        MapleOxQuizFactory.getInstance().initialize();
        /* 載入物品資訊 */
        MapleItemInformationProvider.getInstance().load();
        //MapleItemInformationProvider.loadFaceHair(); //载入脸型发型信息
        PredictCardFactory.getInstance().initialize();
        //MTSStorage.load();
        CashItemFactory.getInstance().initialize();
        /* 載入隨機獎勵 */
        RandomRewards.getInstance();
        /* 載入技能資訊 */
        SkillFactory.LoadSkillInformaion();
        /* 載入怪物技能 */
        MapleCarnivalFactory.getInstance();
        /* 載入排行 */
        MapleGuildRanking.getInstance().getGuildRank();
        MapleGuildRanking.getInstance().getJobRank(1);
        MapleGuildRanking.getInstance().getJobRank(2);
        MapleGuildRanking.getInstance().getJobRank(3);
        MapleGuildRanking.getInstance().getJobRank(4);
        MapleGuildRanking.getInstance().getJobRank(5);
        MapleGuildRanking.getInstance().getJobRank(6);
        /* 載入家族Buff */
        MapleFamilyBuff.getBuffEntry();
        /* 載入登入伺服器 */
        LoginServer.setup();
        /* 載入頻道伺服器*/
        ChannelServer.startAllChannels();
        /* 載入商城伺服器*/
        CashShopServer.setup();
        /* 載入自動封鎖系統 */
        CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
        /* 載入关闭伺服器線程 */
        Runtime.getRuntime().addShutdownHook(new Thread(ShutdownServer.getInstance()));
        /* 載入速度排行 */
        SpeedRunner.getInstance().loadSpeedRuns();
        /* 處理怪物重生、CD、寵物、坐騎 */
        World.registerRespawn();
        /* 加載玩家NPC */
        PlayerNPC.loadAll();// touch - so we see database problems early...
        /* 設定finishedShutdown為false */
        LoginServer.setOn();
        /* 載入自訂義NPC、怪物*/
        MapleMapFactory.loadCustomLife();

        /**
         * 公告
         */
        if (ServerConfig.AUTO_CYCLE_BROADCAST) {
            World.cycleBroadCast(10);
        }
        /**
         * 自由市场泡点
         */
        World.gainRewardInZiYou(1);

        /**
         * 初始化
         * 1.BOSS次数
         * 2.今日在线时间清零
         */
        World.nextDayClearDataTask(1);
        /**
         * 在线时间增加
         */
        World.onlineTimeUpdate(1);
        //World.GainLx(3);
        //World.GainNX(60);// 每六十分鐘自動給點數
        //World.GainGash(60);
        /**
         * 每五分钟自动存档
         */
        if (ServerConfig.AUTO_SAVE) {
            World.AutoSave(5);
        }

        //   World.ClearMemory(5 * 60);// 每小時清理記憶體
        //   WorldTimer.getInstance().register(CloseSQLConnections, 60 * 60 * 1000);// 定時清理MySql連接數
        World.isShutDown = false;
        OnlyID.getInstance();
        //System.out.println("【禁止玩家使用:啟動 如果要開放請GM上線打:!禁止玩家使用】");
        System.out.println("【服务器启动完毕】");
    }


    /**
     * 程序开始的地方
     */
    public static void main(final String args[]) throws InterruptedException {
        if (MacAddressTool.isValidate()) {
            System.out.println("[RUN]...............");
            instance.run();
        } else {
            System.exit(0);
        }
    }
}
