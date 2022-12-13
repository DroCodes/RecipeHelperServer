import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import { main } from "./config/server";
import { RecipeRouter } from "./api-routes/RecipeRoute";
import { imageRouter } from "./api-routes/recipeImageRoute";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use("/static", express.static("uploads"));

// app.use("/test", router);
app.use("/recipes", RecipeRouter);
app.use("/uploadFile", imageRouter);

app.listen(port, () => {
    console.log("Server started on port " + port + ".");
    main().catch((err) => {
        console.log(err);
    });
});
