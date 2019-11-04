import { Router } from "express";
import { DogService } from "../../../services/dogs";
import { DogController } from "../../../controllers/apis/dogs";

let router = Router();

router.get("/dogs", (req, res) => {
  new DogController(new DogService()).getDogs(req, res);
});

router.get("/dogs/:id", (req, res) => {
  new DogController(new DogService()).getDogById(req, res);
});

module.exports = router;
