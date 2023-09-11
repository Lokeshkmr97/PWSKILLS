function changePara(){
    let var1=document.getElementById("para1")
    console.log(var1)
    var1.innerText="Namaste Bharat"
}

// document.querySelector(".className")
// document.querySelector("#IDName")
// document.querySelector("TagName")

// How to create new element in HTML

function addElement(){
    let title=document.createElement("h1");
    title.textContent="Welcome to new element";
    title.style.color="red";
    title.className="heading"
    title.style.fontSize="25px";
    console.log(title)
// Append child
    document.body.appendChild(title)
}

function removeElement(){
    let ul=document.querySelector("ul")
    console.log(ul)

    let lists=document.querySelectorAll("li");
    console.log(lists)

    for(list of lists){
        ul.removeChild(list)
    }
    console.log(ul)
}


//event Listener

document.addEventListener("click",()=>{
    document.getElementById("js").innerHTML="Hello This is a event Listener Click on Document"
})

