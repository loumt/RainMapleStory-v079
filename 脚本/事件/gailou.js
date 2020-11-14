var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
	while (nextTime <= java.lang.System.currentTimeMillis()) {
			nextTime += 1000 * 60 * 1; //���ö�ÿ��� 1���� ��д1����1����ô ����ʲô
			//nextTime += 1000 * 60 * 60 * 6; //���ö�ÿ��� 12Сʱ
	}
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 30; //���ö�ý���
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
      // em.serverNotice("12333333333333333333333333333333333333");  
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
      // em.serverNotice("[��¥�]��[��¥�] ��Ѿ�������ÿ��8�㿪�������λδ�������н����������ٽ�������");
    } else {
       //em.serverNotice("[��¥�]��[��¥�] ���λ���н����Ѿ����ţ��´λ����ÿ��8�㿪����ϣ����һ����μӡ�");


    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function getMaxCheck(type) {
    switch (type) {
    case 0:
        return 6666;
    case 1:
        return 8888;
    case 2:
        return 9999;
    }
    return 9999;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}