import express from "express";
import { home_page } from "./controllers/home-controller.js";
import { rsvp_page } from "./controllers/reservation-controller.js";

const router = express.Router();

router.get("/", home_page);
router.get("/reservation", rsvp_page)

export default router;