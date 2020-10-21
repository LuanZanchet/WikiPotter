
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
SetPersonagemTela(id);


function SetPersonagemTela(id){
    fetch(`https://www.potterapi.com/v1/characters/${id}?key=$2a$10$8R1RvfjauFpkNRDVY4eYHeEdi3wXFOWEF2lc2YnirrREZAXWp6uNm`).then(function(response){
        response.json().then(function(data){
            console.log(data);  
            document.getElementById("name").innerHTML  = data.name;
            document.getElementById("role").innerHTML  = data.role;
            document.getElementById("school").innerHTML  = data.school;
            document.getElementById("species").innerHTML  = data.species;
            document.getElementById("orderOfThePhoenix").innerHTML  = data.orderOfThePhoenix;
            document.getElementById("deathEater").innerHTML  = data.deathEater;
            mudarFundo(data.house);
            })
        })
        .catch(function(err){
          console.error(err);
        });


}

function mudarFundo(casa){

    var banner = document.getElementById('banner');
    var nav = document.getElementById('nav');
  
    switch (casa) {
        case 'Gryffindor':
            banner.style.backgroundImage = 'url(../img/grifinoia.png)';
            nav.style.backgroundColor = "red";
            break;
        case 'Slytherin':
            banner.style.backgroundImage = 'url(../img/sonserina.jpg)';
            break;
        case 'Ravenclaw':
            banner.style.backgroundImage = 'url(../img/corvinal.jpg)';
            break;
        case 'Hufflepuff':
            banner.style.backgroundImage = 'url(../img/lufalufa.jpg)';
            break;
        default:
            break;
    }
}