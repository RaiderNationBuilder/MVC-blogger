const router = require("express").Router()

router.get("/", function(req,res) {
    res.render("home")
})

router.get("/login", function(req,res) {
    res.render("login")
})

module.exports = router