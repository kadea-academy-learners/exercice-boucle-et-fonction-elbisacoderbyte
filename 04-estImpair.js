/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Vérifie si n est un nombre valide
  if (typeof n !== 'number' || isNaN(n)) {
    return null;
  }

  // Vérifie si c’est un entier
  if (!Number.isInteger(n)) {
    return null;
  }

  // Vérifie si c’est impair
  if (n % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };

