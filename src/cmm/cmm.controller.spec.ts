import { Test, TestingModule } from '@nestjs/testing';
import { CmmController } from './cmm.controller';

describe('CmmController', () => {
  let controller: CmmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmmController],
    }).compile();

    controller = module.get<CmmController>(CmmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
