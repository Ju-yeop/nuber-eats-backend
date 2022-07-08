/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() CreateRestaurantDto: CreateRestaurantDto): boolean {
    console.log(CreateRestaurantDto);
    return true;
  }
}
