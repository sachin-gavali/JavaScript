function DuplicatesNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return arr[i];
        }
    }

}
let arr = [10, 43, 54, 34, 434, 53, 44, 44, 34, 345];
console.log(DuplicatesNum(arr));