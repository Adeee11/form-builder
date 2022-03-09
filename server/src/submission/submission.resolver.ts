import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SubmissionService } from './submission.service';
import { Submission } from './entities/submission.entity';
import { CreateSubmissionInput } from './dto/create-submission.input';


@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(private readonly solutionService: SubmissionService) {}

  @Mutation(() => Submission)
  createSubmission(@Args('createSubmissionInput') createSubmissionInput: CreateSubmissionInput) {
    return this.solutionService.create(createSubmissionInput);
  }

  @Query(() => [Submission], { name: 'submissions' })
  findAll(@Args('formId') formId: string) {
    return this.solutionService.findAllRelatedToForm(formId);
  }

  @Query(() => Submission, { name: 'submission' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.solutionService.findOne(id);
  }



  @Mutation(() => Int)
  removeSubmission(@Args('id', { type: () => ID }) id: string) {
  return this.solutionService.remove(id);
 
  }
}
