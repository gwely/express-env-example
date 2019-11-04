import { Router } from "express";
import { DogService } from "./service";
import { DogController } from "./controller";

let router = Router();

router.get("/", (req, res) => {
  new DogController(new DogService()).getDogs(req, res);
});

router.get("/:id", (req, res) => {
  new DogController(new DogService()).getDogById(req, res);
});

module.exports = router;
