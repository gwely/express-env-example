import { Router } from "express";
import { DogService } from "./service";
import { DogController } from "./controller";

const router = Router();

router.get("/api/v1/dogs", (req, res) => {
  new DogController(new DogService()).getDogs(req, res);
});

router.get("/api/v1/dogs/:id", (req, res) => {
  new DogController(new DogService()).getDogById(req, res);
});

module.exports = router;
