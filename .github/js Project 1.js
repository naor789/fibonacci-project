let fibLocation = 5;
let fibValue;

function Fibonacci(x) {
    let i;
    let fib = [0, 1];


    for (i = 2; i <= 100; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);

    }

    return fib[x + 1];
}

document.getElementById("location").innerHTML = fibLocation;

fibValue = Fibonacci(fibLocation);

document.getElementById("value").innerHTML = fibValue;
