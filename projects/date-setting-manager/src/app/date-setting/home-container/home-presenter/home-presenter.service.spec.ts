import { TestBed } from '@angular/core/testing';

import { HomePresenterService } from './home-presenter.service';

describe('HomePresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePresenterService = TestBed.get(HomePresenterService);
    expect(service).toBeTruthy();
  });
});
