// This function is attached to the commented form section of the HTML 

// function akanName(){
//     var day = new Date (document.getElementById('date').value);
//     var date = day.getDay();
//     var gender = document.getElementById("gender").value
//     if (gender == 'male'){
//         if(date == 0){
//             alert("You were born on Sunday so we name you Kwasi")
//         }
//         else if(date == 1){
//             alert("You were born on Monday so we name you Kwadwo")
//         }
//         else if(date == 2){
//             alert("You were born on Tuesday so we name you Kwabena")
//         }
//         else if(date == 3){
//             alert("You were born on Wednesday so we name you Kwaku")
//         }
//         else if(date == 4){
//             alert("You were born on Thursday so we name you Yaw")
//         }
//         else if(date == 5){
//             alert("You were born on Friday so we name you Kofi")
//         }
//         else
//             alert("You were born on Saturday so we name you Kwame")
//     }
//     else if (gender == 'female'){
//         if(date == 0){
//             alert("You were born on Sunday so we name you Akosua")
//         }
//         else if(date == 1){
//             alert("You were born on Monday so we name you Adwoa")
//         }
//         else if(date == 2){
//             alert("You were born on Tuesday so we name you Abenaa")
//         }
//         else if(date == 3){
//             alert("You were born on Wednesday so we name you Akua")
//         }
//         else if(date == 4){
//             alert("You were born on Thursday so we name you Yaa")
//         }
//         else if(date == 5){
//             alert("You were born on Friday so we name you Afua")
//         }
//         else
//             alert("You were born on Saturday so we name you Ama")
          
//     }
//     else
//         alert("Sorry. We do not have an Akan Name for the Gender you Picked")
// }


// Declaration for the various variables and arrays to be used in the fuctions 
let CC, YY, MM, DD, d, monthIndex, monthInput, birthYear, dayAkanName, date; 
const monthConvert = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

// This function will validate the date fed in the form
function inputValidate(){

    // It will convert the month provided into an index for validation
    monthInput = document.form.month.value.toUpperCase();
    monthIndex = monthConvert.indexOf(monthInput);

    // If else statement for data validation 
    if(document.form.year.value.length !=4 || document.form.year.value <1900 || document.form.year.value >2023){
        alert("Your year of birth has to be a four digit number which is less than 1900 and not more than 2022 ");
        document.form.year.focus();
        return false;
    }
    else if(monthIndex <0 || monthIndex >11 ){
        alert("Your month of birth is not a valid Calendar month");
        document.form.month.focus();
        return false;
    }
    else if(document.form.date.value <0 || document.form.date.value >31 ){
        alert("Your date of birth is not a valid Calendar date");
        document.form.date.focus();
        return false;
    }
    else{
        return true;
    }
}

// This function will calculate the day of the week for the birthday that the user has provided
function findDay(){
    // It will convert the month provided into an index for validation
    monthInput = document.form.month.value.toUpperCase();
    monthIndex = monthConvert.indexOf(monthInput);

    // This will pick the necessary data for the formula and calculate the day
    birthYear = document.getElementById("year").value;
    CC = parseInt(birthYear.substring(0,2));
    YY = parseInt(birthYear.substring(2,4));
    MM = monthIndex;
    DD = parseInt(document.getElementById("date").value);
    d = (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)%7;
    return (Math.floor(d));
}

function userGender(){
    let gender = document.getElementById("gender").value;
    if (gender == 'male'){
        if(date == 0){
            alert("You were born on Sunday so your Akan name is Kwasi")
        }
        else if(date == 1){
            alert("You were born on Monday so your Akan name is Kwadwo")
        }
        else if(date == 2){
            alert("You were born on Tuesday so your Akan name is Kwabena")
        }
        else if(date == 3){
            alert("You were born on Wednesday so your Akan name is Kwaku")
        }
        else if(date == 4){
            alert("You were born on Thursday so your Akan name is Yaw")
        }
        else if(date == 5){
            alert("You were born on Friday so your Akan name is Kofi")
        }
        else
            alert("You were born on Saturday so your Akan name is Kwame")
    }
    else if (gender == 'female'){
        if(date == 0){
            alert("You were born on Sunday so your Akan name is Akosua")
        }
        else if(date == 1){
            alert("You were born on Monday so your Akan name is Adwoa")
        }
        else if(date == 2){
            alert("You were born on Tuesday so your Akan name is Abenaa")
        }
        else if(date == 3){
            alert("You were born on Wednesday so your Akan name is Akua")
        }
        else if(date == 4){
            alert("You were born on Thursday so your Akan name is Yaa")
        }
        else if(date == 5){
            alert("You were born on Friday so your Akan name is Afua")
        }
        else
            alert("You were born on Saturday so your Akan name is Ama")
          
    }
    else
        alert("Sorry. We do not have an Akan Name for the Gender you Picked")    
}

function akanName(){
    date = findDay();
    userGender();
}