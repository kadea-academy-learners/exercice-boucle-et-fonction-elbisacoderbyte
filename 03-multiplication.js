/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/



function multiplication(a, b) {
  // Vérifie qu’on a bien 2 arguments
  if (arguments.length !== 2) return undefined;

  // Vérifie que les deux sont des nombres
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;

  // Vérifie qu’ils ne sont pas NaN
  if (isNaN(a) || isNaN(b)) return undefined;

  // Calcule et retourne le produit
  return a * b;
}

module.exports = { multiplication };

