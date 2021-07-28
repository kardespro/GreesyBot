const db = require("quick.db");
const fs = require("fs");
const moment = require("moment");
class Database {
  static load(minute){
    if(!minute) return "Please Write Minute String";
  setInterval(function(){
    const backup = () => {
    fs.copyFile('./json.sqlite', `./backups/yedekleme • ${moment().format('D-M-YYYY • H.mm.ss')} • greesy.sqlite`, err => {
        if (err) return console.log(err);
        console.log('Veritabanını yedekledim.');
    });
};
  }, minute);
    return "Veritabanını Yükledim [ENG] Database Loaded.";
  }
  }
module.exports = Database;