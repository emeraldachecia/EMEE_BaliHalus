export const login_page = async (req, res) => {
    try {
        res.render("login-register", {
            layout: "layouts/main",
            title: "Reservasi Bali Halus",
            script: "login-register-script.js",
            style: "login-register-style.css",
            hideHeader: false
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};