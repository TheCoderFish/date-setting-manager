import { TestBed } from '@angular/core/testing';

import { DateSettingsPresenterService } from './date-settings-presenter.service';

describe('DateSettingsPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateSettingsPresenterService = TestBed.get(DateSettingsPresenterService);
    expect(service).toBeTruthy();
  });
});
