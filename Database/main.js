const fs = require("fs");

if (!fs.existsSync("./database.json")) {fs.writeFileSync('database.json','{}', function (err) { if (err) throw err; });}
let useful;
let dosya;
class db {
    constructor(input){ 
        //Json Dosyasi Ayarlama
    if(input && typeof input != 'string' ) throw new TypeError("[Nego.db] Json Dosyasini Belirtmedin")
    input  = input ? input: "database.json"
       useful = input.endsWith(".json") ? input : `${input}.json`;
dosya = JSON.parse(fs.readFileSync(useful,"utf8"))};
//veri ayarla
set(veri, değer){
if(!veri && !değer) throw new TypeError("You should enter an input.")
dosya[veri] = değer;return fs.writeFileSync(useful,JSON.stringify(dosya, null, 1))}
//çek
  version(){
    return "0.0.1-Dev By ɴɪᴄᴀᴛ.ᴅᴄᴡ"} 
fetch(veri){
    if(!veri) throw new TypeError("Veri Ismini Girmedin")
    
if(dosya[veri])return dosya[veri]}
//sil
delete(veri){
    if(!veri) throw new TypeError("Veri Ismi Girmedin") 
if(dosya[veri]) { delete dosya[veri]; return fs.writeFileSync("database.json", JSON.stringify(dosya, null, 1))}}
//

add(veri, değer) {
    if(!veri && !değer) throw new TypeError("Veri Girmediniz")
if(typeof değer !== "number") throw new TypeError("Lütfen bir sayı verisi girin")
if(!this.check(veri) || this.get(veri) == 0) {this.set(veri, 1), değer -= 1}
if(typeof this.get(veri) !== "number") throw new TypeError("Deģer Girmedin")
dosya[veri] += değer;return fs.writeFileSync(useful, JSON.stringify(dosya, değer, 1))}

push(veri, değer){
    if(!veri && !değer) throw new TypeError("Veri Ismi Girmediniz")
     if(!this.check(veri)) {dosya[veri] = [];this.set(veri,[])}
dosya[veri].push(değer);return fs.writeFileSync(useful,JSON.stringify(dosya, null, 1))}
//tümünü Çek
fetchAll(){ 
return dosya;}
}
/*
version(){
  return "";
 } */
//has
/*
has(veri){
    if(!veri) throw new TypeError("Veri Ismi Girmediniz")
    return dosya[veri] ? true : false
}*/
//yedekle
/*
backup(dosyaname){
    if(!dosyaname) throw new TypeError("Dosya Ismi Girmedin")
return fs.writeFileSync(`${dosyaname}.json`, JSON.stringify(dosya, null, 1))}*/
module.exports = db;