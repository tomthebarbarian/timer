// Implement an alarm clock / timer which will beep after a
// specified amount of time has passed. The user can specify
// an unlimited number of alarms using command line arguments



const usableargs = process.argv.slice(2);

const timer = (timeArr) => {
  timeArr.forEach((element) => {
    element = Number(element);
    if ((element > 0)) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('.');
      }, 1000 * element);
    }
  });
};


timer(usableargs);