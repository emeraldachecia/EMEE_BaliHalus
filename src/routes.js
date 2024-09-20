import express from "express";
import { home_page } from "./controllers/home-controller.js";
import { history_page } from "./controllers/history-controller.js";
import { service_page } from "./controllers/service-controller.js";
import { dashboard_page } from "./controllers/dashboard-controller.js";
import { UserController } from "./controllers/UserController.js";
import { ReservationController } from "./controllers/ReservationController.js";
import { Authorization } from "./utils/Authorization.js";

const router = express.Router();

router.get("/", home_page);
router.get("/login-register", UserController.login_register_page),
router.get("/reservation", Authorization.decryption, ReservationController.reservation_page);
router.get("/history", Authorization.decryption, history_page);
router.get("/service", Authorization.decryption, service_page);
router.get("/dashboard-admin", Authorization.decryption, dashboard_page);

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/logout", Authorization.decryption, UserController.logout);

export default router;