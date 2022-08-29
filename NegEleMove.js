let arr = [10, 20, 40, 39, -3, 40, -23, 43, -41];

function checkNum(arr, temp) {
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }

    }
    for (let i = 0; i < arr.length; i++) {
        console.log(` ${arr[i]}`);
        if (arr[i] < 0) {
            console.log(` is Negative elemenet ${arr[i]}`);
        }
    }
}
checkNum(arr, 0);