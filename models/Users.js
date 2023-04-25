import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         nombresUsuario:
 *           type: string
 *           description: Nombre del usuario.
 *         celularUsuario:
 *           type: number
 *           description: Número de celular del usuario
 *       example:
 *         nombresUsuario: Veronica
 *         celularUsuario: 3145763456
 */

const userSchema = mongoose.Schema({
  nombresUsuario:{
    type: String,
    require: true,
    trim: true
  },
  celularUsuario:{
    type: Number,
    require: true,
    trim: true
  }
},{
  timestamps: true
});

const Usuario = mongoose.model("Usuarios", userSchema);
export default Usuario;
