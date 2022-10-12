const libros = [
    { "id": "1", "titulo": "El lobo estepario", "autor": "Hermann Hesse", "año": "1927" },
    { "id": "2", "titulo": "Demián", "autor": "Hermann Hesse", "año": "1919"},
    { "id": "3", "titulo": "Siddartha", "autor": "Hermann Hesse", "año": "1922" },
]

const findLibros = () => {
    return libros
}

const findLibro = id => {
    return libros.find(libro => libro.id == id)
} 

const saveLibro = libro => {
    libro.id = libros.length + 1
    libros.push(libro)
    return libro
}

const updateLibro = (id, libro) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)
    return libro
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    const libro = libros.splice(index, 1)
    return libro
}

export default {
    findLibros,
    findLibro,
    saveLibro,
    updateLibro,
    deleteLibro
}