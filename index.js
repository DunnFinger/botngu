const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require('express');
const path = require('path');
const chalk = require('chalkercli');
const chalk1 = require('chalk');
const CFonts = require('cfonts');
const app = express();
const port = process.env.PORT || 2006;
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '/index.html'));

});

app.listen(port);

const rainbow = chalk.rainbow(`\n\n\n`).stop();
rainbow.render();
const frame = rainbow.frame(); 
console.log(frame);
logger("Your version is the latest!", "UPDATE");


function startBot(message) {
    (message) ? logger(message, "BOT ĐANG KHỞI ĐỘNG") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

   child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
axios.get("https://raw.githubusercontent.com/tandung1/Bot12/main/package.json").then((res) => {
    //logger(res['data']['name'], "[ TÊN PR0JECT ]");
    //logger("Version: " + res['data']['version'], "[ PHIÊN BẢN ]");
    //logger(res['data']['description'], "[ LƯU Ý ]");
})
setTimeout(async function () {
//CFonts.say('Maris v3', {
    //font: 'block',
      //align: 'center',
  //gradient: ['red', 'magenta']
    //})
//CFonts.say(`Bot Messenger Created By Vtuan`, {
    //font: 'console',
    //align: 'center',
    //gradient: ['red', 'magenta']
    //})
  //CFonts.say('Vtuan\n', {
    //font: 'block',
      //align: 'center',
  //gradient: ['red', 'magenta']
    //})

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);

  logger('Bắt đầu load source code', 'LOAD')
  startBot()
}, 70)