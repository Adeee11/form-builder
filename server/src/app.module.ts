import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FormModule } from './form/form.module';
import { SolutionModule } from './solution/solution.module';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // @ts-ignore
     uploads:false, 
  }),
   MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.kvw1d.mongodb.net/formBuilderDataBase?retryWrites=true&w=majority'),
   UsersModule,
   AuthModule,
   FormModule,
   SolutionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
