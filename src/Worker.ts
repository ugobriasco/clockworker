import EventsBroker from './EventsBroker';
import cronJob from './cron-job';

/**
 * A worker which can
 * * loop functions
 * * listen to events
 */
class Clockworker {
  constructor() {}

  /**
   * Loop a function with a given pace
   * @param pace_ms the pace in milliseconds, which a function will be iterated
   * @param fn a function
   * @returns a empty promise
   */
  loop = async (pace_ms: number = 6000, fn: Function) =>
    cronJob(pace_ms, async () => fn());

  /**
   * Listens to an event and, once this is reached, triggers a function
   * @param event an event string
   * @param fn a function
   * @returns an event emitter
   */
  listen = async (event: string, fn: Function) =>
    EventsBroker.on(event, (data) => fn(data));
}

export default Clockworker;
