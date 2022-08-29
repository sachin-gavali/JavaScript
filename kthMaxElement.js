function maxEle(arr, index, temp) {
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
        k = arr[index - 1];

        return k;
    }
}
console.log(maxEle([10, 30, 2, 38, 6, 65, 3, 77], 3, 0));