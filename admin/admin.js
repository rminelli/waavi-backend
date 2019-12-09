/* 
 * Validación para verificar si el usuario tiene acceso a la  área administrativa
 */

module.exports = middleware => {
    return (req, res, next) => {    
      if (req.user.admin) {
        middleware(req, res, next);
      } else {
        res.status(401).send("El usuario no es administrador.");
      }
    };
  };
  