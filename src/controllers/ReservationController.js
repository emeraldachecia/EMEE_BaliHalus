import { ReservationModel } from "../models/ReservationModel.js";
import { ServiceModel } from "../models/ServiceModel.js";
import { FranchiseModel } from "../models/FranchiseModel.js";

class ReservationController {
	static async reservation_page(req, res) {
        try {
            // untuk mendapatkan data user yang dibuat di Authorization.decryption
            const dataUser = req.dataUser;

            const dataService = await ServiceModel.readAll();

            const dataFranchise = await FranchiseModel.readAll();

            res.render("reservation", {
                layout: "layouts/main",
                title: "Reservasi Bali Halus",
                script: "reservation-script.js",
                style: "reservation-style.css",
                dataUser: JSON.stringify(dataUser),
                dataService: JSON.stringify(dataService),
                dataFranchise: JSON.stringify(dataFranchise),
                hideHeader: false
            });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message });
        }
	}

	static async register(req, res) {
		try {
			const { Reservation } = req.body;

            const reservation = await ReservationModel.readByPhoneNumber(Reservation.PhoneNumber);
            
            if (Reservation) {
                return res.status(409).json({ message: 'Phone Number has been registered' });
            }

			const hashedPassword = await Authentication.encryption(Reservation.Password);

			Reservation.Password = hashedPassword;
            
            await ReservationModel.create(Reservation);

			res.status(200).json({ message: 'register is success'  });
		} catch (error) {
			console.error(error);
			res.status(error.status || 500).json({ error: error.message });
		}
	}

	static async GET(req, res) {
        try {
			const { Reservation } = req.body;

            // Mencari Reservation berdasarkan nomor handphone
            const reservation = await ReservationModel.readByPhoneNumber(Reservation.PhoneNumber);
            if (!Reservation) {
                return res.status(404).json({ message: 'Reservation not found' });
            }

            // Memeriksa kecocokan password
            const isPasswordValid = await Authentication.decryption(Reservation.Password, Reservation.Password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
			}

			const payload = { ReservationID: Reservation.ReservationID, Name: Reservation.Name, PhoneNumber: Reservation.PhoneNumber };
			const token = await Authorization.encryption(payload);
			
			res.cookie('auth_token', token);

            // Mengirimkan respons sukses
            res.status(200).json({ message: 'Login successful' });
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

export { ReservationController };
