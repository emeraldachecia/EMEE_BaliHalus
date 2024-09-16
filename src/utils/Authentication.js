import argon2 from 'argon2';

class Authentication {
    static async encryption(plainPassword) {
        try {
            const hashedPassword = await argon2.hash(plainPassword);
            return hashedPassword;
        } catch (error) {
            console.error('Encryption error:', error);
            throw error;
        }
    }

    static async decryption(plainPassword, hashedPassword) {
        try {
            const isMatch = await argon2.verify(hashedPassword, plainPassword);
            return isMatch;
        } catch (error) {
            console.error('Decryption error:', error);
            throw error;
        }
    }
}

export { Authentication } ;
