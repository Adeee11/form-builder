import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
 private readonly users=[
   {id:1, username:"user1", password:"123456"},
   {id:2, username:"user2", password:"1123456"},
   {id:3, username:"user3", password:"1123456"},
  ]
  create(createUserInput: CreateUserInput) {
    // const createdUser = new this.userModel(createUserInput);
    // return createdUser.save();

    const user={
      ...createUserInput,
      id:this.users.length+1
    }

    this.users.push(user);
    return user;
  }

   async findAll() {
    // return this.userModel.find().exec();

    // console.log(await this.userModel.find().exec());
    return this.users;
  }

  async findOne(username: string) {
    // console.log(await this.userModel.find({username:username})[0])
    
    // return await this.userModel.find({username:username})[0]
    
      
    return this.users.find((u)=>u.username==username)
  }


}
