import { Test, TestingModule } from '@nestjs/testing';
import { ToggleController } from './toggle.controller';

describe('ToggleController', () => {
  let controller: ToggleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToggleController],
    }).compile();

    controller = module.get<ToggleController>(ToggleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
