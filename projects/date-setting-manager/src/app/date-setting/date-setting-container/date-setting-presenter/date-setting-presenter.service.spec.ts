import { TestBed } from '@angular/core/testing';

import { DateSettingPresenterService } from './date-setting-presenter.service';

describe('DateSettingPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateSettingPresenterService = TestBed.get(DateSettingPresenterService);
    expect(service).toBeTruthy();
  });
});
