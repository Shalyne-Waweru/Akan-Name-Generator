//Getting the Inputs from a user
let genderRes = document.getElementById("genderResult");
let dobRes = document.querySelector("#date");

//Outputs
let bornDay = document.querySelector('#bornDay');
let akanName = document.querySelector('#akanName');

//Arrays
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//function getDate() {
  //let date = dateRes.value;
  //if (date <= 0 || date > 31 ){
    //alert("Enter a valid date!");
  //}
  //else {
    //console.log(`You were born on this day: ${date}`);
  //}
//}

function getGender(gender) {
  genderRes.value = gender;
  let selectedGender = gender;
  console.log(`You are a ${selectedGender}`);
}

//Manipulating the user's inputs
function submitForm(){
  let dob = dobRes.value;
  let dayBorn = new Date(dob);
  let day = dayBorn.getDay();

  let selectedGender = document.getElementById("genderResult").value;

    if (selectedGender == "Male") {
      bornDay.innerText = "You were born on: " + daysOfTheWeek[day];
      akanName.innerText = "Your Akan Name is: " + maleNames[day];

    } else if (selectedGender == "Female") {
      bornDay.innerText = "You were born on: " + daysOfTheWeek[day];
      akanName.innerText = "Your Akan Name is: " + femaleNames[day];
    }
}