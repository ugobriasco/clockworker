const EventsBroker = require("./EventsBroker");
const cronJob = require("./cron-job");

class Worker {
  constructor() {}
  loop = async (pace_ms = 6000, fn) => cronJob(pace_ms, async () => fn());
  listen = async (event, fn) => EventsBroker.on(event, data => fn(data));
}

module.exports = Worker;
