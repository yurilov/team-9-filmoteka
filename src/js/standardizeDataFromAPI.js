import { creatingAnArrayOfGenres } from './creatingAnArrayOfGenres';

export function standardizeDataFromAPI(results) {
  const { title, original_title, poster_path, release_date, id, vote_average } = results;
  const date = release_date.slice(0, 4);
  const genres = creatingAnArrayOfGenres(results).join(', ');
  const poster_link = `https://image.tmdb.org/t/p/original${poster_path}`;
  const rating = vote_average.toFixed(1);

  return {
    date,
    genres,
    title,
    original_title,
    poster_link,
    id,
    rating,
  };
}
