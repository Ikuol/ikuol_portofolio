const encodedParams=new URLSearchParams();
encodedParams.append("q","English is hard but detectably so");

const options ={
    method:'POST',
    headers:{
        'content type':'application/x-www-form-urlencoded',
        'Accept-Encoding':'application/gzip',
        'X-RapidAPI-Key':'537bd75ae1msha6662416e110958p10756ejsn99f56cde7816',
        'X-RapidAPI-Host':'google-translate1.p.rapidapi.com'
    },
    body:encodedParams
};

fetch('http://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));