// find the fixed point (value  in a given array )
// Sachin Gavali 
function findFixedPoint(array, value, temp) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }

        }
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == i) {
            console.log(` Value is equal to the  ${array[i]} Index ${i}`); // find the number is equal to the number of index 
        }
    }
}
findFixedPoint([2, 3, 4, 1, 5, 5, 6, 10, 7, 5], 5, 0);