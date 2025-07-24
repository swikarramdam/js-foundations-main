class MyEventEmitter {
  constructor() {
    this.events = {};
  }
  addListener(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  emit(eventName, ...args) {
    let callbacks = this.events[eventName];
    if (!callbacks) return;
    for (let funcs of callbacks) {
      funcs(...args);
    }
  }
}
