// konstanta nampung require / membutuhkan library discord.js
const Discord = require('discord.js');

// konstanta nampung fungsi discord client (maybe buat reffering ke akun)
const client = new Discord.Client();

const {prefix, token} = require('./config.json');

// saat client dijalankan sekali dan ready, eksekusi command di dalam (konsollog ashiap)
client.once('ready', () => {
    console.log('ASHIAPPPP!');
});
// login ke dc dengan token bot nya
client.login(token);

//saat ada message yg disend di channel dimana bot ada permission
client.on('message', message => {
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    var tagged = message.mentions.users.first();
    
    if (message.content.startsWith(prefix)) {
    switch(command) {
        case "server":
        message.channel.send('Nama Server: '+ message.guild.name +'\nPenghuni: '+ message.guild.memberCount +'\nDibuat Pada: '+ message.guild.createdAt +'\nTentang Server: '+ message.guild.description +'\nIkon: '+ message.guild.iconURL());
        break;
        
        case "tebak":
        message.channel.send('Ku tebak, username nya '+ message.author.username +'\nJoin Pada: '+ message.member.joinedAt +'\nPP nya: '+ message.author.avatarURL());
        break;
        
        case "":
            if (message.author.tag === "ChikoHakles#9467") {
                message.channel.send('Apa abang sayang???');
            }
            else {
                message.channel.send('Ih apaansi manggil-manggil!');
            }
        break;
        
        case "umpat":
        umpatan = ['bacot', 'gaasik', 'durjana', 'sok iye'];
        random = Math.floor(Math.random() * umpatan.length);
            if (!args.length || !message.mentions.users.size) {
                message.reply('mau ngatain tapi gak ditag orangnya, rusuh amat');
            }
            else {
                message.channel.send(tagged.username +' '+ umpatan[random] +' lo');
                message.channel.bulkDelete(1);
            }
        break;
        
        case "cerita":
        subjek = ['mikmek', 'bowo', 'ario', 'goji', 'pian', 'dep', 'parhan', 'futa', 'banci', 'sapi', 'onta', 'jin iprit', 'kuyang'];
        predikat = ['dihajar', 'naek', 'makan bareng', 'dikejar-kejar', 'ke pasar malem'];
        keterangan = ['avatar numbuh rambut', 'anaknya 7', 'maradona juga ikutan', 'jadi presiden 3 periode', 'sarjana', '216 banjir duit'];
        rands = Math.floor(Math.random() * subjek.length);
        rands2 = Math.floor(Math.random() * subjek.length);
        randp = Math.floor(Math.random() * predikat.length);
        randk = Math.floor(Math.random() * keterangan.length);
        message.channel.send(subjek[rands] +' '+ predikat[randp] +' '+ subjek[rands2] +' sampe '+ keterangan[randk]);
        message.channel.bulkDelete(1);
        break;
        
        default:
            message.channel.send('gaada fitur begituan bang');
    }
    }
    
    if (message.mentions.users.size != 0){
        if (message.mentions.users.has('604297716914323468') || message.mentions.everyone) {
            var chiko = message.guild.members.cache.get('604297716914323468'); //nomor itu adalah id dc yg ChikoHakles#9467
            if (chiko.presence.status === 'offline') {
                message.reply('Abang lagi offline, jangan tag klo gak ada hubungan ama waifunya');
            }
            else if (chiko.presence.status === 'idle' || chiko.presence.status === 'dnd') {
                message.channel.send('Lagi sibuk doi, tau di server mana. Tunggu aj ntar juga dateng');
            }
        }
    }
    //console.log(message.content); buat menampilkan message yg dikirim di channel jai ada di command prompt
});