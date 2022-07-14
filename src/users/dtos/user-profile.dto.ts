/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@ArgsType()
export class userProfileInput {
  @Field((type) => Number)
  userId: number;
}

@ObjectType()
export class userProfileOutput extends CoreOutput {
  @Field((type) => User)
  user?: User;
}
