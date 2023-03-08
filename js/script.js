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

//MILESTONE 1: console shows all the information for each team member 
for(let i = 0; i < teamMembers.length; i++) {

    let teamMembersElement = teamMembers[i]

    for (let objectKey in teamMembersElement) {

      console.log(teamMembersElement[objectKey]);

    };

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