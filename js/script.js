/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

//MILESTONE 0: Create an array of objects (with following information: name, role, photo)
const teamMembers = [
    createTeamMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    createTeamMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    createTeamMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    createTeamMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    createTeamMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createTeamMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg')
];

//check: console shows the whole array
console.log(teamMembers);
//check

let cardContainer = document.getElementById('card-container');
 
for (let i = 0; i < teamMembers.length; i++) {

    let teamMembersElement = teamMembers[i];

    let card = document.createElement('div');
    card.classList.add('card');

    let listEl = document.createElement('ul');

    //BONUS 1: transfrom image string into a real img
    let image = document.createElement('div');

    image.innerHTML = '<img src="img/'+ teamMembersElement.image + '">';
    card.append(image);
    //BONUS1

    let listItemName = document.createElement('li');
    listItemName.innerText = teamMembersElement.name;
    listEl.append(listItemName);

    let listItemRole = document.createElement('li');
    listItemRole.innerText = teamMembersElement.role;
    listEl.append(listItemRole);

    card.append(listEl);

    for (let objectKey in teamMembersElement) {

        //MILESTONE 1: console shows all the information for each team member
        console.log(teamMembersElement[objectKey]);

        //MILESTONE 2: show all the information in DOM as string
        // let listItem = document.createElement('li');
        // listItem.innerText = teamMembersElement[objectKey];

        // listEl.append(listItem);
        // card.append(listEl);

    };

    cardContainer.append(card);

};


//FUNCTION: create an object with three keys-------------------------------------------------------
function createTeamMember(fullName, role, photo) {

    let teamMember;
    
    teamMember = {
      name: fullName,
      role: role,
      image: photo,
    };

    return teamMember;

};