import { TestBed } from '@angular/core/testing';

import { FilterEditorService } from './filter-editor.service';

describe('FilterEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterEditorService = TestBed.get(FilterEditorService);
    expect(service).toBeTruthy();
  });
});
