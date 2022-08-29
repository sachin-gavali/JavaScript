// find the minimum number in the given three numbers 
// Sachin Gavali 
function minimum(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (a > b && c > b) {
        return b;
    } else {
        return c;
    }
}

a = 10;
b = 20;
c = 30;
console.log(` Minimum Number is ${minimum(a,b,c)}`);