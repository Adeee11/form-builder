import { Test, TestingModule } from '@nestjs/testing';
import { SolutionResolver } from './solution.resolver';
import { SolutionService } from './solution.service';

describe('SolutionResolver', () => {
  let resolver: SolutionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolutionResolver, SolutionService],
    }).compile();

    resolver = module.get<SolutionResolver>(SolutionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
