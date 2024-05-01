const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Galle,Sri Lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Methwidu:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Galle";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JYAnsxe1R9UIy19cDxLQQc";
global.website=process.env.GURL || "https://chat.whatsapp.com/JYAnsxe1R9UIy19cDxLQQc" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94740536089" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94740536089";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94740536089";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "Hi hi " // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94713359738,947xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94740536089";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "947xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_46_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUeUoxTm8xbExRVDBSbkR5QUZSOEhOMm5NSHR2VnVZY2pybUtTRy9SbUlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQwNTM2MDg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QzBCMTE4RTcyMzRFNEFBQzY2Qzg0NDQ2QkU2QjcwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ1NDU5NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MDUzNjA4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkU2MkM3QjBGOTgyMTQ5OTg2QjdGQ0FEREUwNDFBNzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0NTQ1OTc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInplcUdKbmpjUno2QlQyUlZKbWIwZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTEwMGYwMTktNjA0Yy00ZmEwLWFlZjctYzJlNGFhYWFkNDIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDI1LFxuICAgICAgMjI2LFxuICAgICAgMTQsXG4gICAgICAyNDEsXG4gICAgICAyMDUsXG4gICAgICAyOSxcbiAgICAgIDk5LFxuICAgICAgMTk4LFxuICAgICAgMSxcbiAgICAgIDI1MyxcbiAgICAgIDc5LFxuICAgICAgMTQ2LFxuICAgICAgNjUsXG4gICAgICAzNSxcbiAgICAgIDE3NyxcbiAgICAgIDIwOSxcbiAgICAgIDUsXG4gICAgICAyMDYsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgNjEsXG4gICAgICAxNzksXG4gICAgICAxMzcsXG4gICAgICAyMzUsXG4gICAgICA1NyxcbiAgICAgIDIyMixcbiAgICAgIDExNSxcbiAgICAgIDE3NSxcbiAgICAgIDIwMSxcbiAgICAgIDE2MyxcbiAgICAgIDE2MixcbiAgICAgIDEwMSxcbiAgICAgIDE3MSxcbiAgICAgIDkxLFxuICAgICAgMTcyLFxuICAgICAgOTksXG4gICAgICA1MyxcbiAgICAgIDY3LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVTWlJXSDhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MDUzNjA4OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDYxNTAzMDEyNzQyNzY6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5mC8J+kmPCfj7tOYW1lIGFrYWRhIEJhbHV3ZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YdjlKa0hFTERLeDdFR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHA3ckk0cVVIM2dUZG5TS1EvN1NZcnZ4WnRlQ2Y0a21xYTkvTktLSWlRWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0dDd0dGVOWWc5WDZuNlFtNURrZjlGTnRiUDZzV2tuaUJRYjZUQWhxN1A4YVo4dE9nTlM3RjA2N2J1dVR1TDArQU5aNE9kdTk5blRXcktTL0hKbU5DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFOHRzSER2ZGdRZEhscXk4RlBySTJiQlR0K281KzFHeFFHUG50TnhvN2o1cDQyTkdDd21DVXBsK0Y2SzEwMkpwSjROOWZGYlZDa09zQ2M3Mmx2WXJBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MDUzNjA4OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ1NDU5NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKRUJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpFQi5qc29uIjogIntcImtleURhdGFcIjpcImNqaEVyTHpsU2FjOS9QK3N6Y1h5QkdRTElWTVF6dFFFNG5WUDRVcTM4VlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMzM5MTg0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "Methwidu_Bot😎" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Methwidu_Yt🙂🤍",
  packname: process.env.PACK_NAME || "Methwidu_🔓",
  botname : process.env.BOT_NAME  || "Methwidu_Bot🤍",
  ownername:process.env.OWNER_NAME|| "It'x Me Methwidu 🙂🔰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Methwidu 🙂🧡"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
