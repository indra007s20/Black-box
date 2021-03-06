const help = (prefix) => {
 return `> *Sticker Commands* <
║│➸comando : *${prefix}sticker* or *${prefix}stiker*
║│➸desc : converter imagem / gif / vídeo em adesivo
║│➸usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n

╠════════════════════

║│➸comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
║│➸descricao : converter imagem em adesivo removendo o fundo
║│➸modo de uso : reply image, or send image with caption\n

╠════════════════════

║│➸comando : *${prefix}toimg*
║│➸descricao : converter adesivo em imagem
║│➸modo de uso : reply sticker\n

╠════════════════════

║│➸comando : *${prefix}tsticker* or *${prefix}tstiker*
║│➸descricao : converter texto em adesivo
║│➸modo de uso : *${prefix}tsticker text in here*\n

╠════════════════════

║ > *Meme Commands* <
║│➸comando : *${prefix}meme*
║│➸descricao : imagens aleatórias de meme [english]
║│➸modo de uso : just send the command\n

╠════════════════════

║│➸comando : *${prefix}memeindo*
║│➸descricao : imagens aleatórias de meme [indo]
║│➸modo de uso : apenas envie o comando\n

╠════════════════════

║ > *Others Commands* <
║│➸comando : *${prefix}gtts*
║│➸descricao : converter texto em fala / áudio
║│➸modo de uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n

╠════════════════════

║│➸comando : *${prefix}lolizinha*
║│➸descricao : imagens aleatórias de loli
║│➸modo de uso : apenas envie o comando\n

╠════════════════════

║│➸comando : *${prefix}nsfwloli*
║│➸descricao : imagens aleatórias de nsfw loli
║│➸modo de uso: basta enviar o comando\n

╠════════════════════

║│➸comando : *${prefix}url2img*
║│➸descricao : take web screenshots
║│➸modo de uso : *${prefix}url2img [tipe] [url]*\n

╠════════════════════

║│➸comando : *${prefix}simi*
║│➸descricao : sua mensagem será respondida por simi
║│➸modo de uso : *${prefix}simi yourmessage*\n

╠════════════════════

║│➸comando : *${prefix}ocr*
║│➸descricao : pegue o texto na foto
║│➸modo de uso : responder imagem ou enviar imagem com legenda\n
╠════════════════════

║│➸comando : *${prefix}wait*
║│➸descricao : search anime with image [ What Anime Is This/That ]
║│➸modo de uso : responder imagem ou enviar imagem com legendan\n

╠════════════════════

║│➸comando : *${prefix}setprefix*
║│➸descricao : substituir prefixo
║│➸modo de uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
║│➸nota : This command can only be used by the bot owner\n

╠════════════════════════════════════════

║ > *comandos de grupo* <
║│➸comando : *${prefix}linkgroup* (off)
║│➸descricao : pegue o link do grupo
║│➸modo de uso : just send the command
║│➸nota : can only be used when the bot becomes admin, and the one who sends the ║│➸command is admin!\n

╠════════════════════

║│➸comando : *${prefix}chamada*
║│➸descricao : marca todos os membros do grupo, incluindo administradores também
║│➸modo de uso : apenas envie o comando
║│➸nota : Este comando pode ser usado se você for um administrador do grupo\n

╠════════════════════

║│➸comando : *${prefix}simih*
║│➸descricao : ative o modo simi no grupo
║│➸modo de uso : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* para ║│➸desativar o modo simi
║│➸nota : Este comando pode ser usado se você for um admin\n

╠════════════════════

║│➸comando: *${prefix}add
║│➸descricao: adiciona um membro ao grupo
║│➸modo de uso: *${prefix}add 55999998888
║│➸nota:o bot precisa ser adm!\n

╠════════════════════

║│➸comando:*${prefix}kick
║│➸descricao:banir membro do grupo
║│➸modo de uso: *${prefix}kick @tag do membro
║│➸nota: o bot precisa ser adm!\n

╠════════════════════

║│➸comando:*${prefix}rebaixar
║│➸descricao: tira o adm de qual quer adm menos do criador do grupo
║│➸modo de uso:*${prefix}rebaixar @tag do adm
║│➸nota: o bot precisa ser adm!\n

╠════════════════════

║│➸comando:*${prefix}promover
║│➸descricao: promove qualquer membro pra adm
║│➸modo de uso:*${prefix}promover @tag do membro
║│➸nota: o bot precisa ser adm!\n

╠════════════════════


║│➸DONO DO BOT: TIO PAIN🐊🙌🔱\n
╠════════════════════
║│➸CONTATO: wa.me/11949545217\n
╠════════════════════
║│➸🔱BASE MENU : BY TIO PAIN\n
╠════════════════════
║│➸ STATUS BOT: BOT ULTRA VIP\n`
}

exports.help = help
