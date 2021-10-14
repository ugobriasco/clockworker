const cronJob = (intervalInMs, fn) => {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, intervalInMs);
    fn();
  }
  let timeout = setTimeout(cb, intervalInMs);
};

module.exports = cronJob;
