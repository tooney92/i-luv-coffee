import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    // throw 'a random error';
    const coffee = this.coffees.find((item) => item.id === Number(id));
    if (!coffee) {
      throw new NotFoundException(`coffee ${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, body) {
    return `updated id ==> ${id}`;
  }

  remove(id: string) {
    return `removed id ==> ${id}`;
  }
}
