# PelicanMc - Discord Bot Documentation

## Introduction
Welcome to PelicanMc! PelicanMc is a Discord bot designed to seamlessly connect your Minecraft servers with your Discord server. With PelicanMc, you can manage your Minecraft server, get real-time updates, and interact with your Minecraft world directly from Discord.

## Getting Started

### Prerequisites
- A Discord account
- A Minecraft server
- Administrator permissions on the Discord server

### Step 1: Invite PelicanMc to Your Discord Server
To start using PelicanMc, you need to invite the bot to your Discord server. Click on the link below to invite the bot:

[PelicanMc](https://discord.gg/sdfdsdf)

### Step 2: Configure Your Minecraft Server
You need to configure your Minecraft server to communicate with the PelicanMc bot. Follow these simple steps:

1. **Download and Install PelicanMc Plugin**
   - Visit the official PelicanMc plugin page and download the latest version.
   - Place the downloaded file into your Minecraft server's `plugins` directory.
   - Restart your Minecraft server to load the plugin.

2. **Generate an API Key**
   - In your Discord server, use the command `/generateapikey` to generate a unique API key.
   - Copy the generated API key.

3. **Configure the Plugin**
   - Open the PelicanMc plugin configuration file located in your Minecraft server's `plugins/PelicanMc` directory.
   - Paste the API key into the `api-key` field.
   - Save and close the configuration file.
   - Restart your Minecraft server to apply the changes.

### Step 3: Link Your Minecraft Server with Discord
After configuring your Minecraft server, you need to link it with your Discord server. Use the following command in your Discord server:

```
/setup
```

```
/linkserver [Minecraft Server Name] [API Key] (COMING SOON)
```

Replace `[Minecraft Server Name]` with your desired name for the Minecraft server and `[API Key]` with the API key you generated earlier.

### Step 4: Explore Commands
PelicanMc comes with a variety of commands to help you manage your Minecraft server. Here are some basic commands to get you started:

- `/status` - Check the status of your Minecraft server.
- `/players` - List the players currently online on your Minecraft server.
- `/broadcast [message]` - Send a message to all players on your Minecraft server.
- `/restart` - Restart your Minecraft server.

### Step 5: Customize Settings
You can customize various settings of PelicanMc to suit your needs. Use the following command to access the settings:

```
/help
```

From here, you can enable or disable features, set up notifications, and more.

### Support
If you need help with PelicanMc, join our support server:

[PelicanMc Support](https://discord.gg/sdfdsdf)

### Conclusion
You are now ready to enhance your Minecraft experience with PelicanMc! Enjoy seamless integration between your Minecraft server and Discord, and make managing your server easier than ever. Happy gaming!

## License
PelicanMc is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
