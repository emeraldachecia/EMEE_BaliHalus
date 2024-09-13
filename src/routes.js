import express from "express";
import { home_page } from "./controllers/home-controller.js";
import { reservation_page } from "./controllers/reservation-controller.js";
import { history_page } from "./controllers/history-controller.js";
import { service_page } from "./controllers/service-controller.js";
import { dashboard_page } from "./controllers/dashboard-controller.js";

const router = express.Router();

router.get("/", home_page);
router.get("/reservation", reservation_page);
router.get("/history", history_page);
router.get("/service", service_page);
router.get("/dashboard-admin", dashboard_page);

export default router;