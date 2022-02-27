const express = require("express")
var cors = require("cors")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.ususariosPath = "/api/usuarios"
    // middlewares
    this.middlewares()
    // app routes
    this.routes()
  }

  middlewares() {
    // directorio publico
    this.app.use(express.static("public"))
    // lectura y parseo del body
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use(this.ususariosPath, require("../routes/user.routes"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

module.exports = Server
