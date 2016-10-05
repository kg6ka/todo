import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let items = [
            {id: 1, title: 'Item 1', done: false},
            {id: 2, title: 'Item 2', done: false},
            {id: 3, title: 'Item 3', done: true}
        ];
        return { items };
    }
}
