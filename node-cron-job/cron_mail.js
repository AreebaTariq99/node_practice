
const nodemailer = require('nodemailer');
// Run mail at specific time
const schedule = require('node-schedule');
// ...

// Create mail transporter.
let transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      user: 'areeba.tariq@invozone.com',
      pass: 'pass'
    }
  });
const d = new Date(Date.now());
d.setSeconds(40);
// console.log('job run at time',d);
schedule.scheduleJob(d,() =>{
    console.log('job run at time',d);
    console.log('---------------------');
  console.log('Running Cron Job');

  let messageOptions = {
    from: 'areeba.tariq@invozone.com',
    to: 'raoareeba2000@gmail.com',
    subject: 'Scheduled Email',
    text: 'Hi there. This email was automatically sent by us.'
  };

  transporter.sendMail(messageOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email successfully sent!');
    }
  });
    
})
