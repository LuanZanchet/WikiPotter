function getPersonagens(){
                 var personagens = JSON.parse(localStorage.getItem("personagens"));   
                 var casa = localStorage.getItem("casa");
                 mudarFundo(casa);
                 var htmlCompleto= "";
                 personagens.forEach(element => {
                     var id = element._id;
                    if(element.house == casa){
                        var htmlPadrao = `<div class="col-sm-4 py-2">
                        <div class="card h-100 card-body" onclick="selecionarPersonagem('${id}')">
                            <h2>${element.name}</h2>
                            <span>${element.role}</span>
                        </div>
                    </div>`;
                        htmlCompleto += htmlPadrao;
                  
                    }
                    
                 });
                 console.log(htmlCompleto);
                 document.getElementById("personagens").innerHTML = htmlCompleto;
                 
}

function selecionarPersonagem(id){

  window.location.href = "personagem.html?id="+id;
}

function mudarFundo(casa){
    var body = document.getElementsByTagName('body')[0];
    var nav = document.getElementById('nav');
  
    switch (casa) {
        case 'Gryffindor':
            body.style.backgroundImage = 'url(../img/grifinoia.png)';
            nav.style.backgroundColor = "red";
            break;
        case 'Slytherin':
            body.style.backgroundImage = 'url(../img/sonserina.jpg)';
            break;
        case 'Ravenclaw':
            body.style.backgroundImage = 'url(../img/corvinal.jpg)';
            break;
        case 'Hufflepuff':
            body.style.backgroundImage = 'url(../img/lufalufa.jpg)';
            break;
        default:
            break;
    }

    
}

function selecionarCasa(casa){
    localStorage.setItem("casa", casa);
    document.location.reload();
}


getPersonagens();

