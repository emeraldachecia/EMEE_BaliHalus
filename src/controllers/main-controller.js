export const home = async (req, res) => {
    try {
        res.render("main", {
            layout: "main",
            title: "Usaha Mikro Kecil",
            script: "home-script.js",
            style: "home-style.css",
            message: "berhasil"
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};