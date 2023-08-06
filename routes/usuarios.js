const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPatch, usuariosDelete, usuariosPut } = require('../controllers/usuarios');

const router = Router();
// GET
router.get('/', usuariosGet)

// POST
router.post('/', usuariosPost)

// PUT
router.put('/:id', usuariosPut)

// DELETE
router.patch('/', usuariosPatch)

// PATCH
router.delete('/', usuariosDelete)






module.exports = router;