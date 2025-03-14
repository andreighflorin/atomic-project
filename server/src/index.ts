import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })
);

app.use(express.json());

app.use("/api/movies", movieRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
