const schedule = require('node-schedule');

let scheduleObj = null;

const set = (s) => {
  var rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = s.dayOfWeek; //목요일, 금요일
  rule.hour = s.hour;
  rule.minute = s.minute;

  var job = schedule.scheduleJob(rule, function () {
    console.log('Scheduler has executed!');
  });

  scheduleObj = job;
};

const cancel = () => {
  if (scheduleObj != null) {
    scheduleObj.cancel();
  }
};

const setScheduler = (s) => {
  cancel();
  set(s);
};

const scheduleData = {
  dayOfWeek: [4, 5],
  hour: 18,
  minute: 21
};

setScheduler(scheduleData);