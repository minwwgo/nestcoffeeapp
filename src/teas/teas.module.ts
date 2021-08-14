import { TeasService } from './teas.service';
import { TeasController } from './teas.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TeasController], 
  providers:[TeasService]
})
export class TeasModule {}
