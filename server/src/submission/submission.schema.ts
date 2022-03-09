import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubmissionDocument = Submission & Document;

@Schema()
export class Submission {
  

  @Prop()
  formId:string;

  @Prop({ default:()=>{return  new Date()}})
  date:string;

  @Prop()
  res?: [];
  
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
