function processData(input) {
    //Enter your code here
    const hashMap = new Map()
    let str = input.split("\n")
    let n = Number(str[0])
    let i = 1
    for (let j = 0; j < n; j++) {
        let line = str[i++].split(" ")
        hashMap.set(line[0], line[1])
    }
    for (i; i < str.length; i++) {
        if (hashMap.has(str[i]))
            console.log(`${str[i]}=${hashMap.get(str[i])}`)
        else
            console.log("Not found")
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
