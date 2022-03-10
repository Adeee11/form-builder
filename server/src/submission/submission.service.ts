import { Injectable } from '@nestjs/common';
import { CreateSubmissionInput } from './dto/create-submission.input';
import { Submission, SubmissionDocument } from './submission.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubmissionService {
  constructor(@InjectModel(Submission.name) private submissionModel: Model<SubmissionDocument>) {}
  
  async create(createSolutionInput: CreateSubmissionInput) {
    const createdSolution = new this.submissionModel(createSolutionInput);
    return await createdSolution.save();

  }

  async findAll(formId) {
    return await await this.submissionModel.find({formId:formId})
  }

  async findAllRelatedToForm(formId:string, limit?:number, skip?:number, sortBy?:string){
    let sortAcc=sortBy
    if(!skip && !limit){
      return await this.submissionModel.find({formId:formId}).sort(sortAcc) 
    }
     else if(!skip && limit){
      return await this.submissionModel.find({formId:formId}).sort(sortAcc).limit(limit)
     }
     else if(skip && !limit){
       return await this.submissionModel.find({formId:formId}).sort(sortAcc).skip(skip)
     }  
    else {
    return  await this.submissionModel.find({formId:formId}).sort(sortAcc).skip(skip).limit(limit);
    }
  }

  async findOne(id: string) {
    return await this.submissionModel.findById(id);
  }

  async remove(id: string) {
    const res= await this.submissionModel.deleteOne({ _id: id});
    return  res.deletedCount
  }

  async removeAllrelatedtoForm(formId:string){
    const res = await this.submissionModel.deleteMany({formId:formId})
    return res.deletedCount
  }
  
}
