/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number
*/

function factorielle(n) {
  //  Vérification de validité de l'entrée
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n < 0) {
    return 0;
  }

  //  Cas de base : factorielle de 0 et 1 = 1
  if (n === 0 || n === 1) {
    return 1;
  }

  //  Calcul avec une boucle
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i; // équivaut à resultat = resultat * i
  }

  // Retour du résultat final
  return resultat;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { factorielle };
