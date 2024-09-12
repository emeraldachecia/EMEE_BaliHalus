import express from "express";
import { home_page } from "./controllers/home-controller.js";
import { reservation_page } from "./controllers/reservation-controller.js";
import { history_page } from "./controllers/history-controller.js";

const router = express.Router();

router.get("/", home_page);
router.get("/reservation", reservation_page);
router.get("/history", history_page)

export default router;