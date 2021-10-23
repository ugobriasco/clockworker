const cronJob = (intervalInMs: number, fn) => {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, intervalInMs);
    fn();
  }
  let timeout = setTimeout(cb, intervalInMs);
};

export default cronJob;
