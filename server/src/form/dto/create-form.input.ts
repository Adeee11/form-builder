import { InputType, Int, Field, ObjectType, InterfaceType } from '@nestjs/graphql';

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
    
  @Field({nullable:true})
   fieldType:string;

   @Field({nullable:true})
   Question:string;

   @Field(()=>[String],{nullable: true})
   option?:string[];
 
   @Field({nullable:true})
   theme?:Theme;
 
}


@InputType()
export class CreateFormInput {

  @Field()
  title: string;

  @Field()
  owner:string;

  @Field(()=>[FormData],{nullable:true})
  formData?:FormData[];  

}



