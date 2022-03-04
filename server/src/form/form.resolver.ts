import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { FormService } from './form.service';
import { Form } from './entities/form.entity';
import { CreateFormInput } from './dto/create-form.input';
import { UpdateFormInput } from './dto/update-form.input';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';


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

  @Mutation(() => Boolean)
  async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
  {
      createReadStream,
      filename
  }: FileUpload): Promise<boolean> {
      return new Promise(async (resolve, reject) =>{ 
        
      console.log(filename)
      console.log(createReadStream())
      createReadStream()
              .pipe(createWriteStream(`./uploads/${filename}`))
              .on('finish', () => resolve(true))
              .on('error', () => {reject(false);console.log("Error................")})
      });
  }


 
}

