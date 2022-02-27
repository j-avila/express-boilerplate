const { Router } = require("express")
const {
  usuariosGet,
  usuariosPost,
  usuarioDelete,
  usuariosUpdate,
} = require("../controllers/user.controller")

const router = Router()

// routes
router.get("/", usuariosGet)

router.post("/", usuariosPost)

router.put("/:id", usuariosUpdate)

router.delete("/:id", usuarioDelete)

module.exports = router
