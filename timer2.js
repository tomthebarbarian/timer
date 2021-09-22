const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = () => {
  stdin.on('data', (key) => {
    // process.stdout.write('.');
    // \u0003 maps to ctrl+c input
    let numKey = Number(key);
    if (numKey >= 0 && numKey < 10) {
      console.log(`setting timer for ${key} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('.');
      }, 1000 * numKey);

    }
    if (key === 'b') {
      process.stdout.write('\x07');
      process.stdout.write('.');
    }
    if (key === '\u0003') {
      process.exit();
    }
  });
};


timer();