import { InputType, Int, Field, ObjectType, InterfaceType, registerEnumType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

enum AllowedfieldType {
  text="text",
  email="email",
  number="number", 
  url="url",
  date="date",
  color="color",
  range="range",
  select="select",
  choice="choice",   
  textArea="textArea",   
}

registerEnumType(AllowedfieldType, {
  name: 'AllowedfieldType',
  description: 'The supported fieldtype.',
});




@InputType()
export class FormData{
    
   @Field(type => AllowedfieldType)
   fieldType:AllowedfieldType;

   @Field()
   Question:string;

   @Field(()=>[String],{nullable: "itemsAndList"})
   option?:string[];
 
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




