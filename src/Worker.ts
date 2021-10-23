import EventsBroker from './EventsBroker';
import cronJob from './cron-job';

class Worker {
  constructor() {}

  loop = async (pace_ms: number = 6000, fn) =>
    cronJob(pace_ms, async () => fn());

  listen = async (event: string, fn) =>
    EventsBroker.on(event, (data) => fn(data));
}

export default Worker;
