const sizeArg = process.argv[2];
const size = parseInt(sizeArg);

if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
    let i = 0;
    while (i < size) {
        let row = '';
        while (j < size) {
            row += 'X';
            j++;
        }
        console.log(row);
        i++;
    }
    }