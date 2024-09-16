import { BaliHalusDB } from "../../config/BaliHalusDB.js";

class UserModel {
	static async defineModel() {
		try {
			const query = `
				CREATE TABLE IF NOT EXISTS User (
					UserID INT PRIMARY KEY,
					Name VARCHAR(100) NOT NULL,
					Password TEXT NOT NULL,
					PhoneNumber VARCHAR(20) NOT NULL UNIQUE,
					Type ENUM('Member', 'Admin') NOT NULL
				)
			`;

			await BaliHalusDB.execute(query);

		} catch (error) {
            console.error(error);
            throw error;
		}
	}
	

	static async create(User) {
		try {
			const query = `
                INSERT INTO User (
					Name,
                    Password,
					PhoneNumber,
					Type
                ) VALUES (?, ?, ?, ?)
            `;
			const values = [
                User.Name,
				User.Password,
				User.PhoneNumber,
				User.Type,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async update(User) {
		try {
			const query = `
                UPDATE User
                SET
					Name = ?,
					Password = ?,
					PhoneNumber = ?,
                WHERE UserID = ?
            `;
			const values = [
                User.Name,
				User.Password,
				User.PhoneNumber,
				User.UserID,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
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
            throw error;
		}
	}

	static async readOne(UserID) {
		try {
			const query = `
                SELECT UserID, Name, PhoneNumber FROM User 
                WHERE UserID = ?
            `;
            const queryReadReservation = `
                SELECT ReservationID, Date FROM Reservation
                WHERE UserID = ?
            `;
            const [dataUser] = await BaliHalusDB.execute(query, [UserID]);
            const [dataReservation] = await BaliHalusDB.execute(queryReadReservation, [UserID]);
            
            return { dataUser: dataUser[0], dataReservation: dataReservation };
		} catch (error) {
            console.error(error);
            throw error;
		}
    }
    
    static async readByPhoneNumber(PhoneNumber) {
        try {
            const query = `
                SELECT UserID, Name, Password, PhoneNumber FROM User
                WHERE PhoneNumber = ?
            `;
            const [dataUser] = await BaliHalusDB.execute(query, [PhoneNumber]);

            return dataUser[0];
        } catch (error) {
            console.error(error);
            throw error;
		}
    }

	static async readAll() {
		try {
			const query = `
                SELECT UserID, Name, PhoneNumber FROM User
            `;
			const [rows] = await BaliHalusDB.execute(query);
			return rows;
		} catch (error) {
            console.error(error);
            throw error;
		}
	}
}

export { UserModel };