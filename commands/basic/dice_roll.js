const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'basic',
            memberName: 'roll',
            description: 'Roll the dice... 1,2,3,4,5 or 6?'
        });
    }

    async run(message, args){
        var diceRoll = Math.floor((Math.random() * 6)+1);
        message.reply('Your dice landed on ' + diceRoll)
    }

}

module.exports = DiceRollCommand;