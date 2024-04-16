import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

//routing
// register || method post

router.post("/register", registerController);

//routing
//login || post

router.post("/login", loginController);

//test
router.get("/test", requireSignIn, isAdmin, testController);

//protected user routes

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin route auth

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//forgot password

router.post("/forgot-password", forgotPasswordController);
export default router;
