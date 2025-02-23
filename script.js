let input = document.getElementById("number");
let inputVal = input.value;
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", resetInput);

function resetInput() {
  input.value = "";
  output.innerText = "";
}

convertBtn.addEventListener("click", convertToRoman);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman();
    }//if
  }//function
); //event


function convertToRoman() {
  let input = document.getElementById("number");
  let inputVal = input.value;

  if (!inputVal) {
   output.innerText = "Please enter a valid number";
  }
  else if (inputVal <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  }
  else if (inputVal >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else {
    const inputArr = inputVal.split("").reverse();
    const outputArr = [];
    
    switch (inputArr[0]) {
      case "1": outputArr.push("I");
      break;
      case "2": outputArr.push("II");
      break;
      case "3": outputArr.push("III");
      break;
      case "4": outputArr.push("IV");
      break;
      case "5": outputArr.push("V");
      break;
      case "6": outputArr.push("VI");
      break;
      case "7": outputArr.push("VII");
      break;
      case "8": outputArr.push("VIII");
      break;
      case "9": outputArr.push("IX");
      break;   
    }

        switch (inputArr[1]) {
      case "1": outputArr.push("X");
      break;
      case "2": outputArr.push("XX");
      break;
      case "3": outputArr.push("XXX");
      break;
      case "4": outputArr.push("XL");
      break;
      case "5": outputArr.push("L");
      break;
      case "6": outputArr.push("LX");
      break;
      case "7": outputArr.push("LXX");
      break;
      case "8": outputArr.push("LXXX");
      break;
      case "9": outputArr.push("XC");
      break;   
    }

        switch (inputArr[2]) {
      case "1": outputArr.push("C");
      break;
      case "2": outputArr.push("CC");
      break;
      case "3": outputArr.push("CCC");
      break;
      case "4": outputArr.push("CD");
      break;
      case "5": outputArr.push("D");
      break;
      case "6": outputArr.push("DC");
      break;
      case "7": outputArr.push("DCC");
      break;
      case "8": outputArr.push("DCCC");
      break;
      case "9": outputArr.push("CM");
      break;   
    }

        switch (inputArr[3]) {
      case "1": outputArr.push("M");
      break;
      case "2": outputArr.push("MM");
      break;
      case "3": outputArr.push("MMM");
      break; 
    }

    output.innerText = outputArr.reverse().join("");
  }
}//function
