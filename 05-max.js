/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null
*/

function max(a, b) {
  //  Vérification des entrées
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    isNaN(a) ||
    isNaN(b)
  ) {
    return null; // entrées invalides
  }

  //  Cas où les deux nombres sont égaux
  if (a === b) {
    return "Les deux nombres sont égaux";
  }

  //  Retourner le plus grand nombre
  return a > b ? a : b;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { max };
