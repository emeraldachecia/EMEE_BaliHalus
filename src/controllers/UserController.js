import { Authentication } from "../utils/Authentication.js";
import { Authorization } from "../utils/Authorization.js";
import { UserModel } from "../models/UserModel.js";

class UserController {
	static async login_register_page(req, res) {
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
	}

	static async register(req, res) {
		try {
			const { User } = req.body;

            const user = await UserModel.readByPhoneNumber(User.PhoneNumber);
            
            if (user) {
                return res.status(409).json({ message: 'Phone Number has been registered' });
            }

			const hashedPassword = await Authentication.encryption(User.Password);

			User.Password = hashedPassword;
            
            await UserModel.create(User);

			res.status(200).json({ message: 'register is success'  });
		} catch (error) {
			console.error(error);
			res.status(error.status || 500).json({ error: error.message });
		}
	}

	static async login(req, res) {
        try {
			const { User } = req.body;

            // Mencari user berdasarkan nomor handphone
            const user = await UserModel.readByPhoneNumber(User.PhoneNumber);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Memeriksa kecocokan password
            const isPasswordValid = await Authentication.decryption(User.Password, user.Password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
			}

			const payload = { UserID: user.UserID, Name: user.Name, PhoneNumber: user.PhoneNumber };
			const token = await Authorization.encryption(payload);
			
			res.cookie('token', token);

            // Mengirimkan respons sukses
            res.status(200).json({ message: 'Login successful', dataUser: payload });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message });
        }
	}
	
	static async logout(req, res) {
		try {
			res.clearCookie('auth_token');
			res.redirect('/login-register');
				
		} catch (error) {
			console.error(error);
            res.status(error.status || 500).json({ error: error.message });
		}
	}
}

export { UserController };
