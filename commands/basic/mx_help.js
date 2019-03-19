const commando = require('discord.js-commando');
const discord = require('discord.js');

class mxhelpCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'mxhelp',
            group: 'basic',
            memberName: 'mxhelp',
            description: 'All the commands you need to know for the MXBot'
        });
    }

    async run(message, args){
        var embed = new  discord.RichEmbed()
        .setTitle('MXBot Commands:')
        .setColor(0xdbb318)
        .setDescription('Below you will find all the commands to use the MXBot. ')
        .addField('!flip ', 'Just a basic coin toss. Heads or Tails?')
        .addField('!roll ', 'Roll the dice 1,2,3,4,5 or 6?')
        .setFooter("This bot was made by FearingMANiac#4086", "https://images-ext-1.discordapp.net/external/cbY69xfIt8YSVVOlDtrzOxLGV2z_7WPKJEjaUyFBMns/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/225351907638509568/61aa3c8df94ea968094be657a5ad3855.png")
        .setTimestamp()
        message.channel.sendEmbed(embed);
    }

}

module.exports = mxhelpCommand;