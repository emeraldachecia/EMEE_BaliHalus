export const home_page = async (req, res) => {
    try {
        res.render("homepage", {
            layout: "layouts/main",
            title: "Reservasi Bali Halus",
            script: "home-script.js",
            style: "home-style.css",
            hideHeader: false
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};