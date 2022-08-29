let str = " Sachin Gavali";
let count = 1;

function Check_Duplicate(str, count) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            count = 1;
            if (str[i] == str[j]) {
                count++;
                console.log(` ${str[i]}  ${str[j]}`);

            }
        }
    }
}
Check_Duplicate(str, count);