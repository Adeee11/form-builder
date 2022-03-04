import { CreateFormInput, FormData, Theme } from './create-form.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFormInput extends PartialType(CreateFormInput) {
  @Field({nullable:true})
  title?: string;

  @Field()
  owner:string;

  @Field(()=>[FormData],{nullable:true})
  formData?:FormData[];

}
