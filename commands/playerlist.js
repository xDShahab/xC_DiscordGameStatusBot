let config = require('../config.json');
const Discord = require('discord.js');
let PlayerCount = require('../server/players');

module.exports = {
    name: 'playerlist',
    description: 'See All Players Conected',
    execute(message, args) {
        PlayerCount.getPlayerCount().then((result) => {

                let list = result.data;
                var id = "";
                var players = "";
                var ping = ""
                for (var i = 0; i < list.length; i++) {
                    id += list[i].id + '\n';
                    players += list[i].name + '\n';
                    ping += list[i].ping + '\n';

                }
                const pListEmbed = new Discord.MessageEmbed()
                    .setColor('#0060ff')
                    .setTitle('🧑🏻‍💼 Online Players')
                    .setDescription(`Total players: ${list.length}`)
                    .setThumbnail(config.SERVER_LOGO)
                    .addFields({ name: 'Player ID', value: id, inline: true }, { name: 'Player Name', value: players, inline: true }, { name: '📶', value: `${ping}`, inline: true },

                    )
                    .setTimestamp(new Date())
                    .setFooter('Sent By: ' + message.author.tag, `${config.SERVER_LOGO}`);
                message.channel.send(pListEmbed);


            })
            .catch(function() {
                const errpListEmbed = new Discord.MessageEmbed()
                    .setColor('#ff0060')
                    .setTitle('🧑🏻‍💼 Online Players')
                    .setDescription(`Total players: none`)
                    .setThumbnail(config.SERVER_LOGO)
                    .addFields({ name: 'Player ID', value: '0', inline: true }, { name: 'Player Name', value: 'None', inline: true }, { name: 'Ping', value: 'None', inline: true },

                    )
                    .setTimestamp(new Date())
                    .setFooter('Sent By: ' + message.author.tag, `${config.SERVER_LOGO}`);
                message.channel.send(errpListEmbed);
            })
    },
};