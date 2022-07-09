
const changeHTML = (pageName)=>{
    return `
    <h1 style="text-align:center; color: white">Kal Aana</h1>
    <h2 style="text-align:center; color: white">Aaj padhai kal ${pageName}</h2>
    <img style="height:90vh; width:100%" src="https://indianmemetemplates.com/wp-content/uploads/Bhai-kya-kar-raha-hai-tu.jpg"/>
    `
}

const changeStyle =()=>{
    return `<style>
     body {
  background: black;
}
    </style>`
}

switch (window.location.hostname) {
   case "www.youtube.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("Youtube");
    break;
   case "www.facebook.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("facebook"); 
    break;  
   case "www.instagram.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("Instagram");
    break; 
   case "www.netflix.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("Netflix");
    break;  
   case "www.primevideo.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("Prime");
    break;   
    case "www.hotstar.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("Hotstar");
    break;    
    case "www.zee5.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("zee5");
    break;   
    case "www.sonyliv.com":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("soniliv");
    break;   
    case "www.voot.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("voot");
    break; 
    case "fmovies.hn":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("fmovies");
    break;  
    case "www.reddit.com":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("reddit");
    break;
    case "www.altbalaji.com":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("altbalaji");
    break;
    case "www.viu.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("viu");
    break;
    case "www.hoichoi.tv":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("hoichoi");
    break;
    case "ullu.app":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("ullu");
    break;
    case "www.mxplayer.com":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("mxplayer");
    break;
    case "erosnow.com":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("erosnow");
    break;
    case "popcornflix.com":
    document.head.innerHTML= changeStyle();
    document.body.innerHTML= changeHTML("popcornflix");
    break;
    case "www.abcmoviesbd.com":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("abcmovies");
    break;
    case "123movies-to.org":
    document.head.innerHTML= changeStyle();    
    document.body.innerHTML= changeHTML("abcmovies");
    break;
}