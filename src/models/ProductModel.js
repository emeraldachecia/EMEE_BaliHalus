import { BaliHalusDB } from "../../config/BaliHalusDB.js";

class ProductModel {
	static async defineModel() {
		try {
			const query = `
				CREATE TABLE IF NOT EXISTS Product (
					ProductID INT PRIMARY KEY,
					Name VARCHAR(50) NOT NULL
				)
			`;
			
			await BaliHalusDB.execute(query);
			
		} catch (error) {
            console.error(error);
            throw error;
		}
	}	

	static async create(Product) {
		try {
			const query = `
                INSERT INTO Product (
					Name,
                ) VALUES (?)
            `;
			const values = [
				Product.Name,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async update(Product) {
		try {
			const query = `
                UPDATE Product
                SET 
					Name = ?,
                WHERE ProductID = ?
            `;
			const values = [
				Product.Name,
			];
			await BaliHalusDB.execute(query, values);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async delete(ProductID) {
		try {
			const query = `
                DELETE FROM Product
                WHERE ProductID = ?
            `;
			await BaliHalusDB.execute(query, [ProductID]);
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async readOne(ProductID) {
		try {
			const query = `
                SELECT * FROM Product
                WHERE ProductID = ?
            `;
			const [rows] = await BaliHalusDB.execute(query, [ProductID]);
			return rows[0];
		} catch (error) {
            console.error(error);
            throw error;
		}
	}

	static async readAll() {
		try {
			const query = `
                SELECT * FROM Product
            `;
			const [rows] = await BaliHalusDB.execute(query);
			return rows;
		} catch (error) {
            console.error(error);
            throw error;
		}
	}
}

export { ProductModel };
