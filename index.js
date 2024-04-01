const x =document.getElementById("e1");
const y =document.getElementById("container");
var input=document.getElementById("e1");
input.addEventListener("keypress",function(event)
{
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("btn").click();
    }
})

function Addtask()
{
    if(x.value=='')
    {
        alert("Enter Task");

    }
    else{
    let li=document.createElement("li");
    li.innerHTML=x.value;
    y.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
    save();
  
    }
    x.value='';
    edit.addEventListener('click', () =>
    {
        x.removeAttribute("readonly");
        x.focus();
        edit.innerHTML="save";
        save();
        
    })
   
}
y.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        save();
      
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    
       
    }
},false);
function save()
{
   localStorage.setItem("data",y.innerHTML);
}
function showtask()
{
    y.innerHTML=localStorage.getItem("data");
}
showtask();