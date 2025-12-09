// Sélectionner les éléments
const btnAjouter = document.getElementById("btn-ajouter");
const listeLivres = document.getElementById("livres");
const inputTitre = document.getElementById("titre");
const inputAuteur = document.getElementById("auteur");

// Fonction pour ajouter un livre
btnAjouter.addEventListener("click", () => {
    const titre = inputTitre.value.trim();
    const auteur = inputAuteur.value.trim();

    if (titre === "" || auteur === "") {
        alert("Veuillez remplir le titre et l'auteur !");
        return;
    }

    // Créer un nouvel élément de liste
    const li = document.createElement("li");
    li.textContent = `${titre} — ${auteur}`;

    // Ajouter le livre à la liste
    listeLivres.appendChild(li);

    // Vider les champs
    inputTitre.value = "";
    inputAuteur.value = "";
});
