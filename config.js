const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://i.ibb.co/FzcZ3Rq/ed0dd41798bc8766.jpg"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767748006";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/FzcZ3Rq/ed0dd41798bc8766.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_16_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ29JelAyaFFJQkFwQmxqUm1ad09NWUQwNlZpZHpjNmpLamZlK0pwZ1VXaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVXNIRU5zeVNUUlNNbmRIZWMzX3NRQVwiLFxuICBcInBob25lSWRcIjogXCIwNjA0NmFjYy1iY2E2LTRhYzItOTgzNC0yZjdiMWRkYTM5ZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMjAwLFxuICAgICAgMjEwLFxuICAgICAgMjUzLFxuICAgICAgMTE2LFxuICAgICAgMTQ2LFxuICAgICAgMjQsXG4gICAgICA3OCxcbiAgICAgIDI0OCxcbiAgICAgIDEzOSxcbiAgICAgIDE3MSxcbiAgICAgIDE1LFxuICAgICAgMjUsXG4gICAgICAxMCxcbiAgICAgIDI1MSxcbiAgICAgIDc2LFxuICAgICAgMTIyLFxuICAgICAgOTAsXG4gICAgICAxNzYsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxODAsXG4gICAgICAxMSxcbiAgICAgIDEzNixcbiAgICAgIDczLFxuICAgICAgMjA4LFxuICAgICAgMTYyLFxuICAgICAgODksXG4gICAgICAyMDgsXG4gICAgICA5NCxcbiAgICAgIDE5NyxcbiAgICAgIDIxNCxcbiAgICAgIDExOCxcbiAgICAgIDIxNyxcbiAgICAgIDkzLFxuICAgICAgNTYsXG4gICAgICAxNjYsXG4gICAgICAyMzksXG4gICAgICAzMSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSTUhIUlo3VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njc3NDgwMDY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuS6l/Cdl5sg8J2XmCDwnZemIPCdl5sg8J2XlCDwnZeh8JKGnOC8u++jv1wiLFxuICAgIFwibGlkXCI6IFwiODcwMjA1Njc4Mzk3MDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xURmdJMEdFSXVpOExrR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0ZnL05Ud1hRWGQ4Z0hGaEhxWVlnOGpZd0IyS3RVeXVadGdjTEhnbW0zZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKbzhlNnRKMDl0Nm84dG9WR3RnYVAwbFM3RjdWV0pjbTJSb2E4SkJ4Qk5kQjFobGc1OWJRdDRIZi9RZ3N3b1FLcjMyR3R6NmUxWU4xTkdKSXdvWFJDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0REY2dEdlNDJWbDBkZlM4UUQ2emFTK0xoT2hvVDIxdWQ4Y0NBdUJBRm1NNVFJV1FBTmFqNndaK044UHUwd2l1dUJoUFBza25pOFNKOXBWMlIxbjFpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2Nzc0ODAwNjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTk4OTc3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1zL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXMvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⚡𝗛𝗘𝗦𝗛𝗔𝗡-𝗠𝗗⚡",
  ownername:process.env.OWNER_NAME|| "𝗛𝗘𝗦𝗛𝗔𝗡",


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
