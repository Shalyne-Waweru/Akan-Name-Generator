function getCentury() {
  let century = document.getElementById('centuryDigits').value;
  alert(`You were born in the ${century}th century`);
}

function getYear() {
  let year = document.getElementById('yearDigits').value;
  alert(`You were born in the year ${year}`);
}

function getMonth() {
  let month = document.getElementById('month').value;
  alert(`You were born in this month: ${month}`);
}

function getDay() {
  let day = document.getElementById('day').value;
  alert(`You were born on this day: ${day}`);
}

function getGender(gender) {
  document.getElementById("genderResult").value = gender;
  let selectedGender = gender;
  alert(`You are a ${selectedGender}`);
}
