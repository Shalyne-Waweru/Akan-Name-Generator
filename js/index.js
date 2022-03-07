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
    console.log(`You were born in the ${century}th century`);
  }
}

function getYear() {
  let year = yearRes.value;
  console.log(`You were born in the year ${year}`);
}

function getMonth() {
  let month = monthRes.value;
  if (month <= 0 || month > 12 ){
    alert("Enter a valid month!");
  }
  else {
    console.log(`You were born on this month: ${month}`);
  }
}

function getDate() {
  let date = dateRes.value;
  if (date <= 0 || date > 31 ){
    alert("Enter a valid date!");
  }
  else {
    console.log(`You were born on this day: ${date}`);
  }
}

function getGender(gender) {
  genderRes.value = gender;
  let selectedGender = gender;
  console.log(`You are a ${selectedGender}`);
}

//Manipulating the user's inputs
function submitForm(){
 //Male Akan names display on January-June
 while(genderRes.value === "Male" && monthRes.value < 7){
   
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
  if(monthRes.value == 3){
    bornDay.innerText = "You were born on: " + daysOfTheWeek[2];
    akanName.innerText = "Your Akan Name is: " + maleNames[2];
    return;
  }
  if(monthRes.value == 4){
    bornDay.innerText = "You were born on: " + daysOfTheWeek[3];
    akanName.innerText = "Your Akan Name is: " + maleNames[3];
    return;
  }
  if(monthRes.value == 5){
    bornDay.innerText = "You were born on: " + daysOfTheWeek[4];
    akanName.innerText = "Your Akan Name is: " + maleNames[4];
    return;
  }
  if(monthRes.value == 6){
    bornDay.innerText = "You were born on: " + daysOfTheWeek[5];
    akanName.innerText = "Your Akan Name is: " + maleNames[5];
    return;
  }
  else{
    alert("You must be a male born between January and June!");
  }
  break;
 }

 //Female Akan names display on July-December
 while(genderRes.value === "Female" && monthRes.value >= 7){
   
  if(monthRes.value == 7){
    bornDay.innerText = "You were born on: " + daysOfTheWeek[0];
    akanName.innerText = "Your Akan Name is: " + femaleNames[0];
    return;
  }
  if(monthRes.value == 8){
   bornDay.innerText = "You were born on: " + daysOfTheWeek[1];
   akanName.innerText = "Your Akan Name is: " + femaleNames[1];
   return;
 }
 if(monthRes.value == 9){
   bornDay.innerText = "You were born on: " + daysOfTheWeek[2];
   akanName.innerText = "Your Akan Name is: " + femaleNames[2];
   return;
 }
 if(monthRes.value == 10){
   bornDay.innerText = "You were born on: " + daysOfTheWeek[3];
   akanName.innerText = "Your Akan Name is: " + femaleNames[3];
   return;
 }
 if(monthRes.value == 11){
   bornDay.innerText = "You were born on: " + daysOfTheWeek[4];
   akanName.innerText = "Your Akan Name is: " + femaleNames[4];
   return;
 }
 if(monthRes.value == 12){
   bornDay.innerText = "You were born on: " + daysOfTheWeek[5];
   akanName.innerText = "Your Akan Name is: " + femaleNames[5];
   return;
 }
 else{
   alert("You must be a female born between July and December!");
 }
 break;
}
}