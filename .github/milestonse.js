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
//     let i;
//     let arr = [0, 1];
//     document.getElementById("loading").style.display = "none";
//     for (i = 2; i < number + 1; i++){
//         arr.push(arr[i - 2] + arr[i - 1]);

//     }
//     document.getElementById("result").innerText = arr[number]; 

//     return arr[number];
// }

// let button = document.getElementById("button");

// button.addEventListener("click", callFib);


//milestone 4
// let button = document.getElementById("button");

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
// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     document.getElementById("result").style.display = "inline-block";
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("result").innerHTML = data.result;
//     spinnerBorder.style.display = "none";
//     return;
//   });

// if (fibNumber == 42) {
//   document.getElementById("comment").style.display = "inline-block";
//   spinnerBorder.style.display = "none";
//   document.getElementById("comment").innerText = "Server Error: 42 is the meaning of life";
//   return;

// } else if (fibNumber > 50) {
//   document.getElementById("invalid").style.display = "block";
//   spinnerBorder.style.display = "none";
//   document.getElementById("invalid").innerHTML = "Can’t be larger than 50";
//   return;

// } else if (checkBox.checked === true) {
//   let url = 'http://localhost:5050/fibonacci/' + document.getElementById("fibNumber").value;

//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       document.getElementById("result").style.display = "inline-block";
//       document.getElementById("loading").style.display = "none";
//       document.getElementById("result").innerHTML = data.result;
//       spinnerBorder.style.display = "none";
//       return;
//     });
//   }
//   } else {

//     let arr = [0, 1];
//     for (let i = 2; i < fibNumber + 1; i++) {
//       arr.push(arr[i - 2] + arr[i - 1]);
//     }
//     document.getElementById("loading").style.display = "none";
//     spinnerBorder.style.display = "none";
//     document.getElementById("result").style.display = "inline-block";
//     document.getElementById("result").innerHTML = arr[fibNumber];
//     return; 
//   }

// }


