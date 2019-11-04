"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DogController {
    constructor(service) {
        this.service = service;
    }
    getDogs(req, res) {
        const dogs = this.service.getDogs();
        res.json(dogs);
    }
    getDogById(req, res) {
        const id = req.params.id;
        if (!id) {
            res.status(400).send("Need to specify id");
        }
        const parsedId = parseInt(id);
        const dog = this.service.getDogById(parsedId);
        if (!dog) {
            res.status(404).send("Dog not found");
        }
        res.json(dog);
    }
}
exports.DogController = DogController;
//# sourceMappingURL=index.js.map