import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from '@nestjs/graphql';
import { FormService } from './form.service';
import { Form } from './entities/form.entity';
import { CreateFormInput } from './dto/create-form.input';
import { UpdateFormInput } from './dto/update-form.input';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Submission } from 'src/submission/entities/submission.entity';
import { SubmissionService } from 'src/submission/submission.service';


@Resolver(()=>Form)
export class FormResolver {
  constructor(private readonly formService: FormService,
              private readonly submissionService: SubmissionService 
    ) {}


  @ResolveField('submission',()=>[Submission])
  async submission(@Parent() sol) {
    const { id } = sol;

    return this.submissionService.findAll(id);
  }

  @Query(() => [Form], { name: 'allforms' } , )
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.formService.findAll();
  }

  @Query(() => [Form], { name: 'forms' })
  @UseGuards(JwtAuthGuard)
  findRelatedToUser(@Args('owner', { type: () => ID }) owner: string, @Args('limit',{type:()=>Int, nullable:true}, ) limit:number, @Args('skip', {type:()=>Int, nullable:true}) skip:number) {
    return this.formService.findRelatedToUser(owner, limit, skip);
  }

  @Query(() => Form, { name: 'form' })
  findOneForm(@Args('formId', { type: () => ID }) formId: string) {
    return this.formService.findOne(formId);
  }

  @Mutation(() => Form)
  @UseGuards(JwtAuthGuard)
  createForm(@Args('createFormInput') createFormInput: CreateFormInput) {
   return this.formService.create(createFormInput);
  }

  @Mutation(() => Form)
  @UseGuards(JwtAuthGuard)
  updateForm(@Args('updateFormInput') updateFormInput: UpdateFormInput, @Args('id') id:string) {
    return this.formService.update(updateFormInput, id);
  }

  @Mutation(() => Int)
  @UseGuards(JwtAuthGuard)
  removeForm(@Args('id', { type: () => ID }) id: string) {
    return this.formService.remove(id);
  }

  @Mutation(() => Boolean)
  async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
  {
      createReadStream,
      filename, 
  }: FileUpload): Promise<boolean> {
      return new Promise(async (resolve, reject) =>{ 
      const randomstr=Math.random();  
      createReadStream()
              .pipe(createWriteStream(`./uploads/${randomstr}${filename}`))
              .on('finish', () =>{ resolve(true); console.log(`./uploads/${randomstr}${filename}`)  })
              .on('error', () => {reject(false);console.log("Error.....")})
      });
  } 
}

