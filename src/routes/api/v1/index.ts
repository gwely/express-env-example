import { Router } from "express";
const dogRoutes = require("./dogs/routes");

let router = Router();

router.use('/dogs', dogRoutes);

module.exports = router;
