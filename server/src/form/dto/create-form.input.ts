import { InputType, Int, Field, ObjectType, InterfaceType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class Theme{

  @Field({nullable:true})
  background?:string;

  @Field({nullable:true})
  font?:string;

  @Field({nullable:true})
  color?:string;

} 


@InputType()
export class FormData{
    
   @Field()
   fieldType:string;

   @Field()
   Question:string;

   @Field(()=>[String],{nullable: "itemsAndList"})
   option?:string[];
 
   @Field({nullable:true})
   theme?:Theme;
 
}


@InputType()
export class CreateFormInput {

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  owner:string;

  @Field(()=>[FormData],{nullable:'itemsAndList'})
  formData?:FormData[];  

}



