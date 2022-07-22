/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

export class CategoryRepository extends Repository<Category> {}
