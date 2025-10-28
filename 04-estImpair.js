/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null
*/

function estImpair(n) {
  //  Vérifier si n est un nombre et un entier
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
    return null; // entrée invalide
  }

  //  Retourner directement le résultat du test de parité
  return n % 2 !== 0;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
