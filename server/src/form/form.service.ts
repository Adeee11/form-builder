import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFormInput } from './dto/create-form.input';
import { UpdateFormInput } from './dto/update-form.input';
import { Form , FormDocument} from './form.schema';
import { Model } from 'mongoose';
import { SubmissionService } from 'src/submission/submission.service';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>,
              private readonly submissionService: SubmissionService  
  ) {}
  
  async create(createFormInput: CreateFormInput) {
    const createdForm = new this.formModel(createFormInput);
    const result=await createdForm.save(); 
    return  result 
  }

  async update( updateFormInput, id:string) {
     const m=await this.findOne(id)
     m.title=updateFormInput.title;
     if(updateFormInput.formData){
         for(let i=0; i<updateFormInput.formData.length; i++){
               m.formData[i]= updateFormInput.formData[i]
           }
        }
     return await m.save();
  }

  async findAll() {
    return await this.formModel.find().exec();
  }

  async findRelatedToUser(owner: string) {
    return  await this.formModel.find({owner}); 
  }
  
  async findOne(id:string){
    return await this.formModel.findById(id);
  }
  
  async remove(id: string) {
    const res= await this.formModel.deleteOne({ _id: id});
    const res1=await this.submissionService.removeAllrelatedtoForm(id)
    return res.deletedCount
  }
}
