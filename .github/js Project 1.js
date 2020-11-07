
let button = document.getElementById("button");
button.addEventListener("click", spinnerLoading);
const spinnerBorder = document.getElementById("spinnerBorder");
document.getElementById("invalid").style.display = "none";
spinnerBorder.style.display = "none";
let checkBox = document.getElementById("exampleCheck1");
let invalid = document.getElementById("invalid");
let comment = document.getElementById("comment");
let result = document.getElementById("result");
fetchResult();

function ifChecked() {
  if (checkBox.checked === true) {
  }
}

function spinnerLoading() {
  spinnerBorder.style.display = "inline-block";
  comment.style.display = "none";
  invalid.style.display = "none";
  result.style.display = "none";
  setTimeout(fetchFib, 1000);
  setTimeout(fetchResult, 1000);
}

function fetchFib() {
  let fibNumber = document.getElementById("fibNumber").value;
  let url = 'http://localhost:5050/fibonacci/' + document.getElementById("fibNumber").value;


  if (!checkBox.checked) {
    if (fibNumber == 42) {
      comment.style.display = "inline-block";
      spinnerBorder.style.display = "none";
      comment.innerText = "Server Error: 42 is the meaning of life";
      return;

    } else if (fibNumber > 50) {
      invalid.style.display = "block";
      spinnerBorder.style.display = "none";
      invalid.innerText = "Can’t be larger than 50";
      return;
    } else if (fibNumber < 1) {
      invalid.style.display = "block";
      spinnerBorder.style.display = "none";
      invalid.innerText = "number can't be smaller than 1";
      return;
    } else {
      let arr = [0, 1];
      for (let i = 2; i < fibNumber + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
      }
      document.getElementById("loading").style.display = "none";
      spinnerBorder.style.display = "none";
      result.style.display = "inline-block";
      result.innerHTML = arr[fibNumber];
      return;
    }

  } else {
    async function catchErrors(response) {
      if (!response.ok) {
          throw Error(await response.text());
        }
        return response;
      }

      fetch(url)
        .then(catchErrors)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          result.style.display = "inline-block";
          document.getElementById("loading").style.display = "none";
          result.innerText = data.result;
          spinnerBorder.style.display = "none";
          return;
        })
        .catch(function (error) {
          if (fibNumber == 42) {
            comment.style.display = "inline-block";
            spinnerBorder.style.display = "none";
            comment.innerText = `Server ${error}`;
          } else if (fibNumber > 50) {
            spinnerBorder.style.display = "none";
            invalid.style.display = "block";
            invalid.innerText = `${error}`;
          } else if (fibNumber < 1) {
            spinnerBorder.style.display = "none";
            invalid.style.display = "block";
            invalid.innerText = `${error}`;
          }
        });
    }
  }

    function fetchResult() {
      let urlRe = 'http://localhost:5050/getFibonacciResults';

      fetch(urlRe)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let dataResult = data.results;
          let resultDiv = document.getElementById("resultsList");
          resultsList.innerHTML = " ";
          for (i = 0; i < dataResult.length; i++) {
            let objResult = dataResult[i];
            const resultsUl = document.createElement("ul");
            const liResult = document.createElement("li");
            document.getElementById("spinnerBorder2").style.display = "none";
            liResult.innerHTML = `The Fibonnaci Of <b>${objResult.number}</b> is <b>${objResult.result}</b>. Calculated at: ${new Date(objResult.createdDate)}`;
            resultDiv.appendChild(resultsUl);
            resultsUl.appendChild(liResult);
            liResult.className = "span-class";
          }
          return;
        });
      }
    