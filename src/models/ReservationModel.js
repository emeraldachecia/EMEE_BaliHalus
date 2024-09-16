import { BaliHalusDB } from "../../config/BaliHalusDB.js";

class ReservationModel {
	static async defineModel() {
		try {
			const query = `
				CREATE TABLE IF NOT EXISTS Reservation (
					ReservationID INT PRIMARY KEY,
					Date DATETIME NOT NULL,
					UserID INT NOT NULL,
					FranchiseID INT NOT NULL,
                    ServiceID INT NOT NULL,
					FOREIGN KEY (UserID) REFERENCES User(UserID)
					FOREIGN KEY (FranchiseID) REFERENCES Franchise(FranchiseID)
					FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
				)
			`;

			await BaliHalusDB.execute(query);

		} catch (error) {
			console.error(error);
		}
	}
	

	static async create(Reservation) {
		try {
			const query = `
                INSERT INTO Reservation (
					Date,
					UserID,
					FranchiseID,
                    ServiceID
                ) VALUES (?, ?, ?, ?)
            `;
			const values = [
				Reservation.Date,
				Reservation.UserID,
				Reservation.FranchiseID,
				Reservation.ServiceID,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
			console.error(error);
		}
	}

	static async update(Reservation) {
		try {
			const query = `
                UPDATE Reservation
                SET
					Date = ?,
					UserID = ?,
					FranchiseID = ?,
					ServiceID = ?,
                WHERE ReservationID = ?
            `;
			const values = [
				Reservation.Date,
				Reservation.UserID,
				Reservation.FranchiseID,
				Reservation.ServiceID,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
			console.error(error);
		}
	}

	static async delete(ReservationID) {
		try {
			const query = `
                DELETE FROM Reservation
                WHERE ReservationID = ?
            `;
			await BaliHalusDB.execute(query, [ReservationID]);
		} catch (error) {
			console.error(error);
		}
	}

	static async readOne(ReservationID) {
		try {
			const query = `
                SELECT * FROM Reservation
                INNER JOIN User
                ON Reservation.UserID = User.UserID
                INNER JOIN Franchise
                ON Reservation.FranchiseID = Franchise.FranchiseID
                INNER JOIN Service
                ON Reservation.ServiceID = Service.ServiceID
                WHERE ReservationID = ?
            `;
			const [rows] = await BaliHalusDB.execute(query, [ReservationID]);
			return rows[0];
		} catch (error) {
			console.error(error);
		}
	}

	static async readAll() {
		try {
			const query = `
                SELECT * FROM Reservation
            `;
			const [rows] = await BaliHalusDB.execute(query);
			return rows;
		} catch (error) {
			console.error(error);
		}
	}
}

export { ReservationModel };