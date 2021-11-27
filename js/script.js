const num = +prompt('Please enter a number');

if (num === 1){
    console.log(num);
} else if (num < 1){
    console.log(NaN);
} else {
    let dell = 2;

    while (num % dell !== 0){
    dell = dell + 1;
    }
    console.log(dell);
}