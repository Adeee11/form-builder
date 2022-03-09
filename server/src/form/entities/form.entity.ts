import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Submission } from 'src/submission/entities/submission.entity';




@ObjectType()
export class FormDataRes{
    
  @Field({nullable:true})
   fieldType?:string;

   @Field({nullable:true})
   Question?:string;

   @Field(()=>[String],{nullable: true})
   option?:string[];
   

}


 
@ObjectType()
export class Form {
 
  @Field(type=>ID, { description: `id field form`})
  id: number;
  
  @Field()
  title: string;

  @Field()
  owner:string;

  @Field({nullable:true})
  date?:string;

  @Field(()=>[FormDataRes],{nullable:true})
  formData?:FormDataRes[];

  @Field(()=>[Submission],{nullable:true})
  submission?:Submission[]
  
  
}
