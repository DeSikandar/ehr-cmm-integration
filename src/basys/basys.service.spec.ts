import { Test, TestingModule } from '@nestjs/testing';
import { BasysService } from './basys.service';

describe('BasysService', () => {
  let service: BasysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasysService],
    }).compile();

    service = module.get<BasysService>(BasysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
