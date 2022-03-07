import { Module } from '@nestjs/common';
import { SolutionService } from './solution.service';
import { SolutionResolver } from './solution.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Solution, SolutionSchema } from './solution.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Solution.name, schema: SolutionSchema }])],
  providers: [SolutionResolver, SolutionService, Solution],
  exports:[SolutionService]
})
export class SolutionModule {}
