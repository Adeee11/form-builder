import { Module } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { SubmissionResolver } from './submission.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Submission, SubmissionSchema } from './submission.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Submission.name, schema: SubmissionSchema }])],
  providers: [SubmissionResolver, SubmissionService, Submission],
  exports:[SubmissionService]
})
export class SubmissionModule {}
