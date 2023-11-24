import { TestBed } from '@angular/core/testing';

import { ChecklistDatabaseService } from './checklist-database.service';

describe('ChecklistDatabaseService', () => {
  let service: ChecklistDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
