import express from 'express'
import routerLibros from './router/libros.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/libros', routerLibros)

const PORT = 8080;
const server = app.listen(8080, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
server.on('error', () => console.log(`Error en el Servidor`))