const decrimentByOne=()=>{
    const dec=document.getElementById("btndec")
    const con=document.getElementsByTagName("h3");
    console.log(con)
    con[0].textContent-=1
}

const incrimentByOne=()=>{
    const con=document.getElementsByTagName("h3");
    console.log(con)
    con[0].textContent=Number(con[0].textContent)+1
}

const resetValue=()=>{
  
    const con=document.getElementsByTagName("h3");
    console.log(con)
    con[0].textContent=0
}