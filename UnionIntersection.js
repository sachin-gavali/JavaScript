// union and intersection of two arrays
let a = [10, 20, 40];
let b = [30, 20, 15];
let c = [];

function union(a, b, c, Is) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            /*  console.log(b[i] + " " + a[i]); */
            c[i] = a[i];
            c[i + 1] = b[i];


        } else {
            Is = a[i];
        }
    }
    for (let i = 0; i < c.length; i++) {
        console.log(`Union  ${c[i]}`);


    }
    console.log(` The Intersection between the two Array is ${Is}`);
    /*  for (let i = 0; i < d.length; i++) {
         console.log(d[i]);

     } */
}
union(a, b, c, Is);