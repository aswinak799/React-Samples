export const fetchMovies = async ({signal, page}) => {
    const url =
      'https://api.themoviedb.org/3/discover/movie?api_key=d18f91f6a8c7ef5c2014f334336d48f6&with_genres=28&page=' + page;
    const response = await fetch(url, { signal: signal });
    const data = await response.json();
    return data.results;
  };
  