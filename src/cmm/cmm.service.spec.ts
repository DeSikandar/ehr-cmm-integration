import { Test, TestingModule } from '@nestjs/testing';
import { CmmService } from './cmm.service';

describe('CmmService', () => {
  let service: CmmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmmService],
    }).compile();

    service = module.get<CmmService>(CmmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
