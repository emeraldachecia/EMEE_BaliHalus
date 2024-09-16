import { BaliHalusDB } from "../../config/BaliHalusDB.js";

class UserModel {
	static async defineModel() {
		try {
			const query = `
				CREATE TABLE IF NOT EXISTS User (
					UserID INT PRIMARY KEY,
					Name VARCHAR(100) NOT NULL,
                    Username VARCHAR(100) NOT NULL UNIQUE,
					Password TEXT NOT NULL,
					PhoneNumber VARCHAR(20) NOT NULL UNIQUE,
					Type ENUM('Member', 'Admin') NOT NULL
				)
			`;

			await BaliHalusDB.execute(query);

		} catch (error) {
			console.error(error);
		}
	}
	

	static async create(User) {
		try {
			const query = `
                INSERT INTO User (
					Name,
                    Username,
                    Password,
					PhoneNumber,
					Type
                ) VALUES (?, ?, ?, ?, ?)
            `;
			const values = [
                User.Name,
                User.Username,
				User.Password,
				User.PhoneNumber,
				User.Type,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
			console.error(error);
		}
	}

	static async update(User) {
		try {
			const query = `
                UPDATE User
                SET
					Name = ?,
                    Username = ?,
					Password = ?,
					PhoneNumber = ?,
                WHERE UserID = ?
            `;
			const values = [
                User.Name,
                User.Username,
				User.Password,
				User.PhoneNumber,
				User.UserID,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
			console.error(error);
		}
	}

	static async delete(UserID) {
		try {
			const query = `
                DELETE FROM User
                WHERE UserID = ?
            `;
			await BaliHalusDB.execute(query, [UserID]);
		} catch (error) {
			console.error(error);
		}
	}

	static async readOne(UserID) {
		try {
			const query = `
                SELECT UserID, Name, Username, PhoneNumber FROM User 
                WHERE UserID = ?
            `;
            const queryReadReservation = `
                SELECT ReservationID, Date FROM Reservation
                WHERE UserID = ?
            `;
            const [dataUser] = await BaliHalusDB.execute(query, [UserID]);
            const [dataReservation] = await BaliHalusDB.execute(query, [UserID]);
            
            return { dataUser: dataUser, dataReservation: dataReservation };
		} catch (error) {
			console.error(error);
		}
	}

	static async readAll() {
		try {
			const query = `
                SELECT UserID, Name, Username, PhoneNumber FROM User
            `;
			const [rows] = await BaliHalusDB.execute(query);
			return rows;
		} catch (error) {
			console.error(error);
		}
	}
}

export { UserModel };