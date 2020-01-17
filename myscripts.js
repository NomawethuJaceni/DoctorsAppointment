// SideNavgation code
function openNav(){
    document.getElementById("mySidenav")
    .style.width="250px";
}
function closeNav(){
    document.getElementById("mySidenav")
    .style.width="0";
}

// Disabling submit button on homepage
function enableButton(){
    var selectedItem = document.getElementById('time');
    var btnElement = document.getElementById('button');
    btnElement.disabled = !selectedItem.value;
}

//Restricting Name input textboxe to accept input only
function validate(){
    var element = document.getElementById('textsend');
    if((element.value!= element.value.replace(/[^a-zA-Z]+/,''))){
        alert("Only plain text that is allowed");
    }
     
}
//Restricting Surname input textboxe to accept input only
function validateSurname(){
    var elem = document.getElementById('send');
    if((elem.value!= elem.value.replace(/[^a-zA-Z]+/,''))){
        alert("Only plain text that is allowed");
    }
}
//Restricting phoneNumber input textboxe to accept input only
function phoneNumber(){
    var elem = document.getElementById('phoneNumber');
    if((elem.value!= elem.value.replace(/[^0-9]+/,''))){
        alert("Only numbers that are allowed");
    }
}
//Restricting email input textboxe to accept input only   
//needs to be fixed so that the format should be that of an email address
function emailAddress(){
    var elem = document.getElementById('emailAddress');
    if((elem.value!= elem.value.replace(/[^a-zA-Z@-.]+/,''))){
        alert("Enter Valid Email Address");
    }
}
//Restricting ID input textboxe to accept input only
// needs to be fixed so thAT IT TAKES ONLY VALID ID NUMBER, THAT HAS ONLY 13 DIGITS
function validateID(){
    var el= document.getElementById('idNumber');
    if((el.value!= el.value.replace(/[^0-9]+/,''))){
        alert("Enter valid ID Number");
    }
    }

//restricting an email address to be an email format
 function validateEmail(email){
     if(/^\w+(\.-]w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
     {
         return(true);
     }
     else{
        alert("Invalid Email");
        return(false);
     }
    
    //another method to validate email address
    // var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
    }

   //  function confirmEmailAddress(){
    //     var
  //   }