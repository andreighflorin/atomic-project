import { Request, Response } from "express";
import { getMoviesFromTMDb } from "../services/movieService";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await getMoviesFromTMDb();
    res.status(200).json({ success: true, data: movies });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch movie data",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
