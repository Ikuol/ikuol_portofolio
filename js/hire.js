let btn=document.querySelector('#btn');

btn.addEventListener("click",()=>{
    
    generate();
    document.querySelector('#btn').style.display="none";

});

function generate(){
    
    document.querySelector('.form-1').style.display="block";

    document.querySelector('.part-5').classList.add("color");

}

