const { Client, Events, EmbedBuilder, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages]});

const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Qilte')
    .setURL('https://discord.gg/36tCw3kYuJ')
    .setAuthor({ name: 'Limpa', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', msg => {
    if(!msg.author.bot){
        msg.reply({embeds: [exampleEmbed]})
    }
})

client.on('interactionCreate', interaction => {
    if(!interaction.isChatInputCommand) return
    if(interaction.commandName === 'discord'){
        interaction.reply({embeds: [exampleEmbed]})
    }
})

// Log in to Discord with your client's token
client.login(process.env.TOKEN);