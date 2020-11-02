const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 'ed!help' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '!사용법') {
    return message.reply('ed!help 쳐보세요');
  }



if(message.content == 'ed!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')      
      .addField('**```Hero Name```**', '**```fix\nAshe```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755758893619216515/c89ddb9bde2df3b0.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ed!에코') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nEco```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823795784188064/unknown.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ed!시메') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nSymmetra```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!정크렛') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nJunkrat```**', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!원격') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```원격 문의```', '**```fix\n크힛만 원격 문의 부탁해용```**', true)
  .setThumbnail(img)
.addField('크힛 제품 원격 입니다.', '원격 문의는 [ 24시간 구매문의 ] 또는 치트닷컴.NET#1998에게 부탁 드립니다.') 
.addField('관리자가 없으면  ', '직원한테 문의 해주세요.') 

      .setImage('https://cdn.discordapp.com/attachments/757614927489007809/758174954494623764/3.png')
   
    message.channel.send(embed)
  }

if(message.content == 'ch!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nZenyatta```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823407073001562/unknown.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!야타') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nZenyatta```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823407073001562/unknown.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ch!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')

      .addField('```Hero Name```', '**```fix\nMercy```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!호그') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nHog```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755809671960461432/26a92fe290b3e62a.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!맥') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nMac```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nWidow```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366145100644352/unknown.png')
      
    message.channel.send(embed)
  }
  
  if(message.content == 'ch!정크') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nJunkrat```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
     
    message.channel.send(embed)
  }

 if(message.content == 'ch!디바') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nD.va```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745822981854462007/unknown.png')
     
    message.channel.send(embed)
  }

 if(message.content == 'ch!바스') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nBas```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!바스티온') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nBastion```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!레킹') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nWrecking Ball```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823916567691305/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!레킹볼') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nWrecking Ball```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823916567691305/unknown.png')
     
    message.channel.send(embed)
  }


if(message.content == 'ch!바티') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nBaptiste```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825343855656970/unknown.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!메이') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nMei```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823246259060787/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!루시우') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nLucio```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825343855656970/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
   
      .addField('```Hero Name```', '```fix\nDoom```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/721231852039569448/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!바티스트') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nBaptiste```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823246259060787/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!위도') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nWidow```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366145100644352/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!파라') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nPara```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825449703112774/unknown.png')
    message.channel.send(embed)
  }
if(message.content == 'ch!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nSoldier 76```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825660861415484/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')

      .addField('```Hero Name```', '```fix\nSombra```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825791354339418/unknown.png')
    message.channel.send(embed)
  }

  if(message.content == 'ch!토르') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTorbjorn```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825939694419998/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nAsh```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756015147293736970/1.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!한조') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nHanzo```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742369648493985902/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!트레') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTracer```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png')
      
    message.channel.send(embed)
  }

  

if(message.content == 'ch!트레이서') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '```fix\nTracer```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nGenji```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366610936823818/unknown.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ch!아나') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .addField('```Hero Name```', '**```fix\nAna```**', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755761228940443668/d2e4f82f3771cebb.png')
     
    message.channel.send(embed)
  }





else if(message.content == 'ch!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/avatars/677970556473311284/a_fb1ded4a17c483fd50262a0531e05b9b.gif?size=512';
        let commandList = [
       {name: 'ch!(영웅이름)', desc: '입력한 영웅에 값을 불러옵니다'},
      {name: 'ch!영웅 목록', desc: '꿀값 있는 영웅들을 불러옵니다'},
      {name: 'ch!원격', desc: '원격 할 상대를 불러옵니다.'},

        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('CH BOT HELP USER', helpImg)
.setImage('https://cdn.discordapp.com/attachments/755758873335300320/756046133045887027/NaLjY87.png')
  
      .setColor('#ff0000')
      .setTimestamp()

  commandList.forEach(x => {
      
   commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

if(message.content == 'ch!영웅 목록') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
.setColor('#ff0000')
.addField('```영웅 목록```', '``Helo List``')
      
      .setThumbnail(img)
      .addBlankField()

      .addField('```탱커 대기중```', '```자리야,호그,디바,레킹볼```', true)
      .addField('```딜러```', '**```fix\n겐지,위도우,애쉬,맥크리,둠대장,포탑,시메,솔저,에코,정크렛,파라,해킹,바스```**')
      .addField('```힐러 대기중```', '```아나,바티,루시우,젠야타```', true)
     

    message.channel.send(embed)
  }






  if(message.content.startsWith('!전체공지오리온')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
 
