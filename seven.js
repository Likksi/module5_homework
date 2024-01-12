liste([3, 10, 11, 7, 16, 25, 30, 2, 40, 5]); 

function liste(arr) {
    let sumOdd = 0;
    let sumPar = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumPar++;
        } else {
            sumOdd++;
        }
    }

    console.log("Нечетных: " + sumOdd);
    console.log("Четных: " + sumPar);
}
