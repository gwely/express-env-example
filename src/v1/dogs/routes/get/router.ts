import { Router } from "express";
import { Repository } from "./repository";
import { Manager } from "./manager";
import { Controller } from "./controller";

const router = Router();

router.get("/v1/dogs", (req, res) => {
  new Controller(new Manager(new Repository())).getDogs(req, res);
});

module.exports = router;
