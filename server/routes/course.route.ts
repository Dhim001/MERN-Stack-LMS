import express from "express";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
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

courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-courses-content/:id", isAutheticated, getCourseByUser);
courseRouter.put("/add-question", isAutheticated, addQuestion);
courseRouter.put("/add-answer", isAutheticated, addAnswer);
courseRouter.put("/add-review/:id", isAutheticated, addReview);
courseRouter.put("/add-reply", isAutheticated, authorizedRoles("admin"), addReplyToReview);

export default courseRouter;
