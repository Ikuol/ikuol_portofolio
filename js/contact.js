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