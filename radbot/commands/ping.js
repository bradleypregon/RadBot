module.exports = {
    name: 'ping',
    description: 'ping cmd',
    execute(message) {
        message.channel.send('pong, i am alive');
    }
}