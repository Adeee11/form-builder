import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Theme{

  @Prop({default:"#FFFFFF"})
  background:string;

  @Prop({default:"20px Arial, sans-serif"})
  font:string;

  @Prop({default:"#000000"})
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

  @Prop(Theme)
  theme:Theme;
}


@Schema()
export class Form {
   

  @Prop()
  title:string;

  @Prop()
  owner:string;

  @Prop([FormData])
  formData:[FormData]
  
}

export const FormSchema = SchemaFactory.createForClass(Form);
