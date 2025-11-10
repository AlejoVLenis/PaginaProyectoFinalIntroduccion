let ofertas = document.querySelectorAll(".btn-empleo");
let searchBar = document.querySelector(".searchBar");
let btnBuscar = document.querySelector(".btn-buscar");
let opcion = document.querySelector("#Ingeniero-electrico")
let opcion1 = document.querySelector("#ingeniero-informatico")
let opcion2 = document.querySelector("#ingeniero-mecanico")
let opcion3 = document.querySelector("#ingeniero-ambiental")
let textoError = document.querySelector(".error");
let menu = document.querySelector(".menu-mobil");
let menuNav = document.querySelector("nav");
let menuActive = false;


    if(menu && menuActive == false){
        menu.addEventListener('click', function(){
            menuNav.classList.toggle('active');
            menuActive = true;
            
        })
       
        
    }
    if(menuActive){
        menu.addEventListener('click', function(){
            menuNav.classList.remove('active');
            menuActive = false;
        })
        
    }
     
    

   

        
    
ofertas.forEach(element => {
    element.addEventListener('click', function(){
        window.location.href = "formulario-ofertas.html"
    })
});

btnBuscar.addEventListener("click", function() {
    let valor = searchBar.value;
        switch(valor){
            case "ingeniero electrico":
                opcion.scrollIntoView({behavior: "smooth"});
                textoError.innerHTML = "";
                break;
            case "ingeniero informatico":
                opcion1.scrollIntoView({behavior:"smooth"});
                textoError.innerHTML = "";
                break;
            case "ingeniero mecanico":
                opcion2.scrollIntoView({behavior:"smooth"});
                textoError.innerHTML = "";
                break;
            case "ingeniero ambiental":
                opcion3.scrollIntoView({behavior: "smooth"});
                textoError.innerHTML = "";
                break;
            default:
                textoError.innerHTML = "No se ha econtrado tu busqueda";
            break;
                
        }
    
    
});





