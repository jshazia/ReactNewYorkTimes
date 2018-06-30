const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res){
    res.sendFile(path.join(_dirnmae,"../client/build/index.html"));
});

module.exports = router;