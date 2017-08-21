import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const tasks = [
            { id: 0, name: 'Zero', status: 'Not Started' },
            { id: 11, name: 'Mr. Nice', status: 'Not Started' },
            { id: 12, name: 'Narco', status: 'Not Started' },
            { id: 13, name: 'Bombasto', status: 'Not Started' },
            { id: 14, name: 'Celeritas', status: 'Not Started' },
            { id: 15, name: 'Magneta', status: 'Not Started' },
            { id: 16, name: 'RubberMan', status: 'Not Started' },
            { id: 17, name: 'Dynama', status: 'Not Started' },
            { id: 18, name: 'Dr IQ', status: 'Not Started' },
            { id: 19, name: 'Magma', status: 'Not Started' },
            { id: 20, name: 'Tornado', status: 'Not Started' }
        ];
        return { tasks };
    }
}