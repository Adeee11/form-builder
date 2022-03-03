import { ObjectType, Field, Int, ID } from '@nestjs/graphql';


@ObjectType()
class FormDataRes{
    
  @Field({nullable:true})
   fieldType:string;

   @Field({nullable:true})
   Question:string;
 
}


 
@ObjectType()
class ThemeRes{

  @Field({nullable:true})
  background?:string;

  @Field({nullable:true})
  font?:string;

  @Field({nullable:true})
  color?:string;

}


@ObjectType()
export class Form {
 
  @Field(type=>ID, { description: `id field form`})
  id: number;
  
  @Field()
  title: string;

  @Field()
  owner:string;

  @Field(()=>ThemeRes,{nullable:true})
  theme?:ThemeRes;

  @Field(()=>[FormDataRes],{nullable:true})
  formData?:FormDataRes[];

  
}
