
const queries = {
    loginUser : `
    SELECT administrador_id, nombre, apellidos, fecha_nac, email FROM administradores
    WHERE email = $1 AND contrasena = $2;`,
}
module.exports = queries;