const args = process.argv.slice(2);
if (args.length === 2) {
  cronsole.log('No rgument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}