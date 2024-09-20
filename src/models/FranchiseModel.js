import { BaliHalusDB } from "../../config/BaliHalusDB.js";

class FranchiseModel {
	static async defineModel() {
		try {
			const query = `
				CREATE TABLE IF NOT EXISTS Franchise (
					FranchiseID VARCHAR(20) PRIMARY KEY,
					Name VARCHAR(100) NOT NULL,
                    Address VARCHAR(255) NOT NULL,
                    City VARCHAR(100) NOT NULL
				)
			`;
			
			await BaliHalusDB.execute(query);
			
		} catch (error) {
            console.error(error);
            throw error;
		}
	}	

	static async create(Franchise) {
		try {
			const query = `
                INSERT INTO Franchise (
					Name,
                    Address,
					City
                ) VALUES (?, ?, ?)
            `;
			const values = [
				Franchise.Name,
				Franchise.Address,
				Franchise.City,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async update(Franchise) {
		try {
			const query = `
                UPDATE Franchise
                SET 
					Name = ?,
					Address = ?,
					City = ?,
                WHERE FranchiseID = ?
            `;
			const values = [
				Franchise.Name,
				Franchise.Address,
				Franchise.City,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async delete(FranchiseID) {
		try {
			const query = `
                DELETE FROM Franchise
                WHERE FranchiseID = ?
            `;
			await BaliHalusDB.execute(query, [FranchiseID]);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async readOne(FranchiseID) {
		try {
			const query = `
                SELECT * FROM Franchise
                WHERE FranchiseID = ?
            `;
			const [rows] = await BaliHalusDB.execute(query, [FranchiseID]);
			return rows[0];
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async readAll() {
		try {
			const query = `
                SELECT * FROM Franchise
            `;
			const [rows] = await BaliHalusDB.execute(query);
			return rows;
		} catch (error) {
            console.error(error);
            throw error;
		}
	}
}

export { FranchiseModel };
