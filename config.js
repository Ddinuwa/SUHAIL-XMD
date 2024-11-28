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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_40_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRJeFZKTHdVM3F5SXlsSTB5VFVyZy9ycVJIeWVLYnhzRmF1bzMxblFRMDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtKaHRhWFR6UzhTOTZBSkViY1FwUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjM2YjU5NWYtZDQ3ZC00YzI3LWE1ZTAtNWFiODhjYTBlZTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDExOCxcbiAgICAgIDM5LFxuICAgICAgMTksXG4gICAgICA0LFxuICAgICAgMzIsXG4gICAgICAxODUsXG4gICAgICAyMzIsXG4gICAgICAxMyxcbiAgICAgIDE4LFxuICAgICAgMjMwLFxuICAgICAgMTg0LFxuICAgICAgMTU1LFxuICAgICAgNDUsXG4gICAgICAxNTcsXG4gICAgICAyMSxcbiAgICAgIDM3LFxuICAgICAgMjMsXG4gICAgICAxOTMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMjYsXG4gICAgICAyMTMsXG4gICAgICA2OSxcbiAgICAgIDAsXG4gICAgICAxMzIsXG4gICAgICA4NCxcbiAgICAgIDExMixcbiAgICAgIDE2OSxcbiAgICAgIDE0MSxcbiAgICAgIDE3OSxcbiAgICAgIDIwMSxcbiAgICAgIDE2NSxcbiAgICAgIDYyLFxuICAgICAgOTcsXG4gICAgICA5NSxcbiAgICAgIDEzMSxcbiAgICAgIDExLFxuICAgICAgMzYsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVI5U0w4OEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY3NzQ4MDA2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LqX8J2XmyDwnZeYIPCdl6Yg8J2XmyDwnZeUIPCdl6Hwkoac4Ly776O/XCIsXG4gICAgXCJsaWRcIjogXCI4NzAyMDU2NzgzOTcwOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xURmdJMEdFUDd4b3JvR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0ZnL05Ud1hRWGQ4Z0hGaEhxWVlnOGpZd0IyS3RVeXVadGdjTEhnbW0zZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvbDNYMDIwNkF0K0dyZ3BIZ0krbk5nYlZkNGdzTVN3cTVVQ2pHTGpHLzVaa1ZqUkNrQVpOTy9CN0QvclNXa2Y0am9KTjRUcUhkVkFTK3cwVDNsNUlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxa3B1eHowRjU2b0pSallEbkNUN3plbWpkeDFZTmpzZnY5WkVkNEVGVlk5QWQyRjdmbDB0V0V0KzA4SG9WWGpLeFZwK1FSWlpyekwrRzUzc1NYbEhCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2Nzc0ODAwNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4MTkyMDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
