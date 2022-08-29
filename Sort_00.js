// find the frist and last position of the current element in the array 
// Sachin Gavali
function find(arr, index, first, last) {
    // sort array 
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] == index) {

            last = i;
        }

    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == index) {
            first = i;
            break;
        }
    }

    console.log(` First occurence is ${first}`);
    console.log(` Last occurence is ${last}`);
}

find([1, 2, 3, 5, 5, 5, 5, 8, 9], 5, -1, 0); // frist occurences of index is 3 and last occurence is 6