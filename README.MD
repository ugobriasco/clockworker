# 🕰️ Clockworker

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A lightweight library to spawn workers that can loop tasks, and subscribe to events.

## Installation

```
npm i clockworker
```

## Usage

```javascript
const { Clockworker, EventsBroker } = require('clockworker');

// Instance a worker that sends an event every 6 seconds
const myEventEmitter = new Clockworker();
myEventEmitter.loop(6000, () => EventsBroker.emit('myEvent', 'Eat'));

// Instance worker
const myWorker = new Clockworker();

// ... which listen to events ...
myWorker.listen('myEvent', (data) => console.log(data));

// ... and loops tasks.
const build = () => console.log('Build');
const coffee = () => console.log('Drink Coffe');
myWorker.loop(2000, () => build()); //Loop every 2 seconds
myWorker.loop(4000, () => coffee()); //Loop every 4 seconds
```

## License

MIT
