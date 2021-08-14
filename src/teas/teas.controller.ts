import { UpdateTeaDto } from './dto/update-tea.dto';
import { CreateTeaDto } from './dto/create-tea.dto';
import { TeasService } from './teas.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('teas')
export class TeasController {
  constructor(private readonly teasservice:TeasService) {}
  
  @Get()
  findAll(@Query()paginationQuery){
    
    return this.teasservice.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teasservice.findOne(id)
  }

  @Post()
  create(@Body() createTeaDto: CreateTeaDto) {
    return this.teasservice.create( createTeaDto)
  }
  
  @Patch(':id')
  Patch(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto) {
    return this.teasservice.update(id ,updateTeaDto)
  }
  @Delete(':id')
  remove(@Param('id') id:string){
    return this.teasservice.remove(id)
  }
}
