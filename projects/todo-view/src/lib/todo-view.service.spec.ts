import {TestBed} from '@angular/core/testing';

import {TodoViewService} from './todo-view.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Todo} from './todo';

describe('TodoViewService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let todoViewService: TodoViewService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    })
  );

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get' ]);
    todoViewService = TestBed.get(TodoViewService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(todoViewService).toBeTruthy();
  });

  it('should be able to get all the todo\'s', () => {
    const todos = [ { completed: false, title: 'Watch Game of Thrones' } ];
    todoViewService.getAllTodo().subscribe((res: Todo[]) => {
      expect(res).toBe(todos);
    });
    const req = httpMock.expectOne(`/todo`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(todos);
    httpMock.verify();
  });

  it('should be able to get all pending actionable todo\'s', () => {
    const todos = [ { completed: false, title: 'Watch Game of Thrones' }];
    todoViewService.getPendingTodo().subscribe((res: Todo[]) => {
      expect(res).toBe(todos);
    });
    const req = httpMock.expectOne(`/todo?completed=false`, 'call to api for pending actions');
    expect(req.request.method).toBe('GET');
    req.flush(todos);
    httpMock.verify();
  });

  it('should be able to get all completed todo\'s', () => {
    const todos = [ { completed: true, title: 'Watch Game of Thrones' }];
    todoViewService.getCompletedTodo().subscribe((res: Todo[]) => {
      expect(res).toBe(todos);
    });
    const req = httpMock.expectOne(`/todo?completed=true`, 'call to api for completed actions');
    expect(req.request.method).toBe('GET');
    req.flush(todos);
    httpMock.verify();
  });
});