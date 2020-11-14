var jobname;

function action(mode, type, selection) {
    if (cm.getJob() == 132) {
        jobname = "弒龍騎士"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 112) {
        jobname = "最強英雄"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 122) {
        jobname = "聖之騎士"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 212) {
        jobname = "火毒魔導師"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 222) {
        jobname = "冰雷魔導師"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 232) {
        jobname = "神の主教"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 312) {
        jobname = "萬箭之王"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 322) {
        jobname = "箭神"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 412) {
        jobname = "隱之王"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 422) {
        jobname = "弒神者"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 512) {
        jobname = "金色閃光"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 522) {
        jobname = "大船長"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else if (cm.getJob() == 2112) {
        jobname = "戰鬥之神"
        cm.喇叭(1, jobname + "：[" + cm.getName() + "]出现了。");
        cm.dispose();
    } else {
        // jobname="奇葩"
        cm.dispose();
    }
    // jobname="的"//cm.worldMessage(6,"玩家：["+cm.getName()+"]完、");
    //	cm.喇叭(1,jobname+"：["+cm.getName()+"]出现了。");
    cm.dispose();
}