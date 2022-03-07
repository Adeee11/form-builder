import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { FormModule } from 'src/form/form.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
             FormModule  
],
  providers: [UsersResolver, UsersService],
  exports:[UsersService]
})
export class UsersModule {}
