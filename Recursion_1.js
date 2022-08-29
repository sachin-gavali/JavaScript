/* Recursion Practice Program */

// print the number 5 to 1 in reverse order 
/* function PrintNum(n, sum) {
    if (n == 0) {
        return;
    }
    console.log(n);
    PrintNum(n - 1);
}
PrintNum(5, 0);
 */


// Print the NUmber 1 to 10
/* function PrintNum(n) {
    if (n == 11) {
        return;

    }
    console.log(n);
    PrintNum(n + 1);
}
PrintNum(0); */

// print the even number 
/* function PrintevenNumber(n) {
    if (n == 11) {
        return;
    }
    PrintevenNumber(n + 1);
    if (n % 2 == 0) {
        console.log(n);

    }

}
PrintevenNumber(0); */

/* 
Print the odd numbers
function PrintOddNumber(n) {
    if (n == 11) {
        return;
    }
    PrintOddNumber(n + 1);
    if (n % 2 != 0) {
        console.log(n);

    }

}
PrintOddNumber(0); */

/* Print the Sum of the numbers  */
/* function SumOfNum(i, n , sum){
    if(i==n){
        sum+=i;
        console.log(sum);
        return;
    }
    sum+=i;
    SumOfNum(i+1,n,sum);
}
SumOfNum(1,5,0); */
/* 
function SumOfNum(n, sum) {
    if (n == 5) {
        sum += n;
        console.log(sum);

        return;
    }
    console.log(n);
    sum += n;
    SumOfNum(n + 1, sum);
}
SumOfNum(1, 0); */


// find a factorial of a number

/* function factorial(n) {
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return -1;
    }

}
console.log(factorial(5)); */

/* 2nd methods to find the factorial of a number */


/* function calFactorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    let Fact_n = calFactorial(n - 1);
    let Fact = n * Fact_n;
    return Fact;
}
let Printfact = calFactorial(5);
console.log(Printfact); */