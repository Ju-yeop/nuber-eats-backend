/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from './output.dto';

@InputType()
export class paginationInput {
  @Field((type) => Number, { defaultValue: 1 })
  page: number;
}

@ObjectType()
export class paginationOutput extends CoreOutput {
  @Field((type) => Number, { nullable: true })
  totalPages?: number;
  @Field((type) => Number, { nullable: true })
  totalResults?: number;
}
