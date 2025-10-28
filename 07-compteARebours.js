/*
  Énoncé :
  Écris une fonction `compteARebours()` qui affiche dans la console les nombres de 10 à 1,
  un nombre par ligne.

  Signature attendue :
    function compteARebours() -> void
*/

function compteARebours() {
  // Vérifie qu'on travaille bien avec une boucle et pas d'entrée externe
  // On part de 10 et on décrémente jusqu'à 1
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Ne pas modifier la ligne ci-dessous
module.exports = { compteARebours };
