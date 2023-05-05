
const contactform = document.querySelector('.form1');
let email = document.getElementById('email');
let firstname = document.getElementById('name');
let phone = document.getElementById('phone');
let grade = document.getElementById('grade');
let learningtype = document.getElementById('learningtype');
 function change(){
    document.getElementById("chairman").innerHTML ="Your message was sent successfully. We will get back to your Thank you!";
    document.getElementById("chairman").style.zIndex = "1"; 
    document.getElementById("chairman").style.background =" #D4edda";
    document.getElementById("chairman").style.fontSize ="20px";
    document.getElementById("chairman").style.fontWeight ="700";
    document.getElementById("chairman").style.padding ="1";
    document.getElementById("chairman").style.borderLeft ="8px solid#3ad66e";
    document.getElementById("chairman").style.borderRadius="4px";
    document.getElementById("chairman").style.color="black";
    document.getElementById("chairman").style.textAlign="start";
    document.getElementById("chairman").style.fontFamily="Poppins";
     
}
function change1(){
    document.getElementById("chairman").innerHTML ="Your message wasn`t received....Try again";
    document.getElementById("chairman").style.zIndex = "1"; 
    document.getElementById("chairman").style.background ="  #f19fb5";
    document.getElementById("chairman").style.fontSize ="20px";
    document.getElementById("chairman").style.fontWeight ="700";
    document.getElementById("chairman").style.padding ="1";
    document.getElementById("chairman").style.borderLeft ="8px solid#e02e5d";
    document.getElementById("chairman").style.borderRadius="4px";
    document.getElementById("chairman").style.color="black";
    document.getElementById("chairman").style.textAlign="start";
    document.getElementById("chairman").style.fontFamily="Poppins";
     
}




contactform.addEventListener('submit',(e)=>
{
    e.preventDefault();
    let formData = {
        email : email.value,
        firstname:firstname.value,
        phone:phone.value,
        grade:grade.value,
        learningtype:learningtype.value,
        
        
    }
    console.log(formData)
     
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload =function(){
        console.log(xhr.responseText);
        if(xhr.responseText =='success'){
            firstname.value ="";
            phone.value ="";
            email.value ="";
            grade.value ="Select your Grade";
            learningtype.value="Learning days";
            change();

            
           }
        else{
            alert('something is wrong!!');
            change1();
            
        }
    }
    xhr.send(JSON.stringify(formData))
})




    