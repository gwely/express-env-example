import { Router } from "express";
const v1Routes = require("./v1");

let router = Router();

router.use('/v1', v1Routes);

module.exports = router;
