let btn=document.querySelector('#btn');

btn.addEventListener("click",()=>{
    
    generate();
    document.querySelector('#btn').style.display="none";

});

function generate(){
    
    document.querySelector('.input-1').style.display="block";
    document.querySelector('.input-2').style.display="block";
    document.querySelector('.input-3').style.display="block";

    let butt=document.createElement("button");
    butt.className="bt";
    butt.innerText="Send message";
        document.querySelector('.part-5').appendChild(butt);
    document.querySelector('.part-5').classList.add("color");
}