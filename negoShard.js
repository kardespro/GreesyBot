const { ShardingManager } = require('discord.js');
const nico = ShardingManager.Client();
const token = process.env.TOKEN;
// Create your ShardingManger instance
const manager = new ShardingManager('./server.js', {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/v12/class/ShardingManager
    totalShards: 15,
    token: token
});

// Emitted when a shard is created
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));
manager.on("reconnecting", (shard) => {
  const guild = nico.guilds.cache.get("858052041507209266");
  nico.channels.cache.get("859899078624149516").send(`[${shard.id}]() Reconnecting in Discord! `);
  });
manager.on("disconnect", (event,shard) => {
    console.warn("Shard " + shard.id + " disconnected. Dumping socket close event...");
    console.log(event);
  });
// Spawn your shards
manager.spawn();
