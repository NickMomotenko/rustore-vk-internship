export const getHeaders = () => {
  return {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNjZDRmYTE3ZDNkZTMxMzc1NzM5NzFmOTRiMzY3ZiIsInN1YiI6IjY2MjhkNzZjMzk1NDlhMDE4OTAxNmRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1wpVHmzbSnMOmGgPodOx8xAM039z-YVPvPgz72TI9xE`,
  };
};

export const fetchTopRatedFilms = async (pageNumber: number = 1) => {
  const options = {
    method: "GET",
    headers: getHeaders(),
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?languge=ru-RU&page=${pageNumber}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};

export const fetchDetailsById = async (id: number) => {
  const options = {
    method: "GET",
    headers: getHeaders(),
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=ru-RU`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};

export const fetchRecomendationsById = async (id: number) => {
  const options = {
    method: "GET",
    headers: getHeaders(),
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=ru-RU&page=1`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};
