export const history_page = async (req, res) => {
    try {
        res.render("history", {
            layout: "layouts/main",
            title: "Reservasi Bali Halus",
            script: "history-script.js",
            style: "history-style.css",
            hideHeader: false
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};