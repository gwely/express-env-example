"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dogs = [{
        id: 1,
        name: 'Corgi',
        origin: 'Wales',
        breeds: [
            'Pembroke',
            'Cardigan'
        ]
    }, {
        id: 2,
        name: 'Husky',
        breeds: [
            'Alaskan',
            'Siberian',
            'Labrador',
            'Sakhalin'
        ]
    }];
class DogService {
    getDogs() {
        return dogs;
    }
    getDogById(id) {
        return dogs.find(dog => {
            return dog.id === id;
        }) || undefined;
    }
}
exports.DogService = DogService;
//# sourceMappingURL=index.js.map