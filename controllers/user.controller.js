const { response, request } = require("express")

const usuariosGet = (req = request, res = response) => {
  const { name, page } = req.query
  res.json({
    message: "get Hello World from controller",
    name,
    page,
  })
}

const usuariosPost = (req, res = response) => {
  const body = req.body
  console.log(body)
  res.json({
    message: "post Hello World from controller",
    body,
  })
}

const usuariosUpdate = (req, res = response) => {
  const id = req.params.id
  const body = req.body

  res.json({
    message: "patch Hello World from controller",
    updated: id,
  })
}

const usuarioDelete = (req, res = response) => {
  const id = req.params.id

  res.json({
    message: "delete Hello World from controller",
    deleted: id,
  })
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosUpdate,
  usuarioDelete,
}
