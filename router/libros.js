import express from 'express';
import controllerClientes from '../controller/libros.js'

const router = express.Router()

router.get('/:id?', controllerClientes.getLibros)

router.post('/', controllerClientes.postLibros)

router.put('/:id', controllerClientes.putLibros)

router.delete('/:id', controllerClientes.deleteLibros)

export default router