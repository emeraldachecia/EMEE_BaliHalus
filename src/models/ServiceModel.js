import { BaliHalusDB } from "../../config/BaliHalusDB.js";

class ServiceModel {
	static async defineModel() {
		try {
			const query = `
				CREATE TABLE IF NOT EXISTS Service (
					ServiceID INT PRIMARY KEY,
					Name VARCHAR(100) NOT NULL,
                    ParentID INT NULL,
					FOREIGN KEY (ParentID) REFERENCES Service(ServiceID)
				)
			`;
			
			await BaliHalusDB.execute(query);
			
		} catch (error) {
            console.error(error);
            throw error;
		}
	}	

	static async create(Service) {
		try {
			const query = `
                INSERT INTO Service (
					Name,
                    ParentID
                ) VALUES (?, ?)
            `;
			const values = [
				Service.Name,
				Service.ParentID
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async update(Service) {
		try {
			const query = `
                UPDATE Service
                SET 
					Name = ?,
					ParentID = ?,
                WHERE ServiceID = ?
            `;
			const values = [
				Service.Name,
                Service.ParentID
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async delete(ServiceID) {
		try {
			const query = `
                DELETE FROM Service
                WHERE ServiceID = ?
            `;
			await BaliHalusDB.execute(query, [ServiceID]);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async readOne(ServiceID) {
		try {
			const query = `
                SELECT * FROM Service
                WHERE ServiceID = ?
            `;
			const [rows] = await BaliHalusDB.execute(query, [ServiceID]);
			return rows[0];
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async readAll() {
		try {
			const query = `
                SELECT * FROM Service
            `;
			const [rows] = await BaliHalusDB.execute(query);
			return rows;
		} catch (error) {
            console.error(error);
            throw error;
		}
	}
}

export { ServiceModel };
