//Selection sorting 
//Sachin Gavali 
function SelectionSort(arr, temp, smallest) {
    for (let i = 0; i < arr.length; i++) {
        smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallest > arr[j]]) {
                smallest = j;


            }
        }
        temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp; // swap array elements 
    }

       
        
    
}


SelectionSort([4, 6, 23, 54, 654, 543, 65, 5], 0);