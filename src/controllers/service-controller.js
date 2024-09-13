export const service_page = async (req, res) => {
    try {
        res.render("service", {
            layout: "layouts/main",
            title: "Reservasi Bali Halus",
            script: "service-script.js",
            style: "service-style.css",
            hideHeader: false
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};