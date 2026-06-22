let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    console.log("button clicked");
    let val=inp.value;
    let li=document.createElement("li");
    li.innerText=val;
    ul.append(li);
    inp.value="";
    let del=document.createElement("button");
    del.innerText="Delete";
    li.append(del);
})
inp.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        let val=inp.value;
    let li=document.createElement("li");
    li.innerText=val;
    ul.append(li);
    inp.value="";
    let del=document.createElement("button");
    del.innerText="Delete";
    li.append(del);
    }
})
ul.addEventListener("click",function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
    console.log("clicked");
})