import express from "express";
import { login_page } from "./controllers/login-register-controller.js";
import { home_page } from "./controllers/home-controller.js";
import { reservation_page } from "./controllers/reservation-controller.js";
import { history_page } from "./controllers/history-controller.js";
import { service_page } from "./controllers/service-controller.js";
import { dashboard_page } from "./controllers/dashboard-controller.js";
import { UserController } from "./controllers/UserController.js";
import { Authorization } from "./utils/Authorization.js";

const router = express.Router();

router.get("/", home_page);
router.get("/login-register", login_page),
router.get("/reservation", reservation_page);
router.get("/history", history_page);
router.get("/service", service_page);
router.get("/dashboard-admin", dashboard_page);

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/logout", Authorization.decryption, UserController.logout);

export default router;