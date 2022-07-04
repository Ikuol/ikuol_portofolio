let loaderel=document.querySelector(".loaderelement");

window.addEventListener("load", function(){
    this.setTimeout(loader,2000);
    this.setTimeout(fadeOut,2000);
    
});


  function fadeOut(){
    window.location.replace("../ikuol_portofolio/contact.html");
  }

  function loader(){
    loaderel.style.display="none";
  }