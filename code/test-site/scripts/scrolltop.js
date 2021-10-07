window.addEventListener("scroll", this.handleScroll);
let newbanner=document.getElementsByClassName("new-banner")[0];
newbanner.style.zIndex= "0";
function handleScroll(){
    let scrollTop =window.pageYOffset;
    if(scrollTop>=52)
    {
        newbanner.style.zIndex="101";
    }
    else{
        newbanner.style.zIndex="0";
    }
}
