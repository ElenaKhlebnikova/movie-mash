const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // This authorization string should be an env variable and not committed to Git.
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjA4MTUzNjMzNzM3MTAwNzM3NzI0ZDQ2N2E5M2QzYSIsInN1YiI6IjY0NzVkMTE4ZGQyNTg5MDEyMDA1ZTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rO_E2ULkrBXLFMvl92-gnZdQHoqGWd0gmkRP4cGi9n0',
  },
};

const fetchMulti = async (value) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${value.queryKey}&include_adult=fasle&language=en-US&page=1`,
    options
  );
  return response.json();
};

const fetchGenres = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    options
  );

  return response.json();
};

const fetchOneMovie = async ({ queryKey }) => {
  console.log(queryKey);
  const response = await fetch(
    `https://api.themoviedb.org/3/${queryKey[1]}/${queryKey[0]}?language=en-US`,
    options
  );

  return response.json();
};

export { fetchMulti, fetchGenres, fetchOneMovie };
