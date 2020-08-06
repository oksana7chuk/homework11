refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer = setInterval(() => {
      this.startTime = Date.now();
      const remainingTime = this.targetDate - this.startTime;
      this.updateClockFace(remainingTime);
    }, 1000);
  }
  static pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClockFace(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = CountdownTimer.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = CountdownTimer.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = CountdownTimer.pad(Math.floor((time % (1000 * 60)) / 1000));
    if (time > 0) {
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;
    } else {
      clearInterval(this.timer);
      updateClockFace(0);
    }
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 17, 2020"),
});
