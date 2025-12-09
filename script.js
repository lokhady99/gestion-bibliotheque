// Liste initiale des livres
let livres = ["Python pour débutants", "HTML & CSS avancé", "JavaScript pratique"];

// Fonction pour afficher les livres dans la page
function afficherLivres() {
    const ul = document.querySelector("#livres-list");
    ul.innerHTML = ""; // vider la liste
    livres.forEach((livre, index) => {
        const li = document.createElement("li");
        li.textContent = livre;

        // Ajouter un bouton supprimer
        const btn = document.createElement("button");
        btn.textContent = "Supprimer";
        btn.onclick = () => {
            livres.splice(index, 1);
            afficherLivres();
        };

        li.appendChild(btn);
        ul.appendChild(li);
    });
}

// Fonction pour ajouter un livre
function ajouterLivre() {
    const input = document.querySelector("#nouveau-livre");
    if (input.value.trim() !== "") {
        livres.push(input.value.trim());
        input.value = "";
        afficherLivres();
    }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
    afficherLivres();
    document.querySelector("#ajouter-livre-btn").onclick = ajouterLivre;
});
