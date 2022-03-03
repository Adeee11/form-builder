import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormResolver } from './form.resolver';
import { Form, FormSchema } from './form.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }])],
  providers: [FormResolver, FormService, Form],
  exports:[FormService]
})
export class FormModule {}
