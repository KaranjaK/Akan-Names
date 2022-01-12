// Declaration for the various variables and arrays to be used in the fuctions
let YY, MM, DD, d, monthIndex, monthInput, birthYear, dayAkanName, date;
const monthConvert = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

// This function will validate the date fed in the form
function inputValidate() {
  // It will convert the month provided into an index for validation
  monthInput = document.form.month.value.toUpperCase();
  monthIndex = monthConvert.indexOf(monthInput);

  // If else statement for data validation
  if (
    document.form.year.value.length != 4 ||
    document.form.year.value < 1900 ||
    document.form.year.value > 2023
  ) {
    alert(
      "Your year of birth has to be a four digit number which is less than 1900 and not more than 2022 "
    );
    document.form.year.focus();
    return false;
  } else if (monthIndex < 0 || monthIndex > 11) {
    alert("Your month of birth is not a valid Calendar month");
    document.form.month.focus();
    return false;
  } else if (document.form.date.value < 0 || document.form.date.value > 31) {
    alert("Your date of birth is not a valid Calendar date");
    document.form.date.focus();
    return false;
  } else if (document.form.year.value % 4 == 0 && monthIndex == 1 && document.form.date.value > 28) {
    alert(
      "You have entered a leap year hence February should not have more than 28 days"
    );
  } else {
    akanName();
  }
}

// This function will calculate the day of the week for the birthday that the user has provided
function findDay() {
  // It will convert the month provided into an index for validation
  monthInput = document.form.month.value.toUpperCase();
  monthIndex = monthConvert.indexOf(monthInput);

  // This will pick the necessary data for the formula and calculate the day
  birthYear = document.getElementById("year").value;
  DD = parseInt(document.getElementById("date").value);
  YY = parseInt(birthYear);
  if (monthIndex < 2) {
    MM = monthIndex + 13;
    YY = birthYear - 1;
  } else if (monthIndex >= 2) {
    MM = monthIndex + 1;
  }
  d =
    ((DD +
      Math.floor((13 * (MM + 1)) / 5) +
      YY +
      Math.floor(YY / 4) -
      Math.floor(YY / 100) +
      Math.floor(YY / 400)) %
      7) -
    1;
  return d;
}

// This function will pick the gender and calculated date and convert it into a day and Akan Name
function userGender() {
  let gender = document.getElementById("gender").value;
  if (gender == "male") {
    if (date == 0) {
      alert("You were born on Sunday so your Akan name is Kwasi");
    } else if (date == 1) {
      alert("You were born on Monday so your Akan name is Kwadwo");
    } else if (date == 2) {
      alert("You were born on Tuesday so your Akan name is Kwabena");
    } else if (date == 3) {
      alert("You were born on Wednesday so your Akan name is Kwaku");
    } else if (date == 4) {
      alert("You were born on Thursday so your Akan name is Yaw");
    } else if (date == 5) {
      alert("You were born on Friday so your Akan name is Kofi");
    } else alert("You were born on Saturday so your Akan name is Kwame");
  } else if (gender == "female") {
    if (date == 0) {
      alert("You were born on Sunday so your Akan name is Akosua");
    } else if (date == 1) {
      alert("You were born on Monday so your Akan name is Adwoa");
    } else if (date == 2) {
      alert("You were born on Tuesday so your Akan name is Abenaa");
    } else if (date == 3) {
      alert("You were born on Wednesday so your Akan name is Akua");
    } else if (date == 4) {
      alert("You were born on Thursday so your Akan name is Yaa");
    } else if (date == 5) {
      alert("You were born on Friday so your Akan name is Afua");
    } else alert("You were born on Saturday so your Akan name is Ama");
  } else alert("Sorry. We do not have an Akan Name for the Gender you Picked");
}

function akanName() {
  date = findDay();
  userGender();
}
