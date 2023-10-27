// Original
const { playFile } = require('../../modules/audio.js');

module.exports = {
	name: 'ok',
	description: 'Are you ok buddy?',
	// eslint-disable-next-line no-unused-vars
	execute(Command, message, ytdl, bot, Discord, user_interaction) {
		let voiceChannel;
		(!message) ? voiceChannel = user_interaction.member.voice.channel : voiceChannel = message.member.voice.channel;
		if (!message) user_interaction.reply('👌');

		if(!voiceChannel) {
			return;
		}
		const path = './Audio/Are You Ok.mp3';

		playFile(voiceChannel, path, {name: 'ok'});
	},
};