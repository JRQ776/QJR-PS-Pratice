
let sign=document.getElementsByClassName("sign-but")[0];
sign.onclick=function(){
    let username=document.getElementsByClassName("Input")[0].value;
    let password=document.getElementsByClassName("Input")[1].value;

    if(username=="18932482831"&&password=="1")
    {
        if(confirm("记住密码？")){
            
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            window.open("../test-site/index.html");
        }
    }
    else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
}

