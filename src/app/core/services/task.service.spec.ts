import { Task } from './../models/task';
import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TaskService } from './task.service';

describe('TaskService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [],
            providers: [TaskService]
        }).compileComponents().then(() => {
        });
    }));

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));

    it('can instantiate service when inject service',
        inject([TaskService], (service: TaskService) => {
            expect(service instanceof TaskService).toBe(true);
        }));

    it('expects a GET request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
        // Make an HTTP GET request, and expect that it return an object
        // of the form {name: 'Test Data'}.
        http
            .get('/data')
            .subscribe(data => expect(data['name']).toEqual('Test Data'));

        // At this point, the request is pending, and no response has been
        // sent. The next step is to expect that the request happened.
        const req = httpMock.expectOne('/data');

        // If no request with that URL was made, or if multiple requests match,
        // expectOne() would throw. However this test makes only one request to
        // this URL, so it will match and return a mock request. The mock request
        // can be used to deliver a response or make assertions against the
        // request. In this case, the test asserts that the request is a GET.
        expect(req.request.method).toEqual('GET');

        // Next, fulfill the request by transmitting a response.
        req.flush({ name: 'Test Data' });

        // Finally, assert that there are no outstanding requests.
        // httpMock.verify();
    }));

    it('should list the tasks', inject([TaskService, HttpTestingController], (taskSerive: TaskService, httpMock: HttpTestingController) => {
        // fake response
        const expectedTasks = [{ name: 'Cédric' }];

        let actualTasks = [];
        taskSerive.get().subscribe((tasks: Array<Task>) => {
            actualTasks = tasks;
        });

        httpMock.expectOne('/api/tasks').flush(expectedTasks);
        expect(actualTasks).toEqual(expectedTasks);
    }));

    it('should get one task', inject([TaskService, HttpTestingController], (taskSerive: TaskService, httpMock: HttpTestingController) => {
        // fake response
        const expected = new Task();
        expected._id = '1';

        let actual: Task;
        taskSerive.getOne('1').subscribe((task: Task) => {
            actual = task;
        });

        httpMock.expectOne('/api/tasks/1').flush(expected);
        expect(actual).toEqual(expected);
    }));

    it('should update a task', inject([TaskService, HttpTestingController], (taskSerive: TaskService, httpMock: HttpTestingController) => {
        // fake response
        const expected = new Task();
        expected._id = '1';
        expected.estimatedHours = 4;

        let actual: Task;
        taskSerive.update(expected).subscribe((task: Task) => {
            actual = task;
        });

        httpMock.expectOne('/api/tasks/1').flush(expected);
        expect(actual).toEqual(expected);
    }));

    it('should create a task', inject([TaskService, HttpTestingController], (taskSerive: TaskService, httpMock: HttpTestingController) => {
        // fake response
        const expected = new Task();
        expected.estimatedHours = 4;

        let actual: Task;
        taskSerive.create(expected).subscribe((task: Task) => {
            actual = task;
        });

        httpMock.expectOne('/api/tasks').flush(expected);
        expect(actual).toEqual(expected);
    }));

    it('should delete a task', inject([TaskService, HttpTestingController], (taskSerive: TaskService, httpMock: HttpTestingController) => {
        taskSerive.delete('1').subscribe();
        httpMock.expectOne('/api/tasks/1').flush({});
    }));

});
