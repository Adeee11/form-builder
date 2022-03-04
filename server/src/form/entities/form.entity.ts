import { ObjectType, Field, Int, ID } from '@nestjs/graphql';


@ObjectType()
export class ThemeRes{

  @Field({nullable:true})
  background?:string;

  @Field({nullable:true})
  font?:string;

  @Field({nullable:true})
  color?:string;

}


@ObjectType()
export class FormDataRes{
    
  @Field({nullable:true})
   fieldType:string;

   @Field({nullable:true})
   Question:string;

   @Field(()=>ThemeRes,{nullable:true})
  theme?:ThemeRes;
 
}


 
@ObjectType()
export class Form {
 
  @Field(type=>ID, { description: `id field form`})
  id: number;
  
  @Field()
  title: string;

  @Field()
  owner:string;

  @Field(()=>[FormDataRes],{nullable:true})
  formData?:FormDataRes[];

  
}
