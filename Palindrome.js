let str = "Hello";

function palindrome(str) {

    for (let i = 0; i < str.length; i++) {
        if (str.length % 2 == 0) {
            return 1;
        } else {
            return -1;
        }
    }
}

let s = palindrome(str);
if (s == 1) {
    console.log(" Yes String is Palindrome ");
} else {
    console.log(" No String is Palindrome ");
}