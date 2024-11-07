const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062362592";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_56_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1RDZNcGhXa1ZsZWZNNzV6Y3hVRHd1akgrbVhJbE1qTStkcVRsSjVTOTNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3cWc3U0pxc1RnQzlrOVp2SjNxY2p3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0ZTA0MmY3LTk1MDYtNDBkOS05ZjU2LWMwOGY2OTViYzVhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAyNDcsXG4gICAgICAxNjgsXG4gICAgICA0NCxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDE2MCxcbiAgICAgIDE0MCxcbiAgICAgIDIxMCxcbiAgICAgIDI1LFxuICAgICAgNTYsXG4gICAgICAxOTIsXG4gICAgICAyMTEsXG4gICAgICAxNTAsXG4gICAgICAxNDYsXG4gICAgICA3LFxuICAgICAgMTk2LFxuICAgICAgMjU0LFxuICAgICAgMTE3LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAyLFxuICAgICAgNTEsXG4gICAgICAxMixcbiAgICAgIDkxLFxuICAgICAgNjUsXG4gICAgICAxNyxcbiAgICAgIDc5LFxuICAgICAgMTEyLFxuICAgICAgMTk2LFxuICAgICAgNCxcbiAgICAgIDEwMyxcbiAgICAgIDUsXG4gICAgICAxNzUsXG4gICAgICAxNTIsXG4gICAgICAyNTAsXG4gICAgICAyMjksXG4gICAgICA2NixcbiAgICAgIDE4MyxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBRkdEUVQ1WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MjM2MjU5Mjo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhOIENPTExFQ1RJT04gQU5EIEFDQURFTVlcIixcbiAgICBcImxpZFwiOiBcIjE2MzUxODExMjM1MDQwMzo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN0ZpYkVCRU5iU3RMa0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhUUWNBRHlpS1JINURheWNKd0NQeG4xV0xTMmN3M3JiT215RTJkZGEyemM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN3pZem9VdTJpQ2srcVJ3RU5QRWMzYU9Yd1dYajFaSlQya3FyYmIyTk05SGVUYTgxK040ckdNNFpiNVhkcGZRQVZVV3hBQW95eXBqTVloTmVVVk1YRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUt0MGFCTVFFUnYvaVVMbjVGTnNHRmxCVEpmRys2cjRVT000MXBRVTVsS093WUNMbUFYSDNyc1V0aExBRzdkTDRMd0x1Rm9qTFVPTkdBdndvVzBsZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MjM2MjU5Mjo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwMTI5NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDUDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNQOS5qc29uIjogIntcImtleURhdGFcIjpcIkRFTUxnUW9SakJWaDVMRzF0aFZSVXRQM1dYRHRaNVlvSXB2a3BERCtQN3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcxMzUyMzE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNzE4OTM1NjA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
