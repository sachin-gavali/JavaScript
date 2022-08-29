// squre root of an integer
// Sachin Gavali 

function getSqureRoot(n) {
    for (let i = 1; i < n; i++) {
        if (i * i < n) {
            console.log(`${i*i}`);
        }
    }

}
getSqureRoot(20);