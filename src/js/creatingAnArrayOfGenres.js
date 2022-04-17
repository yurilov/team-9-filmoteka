import { genres } from './API/genres';

export function creatingAnArrayOfGenres(result) {
  const arrGenres = [];
  const arrayIdGenres = result.genre_ids || result.genres;

  for (let i = 0; i < 3; i++) {
    const idGenre = arrayIdGenres[i];

    for (const key in genres) {
      if (idGenre == key) {
        arrGenres.push(genres[key]);
      }
    }
  }

  if (arrayIdGenres.length >= 3) {
    arrGenres.splice(2, 1, 'Other');
  }

  return arrGenres;
}
