import express from "express";
import { editCourse, uploadCourse } from "../controllers/course.controller";
import { authorizedRoles, isAutheticated } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAutheticated,
  authorizedRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAutheticated,
  authorizedRoles("admin"),
  editCourse
);

export default courseRouter;
