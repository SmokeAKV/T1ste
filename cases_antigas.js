//============= CASES QUE TALVEZ FUTURAMENTE EU QUEIRA ================\\
switch (command) {
case 'menu':
conn.sendMessage(from, {react: {text: '🥚', key: info.key}})    
await delay(700)
conn.sendMessage(from, {react: {text: '🐣', key: info.key}})    
await delay(700)
conn.sendMessage(from, {react: {text: '🐥', key: info.key}})    
await delay(400)
conn.sendMessage(from, {image: {url: `./shelly.jpg`}, caption: menu(command, prefixobot, hora, data, pushname)}, {quoted: selo2,
gifPlayback: true})
break

case 'msg':
if (!isGroup) return enviar('[❗] Comando feito apenas em Grupos')
txt = body.slice(11)
txtt = args.join(" ")
txt1 = txt.split('/')[0];
txt2 = txtt.split("/")[1];
if (!txt) return env('Exemplo: -cartafof +5555555555/oi linda ')
if (!txtt) return env('Exemplo: -cartafof +5555555555/oi linda')
if (txt.includes('-')) return env("Exemplo: -cartafof +5555555555/oi linda ")
if (!txtt.includes('+')) return env('Exemplo: -cartafof +5555555555/oi linda')
if (!txtt.includes('/')) return env(`Exemplo: ${prefixobot + command} 5555555555/Oi linda`)
cla = 
`
CORREIO 📮

carta do user: ${pushname}
Mensagem: ${txt2}`
conn.sendMessage(`${txt1}@s.whatsapp.net`, {text: cla})
break

// https://i.pinimg.com/564x/34/07/bf/3407bfb416889a6be732b9b4ec724705.jpg
// FOTI DO TRAVIS








}