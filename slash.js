const { REST, Routes } = require('discord.js')

const commands = [
    {
        name: 'discord',
        description: 'hey',
    },
];

const rest = new REST({version: '10'}).setToken(TOKEN);

(async() => {
try {
    console.log("Register commands...")

    await rest.put(
        Routes.applicationGuildCommands("1164519791189573714", "1142771139010117743"),
        {
            body: commands
        }
    )

    console.log("Registered succesfully")
} catch(error){
    console.error(`There was an error ${error}`)
}
})();