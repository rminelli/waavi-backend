const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const signin = async (req, res) => {
    if (!req.body.name || !req.body.password) {
      return res.status(400).send("Ingrese el nombre de usuario y contraseña!");
    }

    const user = await app
      .db("users")
      .where({ name: req.body.name })
      .first();

    if (!user) return res.status(400).send("Usuario no encontrado!");

    const isMatch = await bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) return res.status(401).send("Nombre / contraseña inválido!");

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      id: user.id,
      name: user.name,
      admin: user.admin,
      iat: now,
      exp: now + 60 * 60 * 24 * 1 // El token caduca con 1 día
    };

    res.json({
      ...payload,
      token: jwt.encode(payload, authSecret)
    });
  };

  const validateToken = async (req, res) => {
    const userData = req.body || null;
    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (err) {
      return res.send(false).send(err);
    }
  };

  return { signin, validateToken };
};
