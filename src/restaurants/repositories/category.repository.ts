/* eslint-disable prettier/prettier */
import { CustomRepository } from 'src/Category/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {
  public async getOrCreate(name: string): Promise<Category> {
    const categoryName = name.trim().toLowerCase();
    const categorySlug = categoryName.replace(/ /g, '-');
    let category = await this.findOne({ where: { slug: categorySlug } });
    if (!category) {
      category = await this.save(
        this.create({ slug: categorySlug, name: categoryName }),
      );
    }
    return category;
  }
}
