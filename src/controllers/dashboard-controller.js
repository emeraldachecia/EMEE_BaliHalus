export const dashboard_page = async (req, res) => {
    try {
        res.render("dashboard", {
            layout: "layouts/main",
            title: "Reservasi Bali Halus",
            script: "dashboard-script.js",
            style: "dashboard-style.css",
            hideHeader: true
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};