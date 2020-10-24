import { TestBed } from '@angular/core/testing';

import { LotteryService } from './lottery.service';

describe('TicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotteryService = TestBed.get(LotteryService);
    expect(service).toBeTruthy();
  });
});
