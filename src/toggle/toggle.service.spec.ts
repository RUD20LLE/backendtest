import { Test, TestingModule } from '@nestjs/testing';
import { ToggleService } from './toggle.service';

describe('ToggleService', () => {
  let service: ToggleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToggleService],
    }).compile();

    service = module.get<ToggleService>(ToggleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
