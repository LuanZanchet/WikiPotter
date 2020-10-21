
function Init(){
    var personagens = localStorage.getItem("personagens");
    if(!personagens){
        getPersonagensAPI();
    }
    // IF TERNARIO , COMPARA OQUE TEM ANTES DO interrogação, 
    //se for verdadeiro ele vai executar o codigo após o interrogacao
    //se for falso, ele vai executar o código após os :  
    //localStorage.getItem("personagens") ? null : getPersonagensAPI();
}
Init();

function selecionarCasa(casa){
    localStorage.setItem("casa", casa);
    window.location.href = "personagens.html";
}



function getPersonagensAPI(){
    console.log("Ei entrei");
    fetch("https://www.potterapi.com/v1/characters?key=$2a$10$8R1RvfjauFpkNRDVY4eYHeEdi3wXFOWEF2lc2YnirrREZAXWp6uNm").then(function(response){
        response.json().then(function(data){
             localStorage.setItem("personagens", JSON.stringify(data));
                
            })
        })
        .catch(function(err){
          console.error(err);
        });
}
   