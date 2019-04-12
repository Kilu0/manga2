console.log("11");
valide = 0;
function passW (val, id) {
    var passWord = val;
    var regexpwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
       console.log("22");
    if (passWord.length < 4  ){
            document.getElementById(id).style.border = " solid red";
            
            valide = 0;
    }else{
        valide = 1;
            document.getElementById(id).style.border = " solid green";

            if(!regexpwd.test(passWord)){
                document.getElementById(id).style.border = " solid red";
                valide = 0;
        
            }else{
                document.getElementById(id).style.border = " solid green";
                valide = 1;
            }

    }


} 


function testName(val, id) {
    var regexpwd2=/^(?=.*[A-Z])/
    var regexpwd3=/^(?=.*[a-z])/
  
    
       
    if (val.length < 3  ){
            document.getElementById(id).style.border = " solid red";
            valide = 0;
    }else{
        valide = 1;
        document.getElementById(id).style.border = " solid green";

        if(regexpwd2.test(val) || regexpwd3.test(val) ){
            document.getElementById(id).style.border = " solid green";
        }else{
            document.getElementById(id).style.border = " solid red";
            valide = 0;
        }

      
}

}


function testmail (val){
    var regmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regmail.test(val)){
        valide = 0;
            document.getElementById("Mail").style.border = " solid red";
    }else{
        valide = 1;
            document.getElementById("Mail").style.border = " solid green";
    }
}



function validateForm(){

    if(valide == 0){
        alert('something is wrong ');
    }else{
        alert('your info has been sent ');
    }
   
}