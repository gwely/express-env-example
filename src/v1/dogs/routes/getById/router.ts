import { Router } from "express";
import { Container } from "./container";

const router = Router();

router.get("/v1/dogs/:id", (req, res) => {
  const container = new Container().bind();
  const controller = container.getController();
  controller.getDogById(req, res);
});

module.exports = router;
