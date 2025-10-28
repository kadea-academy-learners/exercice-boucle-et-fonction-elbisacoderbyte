/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number
*/

function nombreDeVoyelles(phrase) {
  // Vérification que l’entrée est bien une chaîne
  if (typeof phrase !== 'string') {
    return 0;
  }

  // Conversion en minuscules pour ignorer la casse
  const texte = phrase.toLowerCase();

  //  Définition des voyelles à rechercher
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

  // Compteur initial
  let compteur = 0;

  //  Parcourir chaque caractère de la phrase
  for (let i = 0; i < texte.length; i++) {
    if (voyelles.includes(texte[i])) {
      compteur++;
    }
  }

  //  Retourner le nombre total de voyelles
  return compteur;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles };
