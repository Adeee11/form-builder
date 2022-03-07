import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

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
