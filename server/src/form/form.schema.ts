import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
class FormData{

  @Prop()
  fieldType:string;

  @Prop()
  Question:string;

  @Prop()
  option:[string];


}


@Schema()
export class Form {
   

  @Prop()
  title:string;

  @Prop()
  owner:string;

  @Prop({default:()=>{return new Date()}})
  date:Date;

  @Prop([FormData])
  formData:[FormData]
  
}

export const FormSchema = SchemaFactory.createForClass(Form);
