//Maximum number of the array elements 
function getMax(array, max, min) {
    for (let i = 0; i < array.length; i++) {

        //console.log(`${array[i]} = ${array[i+1]}`);
        if (array[i] < array[i + 1]) {
            max = array[i + 1];
        }

        if (array[i] < min) {
            min = array[i];
        }

    }
    console.log(` maximum number is ${max}`);
    console.log(`Minimun number is ${min}`);

}
getMax([10, 43, 46, 53, 54, 55, 56], 0, 689);