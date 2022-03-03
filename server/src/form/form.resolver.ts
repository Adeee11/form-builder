import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { FormService } from './form.service';
import { Form } from './entities/form.entity';
import { CreateFormInput } from './dto/create-form.input';
import { UpdateFormInput } from './dto/update-form.input';

@Resolver()
export class FormResolver {
  constructor(private readonly formService: FormService) {}

  @Mutation(() => Form)
  createForm(@Args('createFormInput') createFormInput: CreateFormInput) {

    return this.formService.create(createFormInput);
  }

  @Mutation(() => Form)
  updateForm(@Args('updateFormInput') updateFormInput: UpdateFormInput, @Args('id') id:string) {
    return this.formService.update(updateFormInput, id);
  }


  

  @Query(() => [Form], { name: 'form' })
  findRelatedToUser(@Args('owner', { type: () => ID }) owner: string) {
    return this.formService.findRelatedToUser(owner);
  }

  @Query(() => [Form], { name: 'forms' })
  findAll() {
    return this.formService.findAll();
  }



  @Mutation(() => Form)
  removeForm(@Args('id', { type: () => ID }) id: string) {
    return this.formService.remove(id);
  }


}
