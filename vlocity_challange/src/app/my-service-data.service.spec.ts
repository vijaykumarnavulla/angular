import { TestBed, inject } from '@angular/core/testing';

import { MyServiceDataService } from './my-service-data.service';

describe('MyServiceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceDataService]
    });
  });

  it('should be created', inject([MyServiceDataService], (service: MyServiceDataService) => {
    expect(service).toBeTruthy();
  }));
});
