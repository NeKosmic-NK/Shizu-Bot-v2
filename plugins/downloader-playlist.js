/* Created by https://github.com/BrunoSobrino */
       /* Diseรฑo by Yameko-Bot V1*/

import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `๐๐ฎ๐ฌ๐ข๐๐ ๐ซ๐๐ฅ๐๐๐ข๐จ๐ง๐๐๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผก๏ผต๏ผค๏ผฉ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch },
{              
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผถ๏ผฉ๏ผค๏ผฅ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch2 },
{              
title: `|๏ผ๏ผ{ ๏ผค๏ผฏ๏ผฃ๏ผต๏ผญ๏ผฅ๏ผฎ๏ผด๏ผฏ  ๏ผญ๏ผฐ๏ผ }๏ผ๏ผ|`,
rows: listSerch3 },
{              
title: `|๏ผ๏ผ{ ๏ผค๏ผฏ๏ผฃ๏ผต๏ผญ๏ผฅ๏ผฎ๏ผด๏ผฏ  ๏ผญ๏ผฐ๏ผ }๏ผ๏ผ|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ ๐จ๐ฆ๐๐๐ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ ๐ฒ๐พ๐ฝ ๐พ๐๐๐พ ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*')
}}
handler.command = /^playlist|playlist2$/i
export default handler
