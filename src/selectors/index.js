/* eslint-disable import/prefer-default-export */

export const getNextId = items => {
  // on transpose un tableau d'objets vers un tableau d'id
  const ids = items.map(item => item.id);
  // on déverse notre tableau d'id dans math.max pour extraire le plus grand, on ajoute 1
  const id = Math.max(...ids) + 1;
  // on retourne l'id calculé
  return id;
};
