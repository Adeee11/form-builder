import { CreateFormInput, FormData } from './create-form.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateFormInput extends PartialType(CreateFormInput) {
  
  @Field({nullable:true})
  title?: string;

  @Field({nullable:true})
  owner?:string;

  @Field(()=>[FormData],{nullable:'itemsAndList'})
  formData?:FormData[];

}
