import { CreateTeaDto } from './create-tea.dto';
import { PartialType } from '@nestjs/mapped-types'

export class UpdateTeaDto extends PartialType(CreateTeaDto) {}
