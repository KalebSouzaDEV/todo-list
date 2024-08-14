import { TestBed } from '@angular/core/testing';

import { ControlTaskService } from './control-task.service';

describe('ControlTaskService', () => {
  let service: ControlTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
