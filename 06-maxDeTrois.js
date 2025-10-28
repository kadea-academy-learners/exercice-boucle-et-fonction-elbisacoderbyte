/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null
*/

function maxDeTrois(a, b, c) {
  // 1️⃣ Vérifier le nombre d'arguments reçus
  if (arguments.length !== 3) {
    return null;
  }

  // 2️⃣ Vérifier que chaque argument est un nombre valide
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number' ||
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c)
  ) {
    return null;
  }

  // 3️⃣ Vérifier si les trois sont égaux
  if (a === b && b === c) {
    return "Les trois nombres sont égaux";
  }

  // 4️⃣ Retourner le plus grand des trois
  return Math.max(a, b, c);
}

// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };
