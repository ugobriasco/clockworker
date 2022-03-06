/**
 * A cronjob loops a function with a given pace
 * @param intervalInMs pace in ms
 * @param fn looped function
 */
const cronJob = (intervalInMs: number, fn: Function) => {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, intervalInMs);
    fn();
  }
  let timeout = setTimeout(cb, intervalInMs);
};

export default cronJob;
