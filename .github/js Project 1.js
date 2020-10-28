// Milestone 1
// let fibLocation = 5;
// let fibValue;


// Milestone 2
// function Fibonacci(number){
    // let i;
//     let arr = [0, 1];

//     for (i = 2; i < number + 1; i++){
//         arr.push(arr[i - 2] + arr[i - 1]);
//         // console.log(arr[number]);

//     }
//     return arr[number];
// }


//milestone 3
function callFib(){
    let fibNumber = document.getElementById("fibNumber");
    Fibonacci(fibNumber.value);
}
function Fibonacci(number){
    console.log(number)
    let i;
    let arr = [0, 1];

    for (i = 2; i < number + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
        // console.log(arr[number]);

    }
    document.getElementById("result").innerHTML = arr[number]
    // return arr[number];
}

let button = document.getElementById("button");

button.addEventListener("click", callFib);





