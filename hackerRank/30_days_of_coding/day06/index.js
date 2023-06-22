function processData(input) {
    //Enter your code here
    let str = input.split("\n")
    let n = Number(str[0])
    for (let i = 1; i <= n; i++){
        let even = ""
        let odd = ""
        for (let j = 0; j < str[i].length; j++){
            if (j % 2 === 0)
                even += str[i].charAt(j)
            else
                odd += str[i].charAt(j)
        }
        console.log(`${even} ${odd}`)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
