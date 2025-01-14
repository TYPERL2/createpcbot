import {MessageEmbed} from "discord.js";
import Command from "../../../handler/Command";

export default class InfoCommand extends Command {
    constructor({commandHandler}) {
        super('info', {
            aliases: ['i'],
            info: 'Информация о боте',
            usage: 'info',
            guildOnly: false,
            adminOnly: false
        });
        this.handler = commandHandler
    }

    async run(message, args) {
        const embed = new MessageEmbed()
            .setTitle("Информация о боте")
            .addField("Префикс", this.handler.prefix, true)
            .addField("Версия", "Пошел нахуй пидорас", true)
            .addField("Время работы", this.format(process.uptime()), true)
        await message.channel.send({
            embeds: [embed]
        })
    }

    format(s) {
        function pad(s) {
            return (s < 10 ? '0' : '') + s;
        }

        let hours = Math.floor(s / (60 * 60));
        let minutes = Math.floor(s % (60 * 60) / 60);
        let seconds = Math.floor(s % 60);

        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }
};
