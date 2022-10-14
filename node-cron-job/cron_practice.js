const cron = require('node-cron');
// Run at specific  internal 

// cron.schedule('* * * * *', function() {
//     console.log('running a task every minute');
//   });
// Run at specific time 
const schedule = require('node-schedule');
const d = new Date();
d.setSeconds(5);
schedule.scheduleJob(d,() =>{
    console.log('job run at time',d);
})

