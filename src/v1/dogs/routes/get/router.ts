import { Router } from "express";
import { IController } from "./controller";
const container = require("./container");

const router = Router();

router.get("/v1/dogs", (req, res) => {
  const controller = (container["CONTROLLER"] as IController);
  controller.getDogs(req, res);
});

module.exports = router;
