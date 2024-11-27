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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_16_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRMi8xWlRjc2taL3o1MTJ3Z0dxclFveHg5cjlnM1Y5L1JHa0JPbXVWTEs4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEQVY5amcwN1IwaTVsT21EeENZMGhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjMGZmZGYyLTJjN2ItNDc2NC1hZWE5LTVmOWM2NGFjM2UxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAzLFxuICAgICAgMjI1LFxuICAgICAgODEsXG4gICAgICAxMDYsXG4gICAgICAyNyxcbiAgICAgIDEyNixcbiAgICAgIDYsXG4gICAgICAyNDksXG4gICAgICAyMDUsXG4gICAgICAxNjMsXG4gICAgICAyMTYsXG4gICAgICAxNzIsXG4gICAgICAyMzAsXG4gICAgICA1MixcbiAgICAgIDUwLFxuICAgICAgMTM2LFxuICAgICAgMjI4LFxuICAgICAgMTAyLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMjExLFxuICAgICAgMTUyLFxuICAgICAgMjM3LFxuICAgICAgMjMxLFxuICAgICAgMjQxLFxuICAgICAgMjIyLFxuICAgICAgOTIsXG4gICAgICAxMjgsXG4gICAgICA3NSxcbiAgICAgIDcwLFxuICAgICAgMjgsXG4gICAgICAxMjksXG4gICAgICA0MixcbiAgICAgIDE1MCxcbiAgICAgIDEzMixcbiAgICAgIDIzOSxcbiAgICAgIDE5NyxcbiAgICAgIDE0NyxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRVk2R1FXSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MjM2MjU5Mjo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhOIENPTExFQ1RJT04gQU5EIEFDQURFTVlcIixcbiAgICBcImxpZFwiOiBcIjE2MzUxODExMjM1MDQwMzo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN0ZpYkVCRUx2dm5Mb0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhUUWNBRHlpS1JINURheWNKd0NQeG4xV0xTMmN3M3JiT215RTJkZGEyemM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMTVhSUhGSVViOHRCY0wvTFdpb1R6MVp0eUdsdHpSMVhtV0w2Q3pDRFppcFlCQ0x5SHJjdXFPUDlIc1BBRHlFUWtIQ04ySzUvK291Nnp5dVRXVVQ3Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGQ4NUtCR2crczYrZnJHWjNsR05sMjRUd0VWMzk5Q2JwbzI2aFRKWkpTVXhWbEVWb0FlZGFwL3hZREtua25laTdqbkMwcVcwdXpuRVprVmJqTXVOaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MjM2MjU5Mjo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3MjA1NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDUDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNQOS5qc29uIjogIntcImtleURhdGFcIjpcIkRFTUxnUW9SakJWaDVMRzF0aFZSVXRQM1dYRHRaNVlvSXB2a3BERCtQN3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcxMzUyMzE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNzE4OTM1NjA5XCJ9Igp9"  // PUT your SESSION_ID 


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
