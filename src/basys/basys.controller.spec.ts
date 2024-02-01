import { Test, TestingModule } from '@nestjs/testing';
import { BasysController } from './basys.controller';

describe('BasysController', () => {
  let controller: BasysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasysController],
    }).compile();

    controller = module.get<BasysController>(BasysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
