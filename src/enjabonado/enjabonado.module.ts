import { Module } from '@nestjs/common';
import { EnjabonadoController } from './enjabonado.controller';
import { EnjabonadoService } from './enjabonado.service';

@Module({
  controllers: [EnjabonadoController],
  providers: [EnjabonadoService],
})
export class EnjabonadoModule {}
