import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Theme{

  @Prop()
  background:string;

  @Prop()
  font:string;

  @Prop()
  color:string;

} 


@Schema()
class FormData{

  @Prop()
  fieldType:string;

  @Prop()
  Question:string;

  @Prop()
  option:[string];

  @Prop()
  theme:Theme;
}


@Schema()
export class Form {
   

  @Prop()
  title:string;

  @Prop()
  owner:string;

  @Prop()
  formData:[FormData]
  
}

export const FormSchema = SchemaFactory.createForClass(Form);
