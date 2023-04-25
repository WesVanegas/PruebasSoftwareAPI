import Usuario from '../models/Users.js';

//Crear
const agregar = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const usuarioGuardado = await usuario.save();
    res.json({
      body: usuarioGuardado,
      ok: 'SI',
      msg: 'Registro creado correctamente.',
    });
  } catch (error) {
    console.log(error);
  }
};

//Leer
const listar = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

//Eliminar
const eliminar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Resgistro
  const usuario = await Usuario.findById(id);
  console.log(usuario);

  if (!usuario) {
    const error = new Error('Registro no encontrado.');
    return res.status(404).json({ msg: error.message, ok: 'SI' });
  }

  try {
    await usuario.deleteOne();
    res.json({ msg: 'Registro eliminado correctamente.', ok: 'SI' });
  } catch (error) {
    console.log(error);
  }
};

//Editar
const editar = async (req, res) => {
  //recibir los parametros por url
  const { id } = req.params;
  //console.log(id);

  //Validar si existe el registro
  const usuario = await Usuario.findById(id);
  console.log(usuario);

  if (!usuario) {
    const error = new Error('Registro no encontrado.');
    return res.status(404).json({ msg: error.message, ok: 'SI' });
  }

  //Capturar los datos del formulario
  usuario.nombresUsuario = req.body.nombresUsuario || usuario.nombresUsuario;
  usuario.celularUsuario = req.body.celularUsuario || usuario.celularUsuario;

  try {
    const usuarioGuardado = await usuario.save();
    res.json({
      body: usuarioGuardado,
      msg: 'Registro guardado correctamente.',
      ok: 'SI',
    });
  } catch (error) {
    console.log(error);
  }
};

//Leer uno
const listarUno = async (req, res) => {
  //recibir los parametros por url
  const { id } = req.params;

  //Validar si existe el Registro
  const usuario = await usuario.findById(id);

  if (!usuario) {
    const error = new Error('Registro no encontrado.');
    return res.status(404).json({ msg: error.message, ok: 'SI' });
  }

  res.json(usuario);
};

export { agregar, listar, eliminar, editar, listarUno };
