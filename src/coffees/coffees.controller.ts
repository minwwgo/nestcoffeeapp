import { UpdateCoffeeDto } from './dto/update-coffee.dto';

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService:CoffeesService ){}
  @Get()
  findAll(@Query()paginationQuery){
    // const{limit,offset}=paginationQuery;
    // return `This action return all coffees. Limit: ${limit} offset: ${offset}`
    return this.coffeesService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id:number){
    console.log(typeof id)
    // return ` this value come from dynamic value ${id} coffee`
    return this.coffeesService.findOne(''+ id)
  }
  @Post()
  create(@Body() createCoffeeDto:CreateCoffeeDto){
    // return body;
    console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeesService.create(createCoffeeDto)
  }
  @Patch(':id')
  update(@Param('id') id:string, @Body() updateCoffeeDto:UpdateCoffeeDto){
    // return `this action updates ${id} coffee`
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id:string){
    // return `this action removes ${id} coffee`
    return this.coffeesService.remove(id)
  }
}
