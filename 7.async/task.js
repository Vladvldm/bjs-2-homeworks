"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  };

  addClock(time, callback) {
    if (!time || callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.some((el) => el.time === true)) {
      console.warn("Уже присутствует звонок на это время");
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  };

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (el) => el.time !== time
    );
  };

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(
      () =>
        this.alarmCollection.forEach((el) => {
          if (el.time === this.getCurrentFormattedTime() && el.canCall) {
            el.canCall = false;
            el.callback();
          }
        }),
      1000
    );
  };

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  resetAllCalls() {
    this.alarmCollection.forEach((el) => (el.canCall = true));
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };
};