# 🕰️ Clockworker

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![codecov](https://codecov.io/gh/ugobriasco/white-summoner/branch/master/graph/badge.svg)](https://codecov.io/gh/ugobriasco/white-summoner)

A lightweight library to spawn workers that can loop tasks, and subscribe to events.

## Installation

```
npm i clockworker
```

## Usage

```
const { Worker, EventsBroker } = require("clockworker");

// Instance a worker that sends an event evry 6 seconds
const myEventEmitter = new Worker();
myEventEmitter.loop(6000, () => EventsBroker.emit("myEvent", "Hello there"));

// Lets have a worker which listens
const myWorker = new Worker();
// Listen to events
myWorker.listen("myEvent", data => console.log(data));
// Loopable events
const build = () => console.log("Build");
const coffee = () => console.log("Coffe");
myWorker.loop(2000, () => build()); //Loop every 2 seconds
myWorker.loop(4000, () => sleep()); //Loop every 4 seconds

```

## license

MIT
