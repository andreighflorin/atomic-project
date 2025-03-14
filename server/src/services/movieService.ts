import axios from "axios";

const TMDB_API_KEY =
  process.env.TMDB_API_KEY || "4190f01996e8472a76bc2161774ca589";
const TMDB_API_URL = `https://api.themoviedb.org/3/list/1?api_key=${TMDB_API_KEY}`;

export const getMoviesFromTMDb = async () => {
  try {
    const response = await axios.get(TMDB_API_URL);
    console.log("TMDb API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies from TMDb:", error);
    throw error;
  }
};
