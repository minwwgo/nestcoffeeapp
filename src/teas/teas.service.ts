import { CreateTeaDto } from './dto/create-tea.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Tea } from './entities/tea.entity';

@Injectable()
export class TeasService {
  private teas: Tea[] = [
    {
      id: 1,
      name: 'teamix',
      brand: 'super',
      flavours: ['shan', 'mon'],
    },
    {
      id: 2,
      name: 'coffeemix',
      brand: 'big',
      flavours: ['sweet', 'sour'],
    },
  ];

  findAll(){
    return this.teas
  }
  findOne(id: string){
    const tea = this.teas.find(item=>item.id===+id)
    if(!tea){
      throw new NotFoundException(`Tea #${id} not found`)
    }
    return tea
  }
  create(createTeaDto: any){
    this.teas.push(createTeaDto)
  }
  update(id: string, updateTeaDto: any){

    const existingTea = this.findOne(id)
    if (existingTea){
      this.teas.push(updateTeaDto)
    }
    
  }
  remove(id: string){
    const teaIndex = this.teas.findIndex(item=> item.id=== +id)
    if(teaIndex>= 0){
      this.teas.splice(teaIndex,1)
    }
  }
}
