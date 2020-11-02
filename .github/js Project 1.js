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
// function callFib(){
//     let fibNumber = document.getElementById("fibNumber");
//     Fibonacci(fibNumber.value);
// }
// function Fibonacci(number){
//     console.log(number)
//     let i;
//     let arr = [0, 1];

//     for (i = 2; i < number + 1; i++){
//         arr.push(arr[i - 2] + arr[i - 1]);
//         // console.log(arr[number]);

//     }
//     document.getElementById("result").innerHTML = arr[number]
//     // return arr[number];
// }

// let button = document.getElementById("button");

// button.addEventListener("click", callFib);


//milestone 4
let button = document.getElementById("button");

// button.addEventListener("click", fetchFib);

// function fetchFib() {
//   let url = 'http://localhost:5050/fibonacci/'+ document.getElementById("fibNumber").value;

//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       document.getElementById("result").innerHTML = data.result;
//     });
// }



// milestone 5

// button.addEventListener("click", loading)
// function loading() {
//   document.getElementById("loading").style.display="inline";
// }


button.addEventListener("click", spinnerLoading);

const spinnerBorder = document.getElementById("spinnerBorder");
document.getElementById("invalid").style.display = "none";
spinnerBorder.style.display = "none";

function spinnerLoading() {
  spinnerBorder.style.display = "inline-block";
  document.getElementById("comment").style.display = "none";
  document.getElementById("invalid").style.display = "none";
  document.getElementById("result").style.display = "none";

  setTimeout(fetchFib, 1000);
  setTimeout(fetchResult, 1000);

}



function fetchFib() {


  let fibNumber = document.getElementById("fibNumber").value;

  if (fibNumber == 42) {
    document.getElementById("comment").style.display = "inline-block";
    spinnerBorder.style.display = "none";
    document.getElementById("comment").innerHTML = "Server Error: 42 is the meaning of life";
    return;

  } else if (fibNumber > 50) {
    document.getElementById("invalid").style.display = "block";
    spinnerBorder.style.display = "none";
    document.getElementById("invalid").innerHTML = "Can’t be larger than 50";
    return;

  } else {
    let url = 'http://localhost:5050/fibonacci/' + document.getElementById("fibNumber").value;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.getElementById("result").style.display = "inline-block";
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").innerHTML = data.result;
        spinnerBorder.style.display = "none";
        return;
      });

  }

}

// milestone 6

function fetchResult() {
  let url = 'http://localhost:5050/getFibonacciResults';

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let dataResult = data.results;
      let resultDiv = document.getElementById("resultsList");
      resultsList.innerHTML = " ";
      for (i = 0; i < dataResult.length; i++) {
        let objResult = dataResult[i];
        const resultsUl= document.createElement("ul");
        const liResult = document.createElement("li");
        document.getElementById("spinnerBorder2").style.display = "none";
        liResult.innerHTML = `The Fibonnaci Of <b>${objResult.number}</b> is <b>${objResult.result}</b>. Calculated at: ${new Date(objResult.createdDate)}`;
        console.log(liResult);
        resultDiv.appendChild(resultsUl);
        resultsUl.appendChild(liResult);
        liResult.className = "span-class";
      }
  return;
    });
}

fetchResult();


