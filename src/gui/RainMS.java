package gui;

import client.LoginCrypto;
import client.MapleCharacter;
import client.inventory.Equip;
import client.inventory.ItemFlag;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConfig;
import constants.ServerConstants;
import constants.WorldConstants;
import database.DBConPool;
import gui.constant.RainClientConstant;
import gui.init.CDKeyInit;
import gui.init.CanvasInit;
import handling.RecvPacketOpcode;
import handling.SendPacketOpcode;
import handling.channel.ChannelServer;
import handling.login.handler.AutoRegister;
import handling.world.World;
import scripting.PortalScriptManager;
import scripting.ReactorScriptManager;
import server.*;
import server.Timer;
import server.life.MapleMonsterInformationProvider;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;
import java.util.concurrent.ScheduledFuture;

import static tools.FileoutputUtil.CurrentReadable_Date;

/**
 * @ClassName: RainMS
 * @Description:
 * @Author: Loumt
 * @Email: loumt@keeson.com
 * @Version: v1.0.0
 * @Date: 2023-03-14 16:15
 */
public class RainMS  extends javax.swing.JFrame {
    private static RainMS instance = new RainMS();

    private Canvas mainFrame;
    private JTabbedPane CDKeyPane;

    /**
     * Creates new form KinMS
     */
    public static final RainMS getInstance() {
        return instance;
    }

    public RainMS() {
        ImageIcon icon = new ImageIcon(getClass().getClassLoader().getResource("gui/Icon.png"));

        super.setIconImage(icon.getImage());
        super.setTitle(RainClientConstant.CLIENT_NAME);

        CanvasInit.init(mainFrame);
        CDKeyInit.init(CDKeyPane);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jScrollPane1)
                        .addGroup(layout.createSequentialGroup()
                                .addGap(0, 0, Short.MAX_VALUE)
                                .addComponent(mainFrame, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGroup(layout.createSequentialGroup()
                                .addComponent(jTabbedPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 1142, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(layout.createSequentialGroup()
                                .addComponent(jTabbedPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 681, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 38, Short.MAX_VALUE)
                                .addComponent(mainFrame, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(20, 20, 20)
                                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 93, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap())
        );


        /**
         * 自动调整大小
         */
        pack();


        initComponents();

//        WorldConstants.loadSetting();
//        ServerConfig.loadSetting();
//        ServerConstants.loadSetting();

//        服务端最大人数.setText(String.valueOf(WorldConstants.USER_LIMIT));
//        限制创建角色数量.setText(String.valueOf(WorldConstants.DEFAULT_CHARSLOT));
//        骑士团等级上限.setText(String.valueOf(ServerConfig.kocmaxlevel));
//        其他等级上限.setText(String.valueOf(1));

//        刷新神秘商人开关();
//        刷新神秘商人时间();
//        刷新每日送货开关();
//        刷新野外通缉开关();

    }

    public static void main(String args[]) {
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(RainMS.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(RainMS.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(RainMS.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(RainMS.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        java.awt.EventQueue.invokeLater(() -> {
            RainMS ms = new RainMS();
            ms.setVisible(true);
        });
    }



    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        chatLog = new javax.swing.JTextPane();
        jTabbedPane2 = new javax.swing.JTabbedPane();
        jPanel5 = new javax.swing.JPanel();
        jButton10 = new javax.swing.JButton();
        jTextField22 = new javax.swing.JTextField();
        jButton16 = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();
        jPanel12 = new javax.swing.JPanel();
        jLabel24 = new javax.swing.JLabel();
        jLabel25 = new javax.swing.JLabel();
        jLabel27 = new javax.swing.JLabel();
        服务端最大人数 = new javax.swing.JTextField();
        限制创建角色数量 = new javax.swing.JTextField();
        修改服务端最大人数 = new javax.swing.JButton();
        修改角色数量 = new javax.swing.JButton();
        jLabel26 = new javax.swing.JLabel();
        骑士团等级上限 = new javax.swing.JTextField();
        修改骑士团等级上限 = new javax.swing.JButton();
        jLabel28 = new javax.swing.JLabel();
        其他等级上限 = new javax.swing.JTextField();
        修改其他等级上限 = new javax.swing.JButton();
        jPanel7 = new javax.swing.JPanel();
        jButton7 = new javax.swing.JButton();
        jButton8 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        jPanel6 = new javax.swing.JPanel();
        jButton9 = new javax.swing.JButton();
        jButton1 = new javax.swing.JButton();
        jButton5 = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        jButton6 = new javax.swing.JButton();
        jButton12 = new javax.swing.JButton();
        jButton19 = new javax.swing.JButton();
        jPanel8 = new javax.swing.JPanel();
        jButton11 = new javax.swing.JButton();
        jTextField1 = new javax.swing.JTextField();
        jTextField23 = new javax.swing.JTextField();
        jButton17 = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        jTextField2 = new javax.swing.JTextField();
        jButton13 = new javax.swing.JButton();
        jTextField3 = new javax.swing.JTextField();
        jTextField4 = new javax.swing.JTextField();
        jButton14 = new javax.swing.JButton();
        jTextField5 = new javax.swing.JTextField();
        jTextField6 = new javax.swing.JTextField();
        jTextField7 = new javax.swing.JTextField();
        jTextField8 = new javax.swing.JTextField();
        jTextField9 = new javax.swing.JTextField();
        jTextField10 = new javax.swing.JTextField();
        jTextField11 = new javax.swing.JTextField();
        jTextField12 = new javax.swing.JTextField();
        jTextField13 = new javax.swing.JTextField();
        jTextField14 = new javax.swing.JTextField();
        jTextField15 = new javax.swing.JTextField();
        jTextField16 = new javax.swing.JTextField();
        jTextField17 = new javax.swing.JTextField();
        jTextField18 = new javax.swing.JTextField();
        jTextField19 = new javax.swing.JTextField();
        jPanel2 = new javax.swing.JPanel();
        jTextField20 = new javax.swing.JTextField();
        jTextField21 = new javax.swing.JTextField();
        jButton15 = new javax.swing.JButton();
        jPanel3 = new javax.swing.JPanel();
        jTextField24 = new javax.swing.JTextField();
        jTextField25 = new javax.swing.JTextField();
        jButton18 = new javax.swing.JButton();
        jTextField26 = new javax.swing.JTextField();
        checkbox1 = new java.awt.Checkbox();
        jTabbedPane1 = new javax.swing.JTabbedPane();
        jScrollPane2 = new javax.swing.JScrollPane();
        jTextArea1 = new javax.swing.JTextArea();
        jScrollPane3 = new javax.swing.JScrollPane();
        jTextArea2 = new javax.swing.JTextArea();
        jTabbedPane3 = new javax.swing.JTabbedPane();
        jPanel4 = new javax.swing.JPanel();
        jScrollPane4 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jTextField27 = new javax.swing.JTextField();
        jTextField28 = new javax.swing.JTextField();
        jTextField29 = new javax.swing.JTextField();
        jTextField30 = new javax.swing.JTextField();
        jButton20 = new javax.swing.JButton();
        jButton21 = new javax.swing.JButton();
        jButton22 = new javax.swing.JButton();
        jButton23 = new javax.swing.JButton();
        jLabel8 = new javax.swing.JLabel();
        jTextField31 = new javax.swing.JTextField();
        jButton24 = new javax.swing.JButton();
        jLabel9 = new javax.swing.JLabel();
        jTextField32 = new javax.swing.JTextField();
        jButton25 = new javax.swing.JButton();
        jLabel10 = new javax.swing.JLabel();
        jTextField33 = new javax.swing.JTextField();
        jButton26 = new javax.swing.JButton();
        jPanel9 = new javax.swing.JPanel();
        jScrollPane5 = new javax.swing.JScrollPane();
        jTable2 = new javax.swing.JTable();
        jLabel11 = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        jLabel14 = new javax.swing.JLabel();
        jTextField34 = new javax.swing.JTextField();
        jTextField36 = new javax.swing.JTextField();
        jTextField37 = new javax.swing.JTextField();
        jButton27 = new javax.swing.JButton();
        jButton28 = new javax.swing.JButton();
        jButton29 = new javax.swing.JButton();
        jButton30 = new javax.swing.JButton();
        jTabbedPane4 = new javax.swing.JTabbedPane();
        jPanel10 = new javax.swing.JPanel();
        jScrollPane6 = new javax.swing.JScrollPane();
        jTable3 = new javax.swing.JTable();
        jLabel12 = new javax.swing.JLabel();
        jLabel15 = new javax.swing.JLabel();
        jLabel16 = new javax.swing.JLabel();
        jLabel17 = new javax.swing.JLabel();
        jLabel18 = new javax.swing.JLabel();
        jLabel19 = new javax.swing.JLabel();
        jTextField35 = new javax.swing.JTextField();
        jTextField38 = new javax.swing.JTextField();
        jTextField39 = new javax.swing.JTextField();
        jTextField40 = new javax.swing.JTextField();
        jTextField41 = new javax.swing.JTextField();
        jTextField42 = new javax.swing.JTextField();
        jLabel20 = new javax.swing.JLabel();
        jTextField43 = new javax.swing.JTextField();
        jLabel21 = new javax.swing.JLabel();
        jTextField44 = new javax.swing.JTextField();
        jLabel22 = new javax.swing.JLabel();
        jTextField45 = new javax.swing.JTextField();
        jButton34 = new javax.swing.JButton();
        jButton35 = new javax.swing.JButton();
        jButton36 = new javax.swing.JButton();
        jButton37 = new javax.swing.JButton();
        jLabel23 = new javax.swing.JLabel();
        jTextField46 = new javax.swing.JTextField();
        jButton31 = new javax.swing.JButton();
        jTabbedPane5 = new javax.swing.JTabbedPane();
        jPanel11 = new javax.swing.JPanel();
        jScrollPane8 = new javax.swing.JScrollPane();
        广播信息 = new javax.swing.JTable();
        广播序号 = new javax.swing.JTextField();
        广播文本 = new javax.swing.JTextField();
        发布广播 = new javax.swing.JButton();
        修改广播 = new javax.swing.JButton();
        删除广播 = new javax.swing.JButton();
        刷新广播 = new javax.swing.JButton();
        jTabbedPane7 = new javax.swing.JTabbedPane();
        jPanel14 = new javax.swing.JPanel();
        jLabel31 = new javax.swing.JLabel();
        jScrollPane7 = new javax.swing.JScrollPane();
        游戏道具 = new javax.swing.JTable();
        jLabel29 = new javax.swing.JLabel();
        游戏道具代码 = new javax.swing.JTextField();
        jLabel30 = new javax.swing.JLabel();
        查找道具 = new javax.swing.JButton();
        删除道具 = new javax.swing.JButton();
        jLabel32 = new javax.swing.JLabel();
        查找道具4 = new javax.swing.JButton();
        删除道具4 = new javax.swing.JButton();
        jLabel33 = new javax.swing.JLabel();
        jLabel34 = new javax.swing.JLabel();
        jLabel35 = new javax.swing.JLabel();
        jTabbedPane6 = new javax.swing.JTabbedPane();
        jPanel13 = new javax.swing.JPanel();
        jScrollPane9 = new javax.swing.JScrollPane();
        钓鱼物品 = new javax.swing.JTable();
        jLabel36 = new javax.swing.JLabel();
        jLabel37 = new javax.swing.JLabel();
        jLabel38 = new javax.swing.JLabel();
        jLabel39 = new javax.swing.JLabel();
        钓鱼物品序号 = new javax.swing.JTextField();
        jLabel40 = new javax.swing.JLabel();
        钓鱼物品代码 = new javax.swing.JTextField();
        钓鱼物品概率 = new javax.swing.JTextField();
        钓鱼物品名称 = new javax.swing.JTextField();
        刷新钓鱼物品 = new javax.swing.JButton();
        新增钓鱼物品 = new javax.swing.JButton();
        修改钓鱼物品 = new javax.swing.JButton();
        删除钓鱼物品 = new javax.swing.JButton();
        jTabbedPane8 = new javax.swing.JTabbedPane();
        jPanel15 = new javax.swing.JPanel();
        jScrollPane10 = new javax.swing.JScrollPane();
        游戏商店2 = new javax.swing.JTable();
        查询商店 = new javax.swing.JTextField();
        jLabel270 = new javax.swing.JLabel();
        查询商店2 = new javax.swing.JButton();
        jLabel269 = new javax.swing.JLabel();
        jLabel272 = new javax.swing.JLabel();
        jLabel273 = new javax.swing.JLabel();
        jLabel268 = new javax.swing.JLabel();
        jLabel271 = new javax.swing.JLabel();
        商品序号 = new javax.swing.JTextField();
        商店代码 = new javax.swing.JTextField();
        商品物品代码 = new javax.swing.JTextField();
        商品售价金币 = new javax.swing.JTextField();
        商品名称 = new javax.swing.JTextField();
        新增商品 = new javax.swing.JButton();
        删除商品 = new javax.swing.JButton();
        修改商品 = new javax.swing.JButton();
        jTabbedPane9 = new javax.swing.JTabbedPane();
        jPanel16 = new javax.swing.JPanel();
        jScrollPane14 = new javax.swing.JScrollPane();
        反应堆 = new javax.swing.JTable();
        jLabel275 = new javax.swing.JLabel();
        反应堆序列号 = new javax.swing.JTextField();
        反应堆代码 = new javax.swing.JTextField();
        jLabel278 = new javax.swing.JLabel();
        反应堆物品 = new javax.swing.JTextField();
        jLabel277 = new javax.swing.JLabel();
        反应堆概率 = new javax.swing.JTextField();
        jLabel274 = new javax.swing.JLabel();
        新增反应堆物品 = new javax.swing.JButton();
        删除反应堆物品1 = new javax.swing.JButton();
        修改反应堆物品 = new javax.swing.JButton();
        查找物品 = new javax.swing.JTextField();
        jLabel280 = new javax.swing.JLabel();
        jButton39 = new javax.swing.JButton();
        查找反应堆掉落 = new javax.swing.JTextField();
        jLabel279 = new javax.swing.JLabel();
        jButton38 = new javax.swing.JButton();
        jButton32 = new javax.swing.JButton();
        jTabbedPane10 = new javax.swing.JTabbedPane();
        jPanel17 = new javax.swing.JPanel();
        jScrollPane81 = new javax.swing.JScrollPane();
        充值卡信息 = new javax.swing.JTable();
        jLabel221 = new javax.swing.JLabel();
        点券充值卡金额 = new javax.swing.JTextField();
        抵用券充值卡金额 = new javax.swing.JTextField();
        礼包编号 = new javax.swing.JTextField();
        jLabel222 = new javax.swing.JLabel();
        jLabel223 = new javax.swing.JLabel();
        生成点券充值卡1 = new javax.swing.JButton();
        生成抵用券充值卡1 = new javax.swing.JButton();
        生成礼包1 = new javax.swing.JButton();
        生成点券充值卡2 = new javax.swing.JButton();
        生成抵用券充值卡2 = new javax.swing.JButton();
        生成礼包10 = new javax.swing.JButton();
        刷新充值卡信息 = new javax.swing.JButton();
        刷新充值卡信息1 = new javax.swing.JButton();
        jTabbedPane11 = new javax.swing.JTabbedPane();
        jPanel19 = new javax.swing.JPanel();
        jLabel343 = new javax.swing.JLabel();
        神秘商人出现时间 = new javax.swing.JTextField();
        修改神秘商人 = new javax.swing.JButton();
        jPanel20 = new javax.swing.JPanel();
        jLabel263 = new javax.swing.JLabel();
        jLabel41 = new javax.swing.JLabel();
        jLabel276 = new javax.swing.JLabel();
        神秘商人开关 = new javax.swing.JButton();
        jLabel42 = new javax.swing.JLabel();
        jLabel281 = new javax.swing.JLabel();
        野外通缉开关 = new javax.swing.JButton();
        jLabel43 = new javax.swing.JLabel();
        jLabel282 = new javax.swing.JLabel();
        每日送货开关 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jScrollPane1.setViewportView(chatLog);

        jButton10.setText("启动服务端");
        jButton10.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton10ActionPerformed(evt);
            }
        });

        jTextField22.setText("关闭服务器倒数时间");
        jTextField22.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField22ActionPerformed(evt);
            }
        });

        jButton16.setText("关闭服务器");
        jButton16.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton16ActionPerformed(evt);
            }
        });

        jLabel3.setText("085服务端控制台");
        jLabel3.setToolTipText("");

        jLabel24.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel24.setText("帐号设置");

        jLabel25.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel25.setText("服务端最大人数：");

        jLabel27.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel27.setText("限制创建角色数量：");

        服务端最大人数.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        服务端最大人数.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                服务端最大人数ActionPerformed(evt);
            }
        });

        限制创建角色数量.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        限制创建角色数量.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                限制创建角色数量ActionPerformed(evt);
            }
        });

        修改服务端最大人数.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        修改服务端最大人数.setText("修改");
        修改服务端最大人数.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改服务端最大人数ActionPerformed(evt);
            }
        });

        修改角色数量.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        修改角色数量.setText("修改");
        修改角色数量.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改角色数量ActionPerformed(evt);
            }
        });

        jLabel26.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel26.setText("骑士团等级上限：");

        骑士团等级上限.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        修改骑士团等级上限.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        修改骑士团等级上限.setText("修改");
        修改骑士团等级上限.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改骑士团等级上限ActionPerformed(evt);
            }
        });

        jLabel28.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel28.setText("其他等级上限：");

        其他等级上限.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        修改其他等级上限.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        修改其他等级上限.setText("修改");
        修改其他等级上限.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改其他等级上限ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel12Layout = new javax.swing.GroupLayout(jPanel12);
        jPanel12.setLayout(jPanel12Layout);
        jPanel12Layout.setHorizontalGroup(
                jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel12Layout.createSequentialGroup()
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel12Layout.createSequentialGroup()
                                                .addContainerGap()
                                                .addComponent(jLabel25, javax.swing.GroupLayout.PREFERRED_SIZE, 162, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(服务端最大人数, javax.swing.GroupLayout.PREFERRED_SIZE, 108, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(修改服务端最大人数))
                                        .addGroup(jPanel12Layout.createSequentialGroup()
                                                .addGap(130, 130, 130)
                                                .addComponent(jLabel24, javax.swing.GroupLayout.PREFERRED_SIZE, 107, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel12Layout.createSequentialGroup()
                                                .addContainerGap()
                                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel27)
                                                        .addComponent(jLabel26)
                                                        .addComponent(jLabel28))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addComponent(限制创建角色数量, javax.swing.GroupLayout.DEFAULT_SIZE, 108, Short.MAX_VALUE)
                                                        .addComponent(骑士团等级上限)
                                                        .addComponent(其他等级上限))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addComponent(修改角色数量, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(修改骑士团等级上限, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(修改其他等级上限))))
                                .addContainerGap(59, Short.MAX_VALUE))
        );
        jPanel12Layout.setVerticalGroup(
                jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel12Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jLabel24)
                                .addGap(14, 14, 14)
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel25)
                                        .addComponent(服务端最大人数, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改服务端最大人数))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel27)
                                        .addComponent(限制创建角色数量, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改角色数量))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel26)
                                        .addComponent(骑士团等级上限, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改骑士团等级上限))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel28)
                                        .addComponent(其他等级上限, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改其他等级上限))
                                .addContainerGap(24, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout jPanel5Layout = new javax.swing.GroupLayout(jPanel5);
        jPanel5.setLayout(jPanel5Layout);
        jPanel5Layout.setHorizontalGroup(
                jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel5Layout.createSequentialGroup()
                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel5Layout.createSequentialGroup()
                                                .addGap(90, 90, 90)
                                                .addComponent(jLabel3))
                                        .addGroup(jPanel5Layout.createSequentialGroup()
                                                .addGap(234, 234, 234)
                                                .addComponent(jTextField22, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel5Layout.createSequentialGroup()
                                                .addGap(61, 61, 61)
                                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jPanel12, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addGroup(jPanel5Layout.createSequentialGroup()
                                                                .addComponent(jButton10, javax.swing.GroupLayout.PREFERRED_SIZE, 154, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                                .addComponent(jButton16, javax.swing.GroupLayout.PREFERRED_SIZE, 158, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                                .addContainerGap(654, Short.MAX_VALUE))
        );
        jPanel5Layout.setVerticalGroup(
                jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel5Layout.createSequentialGroup()
                                .addGap(43, 43, 43)
                                .addComponent(jLabel3)
                                .addGap(38, 38, 38)
                                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton10, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton16, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addComponent(jTextField22, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(32, 32, 32)
                                .addComponent(jPanel12, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(182, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("服务器配置", jPanel5);

        jButton7.setText("保存数据");
        jButton7.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton7ActionPerformed(evt);
            }
        });

        jButton8.setText("保存雇佣");
        jButton8.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton8ActionPerformed(evt);
            }
        });

        jLabel2.setText("保存系列：");

        javax.swing.GroupLayout jPanel7Layout = new javax.swing.GroupLayout(jPanel7);
        jPanel7.setLayout(jPanel7Layout);
        jPanel7Layout.setHorizontalGroup(
                jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel7Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel2)
                                        .addGroup(jPanel7Layout.createSequentialGroup()
                                                .addComponent(jButton7)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton8)))
                                .addContainerGap(959, Short.MAX_VALUE))
        );
        jPanel7Layout.setVerticalGroup(
                jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel7Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jLabel2)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton7)
                                        .addComponent(jButton8))
                                .addContainerGap(598, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("保存数据", jPanel7);

        jButton9.setText("重载任务");
        jButton9.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton9ActionPerformed(evt);
            }
        });

        jButton1.setText("重载副本");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jButton5.setText("重载爆率");
        jButton5.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton5ActionPerformed(evt);
            }
        });

        jButton4.setText("重载商店");
        jButton4.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton4ActionPerformed(evt);
            }
        });

        jButton3.setText("重载传送门");
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });

        jButton2.setText("重载反应堆");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        jLabel1.setText("重载系列：");

        jButton6.setText("重载包头");
        jButton6.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton6ActionPerformed(evt);
            }
        });

        jButton12.setText("重载商城");
        jButton12.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton12ActionPerformed(evt);
            }
        });

        jButton19.setText("清除Sql連線");
        jButton19.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton19ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel6Layout = new javax.swing.GroupLayout(jPanel6);
        jPanel6.setLayout(jPanel6Layout);
        jPanel6Layout.setHorizontalGroup(
                jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel6Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel1)
                                        .addGroup(jPanel6Layout.createSequentialGroup()
                                                .addComponent(jButton6)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton12))
                                        .addGroup(jPanel6Layout.createSequentialGroup()
                                                .addComponent(jButton1)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton5)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton2)
                                                .addGap(12, 12, 12)
                                                .addComponent(jButton3))
                                        .addGroup(jPanel6Layout.createSequentialGroup()
                                                .addComponent(jButton9)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton4))
                                        .addComponent(jButton19))
                                .addContainerGap(755, Short.MAX_VALUE))
        );
        jPanel6Layout.setVerticalGroup(
                jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel6Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jLabel1)
                                .addGroup(jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(jButton3)
                                                .addComponent(jButton2))
                                        .addGroup(jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(jButton1)
                                                .addComponent(jButton5)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton9)
                                        .addComponent(jButton4))
                                .addGap(10, 10, 10)
                                .addGroup(jPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton6)
                                        .addComponent(jButton12))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jButton19)
                                .addContainerGap(505, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("重载系列", jPanel6);

        jButton11.setText("解卡玩家");
        jButton11.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton11ActionPerformed(evt);
            }
        });

        jTextField1.setText("输入玩家名字");
        jTextField1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField1ActionPerformed(evt);
            }
        });

        jTextField23.setText("输入账号");
        jTextField23.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField23ActionPerformed(evt);
            }
        });

        jButton17.setText("解卡账号");
        jButton17.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton17ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel8Layout = new javax.swing.GroupLayout(jPanel8);
        jPanel8.setLayout(jPanel8Layout);
        jPanel8Layout.setHorizontalGroup(
                jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel8Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel8Layout.createSequentialGroup()
                                                .addComponent(jTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 124, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton11))
                                        .addGroup(jPanel8Layout.createSequentialGroup()
                                                .addComponent(jTextField23, javax.swing.GroupLayout.PREFERRED_SIZE, 124, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton17)))
                                .addContainerGap(916, Short.MAX_VALUE))
        );
        jPanel8Layout.setVerticalGroup(
                jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel8Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton11))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel8Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField23, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton17))
                                .addContainerGap(590, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("卡号处理", jPanel8);

        jTextField2.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField2ActionPerformed(evt);
            }
        });

        jButton13.setText("公告发布");
        jButton13.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton13ActionPerformed(evt);
            }
        });

        jTextField3.setText("玩家名字");

        jTextField4.setText("物品ID");

        jButton14.setText("给予物品");
        jButton14.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton14ActionPerformed(evt);
            }
        });

        jTextField5.setText("数量");

        jTextField6.setText("力量");

        jTextField7.setText("敏捷");

        jTextField8.setText("智力");

        jTextField9.setText("运气");

        jTextField10.setText("HP设置");

        jTextField11.setText("MP设置");

        jTextField12.setText("加卷次数");

        jTextField13.setText("制作人");

        jTextField14.setText("给予物品时间");

        jTextField15.setText("可以交易");

        jTextField16.setText("攻击力");

        jTextField17.setText("魔法力");

        jTextField18.setText("物理防御");

        jTextField19.setText("魔法防御");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
                jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addComponent(jTextField2, javax.swing.GroupLayout.DEFAULT_SIZE, 1018, Short.MAX_VALUE)
                                                .addGap(18, 18, 18)
                                                .addComponent(jButton13))
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addComponent(jTextField3, javax.swing.GroupLayout.PREFERRED_SIZE, 92, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jTextField4, javax.swing.GroupLayout.PREFERRED_SIZE, 77, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jTextField5, javax.swing.GroupLayout.PREFERRED_SIZE, 52, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(jTextField9, javax.swing.GroupLayout.PREFERRED_SIZE, 58, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(jTextField13))
                                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                                        .addComponent(jTextField8)
                                                                        .addComponent(jTextField7))
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                                        .addComponent(jTextField11, javax.swing.GroupLayout.PREFERRED_SIZE, 79, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                        .addComponent(jTextField12, javax.swing.GroupLayout.PREFERRED_SIZE, 79, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                                                .addComponent(jTextField6, javax.swing.GroupLayout.PREFERRED_SIZE, 58, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(jTextField10, javax.swing.GroupLayout.PREFERRED_SIZE, 79, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addComponent(jTextField16)
                                                        .addComponent(jTextField15)
                                                        .addComponent(jTextField14)
                                                        .addComponent(jTextField17))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addComponent(jButton14, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(jTextField18)
                                                        .addComponent(jTextField19))))
                                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
                jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton13))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField5, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField6, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField10, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField14, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField18, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField7, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField11, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField15, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField19, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField8, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField12, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField16, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField9, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField13, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField17, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton14))
                                .addContainerGap(466, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("指令/公告", jPanel1);

        jTextField20.setText("输入数量");
        jTextField20.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField20ActionPerformed(evt);
            }
        });

        jTextField21.setText("1点卷/2抵用/3金币/4经验");

        jButton15.setText("发放全服点卷/抵用卷/金币/经验");
        jButton15.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton15ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel2Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jTextField20, javax.swing.GroupLayout.PREFERRED_SIZE, 88, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jTextField21, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jButton15)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel2Layout.setVerticalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel2Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField20, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField21, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton15))
                                .addContainerGap(619, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("奖励系列", jPanel2);

        jTextField24.setText("账号");
        jTextField24.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField24ActionPerformed(evt);
            }
        });

        jTextField25.setText("新密码");
        jTextField25.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField25ActionPerformed(evt);
            }
        });

        jButton18.setText("修改密码");
        jButton18.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton18ActionPerformed(evt);
            }
        });

        jTextField26.setText("万能密码");
        jTextField26.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField26ActionPerformed(evt);
            }
        });

        checkbox1.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        checkbox1.setName("123"); // NOI18N
        checkbox1.addMouseListener(new java.awt.event.MouseAdapter() {
            @Override
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                checkbox1MouseClicked(evt);
            }
        });

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
                jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel3Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(jTextField26, javax.swing.GroupLayout.PREFERRED_SIZE, 88, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel3Layout.createSequentialGroup()
                                                .addComponent(jTextField24, javax.swing.GroupLayout.PREFERRED_SIZE, 88, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(jTextField25, javax.swing.GroupLayout.PREFERRED_SIZE, 88, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jButton18)
                                        .addComponent(checkbox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(850, Short.MAX_VALUE))
        );
        jPanel3Layout.setVerticalGroup(
                jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel3Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField24, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField25, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton18))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(jTextField26, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(checkbox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(587, Short.MAX_VALUE))
        );

        jTabbedPane2.addTab("修改密码", jPanel3);

        jTextArea1.setColumns(20);
        jTextArea1.setForeground(new java.awt.Color(255, 0, 0));
        jTextArea1.setRows(5);
        jTextArea1.setText("    085修复版本");
        jScrollPane2.setViewportView(jTextArea1);

        jTabbedPane1.addTab("版权信息", jScrollPane2);

        jTextArea2.setColumns(20);
        jTextArea2.setRows(5);
        jScrollPane3.setViewportView(jTextArea2);

        jTabbedPane1.addTab("修复内容", jScrollPane3);

        jTabbedPane2.addTab("关于我们", jTabbedPane1);

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序列号", "怪物代码", "物品代码", "爆率"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane4.setViewportView(jTable1);
        if (jTable1.getColumnModel().getColumnCount() > 0) {
            jTable1.getColumnModel().getColumn(0).setResizable(false);
            jTable1.getColumnModel().getColumn(1).setResizable(false);
            jTable1.getColumnModel().getColumn(2).setResizable(false);
            jTable1.getColumnModel().getColumn(3).setResizable(false);
        }

        jLabel4.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel4.setText("序列号");

        jLabel5.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel5.setText("怪物代码");

        jLabel6.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel6.setText("物品代码");

        jLabel7.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel7.setText("爆率");

        jTextField27.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField27ActionPerformed(evt);
            }
        });

        jTextField28.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jTextField29.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jTextField30.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jButton20.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton20.setText("刷新怪物爆率");
        jButton20.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton20ActionPerformed(evt);
            }
        });

        jButton21.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton21.setText("添加");
        jButton21.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton21ActionPerformed(evt);
            }
        });

        jButton22.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton22.setText("删除");
        jButton22.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton22ActionPerformed(evt);
            }
        });

        jButton23.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton23.setText("修改");
        jButton23.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton23ActionPerformed(evt);
            }
        });

        jLabel8.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel8.setText("查询指定物品掉落");

        jTextField31.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        jButton24.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jButton24.setText("查询物品掉落");
        jButton24.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton24ActionPerformed(evt);
            }
        });

        jLabel9.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel9.setText("查询指定怪物掉落");

        jTextField32.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        jButton25.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jButton25.setText("查询怪物掉落");
        jButton25.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton25ActionPerformed(evt);
            }
        });

        jLabel10.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel10.setText("删除指定物品掉落");

        jTextField33.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        jButton26.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jButton26.setText("删除物品掉落");
        jButton26.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton26ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel4Layout = new javax.swing.GroupLayout(jPanel4);
        jPanel4.setLayout(jPanel4Layout);
        jPanel4Layout.setHorizontalGroup(
                jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel4Layout.createSequentialGroup()
                                .addComponent(jScrollPane4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                .addComponent(jLabel8, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(jTextField31)
                                                .addComponent(jButton24)
                                                .addComponent(jLabel9, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(jTextField32)
                                                .addComponent(jButton25)
                                                .addComponent(jLabel10, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(jTextField33))
                                        .addComponent(jButton26))
                                .addGap(0, 530, Short.MAX_VALUE))
                        .addGroup(jPanel4Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel4)
                                        .addComponent(jTextField27, javax.swing.GroupLayout.PREFERRED_SIZE, 92, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton20))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel4Layout.createSequentialGroup()
                                                .addComponent(jButton21)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton22))
                                        .addComponent(jTextField28, javax.swing.GroupLayout.PREFERRED_SIZE, 91, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel5))
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jButton23)
                                        .addGroup(jPanel4Layout.createSequentialGroup()
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jTextField29, javax.swing.GroupLayout.PREFERRED_SIZE, 87, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel6))
                                                .addGap(31, 31, 31)
                                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jTextField30, javax.swing.GroupLayout.PREFERRED_SIZE, 66, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel7))))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel4Layout.setVerticalGroup(
                jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel4Layout.createSequentialGroup()
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel4Layout.createSequentialGroup()
                                                .addContainerGap()
                                                .addComponent(jLabel8)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jTextField31, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton24)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jLabel9)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jTextField32, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton25)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jLabel10)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jTextField33, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton26))
                                        .addComponent(jScrollPane4, javax.swing.GroupLayout.PREFERRED_SIZE, 349, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel4)
                                        .addComponent(jLabel5)
                                        .addComponent(jLabel7)
                                        .addComponent(jLabel6))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField27, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField28, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField29, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField30, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton20)
                                        .addComponent(jButton21)
                                        .addComponent(jButton22)
                                        .addComponent(jButton23))
                                .addGap(0, 176, Short.MAX_VALUE))
        );

        jTabbedPane3.addTab("怪物爆率", jPanel4);

        jTable2.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序列号", "物品代码", "爆率"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane5.setViewportView(jTable2);
        if (jTable2.getColumnModel().getColumnCount() > 0) {
            jTable2.getColumnModel().getColumn(0).setResizable(false);
            jTable2.getColumnModel().getColumn(1).setResizable(false);
            jTable2.getColumnModel().getColumn(2).setResizable(false);
        }

        jLabel11.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel11.setText("序列号");

        jLabel13.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel13.setText("物品代码");

        jLabel14.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel14.setText("爆率");

        jButton27.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton27.setText("刷新世界爆率");
        jButton27.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton27ActionPerformed(evt);
            }
        });

        jButton28.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton28.setText("添加");
        jButton28.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton28ActionPerformed(evt);
            }
        });

        jButton29.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton29.setText("删除");
        jButton29.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton29ActionPerformed(evt);
            }
        });

        jButton30.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jButton30.setText("修改");
        jButton30.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton30ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel9Layout = new javax.swing.GroupLayout(jPanel9);
        jPanel9.setLayout(jPanel9Layout);
        jPanel9Layout.setHorizontalGroup(
                jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel9Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel9Layout.createSequentialGroup()
                                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel11)
                                                        .addComponent(jTextField34, javax.swing.GroupLayout.PREFERRED_SIZE, 93, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(30, 30, 30)
                                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel13)
                                                        .addComponent(jTextField36, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(34, 34, 34)
                                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel14)
                                                        .addComponent(jTextField37, javax.swing.GroupLayout.PREFERRED_SIZE, 78, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                        .addGroup(jPanel9Layout.createSequentialGroup()
                                                .addComponent(jButton27)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton28)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton29)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jButton30)))
                                .addContainerGap(787, Short.MAX_VALUE))
                        .addComponent(jScrollPane5)
        );
        jPanel9Layout.setVerticalGroup(
                jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel9Layout.createSequentialGroup()
                                .addComponent(jScrollPane5, javax.swing.GroupLayout.PREFERRED_SIZE, 349, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel13)
                                        .addComponent(jLabel14)
                                        .addComponent(jLabel11))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField34, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField36, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField37, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel9Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jButton27)
                                        .addComponent(jButton28)
                                        .addComponent(jButton29)
                                        .addComponent(jButton30))
                                .addGap(0, 173, Short.MAX_VALUE))
        );

        jTabbedPane3.addTab("全局爆率", jPanel9);

        jTabbedPane2.addTab("怪物爆率", jTabbedPane3);

        jTable3.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "sn", "商品名称", "价格", "显示", "物品代码", "时间", "性别", "数量", "商城模式"
                }
        ) {
            Class[] types = new Class[]{
                    java.lang.Object.class, java.lang.String.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class, java.lang.Object.class
            };
            boolean[] canEdit = new boolean[]{
                    false, false, false, false, false, false, false, false, false
            };

            @Override
            public Class getColumnClass(int columnIndex) {
                return types[columnIndex];
            }

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane6.setViewportView(jTable3);

        jLabel12.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel12.setText("SN：");

        jLabel15.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel15.setText("商品名称：");

        jLabel16.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel16.setText("价格：");

        jLabel17.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel17.setText("显示：");

        jLabel18.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel18.setText("物品代码：");

        jLabel19.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel19.setText("时间：");

        jTextField35.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jTextField35.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField35ActionPerformed(evt);
            }
        });

        jTextField38.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jTextField38.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField38ActionPerformed(evt);
            }
        });

        jTextField39.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jTextField40.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jTextField41.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jTextField42.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jLabel20.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel20.setText("性别：");

        jTextField43.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jLabel21.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N
        jLabel21.setText("数量：");

        jLabel22.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel22.setText("商城模式：");

        jTextField45.setFont(new java.awt.Font("宋体", 0, 14)); // NOI18N

        jButton34.setText("刷新商城");
        jButton34.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton34ActionPerformed(evt);
            }
        });

        jButton35.setText("添加");
        jButton35.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton35ActionPerformed(evt);
            }
        });

        jButton36.setText("修改");
        jButton36.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton36ActionPerformed(evt);
            }
        });

        jButton37.setText("删除");
        jButton37.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton37ActionPerformed(evt);
            }
        });

        jLabel23.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel23.setText("商城指定物品查询");

        jTextField46.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        jButton31.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jButton31.setText("查询");
        jButton31.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton31ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel10Layout = new javax.swing.GroupLayout(jPanel10);
        jPanel10.setLayout(jPanel10Layout);
        jPanel10Layout.setHorizontalGroup(
                jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel10Layout.createSequentialGroup()
                                .addComponent(jScrollPane6, javax.swing.GroupLayout.PREFERRED_SIZE, 567, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, Short.MAX_VALUE))
                        .addGroup(jPanel10Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                .addComponent(jLabel12)
                                                                .addGap(295, 295, 295)
                                                                .addComponent(jLabel17))
                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                .addComponent(jTextField42, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addGap(241, 241, 241)
                                                                .addComponent(jTextField45, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                                .addGap(269, 269, 269))
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jTextField35, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                                        .addComponent(jButton34)
                                                                                        .addGap(18, 18, 18)
                                                                                        .addComponent(jButton35)
                                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                                        .addComponent(jButton36))
                                                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                                        .addComponent(jTextField43, javax.swing.GroupLayout.PREFERRED_SIZE, 65, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                                        .addComponent(jTextField38, javax.swing.GroupLayout.PREFERRED_SIZE, 76, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                                        .addComponent(jLabel20)))
                                                                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                                        .addComponent(jButton37))
                                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                                        .addGap(40, 40, 40)
                                                                                        .addComponent(jTextField39, javax.swing.GroupLayout.PREFERRED_SIZE, 54, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                                        .addGap(40, 40, 40)
                                                                                        .addComponent(jLabel21))))
                                                                .addGroup(jPanel10Layout.createSequentialGroup()
                                                                        .addGap(143, 143, 143)
                                                                        .addComponent(jLabel15)
                                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                                        .addComponent(jLabel16))
                                                                .addComponent(jTextField44, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 54, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                        .addComponent(jLabel19))
                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                .addGap(18, 18, 18)
                                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                                .addComponent(jTextField40, javax.swing.GroupLayout.PREFERRED_SIZE, 66, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                                .addGap(29, 29, 29)
                                                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                                                        .addComponent(jLabel18)
                                                                                        .addComponent(jTextField41, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                                                .addComponent(jLabel22)
                                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                                                        .addComponent(jTextField46)
                                                                                        .addComponent(jLabel23, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                                                                .addGap(0, 0, Short.MAX_VALUE))))
                                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel10Layout.createSequentialGroup()
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                                .addComponent(jButton31)
                                                                .addGap(142, 142, 142))))))
        );
        jPanel10Layout.setVerticalGroup(
                jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel10Layout.createSequentialGroup()
                                .addComponent(jScrollPane6, javax.swing.GroupLayout.PREFERRED_SIZE, 362, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel12)
                                        .addComponent(jLabel15)
                                        .addComponent(jLabel16)
                                        .addComponent(jLabel17)
                                        .addComponent(jLabel18))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField35, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField38, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField39, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField40, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField41, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel19)
                                        .addComponent(jLabel20)
                                        .addComponent(jLabel21)
                                        .addComponent(jLabel22)
                                        .addComponent(jLabel23))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jTextField42, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField43, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField44, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField45, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jTextField46, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                .addGap(18, 18, 18)
                                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(jButton34)
                                                        .addComponent(jButton35)
                                                        .addComponent(jButton36)
                                                        .addComponent(jButton37)))
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                                .addGap(10, 10, 10)
                                                .addComponent(jButton31)))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jTabbedPane4.addTab("商城工具", jPanel10);

        jTabbedPane2.addTab("商城工具", jTabbedPane4);

        广播信息.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{
                        {null, null},
                        {null, null},
                        {null, null},
                        {null, null}
                },
                new String[]{
                        "序号", "分钟一次随机广播内容"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane8.setViewportView(广播信息);
        if (广播信息.getColumnModel().getColumnCount() > 0) {
            广播信息.getColumnModel().getColumn(0).setResizable(false);
            广播信息.getColumnModel().getColumn(0).setPreferredWidth(100);
            广播信息.getColumnModel().getColumn(1).setResizable(false);
            广播信息.getColumnModel().getColumn(1).setPreferredWidth(2000);
        }

        广播序号.setEditable(false);
        广播序号.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        广播序号.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                广播序号ActionPerformed(evt);
            }
        });

        广播文本.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        发布广播.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        发布广播.setText("新增广播");
        发布广播.addActionListener(new java.awt.event.ActionListener() {

            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                发布广播ActionPerformed(evt);
            }
        });

        修改广播.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        修改广播.setText("修改广播");
        修改广播.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改广播ActionPerformed(evt);
            }
        });

        删除广播.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        删除广播.setText("删除广播");
        删除广播.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除广播ActionPerformed(evt);
            }
        });

        刷新广播.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        刷新广播.setText("刷新广播");
        刷新广播.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新广播ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel11Layout = new javax.swing.GroupLayout(jPanel11);
        jPanel11.setLayout(jPanel11Layout);
        jPanel11Layout.setHorizontalGroup(
                jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jScrollPane8)
                        .addGroup(jPanel11Layout.createSequentialGroup()
                                .addComponent(广播序号, javax.swing.GroupLayout.PREFERRED_SIZE, 63, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel11Layout.createSequentialGroup()
                                                .addComponent(发布广播)
                                                .addGap(31, 31, 31)
                                                .addComponent(修改广播)
                                                .addGap(37, 37, 37)
                                                .addComponent(删除广播)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 553, Short.MAX_VALUE)
                                                .addComponent(刷新广播))
                                        .addComponent(广播文本))
                                .addGap(22, 22, 22))
        );
        jPanel11Layout.setVerticalGroup(
                jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel11Layout.createSequentialGroup()
                                .addComponent(jScrollPane8, javax.swing.GroupLayout.PREFERRED_SIZE, 380, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(广播序号)
                                        .addComponent(广播文本))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(发布广播)
                                        .addComponent(修改广播)
                                        .addComponent(删除广播)
                                        .addComponent(刷新广播))
                                .addGap(11, 11, 11))
        );

        jTabbedPane5.addTab("游戏广播", jPanel11);

        jTabbedPane2.addTab("游戏广播", jTabbedPane5);

        jLabel31.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel31.setText("游戏物品操作");

        游戏道具.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "角色id", "角色名字", "道具id", "道具id"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane7.setViewportView(游戏道具);
        if (游戏道具.getColumnModel().getColumnCount() > 0) {
            游戏道具.getColumnModel().getColumn(0).setResizable(false);
            游戏道具.getColumnModel().getColumn(1).setResizable(false);
            游戏道具.getColumnModel().getColumn(2).setResizable(false);
            游戏道具.getColumnModel().getColumn(3).setResizable(false);
        }

        jLabel29.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel29.setText("游戏道具代码：");

        游戏道具代码.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        jLabel30.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel30.setText("角色背包，角色穿戴");

        查找道具.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        查找道具.setText("查找道具");
        查找道具.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查找道具ActionPerformed(evt);
            }
        });

        删除道具.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        删除道具.setText("删除道具");
        删除道具.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除道具ActionPerformed(evt);
            }
        });

        jLabel32.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel32.setText("个人游戏仓库：");

        查找道具4.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        查找道具4.setText("查找道具");
        查找道具4.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查找道具4ActionPerformed(evt);
            }
        });

        删除道具4.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        删除道具4.setText("删除道具");
        删除道具4.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除道具4ActionPerformed(evt);
            }
        });

        jLabel33.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel33.setText("该功能可查询游戏内指定区域的游戏道具，可以查看");

        jLabel34.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel34.setText("该道具有多少玩家拥有。可以一键删除所有该道具。");

        jLabel35.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel35.setText("需离线操作。");

        javax.swing.GroupLayout jPanel14Layout = new javax.swing.GroupLayout(jPanel14);
        jPanel14.setLayout(jPanel14Layout);
        jPanel14Layout.setHorizontalGroup(
                jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel14Layout.createSequentialGroup()
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel31)
                                        .addGroup(jPanel14Layout.createSequentialGroup()
                                                .addComponent(jScrollPane7, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                                .addComponent(jLabel29, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                                .addComponent(游戏道具代码))
                                                        .addComponent(jLabel30)
                                                        .addComponent(查找道具)
                                                        .addComponent(删除道具)
                                                        .addComponent(jLabel32)
                                                        .addComponent(查找道具4)
                                                        .addComponent(删除道具4)
                                                        .addComponent(jLabel33)
                                                        .addComponent(jLabel34)
                                                        .addComponent(jLabel35))))
                                .addGap(0, 0, Short.MAX_VALUE))
        );
        jPanel14Layout.setVerticalGroup(
                jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel14Layout.createSequentialGroup()
                                .addComponent(jLabel31)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jScrollPane7, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel14Layout.createSequentialGroup()
                                                .addComponent(jLabel29)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(游戏道具代码, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jLabel30)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(查找道具)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(删除道具)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jLabel32)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(查找道具4)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(删除道具4)
                                                .addGap(18, 18, 18)
                                                .addComponent(jLabel33, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(jLabel34)
                                                .addGap(18, 18, 18)
                                                .addComponent(jLabel35)))
                                .addGap(0, 168, Short.MAX_VALUE))
        );

        jTabbedPane7.addTab("游戏物品删除", jPanel14);

        jTabbedPane2.addTab("游戏物品删除", jTabbedPane7);

        钓鱼物品.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "代码", "概率", "物品名称"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane9.setViewportView(钓鱼物品);
        if (钓鱼物品.getColumnModel().getColumnCount() > 0) {
            钓鱼物品.getColumnModel().getColumn(0).setResizable(false);
            钓鱼物品.getColumnModel().getColumn(1).setResizable(false);
            钓鱼物品.getColumnModel().getColumn(2).setResizable(false);
            钓鱼物品.getColumnModel().getColumn(3).setResizable(false);
        }

        jLabel36.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel36.setText("序列号：");

        jLabel37.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel37.setText("物品代码：");

        jLabel38.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel38.setText("物品概率：");

        jLabel39.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel39.setText("物品名称：");

        钓鱼物品序号.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        jLabel40.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        钓鱼物品代码.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        钓鱼物品概率.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        钓鱼物品名称.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N

        刷新钓鱼物品.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        刷新钓鱼物品.setText("刷新钓鱼物品");
        刷新钓鱼物品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新钓鱼物品ActionPerformed(evt);
            }
        });

        新增钓鱼物品.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        新增钓鱼物品.setText("新增");
        新增钓鱼物品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                新增钓鱼物品ActionPerformed(evt);
            }
        });

        修改钓鱼物品.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        修改钓鱼物品.setText("修改");
        修改钓鱼物品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改钓鱼物品ActionPerformed(evt);
            }
        });

        删除钓鱼物品.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        删除钓鱼物品.setText("删除");
        删除钓鱼物品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除钓鱼物品ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel13Layout = new javax.swing.GroupLayout(jPanel13);
        jPanel13.setLayout(jPanel13Layout);
        jPanel13Layout.setHorizontalGroup(
                jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel13Layout.createSequentialGroup()
                                .addComponent(jScrollPane9, javax.swing.GroupLayout.PREFERRED_SIZE, 527, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel36)
                                                        .addComponent(jLabel37))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                                        .addComponent(钓鱼物品代码, javax.swing.GroupLayout.DEFAULT_SIZE, 108, Short.MAX_VALUE)
                                                        .addComponent(钓鱼物品序号))
                                                .addGap(18, 18, 18)
                                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                                .addComponent(新增钓鱼物品)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(jLabel40, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                        .addComponent(刷新钓鱼物品))
                                                .addGap(66, 66, 66))
                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                                .addComponent(jLabel38)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(钓鱼物品概率, javax.swing.GroupLayout.PREFERRED_SIZE, 108, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addGap(18, 18, 18)
                                                                .addComponent(修改钓鱼物品))
                                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                                .addComponent(jLabel39)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(钓鱼物品名称, javax.swing.GroupLayout.PREFERRED_SIZE, 108, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addGap(18, 18, 18)
                                                                .addComponent(删除钓鱼物品)))
                                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))))
        );
        jPanel13Layout.setVerticalGroup(
                jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel13Layout.createSequentialGroup()
                                .addComponent(jScrollPane9, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 195, Short.MAX_VALUE))
                        .addGroup(jPanel13Layout.createSequentialGroup()
                                .addGap(180, 180, 180)
                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel36)
                                        .addComponent(钓鱼物品序号, javax.swing.GroupLayout.PREFERRED_SIZE, 37, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(刷新钓鱼物品))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel40, javax.swing.GroupLayout.PREFERRED_SIZE, 21, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                .addComponent(jLabel37)
                                                .addComponent(钓鱼物品代码, javax.swing.GroupLayout.PREFERRED_SIZE, 35, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addComponent(新增钓鱼物品)))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel38)
                                        .addComponent(钓鱼物品概率, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改钓鱼物品))
                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                .addGap(19, 19, 19)
                                                .addComponent(jLabel39))
                                        .addGroup(jPanel13Layout.createSequentialGroup()
                                                .addGap(18, 18, 18)
                                                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(钓鱼物品名称)
                                                        .addComponent(删除钓鱼物品))))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jTabbedPane6.addTab("渔场钓鱼管理", jPanel13);

        jTabbedPane2.addTab("渔场钓鱼管理", jTabbedPane6);

        游戏商店2.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序号", "商店ID", "物品代码", "销售金币", "物品名称"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane10.setViewportView(游戏商店2);
        if (游戏商店2.getColumnModel().getColumnCount() > 0) {
            游戏商店2.getColumnModel().getColumn(0).setResizable(false);
            游戏商店2.getColumnModel().getColumn(1).setResizable(false);
            游戏商店2.getColumnModel().getColumn(2).setResizable(false);
            游戏商店2.getColumnModel().getColumn(3).setResizable(false);
            游戏商店2.getColumnModel().getColumn(4).setResizable(false);
        }

        查询商店.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        jLabel270.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel270.setText("商店ID；");

        查询商店2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        查询商店2.setText("查询商店");
        查询商店2.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                查询商店2ActionPerformed(evt);
            }
        });

        jLabel269.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel269.setText("序号；");

        jLabel272.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel272.setText("商店ID；");

        jLabel273.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel273.setText("物品代码；");

        jLabel268.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel268.setText("出售金币；");

        jLabel271.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel271.setText("物品名称；");

        商品序号.setEditable(false);
        商品序号.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        商店代码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        商店代码.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商店代码ActionPerformed(evt);
            }
        });

        商品物品代码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        商品售价金币.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        商品名称.setEditable(false);
        商品名称.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        商品名称.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                商品名称ActionPerformed(evt);
            }
        });

        新增商品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        新增商品.setText("新增");
        新增商品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                新增商品ActionPerformed(evt);
            }
        });

        删除商品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除商品.setText("删除");
        删除商品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除商品ActionPerformed(evt);
            }
        });

        修改商品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        修改商品.setText("修改");
        修改商品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改商品ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel15Layout = new javax.swing.GroupLayout(jPanel15);
        jPanel15.setLayout(jPanel15Layout);
        jPanel15Layout.setHorizontalGroup(
                jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel15Layout.createSequentialGroup()
                                .addComponent(jScrollPane10, javax.swing.GroupLayout.PREFERRED_SIZE, 497, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel15Layout.createSequentialGroup()
                                                .addGap(88, 88, 88)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel270)
                                                        .addGroup(jPanel15Layout.createSequentialGroup()
                                                                .addComponent(查询商店, javax.swing.GroupLayout.PREFERRED_SIZE, 110, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addGap(18, 18, 18)
                                                                .addComponent(查询商店2))))
                                        .addGroup(jPanel15Layout.createSequentialGroup()
                                                .addGap(18, 18, 18)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel269)
                                                        .addComponent(商品序号, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(27, 27, 27)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(商店代码, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel272))
                                                .addGap(18, 18, 18)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel273)
                                                        .addComponent(商品物品代码, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(新增商品))
                                                .addGap(141, 141, 141)
                                                .addComponent(修改商品))
                                        .addGroup(jPanel15Layout.createSequentialGroup()
                                                .addGap(336, 336, 336)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(商品售价金币, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel268)
                                                        .addComponent(删除商品))
                                                .addGap(18, 18, 18)
                                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel271)
                                                        .addComponent(商品名称, javax.swing.GroupLayout.PREFERRED_SIZE, 140, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(387, 387, 387))
        );
        jPanel15Layout.setVerticalGroup(
                jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel15Layout.createSequentialGroup()
                                .addComponent(jScrollPane10, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, Short.MAX_VALUE))
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel15Layout.createSequentialGroup()
                                .addContainerGap(149, Short.MAX_VALUE)
                                .addComponent(jLabel270)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(查询商店, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(查询商店2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(57, 57, 57)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel269)
                                        .addComponent(jLabel272)
                                        .addComponent(jLabel273)
                                        .addComponent(jLabel268)
                                        .addComponent(jLabel271))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(商品序号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(商店代码, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(商品物品代码, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(商品售价金币, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(商品名称, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(新增商品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(删除商品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改商品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(249, 249, 249))
        );

        jTabbedPane8.addTab("游戏商店管理", jPanel15);

        jTabbedPane2.addTab("游戏商店管理", jTabbedPane8);

        反应堆.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        反应堆.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "序列号", "反应堆", "物品代码", "概率", "物品名字"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        反应堆.getTableHeader().setReorderingAllowed(false);
        jScrollPane14.setViewportView(反应堆);

        jLabel275.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel275.setText("序号；");

        反应堆序列号.setEditable(false);
        反应堆序列号.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        反应堆代码.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        jLabel278.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel278.setText("反应堆；");

        反应堆物品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        jLabel277.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel277.setText("物品代码；");

        反应堆概率.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        反应堆概率.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                反应堆概率ActionPerformed(evt);
            }
        });

        jLabel274.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel274.setText("掉落概率；");

        新增反应堆物品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        新增反应堆物品.setText("新增");
        新增反应堆物品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                新增反应堆物品ActionPerformed(evt);
            }
        });

        删除反应堆物品1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        删除反应堆物品1.setText("删除");
        删除反应堆物品1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                删除反应堆物品1ActionPerformed(evt);
            }
        });

        修改反应堆物品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        修改反应堆物品.setText("修改");
        修改反应堆物品.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改反应堆物品ActionPerformed(evt);
            }
        });

        查找物品.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        jLabel280.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel280.setText("物品代码；");

        jButton39.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jButton39.setText("查找");
        jButton39.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton39ActionPerformed(evt);
            }
        });

        查找反应堆掉落.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N

        jLabel279.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel279.setText("反应堆；");

        jButton38.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jButton38.setText("查找");
        jButton38.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton38ActionPerformed(evt);
            }
        });

        jButton32.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jButton32.setText("刷新");
        jButton32.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton32ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel16Layout = new javax.swing.GroupLayout(jPanel16);
        jPanel16.setLayout(jPanel16Layout);
        jPanel16Layout.setHorizontalGroup(
                jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel16Layout.createSequentialGroup()
                                .addComponent(jScrollPane14, javax.swing.GroupLayout.PREFERRED_SIZE, 510, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(反应堆序列号, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel275))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(反应堆代码, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel278))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(反应堆物品, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(jLabel277))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel274)
                                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                                .addComponent(反应堆概率, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(新增反应堆物品, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(删除反应堆物品1, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(修改反应堆物品, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                                .addComponent(查找物品, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(jButton39))
                                                        .addComponent(jLabel280))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(jLabel279)
                                                        .addGroup(jPanel16Layout.createSequentialGroup()
                                                                .addComponent(查找反应堆掉落, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                                .addComponent(jButton38)
                                                                .addGap(93, 93, 93)
                                                                .addComponent(jButton32, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                                .addGap(0, 30, Short.MAX_VALUE))
        );
        jPanel16Layout.setVerticalGroup(
                jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel16Layout.createSequentialGroup()
                                .addGap(0, 0, Short.MAX_VALUE)
                                .addComponent(jScrollPane14, javax.swing.GroupLayout.PREFERRED_SIZE, 630, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGroup(jPanel16Layout.createSequentialGroup()
                                .addGap(68, 68, 68)
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel275, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel278, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel277, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel274, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(反应堆序列号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(反应堆代码, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(反应堆物品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(反应堆概率, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(新增反应堆物品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(删除反应堆物品1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改反应堆物品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel280, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel279, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel16Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(查找物品, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton39, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(查找反应堆掉落, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton38, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jButton32, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jTabbedPane9.addTab("反应堆管理", jPanel16);

        jTabbedPane2.addTab("反应堆管理", jTabbedPane9);

        充值卡信息.setBorder(new javax.swing.border.MatteBorder(null));
        充值卡信息.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        充值卡信息.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][]{

                },
                new String[]{
                        "卡号", "类型", "数额", "礼包"
                }
        ) {
            boolean[] canEdit = new boolean[]{
                    false, false, false, false
            };

            @Override
            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        充值卡信息.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        jScrollPane81.setViewportView(充值卡信息);

        jLabel221.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel221.setText("点券充值卡金额；");

        点券充值卡金额.setMaximumSize(new java.awt.Dimension(137, 27));
        点券充值卡金额.setMinimumSize(new java.awt.Dimension(137, 27));

        抵用券充值卡金额.setMaximumSize(new java.awt.Dimension(137, 27));
        抵用券充值卡金额.setMinimumSize(new java.awt.Dimension(137, 27));

        礼包编号.setMaximumSize(new java.awt.Dimension(137, 27));
        礼包编号.setMinimumSize(new java.awt.Dimension(137, 27));

        jLabel222.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel222.setText("抵用充值卡金额；");

        jLabel223.setFont(new java.awt.Font("幼圆", 0, 14)); // NOI18N
        jLabel223.setText("生成礼包；");

        生成点券充值卡1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        生成点券充值卡1.setText("生成1张");
        生成点券充值卡1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                生成点券充值卡1ActionPerformed(evt);
            }
        });

        生成抵用券充值卡1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        生成抵用券充值卡1.setText("生成1张");
        生成抵用券充值卡1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                生成抵用券充值卡1ActionPerformed(evt);
            }
        });

        生成礼包1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        生成礼包1.setText("生成1张");
        生成礼包1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                生成礼包1ActionPerformed(evt);
            }
        });

        生成点券充值卡2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        生成点券充值卡2.setText("生成10张");
        生成点券充值卡2.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                生成点券充值卡2ActionPerformed(evt);
            }
        });

        生成抵用券充值卡2.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        生成抵用券充值卡2.setText("生成10张");
        生成抵用券充值卡2.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                生成抵用券充值卡2ActionPerformed(evt);
            }
        });

        生成礼包10.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        生成礼包10.setText("生成10张");
        生成礼包10.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                生成礼包10ActionPerformed(evt);
            }
        });

        刷新充值卡信息.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新充值卡信息.setText("刷新充值卡信息");
        刷新充值卡信息.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新充值卡信息ActionPerformed(evt);
            }
        });

        刷新充值卡信息1.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        刷新充值卡信息1.setText("打开充值卡库存文件夹");
        刷新充值卡信息1.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                刷新充值卡信息1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel17Layout = new javax.swing.GroupLayout(jPanel17);
        jPanel17.setLayout(jPanel17Layout);
        jPanel17Layout.setHorizontalGroup(
                jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel17Layout.createSequentialGroup()
                                .addComponent(jScrollPane81, javax.swing.GroupLayout.PREFERRED_SIZE, 630, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addGroup(jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel221)
                                        .addGroup(jPanel17Layout.createSequentialGroup()
                                                .addComponent(点券充值卡金额, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(20, 20, 20)
                                                .addComponent(生成点券充值卡1, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(0, 0, 0)
                                                .addComponent(生成点券充值卡2, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(jLabel222)
                                        .addGroup(jPanel17Layout.createSequentialGroup()
                                                .addComponent(抵用券充值卡金额, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(20, 20, 20)
                                                .addComponent(生成抵用券充值卡1, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addGap(0, 0, 0)
                                                .addComponent(生成抵用券充值卡2, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(jLabel223)
                                        .addGroup(jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                                .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel17Layout.createSequentialGroup()
                                                        .addComponent(刷新充值卡信息, javax.swing.GroupLayout.PREFERRED_SIZE, 200, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(刷新充值卡信息1, javax.swing.GroupLayout.PREFERRED_SIZE, 210, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel17Layout.createSequentialGroup()
                                                        .addComponent(礼包编号, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addGap(20, 20, 20)
                                                        .addComponent(生成礼包1, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addGap(0, 0, 0)
                                                        .addComponent(生成礼包10, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(0, 68, Short.MAX_VALUE))
        );
        jPanel17Layout.setVerticalGroup(
                jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel17Layout.createSequentialGroup()
                                .addComponent(jScrollPane81, javax.swing.GroupLayout.PREFERRED_SIZE, 510, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 113, Short.MAX_VALUE))
                        .addGroup(jPanel17Layout.createSequentialGroup()
                                .addGap(61, 61, 61)
                                .addComponent(jLabel221)
                                .addGroup(jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(点券充值卡金额, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(生成点券充值卡1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(生成点券充值卡2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(10, 10, 10)
                                .addComponent(jLabel222)
                                .addGroup(jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(抵用券充值卡金额, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(生成抵用券充值卡1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(生成抵用券充值卡2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(10, 10, 10)
                                .addComponent(jLabel223)
                                .addGroup(jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(礼包编号, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(生成礼包1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(生成礼包10, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(228, 228, 228)
                                .addGroup(jPanel17Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(刷新充值卡信息)
                                        .addComponent(刷新充值卡信息1))
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jTabbedPane10.addTab("充值CDK管理", jPanel17);

        jTabbedPane2.addTab("充值CDK管理", jTabbedPane10);

        jLabel343.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        jLabel343.setText("神秘商人；");

        神秘商人出现时间.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                神秘商人出现时间ActionPerformed(evt);
            }
        });

        修改神秘商人.setFont(new java.awt.Font("幼圆", 0, 15)); // NOI18N
        修改神秘商人.setText("修改");
        修改神秘商人.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                修改神秘商人ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel19Layout = new javax.swing.GroupLayout(jPanel19);
        jPanel19.setLayout(jPanel19Layout);
        jPanel19Layout.setHorizontalGroup(
                jPanel19Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel19Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel19Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel343)
                                        .addGroup(jPanel19Layout.createSequentialGroup()
                                                .addComponent(神秘商人出现时间, javax.swing.GroupLayout.PREFERRED_SIZE, 110, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(修改神秘商人, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap(936, Short.MAX_VALUE))
        );
        jPanel19Layout.setVerticalGroup(
                jPanel19Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel19Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(jLabel343, javax.swing.GroupLayout.PREFERRED_SIZE, 20, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel19Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(神秘商人出现时间, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(修改神秘商人, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addContainerGap(556, Short.MAX_VALUE))
        );

        jTabbedPane11.addTab("预览", jPanel19);

        jLabel263.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel263.setForeground(new java.awt.Color(255, 0, 51));
        jLabel263.setText("修改后实时生效，必须在活动时间开始前修改才能触发。");

        jLabel41.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel41.setText("神秘商人");

        jLabel276.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel276.setForeground(new java.awt.Color(51, 102, 255));
        jLabel276.setText("开启后，服务端会开始召唤神秘商人，商人每次只会待 5 分钟，消失并告知下一次出现的信息。（npc\\9900001.js）");

        神秘商人开关.setText("开关");
        神秘商人开关.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                神秘商人开关ActionPerformed(evt);
            }
        });

        jLabel42.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel42.setText("野外通缉");

        jLabel281.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel281.setForeground(new java.awt.Color(51, 102, 255));
        jLabel281.setText("开启后，服务端会在启动后 1 小时候发布通缉令，随后通缉目标被击杀后会 30 分钟再次发布通缉令。(活动奖励\\9000011_5.js)");

        野外通缉开关.setText("开关");
        野外通缉开关.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                野外通缉开关ActionPerformed(evt);
            }
        });

        jLabel43.setFont(new java.awt.Font("宋体", 0, 18)); // NOI18N
        jLabel43.setText("每日送货");

        jLabel282.setFont(new java.awt.Font("幼圆", 0, 18)); // NOI18N
        jLabel282.setForeground(new java.awt.Color(51, 102, 255));
        jLabel282.setText("开启后，每日12:00之后开始送货，从明珠港开始，到废弃都市结束。(npc\\9010009.js)");

        每日送货开关.setText("开关");
        每日送货开关.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                每日送货开关ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel20Layout = new javax.swing.GroupLayout(jPanel20);
        jPanel20.setLayout(jPanel20Layout);
        jPanel20Layout.setHorizontalGroup(
                jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel20Layout.createSequentialGroup()
                                .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel263, javax.swing.GroupLayout.PREFERRED_SIZE, 500, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(jLabel41)
                                        .addComponent(jLabel42)
                                        .addComponent(jLabel43)
                                        .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                                .addGroup(jPanel20Layout.createSequentialGroup()
                                                        .addComponent(jLabel282, javax.swing.GroupLayout.PREFERRED_SIZE, 820, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(每日送货开关, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGroup(jPanel20Layout.createSequentialGroup()
                                                        .addComponent(jLabel276, javax.swing.GroupLayout.PREFERRED_SIZE, 960, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(神秘商人开关, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGroup(jPanel20Layout.createSequentialGroup()
                                                        .addComponent(jLabel281, javax.swing.GroupLayout.PREFERRED_SIZE, 1020, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                        .addComponent(野外通缉开关, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(0, 28, Short.MAX_VALUE))
        );
        jPanel20Layout.setVerticalGroup(
                jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel20Layout.createSequentialGroup()
                                .addComponent(jLabel263, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jLabel41)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel276, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(神秘商人开关, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jLabel42)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel281, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(野外通缉开关, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jLabel43)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel20Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                        .addComponent(jLabel282, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(每日送货开关, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(0, 401, Short.MAX_VALUE))
        );

        jTabbedPane11.addTab("一", jPanel20);

        jTabbedPane2.addTab("事件相关", jTabbedPane11);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jScrollPane1)
                        .addGroup(layout.createSequentialGroup()
                                .addGap(0, 0, Short.MAX_VALUE)
                                .addComponent(mainFrame, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGroup(layout.createSequentialGroup()
                                .addComponent(jTabbedPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 1142, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(layout.createSequentialGroup()
                                .addComponent(jTabbedPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 681, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 38, Short.MAX_VALUE)
                                .addComponent(mainFrame, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(20, 20, 20)
                                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 93, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void 刷新广播ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新广播ActionPerformed
        // TODO add your handling code here:
        刷新公告广播();
    }//GEN-LAST:event_刷新广播ActionPerformed

    private void 删除广播ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除广播ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.广播序号.getText().matches("[0-9]+");
        if (result1) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM 广播信息 WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.广播序号.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from 广播信息 where id =" + Integer.parseInt(this.广播序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新公告广播();
                }
                JOptionPane.showMessageDialog(null, "删除成功。");
            } catch (SQLException ex) {
            }
        }
    }//GEN-LAST:event_删除广播ActionPerformed

    private void 修改广播ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改广播ActionPerformed
        // TODO add your handling code here:

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("UPDATE 广播信息 SET 广播 = ? WHERE id = ?");
            PreparedStatement ps1 = con.prepareStatement("SELECT * FROM 广播信息  WHERE id = ? ");
            ps1.setInt(1, Integer.parseInt(广播序号.getText()));
            ResultSet rs = ps1.executeQuery();
            if (rs.next()) {
                String sqlString1 = null;
                sqlString1 = "update 广播信息 set 广播 = '" + 广播文本.getText() + "' where id = " + Integer.parseInt(广播序号.getText()) + ";";
                PreparedStatement a1 = con.prepareStatement(sqlString1);
                a1.executeUpdate(sqlString1);
                刷新公告广播();
                JOptionPane.showMessageDialog(null, "修改成功。");
            }
        } catch (SQLException ex) {
        }
    }//GEN-LAST:event_修改广播ActionPerformed

    private void 发布广播ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_发布广播ActionPerformed
        // TODO add your handling code here:
        if (广播文本.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "请填写广告信息哦。");
            return;
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("INSERT INTO 广播信息 ( 广播 ) VALUES ( ? )");
            ps.setString(1, 广播文本.getText());
            ps.executeUpdate();
        } catch (SQLException ex) {

        }
        刷新公告广播();
        JOptionPane.showMessageDialog(null, "发布完成。");
    }//GEN-LAST:event_发布广播ActionPerformed

    private void 广播序号ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_广播序号ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_广播序号ActionPerformed

    private void jButton31ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton31ActionPerformed
        // TODO add your handling code here:
        boolean result = this.jTextField46.getText().matches("[0-9]+");
        if (result) {
            if (Integer.parseInt(this.jTextField46.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                printChatLog("[信息]:请填写正确的值。");
                return;
            }
            for (int i = ((DefaultTableModel) (this.jTable3.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.jTable3.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE itemid =  " + Integer.parseInt(this.jTextField46.getText()) + "");
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {

                    ((DefaultTableModel) jTable3.getModel()).insertRow(jTable3.getRowCount(), new Object[]{
                            rs.getInt("serial"),
                            rs.getString("name"),
                            rs.getInt("discount_price"),
                            rs.getInt("showup"),
                            rs.getInt("itemid"),
                            rs.getInt("period"),
                            rs.getInt("gender"),
                            rs.getInt("count"),
                            rs.getInt("mod")
                    });
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
            jTable3.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    int i = jTable3.getSelectedRow();
                    String a = jTable3.getValueAt(i, 0).toString();
                    String a1 = jTable3.getValueAt(i, 1).toString();
                    String a2 = jTable3.getValueAt(i, 2).toString();
                    String a3 = jTable3.getValueAt(i, 3).toString();
                    String a4 = jTable3.getValueAt(i, 4).toString();
                    String a5 = jTable3.getValueAt(i, 5).toString();
                    String a6 = jTable3.getValueAt(i, 6).toString();
                    String a7 = jTable3.getValueAt(i, 7).toString();
                    String a8 = jTable3.getValueAt(i, 8).toString();

                    jTextField35.setText(a);
                    jTextField38.setText(a1);
                    jTextField39.setText(a2);
                    jTextField40.setText(a3);
                    jTextField41.setText(a4);
                    jTextField42.setText(a5);
                    jTextField43.setText(a6);
                    jTextField44.setText(a7);
                    jTextField45.setText(a8);
                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你要查找的物品代码。");
            printChatLog("[信息]:请输入你要查找的物品代码。");
        }
    }//GEN-LAST:event_jButton31ActionPerformed

    private void jButton37ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton37ActionPerformed
        // TODO add your handling code here:
        boolean result = this.jTextField35.getText().matches("[0-9]+");
        if (result == true) {
            int xh = Integer.parseInt(this.jTextField35.getText());

            //清楚table数据
            for (int i = ((DefaultTableModel) (this.jTable3.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.jTable3.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE serial = ?");
                ps1.setInt(1, xh);
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from cashshop_modified_items where serial =" + xh + "";
                    ps1.executeUpdate(sqlstr);
                    JOptionPane.showMessageDialog(null, "[信息]:删除爆物成功。");
                    printChatLog("[信息]:删除爆物成功。");
                    刷新商城数据();
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        }
    }//GEN-LAST:event_jButton37ActionPerformed

    private void jButton36ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton36ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.jTextField35.getText().matches("[0-9]+");
        //boolean result2 = this.jTextField38.getText().matches("[0-9]+");
        boolean result3 = this.jTextField39.getText().matches("[0-9]+");
        boolean result4 = this.jTextField40.getText().matches("[0-9]+");
        boolean result5 = this.jTextField41.getText().matches("[0-9]+");
        boolean result6 = this.jTextField42.getText().matches("[0-9]+");
        boolean result7 = this.jTextField43.getText().matches("[0-9]+");
        boolean result8 = this.jTextField44.getText().matches("[0-9]+");
        boolean result9 = this.jTextField45.getText().matches("[0-9]+");

        if (result1 /*&& result2*/ && result3 && result4 && result5 && result6 && result7 && result8 && result9) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE serial = ?");
                ps1.setInt(1, Integer.parseInt(this.jTextField35.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2 = null;
                    String sqlString3 = null;
                    String sqlString4 = null;
                    String sqlString5 = null;
                    String sqlString6 = null;
                    String sqlString7 = null;
                    String sqlString8 = null;
                    sqlString2 = "update cashshop_modified_items set name='" + this.jTextField38.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement name = con.prepareStatement(sqlString2);
                    name.executeUpdate(sqlString2);

                    sqlString3 = "update cashshop_modified_items set discount_price='" + this.jTextField39.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement discount_price = con.prepareStatement(sqlString3);
                    discount_price.executeUpdate(sqlString3);

                    sqlString4 = "update cashshop_modified_items set showup='" + this.jTextField40.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement showup = con.prepareStatement(sqlString4);
                    showup.executeUpdate(sqlString4);

                    sqlString5 = "update cashshop_modified_items set itemid='" + this.jTextField41.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement itemid = con.prepareStatement(sqlString5);
                    itemid.executeUpdate(sqlString5);

                    sqlString6 = "update cashshop_modified_items set period='" + this.jTextField42.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement period = con.prepareStatement(sqlString6);
                    period.executeUpdate(sqlString6);

                    sqlString7 = "update cashshop_modified_items set gender='" + this.jTextField43.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement gender = con.prepareStatement(sqlString7);
                    gender.executeUpdate(sqlString7);

                    sqlString8 = "update cashshop_modified_items set count='" + this.jTextField44.getText() + "' where serial=" + this.jTextField35.getText() + ";";
                    PreparedStatement count = con.prepareStatement(sqlString8);
                    count.executeUpdate(sqlString8);
                    JOptionPane.showMessageDialog(null, "[信息]:修改成功。");
                    printChatLog("[信息]:修改成功。");
                    刷新商城数据();
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要修改的数据。");
            printChatLog("[信息]:请选择你要修改的数据。");
        }
    }//GEN-LAST:event_jButton36ActionPerformed

    private void jButton35ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton35ActionPerformed
        // TODO add your handling code here:
        // TODO add your handling code here:
        boolean result1 = this.jTextField35.getText().matches("[0-9]+");
        //boolean result2 = this.jTextField38.getText().matches("[0-9]+");
        boolean result3 = this.jTextField39.getText().matches("[0-9]+");
        boolean result4 = this.jTextField40.getText().matches("[0-9]+");
        boolean result5 = this.jTextField41.getText().matches("[0-9]+");
        boolean result6 = this.jTextField42.getText().matches("[0-9]+");
        boolean result7 = this.jTextField43.getText().matches("[0-9]+");
        boolean result8 = this.jTextField44.getText().matches("[0-9]+");
        boolean result9 = this.jTextField45.getText().matches("[0-9]+");
        if (result1 /*&& result2*/ && result3 && result4 && result5 && result6 && result7 && result8 && result9) {
            if (Integer.parseInt(this.jTextField35.getText()) < 0
                    //&& String.valueOf(this.jTextField38.getText()).isEmpty()
                    && Integer.parseInt(this.jTextField39.getText()) < 0
                    && Integer.parseInt(this.jTextField40.getText()) < 0
                    && Integer.parseInt(this.jTextField41.getText()) < 0
                    && Integer.parseInt(this.jTextField42.getText()) < 0
                    && Integer.parseInt(this.jTextField43.getText()) < 0
                    && Integer.parseInt(this.jTextField44.getText()) < 0
                    && Integer.parseInt(this.jTextField45.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                printChatLog("[信息]:请填写正确的值。");
                return;
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("INSERT INTO cashshop_modified_items ( serial, name, discount_price, showup, itemid, period, gender, count) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)");
                ps.setInt(1, Integer.parseInt(this.jTextField35.getText()));
                ps.setString(2, this.jTextField38.getText());
                ps.setInt(3, Integer.parseInt(this.jTextField39.getText()));
                ps.setInt(4, Integer.parseInt(this.jTextField40.getText()));
                ps.setInt(5, Integer.parseInt(this.jTextField41.getText()));
                ps.setInt(6, Integer.parseInt(this.jTextField42.getText()));
                ps.setInt(7, Integer.parseInt(this.jTextField43.getText()));
                ps.setInt(8, Integer.parseInt(this.jTextField44.getText()));
                //ps.setInt(9, Integer.parseInt(this.jTextField45.getText()));
                ps.executeUpdate();
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入<SN><物品名称><价格><显示><物品代码><时间><性别><数量><类型>的格式来添加。");
            printChatLog("[信息]:请输入<SN><物品名称><价格><显示><物品代码><时间><性别><数量><类型>的格式来添加。");
        }
        刷新商城数据();
    }//GEN-LAST:event_jButton35ActionPerformed

    private void jButton34ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton34ActionPerformed
        // TODO add your handling code here:
        printChatLog("[信息]:刷新商城物品数据。");
        JOptionPane.showMessageDialog(null, "[信息]:刷新商城物品数据。");

        刷新商城数据();
    }//GEN-LAST:event_jButton34ActionPerformed

    private void jTextField38ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField38ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField38ActionPerformed

    private void jTextField35ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField35ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField35ActionPerformed

    private void jButton30ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton30ActionPerformed
        // TODO add your handling code here:

        boolean result2 = this.jTextField36.getText().matches("[0-9]+");
        boolean result3 = this.jTextField37.getText().matches("[0-9]+");

        if (result2 && result3) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("UPDATE drop_data_global SET dropperid = ?, itemid = ?, chance = ? WHERE id = ?");
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM drop_data_global WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.jTextField34.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2 = null;
                    String sqlString3 = null;
                    sqlString2 = "update drop_data_global set itemid='" + this.jTextField36.getText() + "' where id=" + this.jTextField34.getText() + ";";
                    PreparedStatement dropperid = con.prepareStatement(sqlString2);
                    dropperid.executeUpdate(sqlString2);
                    sqlString3 = "update drop_data_global set chance='" + this.jTextField37.getText() + "' where id=" + this.jTextField34.getText() + ";";
                    PreparedStatement itemid = con.prepareStatement(sqlString3);
                    itemid.executeUpdate(sqlString3);
                    JOptionPane.showMessageDialog(null, "[信息]:修改成功。");
                    printChatLog("[信息]:修改成功。");
                    刷新世界爆物();
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要修改的数据。");
            printChatLog("[信息]:请选择你要修改的数据。");
        }
    }//GEN-LAST:event_jButton30ActionPerformed

    private void jButton29ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton29ActionPerformed
        // TODO add your handling code here:

        boolean result = this.jTextField34.getText().matches("[0-9]+");
        if (result == true) {
            int id = Integer.parseInt(this.jTextField34.getText());
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM drop_data_global WHERE id = ?");
                ps1.setInt(1, id);
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from drop_data_global where id =" + id + "";
                    ps1.executeUpdate(sqlstr);
                    JOptionPane.showMessageDialog(null, "[信息]:删除成功。");
                    printChatLog("[信息]:删除成功。");
                    刷新世界爆物();
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要删除的物品。");
            printChatLog("[信息]:请选择你要删除的物品。");
        }
    }//GEN-LAST:event_jButton29ActionPerformed

    private void jButton28ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton28ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.jTextField36.getText().matches("[0-9]+");
        boolean result2 = this.jTextField37.getText().matches("[0-9]+");
        if (result1 && result2) {
            if (Integer.parseInt(this.jTextField36.getText()) < 0 && Integer.parseInt(this.jTextField37.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                printChatLog("[信息]:请填写正确的值。");
                return;
            }

            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("INSERT INTO drop_data_global (continent,dropType,itemid,minimum_quantity,maximum_quantity,questid,chance) VALUES (?, ?, ?, ?, ?, ?, ?)");
                ps.setInt(1, 1);
                ps.setInt(2, 1);
                ps.setInt(3, Integer.parseInt(this.jTextField36.getText()));
                ps.setInt(4, 1);
                ps.setInt(5, 1);
                ps.setInt(6, 0);
                ps.setInt(7, Integer.parseInt(this.jTextField37.getText()));
                ps.executeUpdate();
                JOptionPane.showMessageDialog(null, "[信息]:世界爆物添加成功。");
                printChatLog("[信息]:世界爆物添加成功。");
                刷新世界爆物();
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入<物品代码>，<物品爆率> 。");
            printChatLog("[信息]:请输入<物品代码>，<物品爆率> 。");
        }
    }//GEN-LAST:event_jButton28ActionPerformed

    private void jButton27ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton27ActionPerformed
        // TODO add your handling code here:
        printChatLog("[信息]:刷新世界物品掉落数据。");
        JOptionPane.showMessageDialog(null, "[信息]:刷新世界物品掉落数据。");
        刷新世界爆物();
    }//GEN-LAST:event_jButton27ActionPerformed

    private void jButton26ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton26ActionPerformed
        // TODO add your handling code here:

        boolean result = this.jTextField33.getText().matches("[0-9]+");
        if (result == true) {
            int itemid = Integer.parseInt(this.jTextField33.getText());
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                // for (int i = ((DefaultTableModel) (this.怪物爆物.getModel())).getRowCount() - 1; i >= 0; i--) {
                //   ((DefaultTableModel) (this.怪物爆物.getModel())).removeRow(i);
                //}
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM drop_data WHERE itemid = ?");
                ps1.setInt(1, itemid);
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from drop_data where itemid =" + itemid + "";
                    ps1.executeUpdate(sqlstr);

                    JOptionPane.showMessageDialog(null, "[信息]:成功删除 " + itemid + " 物品。");
                    printChatLog("[信息]:成功删除 " + itemid + " 物品。");
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
            刷新怪物爆物();
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你要查找的物品代码。");
            printChatLog("[信息]:请输入你要查找的物品代码。");
        }
    }//GEN-LAST:event_jButton26ActionPerformed

    private void jButton25ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton25ActionPerformed
        // TODO add your handling code here:
        boolean result = this.jTextField32.getText().matches("[0-9]+");
        if (result) {
            if (Integer.parseInt(this.jTextField32.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                printChatLog("[信息]:请填写正确的值。");
                return;
            }
            for (int i = ((DefaultTableModel) (this.jTable1.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.jTable1.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM drop_data WHERE dropperid =  " + Integer.parseInt(this.jTextField32.getText()) + " && itemid !=0");//&& itemid !=0
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {

                    ((DefaultTableModel) jTable1.getModel()).insertRow(jTable1.getRowCount(), new Object[]{
                            rs.getInt("id"),
                            rs.getInt("dropperid"),
                            rs.getInt("itemid"),
                            rs.getInt("chance"),
                            MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
            jTable1.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    int i = jTable1.getSelectedRow();
                    String a = jTable1.getValueAt(i, 0).toString();
                    String a1 = jTable1.getValueAt(i, 1).toString();
                    String a2 = jTable1.getValueAt(i, 2).toString();
                    String a3 = jTable1.getValueAt(i, 3).toString();
                    //String a4 = 怪物爆物.getValueAt(i, 4).toString();
                    jTextField27.setText(a);
                    jTextField28.setText(a1);
                    jTextField29.setText(a2);
                    jTextField30.setText(a3);
                    //怪物爆物物品名称.setText(a4);

                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你要查找的怪物代码。");
            printChatLog("[信息]:请输入你要查找的怪物代码。");
        }
    }//GEN-LAST:event_jButton25ActionPerformed

    private void jButton24ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton24ActionPerformed
        boolean result = this.jTextField31.getText().matches("[0-9]+");
        if (result) {
            if (Integer.parseInt(this.jTextField31.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                printChatLog("[信息]:请填写正确的值。");
                return;
            }
            for (int i = ((DefaultTableModel) (this.jTable1.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.jTable1.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM drop_data WHERE itemid =  " + Integer.parseInt(this.jTextField31.getText()) + "");
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {

                    ((DefaultTableModel) jTable1.getModel()).insertRow(jTable1.getRowCount(), new Object[]{
                            rs.getInt("id"),
                            rs.getInt("dropperid"),
                            rs.getInt("itemid"),
                            rs.getInt("chance"),
                            MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
            jTable1.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    int i = jTable1.getSelectedRow();
                    String a = jTable1.getValueAt(i, 0).toString();
                    String a1 = jTable1.getValueAt(i, 1).toString();
                    String a2 = jTable1.getValueAt(i, 2).toString();
                    String a3 = jTable1.getValueAt(i, 3).toString();
                    //String a4 = jTable1.getValueAt(i, 4).toString();
                    jTextField27.setText(a);
                    jTextField28.setText(a1);
                    jTextField29.setText(a2);
                    jTextField30.setText(a3);
                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你要查找的物品代码。");
            printChatLog("[信息]:请输入你要查找的物品代码。");
        }
    }//GEN-LAST:event_jButton24ActionPerformed

    private void jButton23ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton23ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.jTextField28.getText().matches("[0-9]+");
        boolean result2 = this.jTextField29.getText().matches("[0-9]+");
        boolean result3 = this.jTextField30.getText().matches("[0-9]+");

        if (result1 && result2 && result3) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("UPDATE drop_data SET dropperid = ?, itemid = ?, chance = ? WHERE id = ?");
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM drop_data WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.jTextField27.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString2 = null;
                    String sqlString3 = null;
                    String sqlString4 = null;
                    sqlString2 = "update drop_data set dropperid='" + this.jTextField28.getText() + "' where id=" + this.jTextField27.getText() + ";";
                    PreparedStatement dropperid = con.prepareStatement(sqlString2);
                    dropperid.executeUpdate(sqlString2);
                    sqlString3 = "update drop_data set itemid='" + this.jTextField29.getText() + "' where id=" + this.jTextField27.getText() + ";";
                    PreparedStatement itemid = con.prepareStatement(sqlString3);
                    itemid.executeUpdate(sqlString3);
                    sqlString4 = "update drop_data set chance='" + this.jTextField30.getText() + "' where id=" + this.jTextField27.getText() + ";";
                    PreparedStatement chance = con.prepareStatement(sqlString4);
                    chance.executeUpdate(sqlString4);
                    JOptionPane.showMessageDialog(null, "[信息]:修改成功。");
                    printChatLog("[信息]:修改成功。");
                    刷新怪物爆物();
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要修改的数据。");
            printChatLog("[信息]:请选择你要修改的数据。");
        }
    }//GEN-LAST:event_jButton23ActionPerformed

    private void jButton22ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton22ActionPerformed
        // TODO add your handling code here:

        boolean result = this.jTextField27.getText().matches("[0-9]+");
        if (result == true) {
            int xh = Integer.parseInt(this.jTextField27.getText());

            //清楚table数据
            for (int i = ((DefaultTableModel) (this.jTable1.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.jTable1.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM drop_data WHERE id = ?");
                ps1.setInt(1, xh);
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from drop_data where id =" + xh + "";
                    ps1.executeUpdate(sqlstr);
                    JOptionPane.showMessageDialog(null, "[信息]:删除爆物成功。");
                    printChatLog("[信息]:删除爆物成功。");
                    刷新怪物爆物();
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        }
    }//GEN-LAST:event_jButton22ActionPerformed

    private void jButton21ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton21ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.jTextField28.getText().matches("[0-9]+");
        boolean result2 = this.jTextField29.getText().matches("[0-9]+");
        boolean result3 = this.jTextField30.getText().matches("[0-9]+");
        if (result1 && result2 && result3) {
            if (Integer.parseInt(this.jTextField28.getText()) < 0 && Integer.parseInt(this.jTextField29.getText()) < 0 && Integer.parseInt(this.jTextField30.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                printChatLog("[信息]:请填写正确的值。");
                return;
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("INSERT INTO drop_data ( dropperid,itemid,minimum_quantity,maximum_quantity,chance) VALUES ( ?, ?, ?, ?, ?)");
                ps.setInt(1, Integer.parseInt(this.jTextField28.getText()));
                ps.setInt(2, Integer.parseInt(this.jTextField29.getText()));
                ps.setInt(3, 1);
                ps.setInt(4, 1);
                ps.setInt(5, Integer.parseInt(this.jTextField30.getText()));
                ps.executeUpdate();
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入<怪物代码><物品代码><物品爆率>的格式来添加。");
            printChatLog("[信息]:请输入<怪物代码><物品代码><物品爆率>的格式来添加。");
        }
        刷新怪物爆物();
    }//GEN-LAST:event_jButton21ActionPerformed

    private void jButton20ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton20ActionPerformed
        // TODO add your handling code here:
        printChatLog("[信息]:刷新怪物物品掉落数据。");
        JOptionPane.showMessageDialog(null, "[信息]:刷新怪物物品掉落数据。");
        刷新怪物爆物();
    }//GEN-LAST:event_jButton20ActionPerformed

    private void jTextField27ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField27ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField27ActionPerformed

    private void checkbox1MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_checkbox1MouseClicked
        // TODO add your handling code here:
        boolean status = checkbox1.getState();
        ServerConstants.Super_password = status;
        if (!status) {
            ServerConstants.superpw = "";
        } else {
            ServerConstants.superpw = jTextField26.getText();
        }
    }//GEN-LAST:event_checkbox1MouseClicked

    private void jTextField26ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField26ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField26ActionPerformed

    private void jButton18ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton18ActionPerformed
        // TODO add your handling code here:
        ChangePassWord();
    }//GEN-LAST:event_jButton18ActionPerformed

    private void jTextField25ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField25ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField25ActionPerformed

    private void jTextField24ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField24ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField24ActionPerformed

    private void jButton15ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton15ActionPerformed
        // TODO add your handling code here:
        给全服点卷();
    }//GEN-LAST:event_jButton15ActionPerformed

    private void jTextField20ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField20ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField20ActionPerformed

    private void jButton14ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton14ActionPerformed
        // TODO add your handling code here:
        刷物品();
    }//GEN-LAST:event_jButton14ActionPerformed

    private void jButton13ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton13ActionPerformed
        // TODO add your handling code here:
        sendNoticeGG();
    }//GEN-LAST:event_jButton13ActionPerformed

    private void jTextField2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField2ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField2ActionPerformed

    private void jButton17ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton17ActionPerformed
        // TODO add your handling code here:
        FixAcLogged();
    }//GEN-LAST:event_jButton17ActionPerformed

    private void jTextField23ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField23ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField23ActionPerformed

    private void jTextField1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField1ActionPerformed

    private void jButton11ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton11ActionPerformed
        // TODO add your handling code here:
        sendNotice(0);
    }//GEN-LAST:event_jButton11ActionPerformed

    private void jButton19ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton19ActionPerformed
        //DatabaseConnection.closeTimeout();//关闭服务端时间抛出
        // TODO add your handling code here:
    }//GEN-LAST:event_jButton19ActionPerformed

    private void jButton12ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton12ActionPerformed
        // TODO add your handling code here:
        CashItemFactory.getInstance().clearItems();
        String 输出 = "[重载系统] 商城重载成功。";
        JOptionPane.showMessageDialog(null, "商城重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton12ActionPerformed

    private void jButton6ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton6ActionPerformed
        // TODO add your handling code here:
        SendPacketOpcode.reloadValues();
        RecvPacketOpcode.reloadValues();
        String 输出 = "[重载系统] 包头重载成功。";
        JOptionPane.showMessageDialog(null, "包头重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton6ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        // TODO add your handling code here:
        ReactorScriptManager.getInstance().clearDrops();
        String 输出 = "[重载系统] 反应堆重载成功。";
        JOptionPane.showMessageDialog(null, "反应堆重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        // TODO add your handling code here:
        PortalScriptManager.getInstance().clearScripts();
        String 输出 = "[重载系统] 传送门重载成功。";
        JOptionPane.showMessageDialog(null, "传送门重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
        // TODO add your handling code here:
        MapleShopFactory.getInstance().clear();
        String 输出 = "[重载系统] 商店重载成功。";
        JOptionPane.showMessageDialog(null, "商店重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton4ActionPerformed

    private void jButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
        // TODO add your handling code here:
        MapleMonsterInformationProvider.getInstance().clearDrops();
        String 输出 = "[重载系统] 爆率重载成功。";
        JOptionPane.showMessageDialog(null, "爆率重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton5ActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
        for (ChannelServer instance1 : ChannelServer.getAllInstances()) {
            if (instance1 != null) {
                instance1.reloadEvents();
            }
        }
        String 输出 = "[重载系统] 副本重载成功。";
        JOptionPane.showMessageDialog(null, "副本重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
        // TODO add your handling code here:
        MapleQuest.clearQuests();
        String 输出 = "[重载系统] 任务重载成功。";
        JOptionPane.showMessageDialog(null, "任务重载成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton9ActionPerformed

    private void jButton8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton8ActionPerformed
        // TODO add your handling code here:
        int p = 0;
        for (handling.channel.ChannelServer cserv : handling.channel.ChannelServer.getAllInstances()) {
            p++;
            cserv.closeAllMerchant();
        }
        String 输出 = "[保存雇佣商人系统] 雇佣商人保存" + p + "个频道成功。";
        JOptionPane.showMessageDialog(null, "雇佣商人保存" + p + "个频道成功。");
        printChatLog(输出);
    }//GEN-LAST:event_jButton8ActionPerformed

    private void jButton7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton7ActionPerformed
        // TODO add your handling code here:
        int p = 0;
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                p++;
                chr.saveToDB(true, true);
            }
        }
        String 输出 = "[保存数据系统] 保存" + p + "个成功。";
        JOptionPane.showMessageDialog(null, 输出);
        printChatLog(输出);
    }//GEN-LAST:event_jButton7ActionPerformed

    private void 修改其他等级上限ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改其他等级上限ActionPerformed
        // TODO add your handling code here:
        if (其他等级上限.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "不能为空");
            return;
        }
        boolean result2 = this.其他等级上限.getText().matches("[0-9]+");
        if (result2) {
            ServerConfig.maxlevel = Integer.parseInt(this.其他等级上限.getText());
            ServerProperties.setProperty("server.settings.maxlevel", ServerConfig.maxlevel);
            ServerProperties.saveProperties();
            其他等级上限.setText(String.valueOf(ServerConfig.maxlevel));
            JOptionPane.showMessageDialog(null, "修改成功");
        }
    }//GEN-LAST:event_修改其他等级上限ActionPerformed

    private void 修改骑士团等级上限ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改骑士团等级上限ActionPerformed
        // TODO add your handling code here:
        if (骑士团等级上限.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "不能为空");
            return;
        }
        boolean result2 = this.骑士团等级上限.getText().matches("[0-9]+");
        if (result2) {
            ServerConfig.kocmaxlevel = Integer.parseInt(this.骑士团等级上限.getText());
            ServerProperties.setProperty("server.settings.kocmaxlevel", ServerConfig.kocmaxlevel);
            ServerProperties.saveProperties();
            骑士团等级上限.setText(String.valueOf(ServerConfig.kocmaxlevel));
            JOptionPane.showMessageDialog(null, "修改成功");
        }
    }//GEN-LAST:event_修改骑士团等级上限ActionPerformed

    private void 修改角色数量ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改角色数量ActionPerformed
        // TODO add your handling code here:
        if (限制创建角色数量.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "不能为空");
            return;
        }
        boolean result2 = this.限制创建角色数量.getText().matches("[0-9]+");
        if (result2) {
            WorldConstants.DEFAULT_CHARSLOT = Integer.parseInt(this.限制创建角色数量.getText());
            ServerProperties.setProperty("server.settings.maxCharacters", WorldConstants.DEFAULT_CHARSLOT);
            ServerProperties.saveProperties();
            限制创建角色数量.setText(String.valueOf(WorldConstants.DEFAULT_CHARSLOT));
            JOptionPane.showMessageDialog(null, "修改成功");
        }
    }//GEN-LAST:event_修改角色数量ActionPerformed

    private void 修改服务端最大人数ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改服务端最大人数ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.服务端最大人数.getText().matches("[0-9]+");
        if (服务端最大人数.getText().equals("")) {
            JOptionPane.showMessageDialog(null, "不能为空");
            return;
        }
        boolean result2 = this.服务端最大人数.getText().matches("[0-9]+");
        if (result2) {
            WorldConstants.USER_LIMIT = Integer.parseInt(this.服务端最大人数.getText());
            ServerProperties.setProperty("server.settings.userlimit", WorldConstants.USER_LIMIT);
            ServerProperties.saveProperties();
            服务端最大人数.setText(String.valueOf(WorldConstants.USER_LIMIT));
            JOptionPane.showMessageDialog(null, "修改成功");
        }
    }//GEN-LAST:event_修改服务端最大人数ActionPerformed

    private void 限制创建角色数量ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_限制创建角色数量ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_限制创建角色数量ActionPerformed

    private void 服务端最大人数ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_服务端最大人数ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_服务端最大人数ActionPerformed

    private void jButton16ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton16ActionPerformed
        // TODO add your handling code here:
        重启服务器();
    }//GEN-LAST:event_jButton16ActionPerformed

    private void jTextField22ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField22ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField22ActionPerformed

    private void jButton10ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton10ActionPerformed
    }//GEN-LAST:event_jButton10ActionPerformed

    private void 查找道具ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查找道具ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.游戏道具代码.getText().matches("[0-9]+");
        if (result1) {
            for (int i = ((DefaultTableModel) (this.游戏道具.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.游戏道具.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE itemid =" + Integer.parseInt(this.游戏道具代码.getText()) + "");
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) 游戏道具.getModel()).insertRow(游戏道具.getRowCount(), new Object[]{
                            rs.getInt("characterid"),
                            MapleCharacter.getCharacterNameById(rs.getInt("characterid")),
                            rs.getInt("itemid"),
                            MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });
                }
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入你要查找的<物品代码>");
        }
    }//GEN-LAST:event_查找道具ActionPerformed

    private void 删除道具ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除道具ActionPerformed
        // TODO add your handling code here:
        String 输出 = "";
        boolean result1 = this.游戏道具代码.getText().matches("[0-9]+");

        if (result1) {

            for (int i = ((DefaultTableModel) (this.游戏道具.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.游戏道具.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM inventoryitems WHERE itemid = ?");
                ps1.setInt(1, Integer.parseInt(this.游戏道具代码.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from inventoryitems where itemid =" + Integer.parseInt(this.游戏道具代码.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    JOptionPane.showMessageDialog(null, "成功删除所有代码为 " + Integer.parseInt(this.游戏道具代码.getText()) + " 物品。");
                }
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入你想要删除的<物品代码>");
        }
    }//GEN-LAST:event_删除道具ActionPerformed

    private void 查找道具4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查找道具4ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.游戏道具代码.getText().matches("[0-9]+");
        if (result1) {
            for (int i = ((DefaultTableModel) (this.游戏道具.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.游戏道具.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM bank_item WHERE itemid =" + Integer.parseInt(this.游戏道具代码.getText()) + "");
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) 游戏道具.getModel()).insertRow(游戏道具.getRowCount(), new Object[]{
                            rs.getInt("cid"),
                            MapleCharacter.getCharacterNameById(rs.getInt("cid")),
                            rs.getInt("itemid"),
                            MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });
                }
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入你要查找的<物品代码>");
        }
    }//GEN-LAST:event_查找道具4ActionPerformed

    private void 删除道具4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除道具4ActionPerformed
        // TODO add your handling code here:
        String 输出 = "";
        boolean result1 = this.游戏道具代码.getText().matches("[0-9]+");

        if (result1) {

            for (int i = ((DefaultTableModel) (this.游戏道具.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.游戏道具.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM bank_item WHERE itemid = ?");
                ps1.setInt(1, Integer.parseInt(this.游戏道具代码.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from bank_item where itemid =" + Integer.parseInt(this.游戏道具代码.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    JOptionPane.showMessageDialog(null, "成功删除所有代码为 " + Integer.parseInt(this.游戏道具代码.getText()) + " 物品。");
                }
            } catch (SQLException ex) {
            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入你想要删除的<物品代码>");
        }
    }//GEN-LAST:event_删除道具4ActionPerformed

    private void 刷新钓鱼物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新钓鱼物品ActionPerformed
        // TODO add your handling code here:
        刷新钓鱼();
        JOptionPane.showMessageDialog(null, "[信息]:刷新钓鱼奖励成功。");
    }//GEN-LAST:event_刷新钓鱼物品ActionPerformed

    private void 新增钓鱼物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_新增钓鱼物品ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.钓鱼物品代码.getText().matches("[0-9]+");
        boolean result2 = this.钓鱼物品概率.getText().matches("[0-9]+");

        if (result1 && result2) {
            if (Integer.parseInt(this.钓鱼物品代码.getText()) < 0 && Integer.parseInt(this.钓鱼物品概率.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                return;
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("INSERT INTO rm_fishing_reward (itemid, chance ,expiration) VALUES (?, ?, ?)");
                ps.setInt(1, Integer.parseInt(this.钓鱼物品代码.getText()));
                ps.setInt(2, Integer.parseInt(this.钓鱼物品概率.getText()));
                ps.setInt(3, 1);
                ps.executeUpdate();
                刷新钓鱼();
                JOptionPane.showMessageDialog(null, "[信息]:新增钓鱼奖励成功。");
            } catch (SQLException ex) {
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入<物品代码><概率>。");
        }
    }//GEN-LAST:event_新增钓鱼物品ActionPerformed

    private void 修改钓鱼物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改钓鱼物品ActionPerformed
        // TODO add your handling code here:
        boolean result1 = this.钓鱼物品序号.getText().matches("[0-9]+");
        if (result1) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("UPDATE rm_fishing_reward SET itemid = ?,chance = ?WHERE id = ?");
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM rm_fishing_reward WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.钓鱼物品序号.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = "update rm_fishing_reward set itemid='" + this.钓鱼物品代码.getText() + "' where id=" + this.钓鱼物品序号.getText() + ";";
                    PreparedStatement name = con.prepareStatement(sqlString1);
                    name.executeUpdate(sqlString1);
                    String sqlString2 = "update rm_fishing_reward set chance='" + this.钓鱼物品概率.getText() + "' where id=" + this.钓鱼物品序号.getText() + ";";
                    PreparedStatement level = con.prepareStatement(sqlString2);
                    level.executeUpdate(sqlString2);
                    刷新钓鱼();
                    JOptionPane.showMessageDialog(null, "[信息]:修改钓鱼物品成功。");
                }
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:输入<物品代码><概率>。");
        }
    }//GEN-LAST:event_修改钓鱼物品ActionPerformed

    private void 删除钓鱼物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除钓鱼物品ActionPerformed
        // TODO add your handling code here:
        String 输出 = "";
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result1 = this.钓鱼物品序号.getText().matches("[0-9]+");
        if (result1) {

            //清楚table数据
            for (int i = ((DefaultTableModel) (this.钓鱼物品.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.钓鱼物品.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                ps1 = con.prepareStatement("SELECT * FROM rm_fishing_reward WHERE id = ?");
                ps1.setInt(1, Integer.parseInt(this.钓鱼物品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from rm_fishing_reward where id =" + Integer.parseInt(this.钓鱼物品序号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新钓鱼();
                    JOptionPane.showMessageDialog(null, "[信息]:删除钓鱼奖励物品成功。");
                }
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要删除的钓鱼物品。");
        }
    }//GEN-LAST:event_删除钓鱼物品ActionPerformed

    private void 查询商店2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_查询商店2ActionPerformed
        查询商店();
    }//GEN-LAST:event_查询商店2ActionPerformed

    public void 查询商店() {

        boolean result = this.查询商店.getText().matches("[0-9]+");
        if (result) {
            if (Integer.parseInt(this.查询商店.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                return;
            }
            for (int i = ((DefaultTableModel) (this.游戏商店2.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.游戏商店2.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = null;
                ResultSet rs = null;
                ps = con.prepareStatement("SELECT * FROM shopitems WHERE shopid = " + Integer.parseInt(this.查询商店.getText()) + " ");
                rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) 游戏商店2.getModel()).insertRow(游戏商店2.getRowCount(), new Object[]{
                            rs.getInt("shopitemid"),
                            rs.getInt("shopid"),
                            rs.getInt("itemid"),
                            rs.getInt("price"),
                            MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });
                }
                JOptionPane.showMessageDialog(null, "[信息]:商城物品查询成功。");
            } catch (SQLException ex) {

            }
            游戏商店2.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    int i = 游戏商店2.getSelectedRow();
                    String a = 游戏商店2.getValueAt(i, 0).toString();
                    String a1 = 游戏商店2.getValueAt(i, 1).toString();
                    String a2 = 游戏商店2.getValueAt(i, 2).toString();
                    String a3 = 游戏商店2.getValueAt(i, 3).toString();
                    //String a4 = 游戏商店2.getValueAt(i, 4).toString();
                    商品序号.setText(a);
                    商店代码.setText(a1);
                    商品物品代码.setText(a2);
                    商品售价金币.setText(a3);
                    // 商品名称.setText(a4);
                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请输入你需要查询的商店ID。");
        }
    }

    private void 删除商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除商品ActionPerformed

        boolean result = this.商品序号.getText().matches("[0-9]+");
        if (result == true) {
            int 商城SN编码 = Integer.parseInt(this.商品序号.getText());
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM shopitems WHERE shopitemid = ?");
                ps1.setInt(1, 商城SN编码);
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from shopitems where shopitemid =" + 商城SN编码 + "";
                    ps1.executeUpdate(sqlstr);
                    查询商店();
                }
            } catch (SQLException ex) {
            }
            JOptionPane.showMessageDialog(null, "[信息]:删除商店商品成功。");
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:请选择你要删除的商品。");
        }
    }//GEN-LAST:event_删除商品ActionPerformed

    private void 新增商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_新增商品ActionPerformed

        boolean result = this.商品物品代码.getText().matches("[0-9]+");
        boolean result1 = this.商店代码.getText().matches("[0-9]+");
        boolean result2 = this.商品售价金币.getText().matches("[0-9]+");

        if (result && result1 && result2) {
            if (Integer.parseInt(this.商店代码.getText()) < 0 && Integer.parseInt(this.商品物品代码.getText()) < 0 && Integer.parseInt(this.商品售价金币.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "[信息]:请填写正确的值。");
                return;
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("INSERT INTO shopitems (shopid ,itemid ,price ,pitch ,position ,reqitem ,reqitemq) VALUES ( ?, ?, ?, ?, ?, ?, ?)");
                ps.setInt(1, Integer.parseInt(this.商店代码.getText()));
                ps.setInt(2, Integer.parseInt(this.商品物品代码.getText()));
                ps.setInt(3, Integer.parseInt(this.商品售价金币.getText()));
                ps.setInt(4, 0);
                ps.setInt(5, 0);
                ps.setInt(6, 0);
                ps.setInt(7, 0);
                ps.executeUpdate();
                查询商店();
            } catch (SQLException ex) {

            }
            JOptionPane.showMessageDialog(null, "[信息]:新增商店商品成功。");
        } else {

            JOptionPane.showMessageDialog(null, "[信息]:输入<商店ID><物品代码><售价>。");
        }
    }//GEN-LAST:event_新增商品ActionPerformed

    private void 商店代码ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商店代码ActionPerformed

    }//GEN-LAST:event_商店代码ActionPerformed

    private void 修改商品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改商品ActionPerformed
        PreparedStatement ps = null;
        PreparedStatement ps1 = null;
        ResultSet rs = null;
        boolean result = this.商品物品代码.getText().matches("[0-9]+");
        boolean result1 = this.商店代码.getText().matches("[0-9]+");
        boolean result2 = this.商品售价金币.getText().matches("[0-9]+");

        if (result && result1 && result2) {
            if (Integer.parseInt(this.商店代码.getText()) < 0 && Integer.parseInt(this.商品物品代码.getText()) < 0 && Integer.parseInt(this.商品售价金币.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                ps = con.prepareStatement("UPDATE shopitems SET itemid = ?,price = ?,shopid = ?WHERE shopitemid = ?");
                ps1 = con.prepareStatement("SELECT * FROM shopitems WHERE shopitemid = ?");
                ps1.setInt(1, Integer.parseInt(this.商品序号.getText()));
                rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    String sqlString2 = null;
                    String sqlString3 = null;
                    sqlString1 = "update shopitems set itemid='" + this.商品物品代码.getText() + "' where shopitemid=" + this.商品序号.getText() + ";";
                    PreparedStatement itemid = con.prepareStatement(sqlString1);
                    itemid.executeUpdate(sqlString1);

                    sqlString2 = "update shopitems set price='" + this.商品售价金币.getText() + "' where shopitemid=" + this.商品序号.getText() + ";";
                    PreparedStatement price = con.prepareStatement(sqlString2);
                    price.executeUpdate(sqlString2);

                    sqlString3 = "update shopitems set shopid='" + this.商店代码.getText() + "' where shopitemid=" + this.商品序号.getText() + ";";
                    PreparedStatement shopid = con.prepareStatement(sqlString3);
                    shopid.executeUpdate(sqlString3);

                    查询商店();
                }

                JOptionPane.showMessageDialog(null, "[信息]:商店商品修改成功。");
            } catch (SQLException ex) {
            }
        } else {
            JOptionPane.showMessageDialog(null, "[信息]:选择你要修改的商品,并填写<商店ID><物品代码><售价金币>。");
        }
    }//GEN-LAST:event_修改商品ActionPerformed

    private void 商品名称ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_商品名称ActionPerformed

    }//GEN-LAST:event_商品名称ActionPerformed

    private void jButton32ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton32ActionPerformed
        刷新反应堆();
    }//GEN-LAST:event_jButton32ActionPerformed

    private void 反应堆概率ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_反应堆概率ActionPerformed

    }//GEN-LAST:event_反应堆概率ActionPerformed

    private void 新增反应堆物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_新增反应堆物品ActionPerformed

        boolean result2 = this.反应堆代码.getText().matches("[0-9]+");

        if (result2) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("INSERT INTO reactordrops ( reactorid ,itemid ,chance ,questid ) VALUES ( ?, ?, ?, ?)");
                ps.setInt(1, Integer.parseInt(this.反应堆代码.getText()));
                ps.setInt(2, Integer.parseInt(this.反应堆物品.getText()));
                ps.setInt(3, Integer.parseInt(this.反应堆概率.getText()));
                ps.setInt(4, -1);
                ps.executeUpdate();
                刷新反应堆();
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入反应堆代码，物品代码，掉落概率 ");
        }
    }//GEN-LAST:event_新增反应堆物品ActionPerformed

    public void 刷新反应堆() {
        for (int i = ((DefaultTableModel) (this.反应堆.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.反应堆.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM reactordrops ");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 反应堆.getModel()).insertRow(反应堆.getRowCount(), new Object[]{rs.getInt("reactordropid"), rs.getInt("reactorid"), rs.getInt("itemid"), rs.getInt("chance"), MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))});
            }
        } catch (SQLException ex) {
        }
        反应堆.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int i = 反应堆.getSelectedRow();
                String a = 反应堆.getValueAt(i, 0).toString();
                String a1 = 反应堆.getValueAt(i, 1).toString();
                String a2 = 反应堆.getValueAt(i, 2).toString();
                String a3 = 反应堆.getValueAt(i, 3).toString();
                反应堆序列号.setText(a);
                反应堆代码.setText(a1);
                反应堆物品.setText(a2);
                反应堆概率.setText(a3);
            }
        });
    }

    private void 删除反应堆物品1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_删除反应堆物品1ActionPerformed

        boolean result1 = this.反应堆序列号.getText().matches("[0-9]+");

        if (result1) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM reactordrops WHERE reactordropid = ?");
                ps1.setInt(1, Integer.parseInt(this.反应堆序列号.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlstr = " delete from reactordrops where reactordropid =" + Integer.parseInt(this.反应堆序列号.getText()) + "";
                    ps1.executeUpdate(sqlstr);
                    刷新反应堆();
                }
            } catch (SQLException ex) {
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要删除的物品 ");
        }
    }//GEN-LAST:event_删除反应堆物品1ActionPerformed

    private void jButton38ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton38ActionPerformed
        boolean result2 = this.查找反应堆掉落.getText().matches("[0-9]+");
        if (result2) {
            for (int i = ((DefaultTableModel) (this.反应堆.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.反应堆.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM reactordrops WHERE reactorid = " + Integer.parseInt(查找反应堆掉落.getText()));
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) 反应堆.getModel()).insertRow(反应堆.getRowCount(), new Object[]{rs.getInt("reactordropid"), rs.getInt("reactorid"), rs.getInt("itemid"), rs.getInt("chance"), MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))});
                }
            } catch (SQLException ex) {
            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入你要查找的反应堆 ");
        }
    }//GEN-LAST:event_jButton38ActionPerformed

    private void jButton39ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton39ActionPerformed
        boolean result2 = this.查找物品.getText().matches("[0-9]+");
        if (result2) {
            for (int i = ((DefaultTableModel) (this.反应堆.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.反应堆.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM reactordrops WHERE itemid = " + Integer.parseInt(查找物品.getText()));
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) 反应堆.getModel()).insertRow(反应堆.getRowCount(), new Object[]{
                            rs.getInt("reactordropid"),
                            rs.getInt("reactorid"),
                            rs.getInt("itemid"),
                            rs.getInt("chance"),
                            MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                    });

                }
            } catch (SQLException ex) {

            }
        } else {
            JOptionPane.showMessageDialog(null, "请输入你要查找的物品代码 ");
        }
    }//GEN-LAST:event_jButton39ActionPerformed

    private void 修改反应堆物品ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改反应堆物品ActionPerformed

        boolean result = this.反应堆代码.getText().matches("[0-9]+");
        boolean result1 = this.反应堆物品.getText().matches("[0-9]+");
        boolean result2 = this.反应堆概率.getText().matches("[0-9]+");

        if (result && result1 && result2) {
            if (Integer.parseInt(this.反应堆代码.getText()) < 0 && Integer.parseInt(this.反应堆物品.getText()) < 0 && Integer.parseInt(this.反应堆概率.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("UPDATE reactordrops SET reactorid = ?,itemid = ?,chance = ?WHERE reactordropid = ?");
                PreparedStatement ps1 = con.prepareStatement("SELECT * FROM reactordrops WHERE reactordropid = ?");
                ps1.setInt(1, Integer.parseInt(this.反应堆序列号.getText()));
                ResultSet rs = ps1.executeQuery();
                if (rs.next()) {
                    String sqlString1 = null;
                    String sqlString2 = null;
                    String sqlString3 = null;
                    sqlString1 = "update reactordrops set reactorid='" + this.反应堆代码.getText() + "' where reactordropid=" + this.反应堆序列号.getText() + ";";
                    PreparedStatement itemid = con.prepareStatement(sqlString1);
                    itemid.executeUpdate(sqlString1);

                    sqlString2 = "update reactordrops set itemid='" + this.反应堆物品.getText() + "' where reactordropid=" + this.反应堆序列号.getText() + ";";
                    PreparedStatement price = con.prepareStatement(sqlString2);
                    price.executeUpdate(sqlString2);

                    sqlString3 = "update reactordrops set chance='" + this.反应堆概率.getText() + "' where reactordropid=" + this.反应堆序列号.getText() + ";";
                    PreparedStatement shopid = con.prepareStatement(sqlString3);
                    shopid.executeUpdate(sqlString3);

                    刷新反应堆();
                }
            } catch (SQLException ex) {
            }
        } else {
            JOptionPane.showMessageDialog(null, "请选择你要修改的数据");
        }
    }//GEN-LAST:event_修改反应堆物品ActionPerformed

    private void 生成点券充值卡1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_生成点券充值卡1ActionPerformed

        boolean result1 = this.点券充值卡金额.getText().matches("[0-9]+");
        if (点券充值卡金额.getText().equals("") && !result1) {
            return;
        }
        生成自定义充值卡();
    }//GEN-LAST:event_生成点券充值卡1ActionPerformed

    public void 生成自定义充值卡() {
        int 金额 = Integer.parseInt(点券充值卡金额.getText());
        String 输出 = "";
        String chars = "1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        char 生成1 = chars.charAt((int) (Math.random() * 62));
        char 生成2 = chars.charAt((int) (Math.random() * 62));
        char 生成3 = chars.charAt((int) (Math.random() * 62));
        char 生成4 = chars.charAt((int) (Math.random() * 62));
        char 生成5 = chars.charAt((int) (Math.random() * 62));
        char 生成6 = chars.charAt((int) (Math.random() * 62));
        char 生成7 = chars.charAt((int) (Math.random() * 62));
        char 生成8 = chars.charAt((int) (Math.random() * 62));
        char 生成9 = chars.charAt((int) (Math.random() * 62));
        char 生成10 = chars.charAt((int) (Math.random() * 62));
        char 生成11 = chars.charAt((int) (Math.random() * 62));
        char 生成12 = chars.charAt((int) (Math.random() * 62));
        char 生成13 = chars.charAt((int) (Math.random() * 62));
        char 生成14 = chars.charAt((int) (Math.random() * 62));
        char 生成15 = chars.charAt((int) (Math.random() * 62));
        char 生成16 = chars.charAt((int) (Math.random() * 62));
        char 生成17 = chars.charAt((int) (Math.random() * 62));
        char 生成18 = chars.charAt((int) (Math.random() * 62));
        char 生成19 = chars.charAt((int) (Math.random() * 62));
        char 生成20 = chars.charAt((int) (Math.random() * 62));
        char 生成21 = chars.charAt((int) (Math.random() * 62));
        char 生成22 = chars.charAt((int) (Math.random() * 62));
        char 生成23 = chars.charAt((int) (Math.random() * 62));
        char 生成24 = chars.charAt((int) (Math.random() * 62));
        char 生成25 = chars.charAt((int) (Math.random() * 62));
        char 生成26 = chars.charAt((int) (Math.random() * 62));
        char 生成27 = chars.charAt((int) (Math.random() * 62));
        char 生成28 = chars.charAt((int) (Math.random() * 62));
        char 生成29 = chars.charAt((int) (Math.random() * 62));
        char 生成30 = chars.charAt((int) (Math.random() * 62));

        String 充值卡 = "DQ" + 生成1 + "" + 生成2 + "" + 生成3 + "" + 生成4 + "" + 生成5 + "" + 生成6 + "" + 生成7 + "" + 生成8 + "" + 生成9 + "" + 生成10 + "" + 生成11 + "" + 生成12 + "" + 生成13 + "" + 生成14 + "" + 生成15 + "" + 生成16 + "" + 生成17 + "" + 生成18 + "" + 生成19 + "" + 生成20 + "" + 生成21 + "" + 生成22 + "" + 生成23 + "" + 生成24 + "" + 生成25 + "" + 生成26 + "" + 生成27 + "" + 生成28 + "" + 生成29 + "" + 生成30 + "";
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("INSERT INTO nxcodez ( code,leixing,valid) VALUES ( ?, ?, ?)");
            ps.setString(1, 充值卡);
            ps.setInt(2, 1);
            ps.setInt(3, 金额);
            ps.executeUpdate();
            FileoutputUtil.logToFile("充值卡后台库存/[" + CurrentReadable_Date() + "]" + 金额 + "点券充值卡.txt", "" + 充值卡 + "\r\n");
            刷新充值卡信息();
            输出 = "" + CurrentReadable_Date() + "/生成兑换卡成功，数额为 " + 金额 + " 点券，已经存放服务端根目录。";
        } catch (SQLException ex) {

        }
        printChatLog(输出);
    }

    public void 刷新充值卡信息() {
        for (int i = ((DefaultTableModel) (this.充值卡信息.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.充值卡信息.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM nxcodez");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                String 类型 = "";
                switch (rs.getInt("leixing")) {
                    case 1:
                        类型 = "点券";
                        break;
                    case 2:
                        类型 = "抵用券";
                        break;
                    case 3:
                        类型 = "金币";
                        break;
                    case 4:
                        类型 = "经验";
                        break;
                    case 5:
                        类型 = "礼包";
                        break;
                    default:
                        break;
                }
                ((DefaultTableModel) 充值卡信息.getModel()).insertRow(充值卡信息.getRowCount(), new Object[]{
                        rs.getString("code"),
                        类型,
                        rs.getInt("valid"),
                        rs.getInt("itme")
                });
            }

        } catch (SQLException ex) {
        }
    }


    private void 生成抵用券充值卡1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_生成抵用券充值卡1ActionPerformed
        boolean result1 = this.抵用券充值卡金额.getText().matches("[0-9]+");
        if (抵用券充值卡金额.getText().equals("") && !result1) {
            return;
        }
        生成自定义充值卡2();
    }//GEN-LAST:event_生成抵用券充值卡1ActionPerformed

    public void 生成自定义充值卡2() {
        int 金额 = Integer.parseInt(抵用券充值卡金额.getText());
        String 输出 = "";
        String chars = "1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        char 生成1 = chars.charAt((int) (Math.random() * 62));
        char 生成2 = chars.charAt((int) (Math.random() * 62));
        char 生成3 = chars.charAt((int) (Math.random() * 62));
        char 生成4 = chars.charAt((int) (Math.random() * 62));
        char 生成5 = chars.charAt((int) (Math.random() * 62));
        char 生成6 = chars.charAt((int) (Math.random() * 62));
        char 生成7 = chars.charAt((int) (Math.random() * 62));
        char 生成8 = chars.charAt((int) (Math.random() * 62));
        char 生成9 = chars.charAt((int) (Math.random() * 62));
        char 生成10 = chars.charAt((int) (Math.random() * 62));
        char 生成11 = chars.charAt((int) (Math.random() * 62));
        char 生成12 = chars.charAt((int) (Math.random() * 62));
        char 生成13 = chars.charAt((int) (Math.random() * 62));
        char 生成14 = chars.charAt((int) (Math.random() * 62));
        char 生成15 = chars.charAt((int) (Math.random() * 62));
        char 生成16 = chars.charAt((int) (Math.random() * 62));
        char 生成17 = chars.charAt((int) (Math.random() * 62));
        char 生成18 = chars.charAt((int) (Math.random() * 62));
        char 生成19 = chars.charAt((int) (Math.random() * 62));
        char 生成20 = chars.charAt((int) (Math.random() * 62));
        char 生成21 = chars.charAt((int) (Math.random() * 62));
        char 生成22 = chars.charAt((int) (Math.random() * 62));
        char 生成23 = chars.charAt((int) (Math.random() * 62));
        char 生成24 = chars.charAt((int) (Math.random() * 62));
        char 生成25 = chars.charAt((int) (Math.random() * 62));
        char 生成26 = chars.charAt((int) (Math.random() * 62));
        char 生成27 = chars.charAt((int) (Math.random() * 62));
        char 生成28 = chars.charAt((int) (Math.random() * 62));
        char 生成29 = chars.charAt((int) (Math.random() * 62));
        char 生成30 = chars.charAt((int) (Math.random() * 62));

        String 充值卡 = "DY" + 生成1 + "" + 生成2 + "" + 生成3 + "" + 生成4 + "" + 生成5 + "" + 生成6 + "" + 生成7 + "" + 生成8 + "" + 生成9 + "" + 生成10 + "" + 生成11 + "" + 生成12 + "" + 生成13 + "" + 生成14 + "" + 生成15 + "" + 生成16 + "" + 生成17 + "" + 生成18 + "" + 生成19 + "" + 生成20 + "" + 生成21 + "" + 生成22 + "" + 生成23 + "" + 生成24 + "" + 生成25 + "" + 生成26 + "" + 生成27 + "" + 生成28 + "" + 生成29 + "" + 生成30 + "";
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("INSERT INTO nxcodez ( code,leixing,valid) VALUES ( ?, ?, ?)");
            ps.setString(1, 充值卡);
            ps.setInt(2, 2);
            ps.setInt(3, 金额);
            ps.executeUpdate();
            FileoutputUtil.logToFile("充值卡后台库存/[" + CurrentReadable_Date() + "]" + 金额 + "充抵用券值卡.txt", "" + 充值卡 + "\r\n");
            刷新充值卡信息();
            输出 = "" + CurrentReadable_Date() + "/生成兑换卡成功，数额为 " + 金额 + " 抵用券，已经存放服务端根目录。";
        } catch (SQLException ex) {


        }
        printChatLog(输出);
    }

    private void 生成礼包1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_生成礼包1ActionPerformed
        boolean result1 = this.礼包编号.getText().matches("[0-9]+");
        if (礼包编号.getText().equals("") && !result1) {
            return;
        }
        生成礼包();
    }//GEN-LAST:event_生成礼包1ActionPerformed

    public void 生成礼包() {
        int 礼包 = Integer.parseInt(礼包编号.getText());
        String 输出 = "";
        String chars = "1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        char 生成1 = chars.charAt((int) (Math.random() * 62));
        char 生成2 = chars.charAt((int) (Math.random() * 62));
        char 生成3 = chars.charAt((int) (Math.random() * 62));
        char 生成4 = chars.charAt((int) (Math.random() * 62));
        char 生成5 = chars.charAt((int) (Math.random() * 62));
        char 生成6 = chars.charAt((int) (Math.random() * 62));
        char 生成7 = chars.charAt((int) (Math.random() * 62));
        char 生成8 = chars.charAt((int) (Math.random() * 62));
        char 生成9 = chars.charAt((int) (Math.random() * 62));
        char 生成10 = chars.charAt((int) (Math.random() * 62));
        char 生成11 = chars.charAt((int) (Math.random() * 62));
        char 生成12 = chars.charAt((int) (Math.random() * 62));
        char 生成13 = chars.charAt((int) (Math.random() * 62));
        char 生成14 = chars.charAt((int) (Math.random() * 62));
        char 生成15 = chars.charAt((int) (Math.random() * 62));
        char 生成16 = chars.charAt((int) (Math.random() * 62));
        char 生成17 = chars.charAt((int) (Math.random() * 62));
        char 生成18 = chars.charAt((int) (Math.random() * 62));
        char 生成19 = chars.charAt((int) (Math.random() * 62));
        char 生成20 = chars.charAt((int) (Math.random() * 62));
        char 生成21 = chars.charAt((int) (Math.random() * 62));
        char 生成22 = chars.charAt((int) (Math.random() * 62));
        char 生成23 = chars.charAt((int) (Math.random() * 62));
        char 生成24 = chars.charAt((int) (Math.random() * 62));
        char 生成25 = chars.charAt((int) (Math.random() * 62));
        char 生成26 = chars.charAt((int) (Math.random() * 62));
        char 生成27 = chars.charAt((int) (Math.random() * 62));
        char 生成28 = chars.charAt((int) (Math.random() * 62));
        char 生成29 = chars.charAt((int) (Math.random() * 62));
        char 生成30 = chars.charAt((int) (Math.random() * 62));

        String 充值卡 = "LB" + 生成1 + "" + 生成2 + "" + 生成3 + "" + 生成4 + "" + 生成5 + "" + 生成6 + "" + 生成7 + "" + 生成8 + "" + 生成9 + "" + 生成10 + "" + 生成11 + "" + 生成12 + "" + 生成13 + "" + 生成14 + "" + 生成15 + "" + 生成16 + "" + 生成17 + "" + 生成18 + "" + 生成19 + "" + 生成20 + "" + 生成21 + "" + 生成22 + "" + 生成23 + "" + 生成24 + "" + 生成25 + "" + 生成26 + "" + 生成27 + "" + 生成28 + "" + 生成29 + "" + 生成30 + "";
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("INSERT INTO nxcodez ( code,leixing,valid,itme) VALUES ( ?, ?, ?,?)");
            ps.setString(1, 充值卡);
            ps.setInt(2, 5);
            ps.setInt(3, 0);
            ps.setInt(4, 礼包);
            ps.executeUpdate();
            FileoutputUtil.logToFile("充值卡后台库存/[" + CurrentReadable_Date() + "]" + 礼包 + "礼包兑换卡.txt", "" + 充值卡 + "\r\n");
            刷新充值卡信息();
            输出 = "" + CurrentReadable_Date() + "/生成兑换卡成功，礼包为 " + 礼包 + " 号，已经存放服务端根目录。";
        } catch (SQLException ex) {

        }
        printChatLog(输出);
    }

    private void 生成点券充值卡2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_生成点券充值卡2ActionPerformed
        boolean result1 = this.点券充值卡金额.getText().matches("[0-9]+");
        if (点券充值卡金额.getText().equals("") && !result1) {
            return;
        }
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();
        生成自定义充值卡();// TODO add your handling code here:
    }//GEN-LAST:event_生成点券充值卡2ActionPerformed

    private void 生成抵用券充值卡2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_生成抵用券充值卡2ActionPerformed
        boolean result1 = this.抵用券充值卡金额.getText().matches("[0-9]+");
        if (抵用券充值卡金额.getText().equals("") && !result1) {
            return;
        }
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
        生成自定义充值卡2();
    }//GEN-LAST:event_生成抵用券充值卡2ActionPerformed

    private void 生成礼包10ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_生成礼包10ActionPerformed
        boolean result1 = this.礼包编号.getText().matches("[0-9]+");
        if (礼包编号.getText().equals("") && !result1) {
            return;
        }
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
        生成礼包();
    }//GEN-LAST:event_生成礼包10ActionPerformed

    private void 刷新充值卡信息ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新充值卡信息ActionPerformed
        刷新充值卡信息();
    }//GEN-LAST:event_刷新充值卡信息ActionPerformed

    private void 刷新充值卡信息1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_刷新充值卡信息1ActionPerformed
        打开充值卡库存文件夹();// TODO add your handling code here:
    }//GEN-LAST:event_刷新充值卡信息1ActionPerformed

    private void 修改神秘商人ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_修改神秘商人ActionPerformed
        boolean result1 = 神秘商人出现时间.getText().matches("[0-9]+");
        if (result1) {
            刷新神秘商人时间();
            JOptionPane.showMessageDialog(null, "修改成功，神秘商人出现时间变更为 " + 神秘商人出现时间.getText());
        }
    }//GEN-LAST:event_修改神秘商人ActionPerformed

    private void 神秘商人开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_神秘商人开关ActionPerformed
        按键开关("神秘商人开关", 2406);
        刷新神秘商人开关();
    }//GEN-LAST:event_神秘商人开关ActionPerformed

    private void 神秘商人出现时间ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_神秘商人出现时间ActionPerformed

    }//GEN-LAST:event_神秘商人出现时间ActionPerformed

    private void 野外通缉开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_野外通缉开关ActionPerformed
        按键开关("野外通缉开关", 2407);
        刷新野外通缉开关();
    }//GEN-LAST:event_野外通缉开关ActionPerformed

    private void 每日送货开关ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_每日送货开关ActionPerformed
        按键开关("每日送货开关", 2402);
        刷新每日送货开关();
    }//GEN-LAST:event_每日送货开关ActionPerformed

    private void 刷新每日送货开关() {

    }

    private void 刷新野外通缉开关() {

    }

    private void 刷新神秘商人开关() {

    }

    private void 刷新神秘商人时间() {
    }

    public void 按键开关(String a, int b) {

    }

    public static void 打开充值卡库存文件夹() {
        final Runtime runtime = Runtime.getRuntime();
        Process process = null;//
        Properties 設定檔 = System.getProperties();
        final String cmd = "rundll32 url.dll FileProtocolHandler file:" + 設定檔.getProperty("user.dir") + "\\充值卡后台库存";
        try {
            process = runtime.exec(cmd);
        } catch (final Exception e) {
            System.out.println("Error exec!");
        }
    }

    private void 刷新钓鱼() {
        for (int i = ((DefaultTableModel) (this.钓鱼物品.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.钓鱼物品.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM rm_fishing_reward");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 钓鱼物品.getModel()).insertRow(钓鱼物品.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        rs.getInt("itemid"),
                        rs.getInt("chance"),
                        rs.getString("name")
                        //MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                });
            }
        } catch (SQLException ex) {
        }
        钓鱼物品.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int i = 钓鱼物品.getSelectedRow();
                String a = 钓鱼物品.getValueAt(i, 0).toString();
                String a1 = 钓鱼物品.getValueAt(i, 1).toString();
                String a2 = 钓鱼物品.getValueAt(i, 2).toString();
                String a3 = 钓鱼物品.getValueAt(i, 3).toString();
                钓鱼物品序号.setText(a);
                钓鱼物品代码.setText(a1);
                钓鱼物品概率.setText(a2);
                钓鱼物品名称.setText(a3);
            }
        });
    }

    public void 刷新世界爆物() {
        for (int i = ((DefaultTableModel) (this.jTable2.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.jTable2.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            PreparedStatement ps = con.prepareStatement("SELECT * FROM drop_data_global WHERE itemid !=0");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {

                ((DefaultTableModel) jTable2.getModel()).insertRow(jTable2.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        rs.getInt("itemid"),
                        rs.getString("chance"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                });
            }
            jTable2.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    int i = jTable2.getSelectedRow();
                    String a = jTable2.getValueAt(i, 0).toString();
                    String a1 = jTable2.getValueAt(i, 1).toString();
                    String a2 = jTable2.getValueAt(i, 2).toString();
                    jTextField34.setText(a);
                    jTextField36.setText(a1);
                    jTextField37.setText(a2);
                }
            });

        } catch (SQLException ex) {
            System.err.println(ex);
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
        }
    }

    private void 刷新公告广播() {
        for (int i = ((DefaultTableModel) (this.广播信息.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.广播信息.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM 广播信息");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) 广播信息.getModel()).insertRow(广播信息.getRowCount(), new Object[]{
                        rs.getString("id"),
                        rs.getString("广播")
                });
            }
        } catch (SQLException ex) {
        }
        广播信息.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int i = 广播信息.getSelectedRow();
                String a = 广播信息.getValueAt(i, 0).toString();
                String a1 = 广播信息.getValueAt(i, 1).toString();
                广播序号.setText(a);
                广播文本.setText(a1);
            }
        });
    }

    public void 刷新商城数据() {
        for (int i = ((DefaultTableModel) (this.jTable3.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.jTable3.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE serial !=0");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) jTable3.getModel()).insertRow(jTable3.getRowCount(), new Object[]{
                        rs.getInt("serial"),
                        rs.getString("name"),
                        rs.getInt("discount_price"),
                        rs.getInt("showup"),
                        rs.getInt("itemid"),
                        rs.getInt("period"),
                        rs.getInt("gender"),
                        rs.getInt("count"),
                        rs.getInt("mod")
                });
            }
        } catch (SQLException ex) {
            System.err.println(ex);
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
        }
        jTable3.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int i = jTable3.getSelectedRow();
                String a = jTable3.getValueAt(i, 0).toString();
                String a1 = jTable3.getValueAt(i, 1).toString();
                String a2 = jTable3.getValueAt(i, 2).toString();
                String a3 = jTable3.getValueAt(i, 3).toString();
                String a4 = jTable3.getValueAt(i, 4).toString();
                String a5 = jTable3.getValueAt(i, 5).toString();
                String a6 = jTable3.getValueAt(i, 6).toString();
                String a7 = jTable3.getValueAt(i, 7).toString();
                String a8 = jTable3.getValueAt(i, 8).toString();

                jTextField35.setText(a);
                jTextField38.setText(a1);
                jTextField39.setText(a2);
                jTextField40.setText(a3);
                jTextField41.setText(a4);
                jTextField42.setText(a5);
                jTextField43.setText(a6);
                jTextField44.setText(a7);
                jTextField45.setText(a8);

                //怪物爆物物品名称.setText(a4);
            }
        });
    }

    public void 刷新指定怪物爆物() {
        boolean result = this.jTextField31.getText().matches("[0-9]+");
        if (result) {
            if (Integer.parseInt(this.jTextField31.getText()) < 0) {
                JOptionPane.showMessageDialog(null, "请填写正确的值");
            }
            for (int i = ((DefaultTableModel) (this.jTable1.getModel())).getRowCount() - 1; i >= 0; i--) {
                ((DefaultTableModel) (this.jTable1.getModel())).removeRow(i);
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM drop_data WHERE dropperid =  " + Integer.parseInt(this.jTextField28.getText()) + "");
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {
                    ((DefaultTableModel) jTable1.getModel()).insertRow(jTable1.getRowCount(), new Object[]{rs.getInt("id"), rs.getInt("dropperid"), rs.getInt("itemid"), rs.getInt("chance"), MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))});
                }
            } catch (SQLException ex) {
                System.err.println(ex);
                FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
            }
            jTable1.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    int i = jTable1.getSelectedRow();
                    String a = jTable1.getValueAt(i, 0).toString();
                    String a1 = jTable1.getValueAt(i, 1).toString();
                    String a2 = jTable1.getValueAt(i, 2).toString();
                    String a3 = jTable1.getValueAt(i, 3).toString();
                    String a4 = jTable1.getValueAt(i, 4).toString();
                    jTextField27.setText(a);
                    jTextField28.setText(a1);
                    jTextField29.setText(a2);
                    jTextField30.setText(a3);
                }
            });
        } else {
            JOptionPane.showMessageDialog(null, "请输入要查询的怪物代码 ");
        }
    }

    public void 刷新怪物爆物() {
        for (int i = ((DefaultTableModel) (this.jTable1.getModel())).getRowCount() - 1; i >= 0; i--) {
            ((DefaultTableModel) (this.jTable1.getModel())).removeRow(i);
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = null;
            ResultSet rs = null;
            ps = con.prepareStatement("SELECT * FROM drop_data WHERE itemid !=0");
            rs = ps.executeQuery();
            while (rs.next()) {
                ((DefaultTableModel) jTable1.getModel()).insertRow(jTable1.getRowCount(), new Object[]{
                        rs.getInt("id"),
                        rs.getInt("dropperid"),
                        //MapleLifeFactory.getMonster(rs.getInt("dropperid")),
                        rs.getInt("itemid"),
                        rs.getInt("chance"),
                        MapleItemInformationProvider.getInstance().getName(rs.getInt("itemid"))
                });
            }
        } catch (SQLException ex) {
            System.err.println(ex);
            FileoutputUtil.outError(FileoutputUtil.DataBase_Error, ex);
        }
        jTable1.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int i = jTable1.getSelectedRow();
                String a = jTable1.getValueAt(i, 0).toString();
                String a1 = jTable1.getValueAt(i, 1).toString();
                String a2 = jTable1.getValueAt(i, 2).toString();
                String a3 = jTable1.getValueAt(i, 3).toString();
                //String a4 = 怪物爆物.getValueAt(i, 4).toString();
                jTextField27.setText(a);
                jTextField28.setText(a1);
                jTextField29.setText(a2);
                jTextField30.setText(a3);
                //怪物爆物物品名称.setText(a4);

            }
        });
    }

    private void ChangePassWord() {
        String account = jTextField24.getText();
        String password = jTextField25.getText();

        if (password.length() > 12) {
            JOptionPane.showMessageDialog(null, "密码过长");
            return;
        }
        if (!AutoRegister.getAccountExists(account)) {
            JOptionPane.showMessageDialog(null, "账号不存在");
            return;
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps;

            ps = con.prepareStatement("Update accounts set password = ? Where name = ?");
            ps.setString(1, LoginCrypto.hexSha1(password));
            ps.setString(2, account);
            ps.execute();
            ps.close();
        } catch (Exception ex) {
            FileoutputUtil.outputFileError("日志/数据库异常.txt", ex);
            JOptionPane.showMessageDialog(null, "错误!\r\n" + ex);
        }
        printChatLog("更改账号: " + account + "的密码为 " + password);
    }

    private static ScheduledFuture<?> ts = null;
    private int minutesLeft = 0;
    private static Thread t = null;

    private void 重启服务器() {
        try {
            String 输出 = "关闭服务器倒数时间";
            minutesLeft = Integer.parseInt(jTextField22.getText());
            if (ts == null && (t == null || !t.isAlive())) {
                t = new Thread(ShutdownServer.getInstance());
                ts = Timer.EventTimer.getInstance().register(new Runnable() {

                    @Override
                    public void run() {
                        if (minutesLeft == 0) {
                            ShutdownServer.getInstance().shutdown();
                            t.start();
                            ts.cancel(false);
                            return;
                        }
                        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, "服务器將在 " + minutesLeft + "分钟后关闭. 请尽快关闭雇佣商人安全下线."));
                        System.out.println("服务器將在 " + minutesLeft + "分钟后关闭.");
                        minutesLeft--;
                    }
                }, 60000);
            }
            jTextField22.setText("关闭服务器倒数时间");
            printChatLog(输出);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + e);
        }
    }

    private void 给全服点卷() {
        try {
            int 数量;
            if ("输入数量".equals(jTextField20.getText())) {
                数量 = 0;
            } else {
                数量 = Integer.parseInt(jTextField20.getText());
            }

            int 类型;
            if ("1点卷/2抵用/3金币/4经验".equals(jTextField21.getText())) {
                类型 = 0;
            } else {
                类型 = Integer.parseInt(jTextField21.getText());
            }
            if (数量 <= 0 || 类型 <= 0) {
                return;
            }
            String 输出 = "";
            int ret = 0;
            if (类型 == 1 || 类型 == 2) {
                for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                    for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                        mch.modifyCSPoints(类型, 数量);
                        String cash = null;
                        if (类型 == 1) {
                            cash = "点卷";
                        } else if (类型 == 2) {
                            cash = "抵用卷";
                        }
                        mch.startMapEffect("管理员发放" + 数量 + cash + "给在线的所有玩家！快感谢管理员吧！", 5121009);
                        ret++;
                    }
                }
            } else if (类型 == 3) {
                for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                    for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                        // mch.modifyCSPoints(类型, 数量);
                        mch.gainMeso(数量, true);
                        mch.startMapEffect("管理员发放" + 数量 + "冒险币给在线的所有玩家！快感谢管理员吧！", 5121009);
                        ret++;
                    }
                }
            } else if (类型 == 4) {
                for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                    for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                        mch.gainExp(数量, true, false, true);
                        mch.startMapEffect("管理员发放" + 数量 + "经验给在线的所有玩家！快感谢管理员吧！", 5121009);
                        ret++;
                    }
                }
            }
            String 类型A = "";
            if (类型 == 1) {
                类型A = "点卷";
            } else if (类型 == 2) {
                类型A = "抵用卷";
            } else if (类型 == 3) {
                类型A = "金币";
            } else if (类型 == 4) {
                类型A = "经验";
            }
            输出 = "一个发放[" + 数量 * ret + "]." + 类型A + "!一共发放给了" + ret + "人！";
            jTextField20.setText("输入数量");
            jTextField21.setText("1点卷/2抵用/3金币/4经验");
            printChatLog(输出);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + e);
        }
    }

    private void 刷物品() {
        try {
            String 名字;
            if ("玩家名字".equals(jTextField3.getText())) {
                名字 = "";
            } else {
                名字 = jTextField3.getText();
            }

            int 物品ID;
            if ("物品ID".equals(jTextField4.getText())) {
                物品ID = 0;
            } else {
                物品ID = Integer.parseInt(jTextField4.getText());
            }

            int 数量;
            if ("数量".equals(jTextField5.getText())) {
                数量 = 0;
            } else {
                数量 = Integer.parseInt(jTextField5.getText());
            }

            int 力量;
            if ("力量".equals(jTextField6.getText())) {
                力量 = 0;
            } else {
                力量 = Integer.parseInt(jTextField6.getText());
            }

            int 敏捷;
            if ("敏捷".equals(jTextField7.getText())) {
                敏捷 = 0;
            } else {
                敏捷 = Integer.parseInt(jTextField7.getText());
            }

            int 智力;
            if ("智力".equals(jTextField8.getText())) {
                智力 = 0;
            } else {
                智力 = Integer.parseInt(jTextField8.getText());
            }

            int 运气;
            if ("运气".equals(jTextField9.getText())) {
                运气 = 0;
            } else {
                运气 = Integer.parseInt(jTextField9.getText());
            }

            int HP;
            if ("HP设置".equals(jTextField10.getText())) {
                HP = 0;
            } else {
                HP = Integer.parseInt(jTextField10.getText());
            }

            int MP;
            if ("MP设置".equals(jTextField11.getText())) {
                MP = 0;
            } else {
                MP = Integer.parseInt(jTextField11.getText());
            }
            int 可加卷次数;
            if ("加卷次数".equals(jTextField12.getText())) {
                可加卷次数 = 0;
            } else {
                可加卷次数 = Integer.parseInt(jTextField12.getText());
            }

            String 制作人名字;
            if ("制作人".equals(jTextField13.getText())) {
                制作人名字 = "";
            } else {
                制作人名字 = jTextField13.getText();
            }

            int 给予时间;
            if ("给予物品时间".equals(jTextField14.getText())) {
                给予时间 = 0;
            } else {
                给予时间 = Integer.parseInt(jTextField14.getText());
            }

            String 是否可以交易 = jTextField15.getText();

            int 攻击力;
            if ("攻击力".equals(jTextField16.getText())) {
                攻击力 = 0;
            } else {
                攻击力 = Integer.parseInt(jTextField16.getText());
            }

            int 魔法力;
            if ("魔法力".equals(jTextField17.getText())) {
                魔法力 = 0;
            } else {
                魔法力 = Integer.parseInt(jTextField17.getText());
            }

            int 物理防御;
            if ("物理防御".equals(jTextField18.getText())) {
                物理防御 = 0;
            } else {
                物理防御 = Integer.parseInt(jTextField18.getText());
            }

            int 魔法防御;
            if ("魔法防御".equals(jTextField19.getText())) {
                魔法防御 = 0;
            } else {
                魔法防御 = Integer.parseInt(jTextField19.getText());
            }
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            MapleInventoryType type = GameConstants.getInventoryType(物品ID);
            String 输出A = "";
            String 输出 = "玩家名字：" + 名字
                    + " 物品ID：" + 物品ID
                    + " 数量：" + 数量
                    + " 力量:" + 力量
                    + " 敏捷:" + 敏捷
                    + " 智力:" + 智力
                    + " 运气:" + 运气
                    + " HP:" + HP
                    + " MP:" + MP
                    + " 可加卷次数:" + 可加卷次数
                    + " 制作人名字:" + 制作人名字
                    + " 给予时间:" + 给予时间
                    + " 是否可以交易:" + 是否可以交易
                    + " 攻击力:" + 攻击力
                    + " 魔法力:" + 魔法力
                    + " 物理防御:" + 物理防御
                    + " 魔法防御:" + 魔法防御 + "\r\n";
            for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                    if (mch.getName().equals(名字)) {
                        if (数量 >= 0) {
                            if (!MapleInventoryManipulator.checkSpace(mch.getClient(), 物品ID, 数量, "")) {
                                return;
                            }
                            if (type.equals(MapleInventoryType.EQUIP) && !GameConstants.isThrowingStar(物品ID) && !GameConstants.isBullet(物品ID)
                                    || type.equals(MapleInventoryType.CASH) && 物品ID >= 5000000 && 物品ID <= 5001000) {
                                final Equip item = (Equip) (ii.getEquipById(物品ID));
                                if (ii.isCash(物品ID)) {
                                    item.setUniqueId(1);
                                }
                                if (力量 > 0 && 力量 <= 32767) {
                                    item.setStr((short) (力量));
                                }
                                if (敏捷 > 0 && 敏捷 <= 32767) {
                                    item.setDex((short) (敏捷));
                                }
                                if (智力 > 0 && 智力 <= 32767) {
                                    item.setInt((short) (智力));
                                }
                                if (运气 > 0 && 运气 <= 32767) {
                                    item.setLuk((short) (运气));
                                }
                                if (攻击力 > 0 && 攻击力 <= 32767) {
                                    item.setWatk((short) (攻击力));
                                }
                                if (魔法力 > 0 && 魔法力 <= 32767) {
                                    item.setMatk((short) (魔法力));
                                }
                                if (物理防御 > 0 && 物理防御 <= 32767) {
                                    item.setWdef((short) (物理防御));
                                }
                                if (魔法防御 > 0 && 魔法防御 <= 32767) {
                                    item.setMdef((short) (魔法防御));
                                }
                                if (HP > 0 && HP <= 30000) {
                                    item.setHp((short) (HP));
                                }
                                if (MP > 0 && MP <= 30000) {
                                    item.setMp((short) (MP));
                                }
                                if ("可以交易".equals(是否可以交易)) {
                                    byte flag = item.getFlag();
                                    if (item.getType() == MapleInventoryType.EQUIP.getType()) {
                                        flag |= ItemFlag.KARMA_EQ.getValue();
                                    } else {
                                        flag |= ItemFlag.KARMA_USE.getValue();
                                    }
                                    item.setFlag(flag);
                                }
                                if (给予时间 > 0) {
                                    item.setExpiration(System.currentTimeMillis() + (给予时间 * 24 * 60 * 60 * 1000));
                                }
                                if (可加卷次数 > 0) {
                                    item.setUpgradeSlots((byte) (可加卷次数));
                                }
                                if (制作人名字 != null) {
                                    item.setOwner(制作人名字);
                                }
                                final String name = ii.getName(物品ID);
                                if (物品ID / 10000 == 114 && name != null && name.length() > 0) { //medal
                                    final String msg = "你已获得称号 <" + name + ">";
                                    mch.getClient().getPlayer().dropMessage(5, msg);
                                    mch.getClient().getPlayer().dropMessage(5, msg);
                                }
                                MapleInventoryManipulator.addbyItem(mch.getClient(), item.copy());
                            } else {
                                MapleInventoryManipulator.addById(mch.getClient(), 物品ID, (short) 数量, "", null, 给予时间);
                            }
                        } else {
                            MapleInventoryManipulator.removeById(mch.getClient(), GameConstants.getInventoryType(物品ID), 物品ID, -数量, true, false);
                        }
                        mch.getClient().sendPacket(MaplePacketCreator.getShowItemGain(物品ID, (short) 数量, true));
                        输出A = "[刷物品]:" + 输出;
                    }
                }
            }
            jTextField3.setText("玩家名字");
            jTextField4.setText("物品ID");
            jTextField5.setText("数量");
            jTextField6.setText("力量");
            jTextField7.setText("敏捷");
            jTextField8.setText("智力");
            jTextField9.setText("运气");
            jTextField10.setText("HP设置");
            jTextField11.setText("MP设置");
            jTextField12.setText("加卷次数");
            jTextField13.setText("制作人");
            jTextField14.setText("给予物品时间");
            jTextField15.setText("可以交易");
            jTextField16.setText("攻击力");
            jTextField17.setText("魔法力");
            jTextField18.setText("物理防御");
            jTextField19.setText("魔法防御");
            printChatLog(输出A);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + e);
        }
    }

    private void printChatLog(String str) {
        chatLog.setText(chatLog.getText() + str + "\r\n");
    }

    private void sendNoticeGG() {
        try {
            String str = jTextField2.getText();
            String 输出 = "";
            for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
                for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                    mch.startMapEffect(str, 5121009);
                    输出 = "[公告]:" + str;
                }
            }
            jTextField2.setText("");
            printChatLog(输出);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + e);
        }
    }

    private void FixAcLogged() {
        try (Connection dcon = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = dcon.prepareStatement("UPDATE accounts SET loggedin = 0 WHERE name = " + jTextField23.getText())) {
                ps.executeUpdate();
            }
            printChatLog("解除卡账号" + jTextField23.getText());
            jTextField23.setText("");
        } catch (SQLException ex) {
            FileoutputUtil.outputFileError("日志/数据库异常.txt", ex);
        }
    }

    private void sendNotice(int type) {
        try {
            String str = jTextField1.getText();
            byte[] p = null;
            String 输出 = "";
            if (type == 0) {
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                        try {

                            if (chr.getName().equals(str) && chr.getMapId() != 0) {

                                chr.getClient().disconnect(true, false);
                                cserv.removePlayer(chr.getId(), chr.getName());
                                chr.getClient().getSession().close();
                                输出 = "[解卡系统] 成功断开" + str + "玩家！";
                            } else {
                                输出 = "[解卡系统] 玩家名字输入错误或者该玩家没有在线！";
                            }
                        } catch (Exception ex) {
                        }
                    }
                }
            }
            jTextField1.setText("");
            printChatLog(输出);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "错误!\r\n" + e);
        }
    }

    /**
     * @param args the command line arguments
     */


    // Variables declaration - do not modify//GEN-BEGIN:variables

    private javax.swing.JTextPane chatLog;
    private java.awt.Checkbox checkbox1;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton10;
    private javax.swing.JButton jButton11;
    private javax.swing.JButton jButton12;
    private javax.swing.JButton jButton13;
    private javax.swing.JButton jButton14;
    private javax.swing.JButton jButton15;
    private javax.swing.JButton jButton16;
    private javax.swing.JButton jButton17;
    private javax.swing.JButton jButton18;
    private javax.swing.JButton jButton19;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton20;
    private javax.swing.JButton jButton21;
    private javax.swing.JButton jButton22;
    private javax.swing.JButton jButton23;
    private javax.swing.JButton jButton24;
    private javax.swing.JButton jButton25;
    private javax.swing.JButton jButton26;
    private javax.swing.JButton jButton27;
    private javax.swing.JButton jButton28;
    private javax.swing.JButton jButton29;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton30;
    private javax.swing.JButton jButton31;
    private javax.swing.JButton jButton32;
    private javax.swing.JButton jButton34;
    private javax.swing.JButton jButton35;
    private javax.swing.JButton jButton36;
    private javax.swing.JButton jButton37;
    private javax.swing.JButton jButton38;
    private javax.swing.JButton jButton39;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JButton jButton6;
    private javax.swing.JButton jButton7;
    private javax.swing.JButton jButton8;
    private javax.swing.JButton jButton9;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel15;
    private javax.swing.JLabel jLabel16;
    private javax.swing.JLabel jLabel17;
    private javax.swing.JLabel jLabel18;
    private javax.swing.JLabel jLabel19;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel20;
    private javax.swing.JLabel jLabel21;
    private javax.swing.JLabel jLabel22;
    private javax.swing.JLabel jLabel221;
    private javax.swing.JLabel jLabel222;
    private javax.swing.JLabel jLabel223;
    private javax.swing.JLabel jLabel23;
    private javax.swing.JLabel jLabel24;
    private javax.swing.JLabel jLabel25;
    private javax.swing.JLabel jLabel26;
    private javax.swing.JLabel jLabel263;
    private javax.swing.JLabel jLabel268;
    private javax.swing.JLabel jLabel269;
    private javax.swing.JLabel jLabel27;
    private javax.swing.JLabel jLabel270;
    private javax.swing.JLabel jLabel271;
    private javax.swing.JLabel jLabel272;
    private javax.swing.JLabel jLabel273;
    private javax.swing.JLabel jLabel274;
    private javax.swing.JLabel jLabel275;
    private javax.swing.JLabel jLabel276;
    private javax.swing.JLabel jLabel277;
    private javax.swing.JLabel jLabel278;
    private javax.swing.JLabel jLabel279;
    private javax.swing.JLabel jLabel28;
    private javax.swing.JLabel jLabel280;
    private javax.swing.JLabel jLabel281;
    private javax.swing.JLabel jLabel282;
    private javax.swing.JLabel jLabel29;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel30;
    private javax.swing.JLabel jLabel31;
    private javax.swing.JLabel jLabel32;
    private javax.swing.JLabel jLabel33;
    private javax.swing.JLabel jLabel34;
    private javax.swing.JLabel jLabel343;
    private javax.swing.JLabel jLabel35;
    private javax.swing.JLabel jLabel36;
    private javax.swing.JLabel jLabel37;
    private javax.swing.JLabel jLabel38;
    private javax.swing.JLabel jLabel39;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel40;
    private javax.swing.JLabel jLabel41;
    private javax.swing.JLabel jLabel42;
    private javax.swing.JLabel jLabel43;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel10;
    private javax.swing.JPanel jPanel11;
    private javax.swing.JPanel jPanel12;
    private javax.swing.JPanel jPanel13;
    private javax.swing.JPanel jPanel14;
    private javax.swing.JPanel jPanel15;
    private javax.swing.JPanel jPanel16;
    private javax.swing.JPanel jPanel17;
    private javax.swing.JPanel jPanel19;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel20;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JPanel jPanel5;
    private javax.swing.JPanel jPanel6;
    private javax.swing.JPanel jPanel7;
    private javax.swing.JPanel jPanel8;
    private javax.swing.JPanel jPanel9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane10;
    private javax.swing.JScrollPane jScrollPane14;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JScrollPane jScrollPane3;
    private javax.swing.JScrollPane jScrollPane4;
    private javax.swing.JScrollPane jScrollPane5;
    private javax.swing.JScrollPane jScrollPane6;
    private javax.swing.JScrollPane jScrollPane7;
    private javax.swing.JScrollPane jScrollPane8;
    private javax.swing.JScrollPane jScrollPane81;
    private javax.swing.JScrollPane jScrollPane9;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTabbedPane jTabbedPane10;
    private javax.swing.JTabbedPane jTabbedPane11;
    private javax.swing.JTabbedPane jTabbedPane2;
    private javax.swing.JTabbedPane jTabbedPane3;
    private javax.swing.JTabbedPane jTabbedPane4;
    private javax.swing.JTabbedPane jTabbedPane5;
    private javax.swing.JTabbedPane jTabbedPane6;
    private javax.swing.JTabbedPane jTabbedPane7;
    private javax.swing.JTabbedPane jTabbedPane8;
    private javax.swing.JTabbedPane jTabbedPane9;
    private javax.swing.JTable jTable1;
    private javax.swing.JTable jTable2;
    private javax.swing.JTable jTable3;
    private javax.swing.JTextArea jTextArea1;
    private javax.swing.JTextArea jTextArea2;
    private javax.swing.JTextField jTextField1;
    private javax.swing.JTextField jTextField10;
    private javax.swing.JTextField jTextField11;
    private javax.swing.JTextField jTextField12;
    private javax.swing.JTextField jTextField13;
    private javax.swing.JTextField jTextField14;
    private javax.swing.JTextField jTextField15;
    private javax.swing.JTextField jTextField16;
    private javax.swing.JTextField jTextField17;
    private javax.swing.JTextField jTextField18;
    private javax.swing.JTextField jTextField19;
    private javax.swing.JTextField jTextField2;
    private javax.swing.JTextField jTextField20;
    private javax.swing.JTextField jTextField21;
    private javax.swing.JTextField jTextField22;
    private javax.swing.JTextField jTextField23;
    private javax.swing.JTextField jTextField24;
    private javax.swing.JTextField jTextField25;
    private javax.swing.JTextField jTextField26;
    private javax.swing.JTextField jTextField27;
    private javax.swing.JTextField jTextField28;
    private javax.swing.JTextField jTextField29;
    private javax.swing.JTextField jTextField3;
    private javax.swing.JTextField jTextField30;
    private javax.swing.JTextField jTextField31;
    private javax.swing.JTextField jTextField32;
    private javax.swing.JTextField jTextField33;
    private javax.swing.JTextField jTextField34;
    private javax.swing.JTextField jTextField35;
    private javax.swing.JTextField jTextField36;
    private javax.swing.JTextField jTextField37;
    private javax.swing.JTextField jTextField38;
    private javax.swing.JTextField jTextField39;
    private javax.swing.JTextField jTextField4;
    private javax.swing.JTextField jTextField40;
    private javax.swing.JTextField jTextField41;
    private javax.swing.JTextField jTextField42;
    private javax.swing.JTextField jTextField43;
    private javax.swing.JTextField jTextField44;
    private javax.swing.JTextField jTextField45;
    private javax.swing.JTextField jTextField46;
    private javax.swing.JTextField jTextField5;
    private javax.swing.JTextField jTextField6;
    private javax.swing.JTextField jTextField7;
    private javax.swing.JTextField jTextField8;
    private javax.swing.JTextField jTextField9;
    private javax.swing.JButton 修改其他等级上限;
    private javax.swing.JButton 修改反应堆物品;
    private javax.swing.JButton 修改商品;
    private javax.swing.JButton 修改广播;
    private javax.swing.JButton 修改服务端最大人数;
    private javax.swing.JButton 修改神秘商人;
    private javax.swing.JButton 修改角色数量;
    private javax.swing.JButton 修改钓鱼物品;
    private javax.swing.JButton 修改骑士团等级上限;
    private javax.swing.JTable 充值卡信息;
    private javax.swing.JTextField 其他等级上限;
    private javax.swing.JButton 删除反应堆物品1;
    private javax.swing.JButton 删除商品;
    private javax.swing.JButton 删除广播;
    private javax.swing.JButton 删除道具;
    private javax.swing.JButton 删除道具4;
    private javax.swing.JButton 删除钓鱼物品;
    private javax.swing.JButton 刷新充值卡信息;
    private javax.swing.JButton 刷新充值卡信息1;
    private javax.swing.JButton 刷新广播;
    private javax.swing.JButton 刷新钓鱼物品;
    private javax.swing.JTable 反应堆;
    private javax.swing.JTextField 反应堆代码;
    private javax.swing.JTextField 反应堆序列号;
    private javax.swing.JTextField 反应堆概率;
    private javax.swing.JTextField 反应堆物品;
    private javax.swing.JButton 发布广播;
    private javax.swing.JTextField 商品名称;
    private javax.swing.JTextField 商品售价金币;
    private javax.swing.JTextField 商品序号;
    private javax.swing.JTextField 商品物品代码;
    private javax.swing.JTextField 商店代码;
    private javax.swing.JTable 广播信息;
    private javax.swing.JTextField 广播序号;
    private javax.swing.JTextField 广播文本;
    private javax.swing.JTextField 抵用券充值卡金额;
    private javax.swing.JButton 新增反应堆物品;
    private javax.swing.JButton 新增商品;
    private javax.swing.JButton 新增钓鱼物品;
    private javax.swing.JTextField 服务端最大人数;
    private javax.swing.JTextField 查找反应堆掉落;
    private javax.swing.JTextField 查找物品;
    private javax.swing.JButton 查找道具;
    private javax.swing.JButton 查找道具4;
    private javax.swing.JTextField 查询商店;
    private javax.swing.JButton 查询商店2;
    private javax.swing.JButton 每日送货开关;
    private javax.swing.JTable 游戏商店2;
    private javax.swing.JTable 游戏道具;
    private javax.swing.JTextField 游戏道具代码;
    private javax.swing.JTextField 点券充值卡金额;
    private javax.swing.JButton 生成抵用券充值卡1;
    private javax.swing.JButton 生成抵用券充值卡2;
    private javax.swing.JButton 生成点券充值卡1;
    private javax.swing.JButton 生成点券充值卡2;
    private javax.swing.JButton 生成礼包1;
    private javax.swing.JButton 生成礼包10;
    private javax.swing.JTextField 礼包编号;
    private javax.swing.JTextField 神秘商人出现时间;
    private javax.swing.JButton 神秘商人开关;
    private javax.swing.JButton 野外通缉开关;
    private javax.swing.JTable 钓鱼物品;
    private javax.swing.JTextField 钓鱼物品代码;
    private javax.swing.JTextField 钓鱼物品名称;
    private javax.swing.JTextField 钓鱼物品序号;
    private javax.swing.JTextField 钓鱼物品概率;
    private javax.swing.JTextField 限制创建角色数量;
    private javax.swing.JTextField 骑士团等级上限;
    // End of variables declaration//GEN-END:variables
}
