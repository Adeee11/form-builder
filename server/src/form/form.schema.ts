import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  

  @Prop()
  title:string;

  @Prop()
  owner:string;

  @Prop(raw({background:String, font:String, color:String}))
  theme:Record<string, any>
  
  @Prop()
  formData:[FormData]
  
}

export const FormSchema = SchemaFactory.createForClass(Form);
