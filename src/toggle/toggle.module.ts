import { Module } from '@nestjs/common';
import { ToggleController } from './toggle.controller';
import { ToggleService } from './toggle.service';

@Module({
  controllers: [ToggleController],
  providers: [ToggleService],
})
export class ToggleModule {}
