const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};
const switchColors = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      setRandomColor = (color) => {
        document.body.style.backgroundColor = color;
      };
      setRandomColor(colors[randomIntegerFromInterval(0, 5)]);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};
refs.startBtn.addEventListener("click", switchColors.start.bind(switchColors));
refs.stopBtn.addEventListener("click", switchColors.stop.bind(switchColors));
