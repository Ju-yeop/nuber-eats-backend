/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  paginationInput,
  paginationOutput,
} from 'src/common/dtos/pagination.dto';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class restaurantsInput extends paginationInput {}

@ObjectType()
export class restaurantsOutput extends paginationOutput {
  @Field((type) => [Restaurant], { nullable: true })
  results?: Restaurant[];
}
