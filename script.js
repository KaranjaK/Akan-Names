function akanName(){
    var day = new Date (document.getElementById('date').value);
    var date = day.getDay();
    var gender = document.getElementById("gender").value
    if (gender == 'male'){
        if(date == 0){
            console.log("You were born on Sunday so we name you Kwasi")
        }
        else if(date == 1){
            console.log("You were born on Monday so we name you Kwadwo")
        }
        else if(date == 2){
            console.log("You were born on Tuesday so we name you Kwabena")
        }
        else if(date == 3){
            console.log("You were born on Wednesday so we name you Kwaku")
        }
        else if(date == 4){
            console.log("You were born on Thursday so we name you Yaw")
        }
        else if(date == 5){
            console.log("You were born on Friday so we name you Kofi")
        }
        else
            console.log("You were born on Saturday so we name you Kwame")
    }
    else if (gender == 'female'){
        if(date == 0){
            console.log("You were born on Sunday so we name you Akosua")
        }
        else if(date == 1){
            console.log("You were born on Monday so we name you Adwoa")
        }
        else if(date == 2){
            console.log("You were born on Tuesday so we name you Abenaa")
        }
        else if(date == 3){
            console.log("You were born on Wednesday so we name you Akua")
        }
        else if(date == 4){
            console.log("You were born on Thursday so we name you Yaa")
        }
        else if(date == 5){
            console.log("You were born on Friday so we name you Afua")
        }
        else
            console.log("You were born on Saturday so we name you Ama")
          
    }
    else
        console.log("Sorry. We do not have Akan Name for the Gender you Picked")
}