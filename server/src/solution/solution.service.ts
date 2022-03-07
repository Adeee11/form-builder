import { Injectable } from '@nestjs/common';
import { CreateSolutionInput } from './dto/create-solution.input';
import { Solution, SolutionDocument } from './solution.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SolutionService {
  constructor(@InjectModel(Solution.name) private solutionModel: Model<SolutionDocument>) {}

  async create(createSolutionInput: CreateSolutionInput) {
    const createdSolution = new this.solutionModel(createSolutionInput);
    return await createdSolution.save();

  }

  async findAll() {
    return await this.solutionModel.find().exec();
  }
  async findAllRelatedToForm(formId){
    return await this.solutionModel.find({formId:formId})
  }

  async findOne(id: string) {
    return await this.solutionModel.findById(id);
  }

  async remove(id: string) {
    const res= await this.solutionModel.deleteOne({ _id: id});
    return  res.deletedCount
  }
}
