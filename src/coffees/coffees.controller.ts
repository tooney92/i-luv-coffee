import { Body, Delete, Patch, Post, Query } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const {limit, offset} = paginationQuery;
    // return `all coffees limit ${limit}, ${offset}`;
    return this.coffeeService.findAll();
  }

  //getting params from routes
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
