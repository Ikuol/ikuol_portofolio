let loaderel=document.querySelector(".loaderelement");

window.addEventListener("load", function(){
    this.setTimeout(loader,2500);
    this.setTimeout(fadeOut,2500);
    
});

  function fadeOut(){
    window.location.replace("../contact");
  }

  function loader(){
    loaderel.style.display="none";
  }

  