const interval = setInterval(() => {
  
setTimeout(() => {
  process.stdout.write('\r|   ');  //Removing the space padding at the end of the strings will mean that the cursor will sit on top of the animation, making it harder to see
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
  clearInterval(interval); 
}, 5000);

}, 800);