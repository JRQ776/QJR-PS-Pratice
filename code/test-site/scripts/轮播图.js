
    let img=document.getElementsByClassName("LBpicture");
    function InitMove(index)//初始化定义
    {
        for(let i=0;i<img.length;i++){
            img[i].style.opacity="0";
        }
        img[index].style.opacity="1";
    }
    
    InitMove(0);//初始化
    let count=1;//count为执行的次数
    function fMove()//执行一次变化
    {
        if(count==img.length)count=0;
        InitMove(count);
        count++;
    }
    let scollMove=setInterval(fMove,2000);//设置定时

    /*以下是设置左右点击*/
    let butleft=document.getElementsByClassName("butleft")[0];
    let butright=document.getElementsByClassName("butright")[0];
    butleft.onclick=function(){
        clearInterval(scollMove);
        if(count==0)count=img.length;//考虑是第一个图的话
        count--;//到上一个图
        InitMove(count);
        scollMove=setInterval(fMove,2000);//重新设置时间
    }
    butright.onclick=function(){
        clearInterval(scollMove);
        fMove();
        scollMove=setInterval(fMove,2000);
    }
