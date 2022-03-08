import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Solution } from 'src/solution/entities/solution.entity';


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
   fieldType?:string;

   @Field({nullable:true})
   Question?:string;

   @Field(()=>[String],{nullable: true})
   option?:string[];

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

  @Field(()=>[Solution],{nullable:true})
  solution?:Solution[]

  
}