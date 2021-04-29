import express from "express";
import {
  postController,
  postCreateController,
  postDetailController,
  postCreatePostController,
  updatePost,
  postDelete,
} from "../controller/postController";

const postRouter = express.Router();

postRouter.get("/postList", postController);
postRouter.get("/postCreate", postCreateController);
postRouter.post("/postCreate", postCreatePostController);
postRouter.get("/postDetail/:id", postDetailController);
postRouter.post("/postDetail", updatePost);
postRouter.post("/postDelete", postDelete);

export default postRouter;
