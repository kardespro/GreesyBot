//const db = require("nego.db");

const fetch = require("node-fetch");

class nego{

  /*

  

  * DBL.auth("87787676667776676",c-chiokhhi-123234");

  * RESULT =>

  * {

  "botName": "Greedy"

     } 

  */

  auth(botid,kToken){

    if(!kToken) return "Auth Token Girmedin";

    const check = db.fetch(`bot_${botid}_${kToken}`);

    if(check == true){

      const infoData = db.fetch(`bot_${botid}_${kToken}`);

      return infoData;

      }

    }

  test(klom){

    if(!klom) return TypeError("Bir Klom Girmedin! ") 

    const klomi = db.backup(`all`)

    if(klomi == true){

      return "Test Edildi! " 

     } 

   } 

  /*

  

  *  DBL.ara("botlist","moderasyon");

  

  */

  ara(aranacakyer,kateqori){

    if(!aranacakyer) return new TypeError("Lütfen Yer Belirtin Botlist/Serverlist");

   

    if(!kateqori) return new TypeError("Kateqori Girmedin");

    if(aranacakyer == "botlist"){

    if(kateqori == "moderasyon"){

      const fData = fetch("https://codelistsite.glitch.me/api/botlist/search?kateqori=moderasyon");

      return fData;

      };

    if(kateqori == "eglence"){

      const eData = fetch("https://codelistsite.glitch.me/api/search?kateqori=eglence");

      return eData;

      }

    }

  }

}

module.exports = nego;