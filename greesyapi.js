const requ = require("request");
const db = require("quick.db");
class greesy {
  constructor(key){
    this.greesyAuth = key;
    return key;
  }
  static config(key){
    if(key == "key"){
   return  this.greesyAuth;
      }
  }
  static promoKod(kod){
    if(!kod) return "Kod Belirt";
    var result = requ(`https://hyper-gusty-node.glitch.me/api/v1/promocode/check/${kod}/`);
    return result;
    }
  static premiumCheck(kullid){
    if(!kullid) return new TypeError("Kullanici id belirtmedin");
    var resDB = db.fetch(`abonelik_${kullid}`);
    return resDB;
    }
  static bakimCheck(){
    var resBakim = db.fetch(`bakim`);
    return resBakim;
    }
  static bakim(tool){
    if(!tool) return new TypeError("ac / kapat Yaz");
    if(tool == "ac"){
      db.set(`bakim`,true);
      return "Bakim Modu Aktif";
    }
    if(tool == "kapat"){
      db.set(`bakim`,false);
      return "bakim modu kapatildi";
    }
    }
  }
module.exports = greesy;
                     