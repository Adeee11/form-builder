import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SolutionDocument = Solution & Document;

@Schema()
export class Solution {
  

  @Prop()
  formId:string;

  @Prop({default:()=>{return new Date()}})
  date:string;

  @Prop()
  res?: [];
  
}

export const SolutionSchema = SchemaFactory.createForClass(Solution);
