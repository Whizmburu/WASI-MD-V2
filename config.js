//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0U0WEg3dXZFdlpFbExmR0Q2a1ZLQ3BrZzFIUzF6VXl5dkZnMHpWbmgxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Y0cDQyWHFzc2p3SEhUUHlENnBSSHZEeHgvRmZGeVV4UVFyV0pvM2tRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQWRkNC9MWjE4ejdZV2lWOUdOU1JRNXBPV0hXa2VoenRZdHBkVTh5UWxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtM09ZQy8zZTRpVjdzZVFBbGVmbi9QQ1lFSFJrU2MrUERzV1N0bWtpN1M4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKRjFMVUswaXpiM3Zlb0VwbkVoSU5pOFlhNk8rSnZNZWozRWhGSDl0R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFdFl3ak1EcmllT2s4Si81U1RCZlI4UDYzb3pxUU1zZURrbzd2L1RFaW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZLeTN5N3MwNWFqaTlQM2t6MnpsU1FmUXBTUVNNRTFWc1JsL3B3bkgyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1hRmZWVFZFSXV4cnpyTndmUzJFeVhiZldaZHV5NnVYQVpyQU0wNXpuaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVnRnZMb2YvLzZoK0htOTJYdW1rOS9lU3FQVk1JbUtram5La21PL3lXRlhwYndlQW1vRHlQK1FkZzFzb0dOamdoV05HZENOOVdkT1hUV1VwbG9maWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJoR0RDcE5ZRXNuNCt1TjNsVlBKVE9XV2ZFKzRHbXdudUo2cmhkb2Z6UXQ0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0MDg0MTE2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMERGNUQ5Qjc3MDE5RjU3NEIwMUU2RUE0NjBERUNERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4MzU4OTgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NDA4NDExNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEFGOEMyNjMxNzVGRENGM0QwQTU0QjM0MDNCNTg5OEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODM1ODk4MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidW9CNEFGVkZTcHliaV9mVXdlTklnUSIsInBob25lSWQiOiJhYjIwNTZmNC1iNWRkLTQ4ZGQtYjYxZC1hODdlZjAxNGJjZjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVB0K2N3Vk13OEFpeHhHMkpwUjkvK0pucHA0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh1SlVpblVOak1tZllHVWtmZk1hbkRkSkVEVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzVlNKS1pIQyIsIm1lIjp7ImlkIjoiMjU0NzQwODQxMTY4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOFk/CdmZLwnZ6W8J2emPCdmZXwk4WTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS0Z2ZEFERUxXbnNMTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzZWhlSXpwVkpIVldsQXg3Y3VJd1BYYWdKYWdEL2E1amV2UzNGazU3M2tBPSIsImFjY291bnRTaWduYXR1cmUiOiJQL0p4Ly9KYU0xalJJY2YzTVhQcmV0U3B1ZjF0bG93dXJhMjcrNy9oQUNlMFp5KzVWRFRSa2hndzhWcmR1ZDRZMW4yZE10bEFTdHI4eXZ3WUpwalJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia2o0TzMxSDl2cFRsVXJuWnNPR2ZabndDKzhsVStqNUlkY0M3cnUxMmIxbE9SRUNYaWJZNGZPbmViYU9RZmR0enpReERQTVgxazlrSmo3ajk5dHptanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDA4NDExNjg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkM29YaU02VlNSMVZwUU1lM0xpTUQxMm9DV29BLzJ1WTNyMHR4Wk9lOTVBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MzU4OTc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJIdiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𓅓𝙒𝞖𝞘𝙕𓅓",
  author: process.env.PACK_AUTHER || "𓅓𝙒𝞖𝞘𝙕𓅓",
  packname: process.env.PACK_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  botname: process.env.BOT_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  ownername: process.env.OWNER_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  errorChat: process.env.ERROR_CHAT || "254740841168",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
