import apiLibros from '../api/libros.js'

const getLibros = (req, res) => {
    const id = req.params.id
    res.json(apiLibros.obtenerLibros(id))
    res.end()
}

const postLibros = (req, res) => {
    const libro = req.body
    res.json(apiLibros.guardarLibro(libro))
    res.end()
}

const putLibros = (req, res) => {
    const id = req.params.id
    const libro = req.body
    res.json(apiLibros.modificarLibro(id, libro))
    res.end()
}

const deleteLibros = (req, res) => {
    const id = req.params.id
    res.json(apiLibros.eliminarLibro(id))
    res.end()
}

export default {
    getLibros,
    postLibros,
    putLibros,
    deleteLibros
}