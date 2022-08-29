/* let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < a.length; i++) {
    /* console.log(" The array is " + a[i]); */
/*    console.log(` Array element is ${a[i]}  ${i}`); */


// actually how for loop runs lets find out 

/* let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
        console.log(` frist for loop is ${a[i]}  Secound  for loop is ${a[j]}`);
        if (a[i] < a[j]) {
            console.log("J is big ");
        } else if (a[i] == a[j]) {
            console.log(" element are equal ");
        } else {
            console.log(" a is bigger ");
        }

    }
} */


// find the number or element in the array using a for loop 
/* function findElement() {
    let count = 0;
    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 50, 40, 50, ];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 50) {

            count++;

        }
    }
    console.log(count);

}

findElement(); */


/* function ArrayElement(array, num, yes) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] == num) {
            console.log(yes);
        }
    }
}

ArrayElement([10, 20, 30, 40, 50, 50,], 50, true); */
/* 
reaverse the array  */


/* function revArray(array) {
    for (let i = array.length; i > 0; --i) {

        console.log(array[i]);
    }


}
revArray([1, 2, 3, 4, 5, 6, 7]); */
/* 
function findBigInteger(array, temp) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                printArray([10, 20, 5, 2, 534, 2, 43, 534]);
            }
        }
    }
}

function printArray(array) {


    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array[i].length; j++) {
            console.log(array[i][j]);
            console.log(array[i]);
            console.log(array[j]);

        }
    }

}
findBigInteger([10, 20, 5, 2, 534, 2, 43, 534], 0); */