// Sachin Gavali
/* Bubble sort */
function Bubble(array, temp) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                // Swap array[j] and array[j+1]
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

    }
    for (let i = 0; i < array.length; i++) {
        console.log(`  ${array[i]}`);
    }
}
Bubble([1, 4, 6, 2, 6, 41, 76, 97, 63], 0);