// Search in a sorted array and find the target element 
// Sachin gavli        

function findTarget(array, target, temp) {


    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return i;


        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] != target) {
            return -1;


        }
    }
}
console.log(findTarget([3, 7, 1, 6, 8, 3, 85, 65], 6, 0));