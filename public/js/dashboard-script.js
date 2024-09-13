import { dashboard_page } from "../../src/controllers/dashboard-controller.js";

const header = document.getElementById("main-header");

const currentPath = window.location.pathname;

const pagesToHideHeader = ["/dashboard-admin"];

if (pagesToHideHeader.includes(currentPath)) {
    header.style.display = "none";
}