/* 
to send email from server first you have to =>use 2-step verification and generate app password
instead of using  password use app password of gmail
for this go to the ->manage your  account ->security setting and enable 2-step verification

*/

import nodemailer from "nodemailer";
/* 
import {emailHost,fromEmail,fromPassword}from "../config/config.js";
the main thing in the file is  trasporterInfo and mailInfo
neglet other part

FROM_EMAIL=email here
FROM_PASSWORD=password here
EMAIL_HOST=smtp.gmail.com
transporterInfo gives from information while mailInfo gives to info

*/

let transporterInfo = {
  //host:emailHost,

  host: "smtp.gmail.com",
  //if from is gmail smtp

  port: 587,
  secure: false,
  //auth user and pass play the role
  auth: {
    // note user and pass most be genuine
    //it is the email through which email is send
    user: "mail@gmail.com",
    pass: "pass/appPass",

    // instead of using your password use app password of google
    //for this go to the => manage your account =>security  setting and =>enable 2-step
  },
};

export let sendMail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo); //transporter gives
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

/* login
email
password
 */
