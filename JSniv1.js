console.log("Bienvenue, aventurier !");

let nom = prompt("Veuillez entrer votre nom : ");
console.log("Bienvenue,", nom);

function MonBouton(id_carte)
{
    const nouveauBouton = document.createElement("button");
    nouveauBouton.textContent = "Noter";
    nouveauBouton.id = "nouveauBouton";

    const maDiv = document.getElementById(id_carte);
    maDiv.appendChild(nouveauBouton);
}