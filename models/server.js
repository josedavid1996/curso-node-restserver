const express = require('express')
var cors = require('cors')

class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios'

    // Middlewares
    this.middlewares()

    // Rutas de mi aplicacion
    this.routes()
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // LECTURA Y PARSEO DEL BODY
    this.app.use(express.json())


    // DIRECTORIO PUBLICO
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto " + this.port)
    })
  }

}




module.exports = Server;