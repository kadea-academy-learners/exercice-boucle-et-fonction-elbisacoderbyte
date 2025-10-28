/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number
*/

function somme(n) {
  // 1️⃣ Vérification de la validité de l’entrée
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n <= 0) {
    return 0;
  }

  // 2️⃣ Initialisation de la variable de somme
  let total = 0;

  // 3️⃣ Boucle d’itération de 1 à n
  for (let i = 1; i <= n; i++) {
    total += i; // équivaut à total = total + i
  }

  // 4️⃣ Retour du résultat final
  return total;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { somme };
