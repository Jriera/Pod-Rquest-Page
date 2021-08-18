document.getElementsByClassName("btn").addEventListener("click",function (){
    let x = document.forms["subscription"]["email"].value;
    let messenger = document.getElementsByClassName("error");
    if(x===""){
        messenger.innerHTML="Oops! Please add your email";
        return false;
    }
});