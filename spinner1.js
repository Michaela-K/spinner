// process.stdout.write('hello from spinner1.js... \rheyyy\n');
//The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.
//Using this \r, we can fake an animation by replacing/rewriting characters in the same spot after a delay.
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|     ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/      ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-       ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r/   ');
},1900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2300);

setTimeout(() => {
  process.stdout.write('\r|     ');
}, 2500);

