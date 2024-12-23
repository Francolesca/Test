const jwt = require('jsonwebtoken');

const authLogin = async (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '12345') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        return res.json({ token });
    }
    return res.status(401).json({ message: 'Credenciales inválidas' })
};

// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzM0ODI3NzU5fQ.8TC9GjNgEjuDv4YsM3ygwJpurivm5b55kWATE96XRII
module.exports = {
    authLogin
}