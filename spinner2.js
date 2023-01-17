process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delay = 0;
let i = 0;
const animation = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const spinner = setInterval(() => {
  process.stdout.write(`\r${animation[i]}   `);
  i = (i + 1) % animation.length;
}, 200);