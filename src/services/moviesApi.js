const API_KEY = "1d821060cfc3dc7c024273bf806840e9";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchBooks() {
  return fetchWithErrorHandling(`${API_KEY}/books`);
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}
