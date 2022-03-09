import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormResolver } from './form.resolver';
import { Form, FormSchema } from './form.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionModule } from 'src/submission/submission.module';
 
@Module({
  imports: [MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]), SubmissionModule],
  providers: [FormResolver, FormService, Form],
  exports:[FormService]
})
export class FormModule {}
