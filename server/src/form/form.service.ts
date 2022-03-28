import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFormInput } from './dto/create-form.input';
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
     if(updateFormInput.title){
      m.title=updateFormInput.title;
     }
     m.formData=updateFormInput.formData
     return await m.save();
  }

  async findAll() {
    return await this.formModel.find().exec();
  }

  async findRelatedToUser(owner?: string, limit?:number, skip?:number) {
    return  await this.formModel.find({owner}).skip(skip||0).limit(limit||20); 
  }

  async sortByDateTitle(owner:string,  limit?:number, skip?:number, sortBy?:string){
    let sortAcc=sortBy
    return  await this.formModel.find({owner}).sort(sortBy).skip(skip||0).limit(limit||50);
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
