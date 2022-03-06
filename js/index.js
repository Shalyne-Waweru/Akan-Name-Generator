//Getting the Inputs from a user
let centuryRes = document.getElementById('centuryDigits');
let yearRes = document.getElementById('yearDigits');
let monthRes = document.getElementById('month');
let dateRes = document.getElementById('date');
let genderRes = document.getElementById("genderResult");

//Outputs
let bornDay = document.querySelector('#bornDay');
let akanName = document.querySelector('#akanName');

//Arrays
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
  let month = monthRes.value;
  if (month <= 0 || month > 12 ){
    alert("Enter a valid month!");
  }
  else {
    alert(`You were born on this month: ${month}`);
  }
}

function getDate() {
  let date = dateRes.value;
  if (date <= 0 || date > 31 ){
    alert("Enter a valid date!");
  }
  else {
    alert(`You were born on this day: ${date}`);
  }
}

function getGender(gender) {
  genderRes.value = gender;
  let selectedGender = gender;
  alert(`You are a ${selectedGender}`);
}

//Manipulating the user's inputs
function submitForm(){
 while(genderRes.value === "Male"){
   
   if(monthRes.value == 1){
     bornDay.innerText = "You were born on: " + daysOfTheWeek[0];
     akanName.innerText = "Your Akan Name is: " + maleNames[0];
     return;
   }
   if(monthRes.value == 2){
    bornDay.innerText = "You were born on: " + daysOfTheWeek[1];
    akanName.innerText = "Your Akan Name is: " + maleNames[1];
    return;
  }
   else{
     alert("coming soon");
   }
   break;
 }
}