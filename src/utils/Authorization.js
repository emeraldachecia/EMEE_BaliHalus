import jwt from 'jsonwebtoken';

class Authorization {
    static async encryption(payload) {
        try {
            const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.error(error);
            throw new Error('Encryption failed');
        }
    }

    static async decryption(req, res, next) {
        try {
            const token = req.cookies.token;
            
            if (!token) {
                return res.redirect('/login-register');
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            
            if (!decoded) {
                return res.redirect('/login-register');
            }
            req.dataUser = decoded;

            next();

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Decryption failed' });
        }
    }
}

export { Authorization };
