let array = [1, 0, 2, 0, 1, 2];

function sort(array, temp, ) {
    let low = 0;
    let mid = 0;
    //let high = n - 1;
    let high = array.length - 1;

    while (mid <= high) {
        //if element of the array is a 0 
        if (array[mid] == 0) {
            temp = array[low];
            array[low] = array[mid];
            array[mid] = temp;
            low++;
            mid++;
            // if the element is a 1 
        } else if (array[mid] == 1) {
            mid++;

        } else {
            temp = array[mid];
            array[mid] = array[high];
            array[high] = temp;
            high--;
        }

    }
    for (let i = 0; i < array.length - 1; i++) {
        console.log(array[i]);
    }

}

sort(array, 0);