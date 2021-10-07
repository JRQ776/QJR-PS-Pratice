
let b=document.getElementsByClassName("Users")[0];
let a=document.getElementsByClassName("users")[0];
b.onclick=fun;

function fun()
{

    if(a.style.display=="block"){
        a.style.display="none";
    }
    else{
        
        a.style.display="block";
        
    }
};
