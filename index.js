const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '225351907638509568'
});

const TOKEN = 'NTU3MzAwMDEyMjA4NDg4NDUz.D3GRyQ.RAk4PZpTJpZctjVUGcUg-o-Cemw'

bot.registry.registerGroup('basic','Basic')
bot.registry.registerCommandsIn(__dirname + '/commands')
bot.registry.registerDefaults();

bot.on('guildMemberAdd', function(message){
    message.send('Welcome to the Rocking League server'+ member + '! Make sure to check out the #set-rank section to identify your rank.')
});

bot.on('message', function(message){
    if(message.content == 'MXBot'){
        message.reply('Greetings I am the MXBot');
    }
});
bot.on('ready', function(){
    console.log('Active');
})

bot.login(TOKEN);