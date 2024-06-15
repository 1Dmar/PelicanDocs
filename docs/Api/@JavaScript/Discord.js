# Creating a Discord Bot to Interact with ProMcBot API

This guide provides instructions for creating a Discord bot using both `discord.js` (JavaScript) and `discord.py` (Python). The bot will take IP and port information for a Minecraft server from a user and return the server status using the ProMcBot API.

## JavaScript (discord.js)

### Prerequisites

- Node.js
- `discord.js` library

### Steps

1. **Set Up Your Development Environment**

   First, ensure you have Node.js installed. Then, create a new directory for your bot and initialize a new Node.js project:

   ```bash
   mkdir discord-bot
   cd discord-bot
   npm init -y
   npm install discord.js axios
   ```

2. **Create a New Discord Bot**

   1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   2. Click on "New Application" and give your bot a name.
   3. Under the "Bot" tab, click "Add Bot" and confirm.
   4. Copy the bot token. You will need this for your code.

3. **Write the Bot Code**

   Create a new file, `bot.js`, and add the following code:

   ```javascript
   const { Client, Intents } = require('discord.js');
   const axios = require('axios');

   const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
   const TOKEN = 'YOUR_BOT_TOKEN';
   const BASE_URL = 'http://45.140.165.216:1056/api';

   client.once('ready', () => {
       console.log('Bot is online!');
   });

   client.on('messageCreate', async message => {
       if (message.content.startsWith('!server')) {
           const args = message.content.split(' ');
           if (args.length !== 3) {
               return message.reply('Usage: !server <edition> <ip:port>\nEditions: java, bedrock');
           }

           const [command, edition, address] = args;
           const url = `${BASE_URL}/${edition}/${address}`;

           try {
               const response = await axios.get(url);
               const data = response.data;
               message.reply(`Server Status: ${data.online ? 'Online' : 'Offline'}\nMOTD: ${data.motd}\nPlayers: ${data.players.online}/${data.players.max}`);
           } catch (error) {
               message.reply('Failed to fetch server status. Please check the IP and port, and try again.');
           }
       }
   });

   client.login(TOKEN);
   ```

4. **Run the Bot**

   ```bash
   node bot.js
   ```

## Python (discord.py)

### Prerequisites

- Python 3.6 or higher
- `discord.py` library
- `requests` library

### Steps

1. **Set Up Your Development Environment**

   First, ensure you have Python installed. Then, install the required libraries:

   ```bash
   pip install discord.py requests
   ```

2. **Create a New Discord Bot**

   1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   2. Click on "New Application" and give your bot a name.
   3. Under the "Bot" tab, click "Add Bot" and confirm.
   4. Copy the bot token. You will need this for your code.

3. **Write the Bot Code**

   Create a new Python file, for example, `bot.py`, and add the following code:

   ```python
   import discord
   from discord.ext import commands
   import requests

   # Replace 'YOUR_BOT_TOKEN' with your bot's token
   TOKEN = 'YOUR_BOT_TOKEN'
   BASE_URL = 'http://45.140.165.216:1056/api'

   # Create an instance of a bot
   bot = commands.Bot(command_prefix='!')

   @bot.event
   async def on_ready():
       print(f'Bot is online as {bot.user}')

   @bot.command()
   async def server(ctx, edition: str, address: str):
       url = f'{BASE_URL}/{edition}/{address}'

       try:
           response = requests.get(url)
           data = response.json()
           await ctx.send(f'Server Status: {"Online" if data["online"] else "Offline"}\nMOTD: {data["motd"]}\nPlayers: {data["players"]["online"]}/{data["players"]["max"]}')
       except Exception as e:
           await ctx.send('Failed to fetch server status. Please check the IP and port, and try again.')

   bot.run(TOKEN)
   ```

4. **Run the Bot**

   ```bash
   python bot.py
   ```

With these steps, you can create a Discord bot in both JavaScript and Python that interacts with the ProMcBot API to fetch and display Minecraft server status.
