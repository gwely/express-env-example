import { Router } from "express";
import { Container } from "./container";

const router = Router();

router.get("/v1/dogs", (req, res) => {
  const container = new Container().bind();
  const controller = container.getController();
  controller.getDogs(req, res);
});

module.exports = router;
