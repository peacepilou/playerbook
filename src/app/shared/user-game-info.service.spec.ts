import { TestBed } from '@angular/core/testing';

import { UserGameInfoService } from './user-game-info.service';

describe('UserGameInfoService', () => {
  let service: UserGameInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGameInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
