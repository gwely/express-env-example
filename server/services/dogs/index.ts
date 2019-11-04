const
    dogs = [{
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

export class DogService {
  public getDogs(): any[] {
    return [...dogs];
  }

  public getDogById(id: number): any | undefined {
    return dogs.find(dog => {
      return dog.id === id;
    });
  }
}
