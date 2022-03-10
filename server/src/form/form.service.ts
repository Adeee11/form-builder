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

  async findRelatedToUser(owner?: string, limit?:number, skip?:number) {
    if(!skip && !limit){
      return await this.formModel.find({owner}) 
    }
     else if(!skip && limit){
      return await this.formModel.find({owner}).limit(limit)
     }
     else if(skip && !limit){
       return await this.formModel.find({owner}).skip(skip)
     }  
    else {
    return  await this.formModel.find({owner}).skip(skip).limit(limit);
    } 
  }

  async sortByDate(owner:string,  limit?:number, skip?:number){
          
    if(!skip && !limit){
      return await this.formModel.find({owner}).sort({'date':-1}) 
    }
     else if(!skip && limit){
      return await this.formModel.find({owner}).sort({'date':-1}).limit(limit)
     }
     else if(skip && !limit){
       return await this.formModel.find({owner}).sort({'date':-1}).skip(skip)
     }  
    else {
    return  await this.formModel.find({owner}).sort({'date':-1}).skip(skip).limit(limit);
    } 
  }
 
 
  async sortByTitle(owner:string,limit?:number, skip?:number){
        
       
    if(!skip && !limit){
      return await this.formModel.find({owner}).sort({'title':1}) 
    }
     else if(!skip && limit){
      return await this.formModel.find({owner}).sort({'title':1}).limit(limit)
     }
     else if(skip && !limit){
       return await this.formModel.find({owner}).sort({'title':1}).skip(skip)
     }  
    else {
    return  await this.formModel.find({owner}).sort({'title':1}).skip(skip).limit(limit);
    }
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
