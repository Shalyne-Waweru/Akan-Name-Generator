//Getting the Inputs from a user
let centuryRes = document.getElementById('centuryDigits');
let yearRes = document.getElementById('yearDigits');
let monthRes = document.getElementById('month');
let dateRes = document.getElementById('date');
let genderRes = document.getElementById("genderResult");

function getCentury() {
  let century = centuryRes.value;
  if (century < 18 || century > 20 ){
    alert("Enter a valid century between 18 and 20!");
  }
  else{
    alert(`You were born in the ${centuryDigits}th century`);
  }
}

function getYear() {
  let year = yearRes.value;
  alert(`You were born in the year ${year}`);
}

function getMonth() {
  
}

function getDate() {
 
}

function getGender(gender) {
  genderRes.value = gender;
  let selectedGender = gender;
  alert(`You are a ${selectedGender}`);
}

