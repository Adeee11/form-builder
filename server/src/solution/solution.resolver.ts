import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SolutionService } from './solution.service';
import { Solution } from './entities/solution.entity';
import { CreateSolutionInput } from './dto/create-solution.input';


@Resolver(() => Solution)
export class SolutionResolver {
  constructor(private readonly solutionService: SolutionService) {}

  @Mutation(() => Solution)
  createSolution(@Args('createSolutionInput') createSolutionInput: CreateSolutionInput) {
    return this.solutionService.create(createSolutionInput);
  }

  @Query(() => [Solution], { name: 'solutions' })
  findAll(@Args('formId') formId: string) {
    return this.solutionService.findAllRelatedToForm(formId);
  }

  @Query(() => Solution, { name: 'solution' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.solutionService.findOne(id);
  }



  @Mutation(() => Int)
  removeSolution(@Args('id', { type: () => ID }) id: string) {
  return this.solutionService.remove(id);
 
  }
}
