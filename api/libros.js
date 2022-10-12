import modelLibros from '../model/libros.js'

const obtenerLibros = id => {
    return id ? modelLibros.findLibro(id) : modelLibros.findLibros()
}

const guardarLibro = libro => {
    return modelLibros.saveLibro(libro)
}

const modificarLibro = (id, libro) => {
   return modelLibros.updateLibro(id, libro)
}

const eliminarLibro = id => {
    return modelLibros.deleteLibro(id)
}

export default {
    obtenerLibros,
    guardarLibro,
    modificarLibro,
    eliminarLibro
}