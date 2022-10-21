let config = require('../config.json');
const Discord = require('discord.js');
let PlayerCount = require('../server/players');


module.exports = {
    name: 'status',
    description: 'See Server Status',
    execute(msg, args) {
        PlayerCount.getPlayerCount().then((result) => {

                if (result.status === 200) {
                    const onlineEmbed = new Discord.MessageEmbed()
                        .setColor('#03fc73')
                        .setTitle(config.SERVER_NAME)
                        .setDescription(`**IP:** ${config.SERVER_URL}`)
                        .setThumbnail(config.SERVER_LOGO)
                        .addFields({ name: 'Connected Players :', value: result.data.length, inline: true }, { name: 'Server Status :', value: '✅ Server Online', inline: true },

                        )
                        .setTimestamp(new Date())
                        .setFooter('Send By: ' + msg.author.tag, `${config.SERVER_LOGO}`);
                    msg.channel.send(onlineEmbed);
                }


            })
            .catch(function() {
                const offlineEmbed = new Discord.MessageEmbed()
                    .setColor('#fc033d')
                    .setTitle(config.SERVER_NAME)
                    .setDescription('IP: `unavailable`')
                    .setThumbnail(config.SERVER_LOGO)
                    .addFields({ name: 'Connected Players :', value: 'NONE', inline: true }, { name: 'Server Status :', value: '❌ Server Offline', inline: true },

                    )
                    .setTimestamp(new Date())
                    .setFooter('Send By: ' + msg.author.tag, `${config.SERVER_LOGO}`);
                msg.channel.send(offlineEmbed);
            })


    },
};