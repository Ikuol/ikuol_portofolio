let btn=document.querySelector('#btn');

btn.addEventListener("click",()=>{
    
    generate();
    document.querySelector('#btn').style.display="none";

});

function generate(){
    
    document.querySelector('.form-1').style.display="block";

    document.querySelector('.part-5').classList.add("color");

}

const ratio= .1
const options={
    root:null,
    rootMargin: '0px',
    threshold:ratio
}

const handle=function (entries,observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    })
}

const observer=new IntersectionObserver(handle, options)
    document.querySelectorAll('[class*="reveal"]').forEach(function(r){
        observer.observe(r)
    });

   