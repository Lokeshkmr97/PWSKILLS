// #0123456789ABCDEF Hex Color

const btn=document.getElementById("button")

const randomColor=()=>{
    let variable="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
        cons+=variable[Math.floor(Math.random()*16)];
    }
    return cons
}

const changeRandomColor=()=>{
    document.body.style.backgroundColor=randomColor();
}

btn.addEventListener("click",changeRandomColor);