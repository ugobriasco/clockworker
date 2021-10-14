const REFRESH_PERIOD_MS = 6000;
const EventEmitter = require("events");
const em = new EventEmitter();

const cronJob = (intervalInMs, fn) => {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, intervalInMs);
    fn();
  }
  let timeout = setTimeout(cb, intervalInMs);
};

class Worker {
  constructor() {}

  // pass a pace, and a function
  loop = async (pace_ms, fn) => cronJob(pace_ms, async () => fn());

  // pass en event, and a function
  listen = async (event, fn) => em.on(event, data => fn());
}

module.exports = Worker;
