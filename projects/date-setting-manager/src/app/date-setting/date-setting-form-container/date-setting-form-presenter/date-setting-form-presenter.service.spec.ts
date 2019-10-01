import { TestBed } from '@angular/core/testing';

import { DateSettingFormPresenterService } from './date-setting-form-presenter.service';

describe('DateSettingFormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateSettingFormPresenterService = TestBed.get(DateSettingFormPresenterService);
    expect(service).toBeTruthy();
  });
});
