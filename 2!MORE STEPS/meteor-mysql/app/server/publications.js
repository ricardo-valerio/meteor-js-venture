liveDb = new LiveMysql({
  host: '192.168.2.10',
  user: 'user',
  password: 'password',
  database: 'meteordb',
  serverId: 1337
});

var closeAndExit = function () {
  liveDb.end();
  process.exit();
};
// Close connections on hot code push
process.on('SIGTERM', closeAndExit);
// Close connections on exit (ctrl + c)
process.on('SIGINT', closeAndExit);

console.log("qry", liveDb.select(
  'SELECT * FROM people', [{
    table: 'people'
  }]
));

Meteor.publish('people', function () {
  return liveDb.select(
    'SELECT * FROM people', [{
      table: 'people'
    }]
  );
});