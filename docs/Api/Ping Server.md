# ProMcBot API Documentation

## Overview

The ProMcBot API allows you to interact with Minecraft servers by providing IP and port details. This API supports both Java and Bedrock editions of Minecraft. By using specific endpoints, you can modify the requests to suit either version.

## Base URL

```
http://45.140.165.216:1056/api
```

## Endpoints

### Java Edition

To query a Java Edition Minecraft server, use the following endpoint:

```
/java/ip:port
```

### Bedrock Edition

To query a Bedrock Edition Minecraft server, use the following endpoint:

```
/bedrock/ip:port
```

## Usage

To use the API, replace `ip` and `port` with the actual IP address and port number of the Minecraft server you want to query.

### Example Input

Suppose you have a Minecraft server running at IP `192.168.1.100` and port `25565`. Here is how you would form the request:

### Java Edition Request

```
http://45.140.165.216:1056/api/java/192.168.1.100:25565
```

### Bedrock Edition Request

```
http://45.140.165.216:1056/api/bedrock/192.168.1.100:25565
```

## Example Response

The API will return a JSON object with details about the server status. A typical response might look like this:

```json
{
  "online": true,
  "motd": "Welcome to our Minecraft server!",
  "players": {
    "max": 100,
    "online": 5,
    "sample": [
      {
        "name": "Player1",
        "id": "uuid1"
      },
      {
        "name": "Player2",
        "id": "uuid2"
      }
    ]
  },
  "version": {
    "name": "1.16.5",
    "protocol": 754
  }
}
```

## Notes

- Ensure you have the correct IP address and port number of the Minecraft server.
- The endpoint can be switched between `/java` and `/bedrock` based on the edition of Minecraft you are querying.

With this API, you can easily integrate Minecraft server status checks into your applications, providing real-time information about server availability and player activity.
