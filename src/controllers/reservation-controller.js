export const reservation_page = async (req, res) => {
    try {
        res.render("reservation", {
            layout: "layouts/main",
            title: "Reservasi Bali Halus",
            script: "reservation-script.js",
            style: "reservation-style.css",
            hideHeader: false
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};