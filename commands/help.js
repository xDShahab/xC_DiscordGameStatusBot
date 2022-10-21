  const pagination = require('discord.js-pagination');
  const Discord = require('discord.js');
  let config = require('../config.json');
  module.exports = {
      name: 'help',
      description: 'Help Command',
      execute(message, args) {
          const Fivem = new Discord.MessageEmbed()
              .setTitle('💙 Server')
              .setColor('#0060FF')
              .addField(`${config.PREFIX}status`, 'See Server Status')
              .addField(`${config.PREFIX}playerlist`, 'See Player List')
              .addField(`${config.PREFIX}suggest`, 'Make a Suggestion To The Server')
              .setTimestamp()
          const utility = new Discord.MessageEmbed()
              .setTitle('🔧 Moderator')
              .setColor('#0060FF')
              .addField(`${config.PREFIX}clear <1-99>`, 'Clears the chat')
              .setTimestamp()

          const pages = [
              Fivem,
              fun,
              utility
          ]

          const emojiList = ["⏪", "⏩"];

          const timeout = '120000';

          pagination(message, pages, emojiList, timeout)
      },
  };